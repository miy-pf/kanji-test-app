(() => {
  "use strict";

  const STORAGE_KEY = "kanji-card-history-v1";
  const TEST_STORAGE_KEY = "kanji-card-test-history-v1";
  const SELECTED_USER_KEY = "kanji-card-selected-user-v1";
  const LEGACY_MIGRATION_KEY = "kanji-card-user-migration-v1";
  const USERS = ["k", "guest1", "guest2", "guest3"];
  const MODE_LABELS = {
    all: "全問モード",
    segment: "10問特訓",
    flashcard: "フラッシュカード",
    fullSentence: "全文モード",
    test: "テストモード",
    testReview: "テストの間違い復習",
    priority: "A優先モード",
    wrong: "段階別復習モード"
  };
  const REVIEW_LABELS = {
    all: "すべての復習",
    superHard: "超苦手だけ",
    hardPlus: "苦手以上",
    redo: "やり直しだけ"
  };

  const elements = {
    scopeButtons: [...document.querySelectorAll(".scope-button")],
    scopeSummary: document.querySelector("#scope-summary"),
    modeButtons: [...document.querySelectorAll(".mode-button")],
    segmentSettings: document.querySelector("#segment-settings"),
    segmentSelect: document.querySelector("#segment-select"),
    flashcardSettings: document.querySelector("#flashcard-settings"),
    flashcardSelect: document.querySelector("#flashcard-select"),
    flashcardAllOption: document.querySelector("#flashcard-all-option"),
    fullSentenceSettings: document.querySelector("#full-sentence-settings"),
    fullSentenceSelect: document.querySelector("#full-sentence-select"),
    fullSentenceAllOption: document.querySelector("#full-sentence-all-option"),
    testSettings: document.querySelector("#test-settings"),
    testSelect: document.querySelector("#test-select"),
    testAllOption: document.querySelector("#test-all-option"),
    testPriorityOption: document.querySelector("#test-priority-option"),
    reviewSettings: document.querySelector("#review-settings"),
    reviewSelect: document.querySelector("#review-select"),
    userSelect: document.querySelector("#user-select"),
    randomOrder: document.querySelector("#random-order"),
    reviewFirst: document.querySelector("#review-first"),
    startSession: document.querySelector("#start-session"),
    resetHistory: document.querySelector("#reset-history"),
    modeLabel: document.querySelector("#mode-label"),
    progressLabel: document.querySelector("#progress-label"),
    studyInstruction: document.querySelector("#study-instruction"),
    questionView: document.querySelector("#question-view"),
    emptyView: document.querySelector("#empty-view"),
    emptyTitle: document.querySelector("#empty-title"),
    emptyMessage: document.querySelector("#empty-message"),
    questionText: document.querySelector("#question-text"),
    questionMeta: document.querySelector("#question-meta"),
    recallControls: document.querySelector("#recall-controls"),
    wroteAnswer: document.querySelector("#wrote-answer"),
    unknownAnswer: document.querySelector("#unknown-answer"),
    flashcardControls: document.querySelector("#flashcard-controls"),
    flashcardShowAnswer: document.querySelector("#flashcard-show-answer"),
    testControls: document.querySelector("#test-controls"),
    testShowAnswer: document.querySelector("#test-show-answer"),
    answerPanel: document.querySelector("#answer-panel"),
    answerKanji: document.querySelector("#answer-kanji"),
    answerReading: document.querySelector("#answer-reading"),
    answerExample: document.querySelector("#answer-example"),
    answerChecklist: document.querySelector("#answer-checklist"),
    scoreControls: document.querySelector("#score-controls"),
    scoreButtons: [...document.querySelectorAll(".score-button")],
    statRate: document.querySelector("#stat-rate"),
    statTotal: document.querySelector("#stat-total"),
    statCorrect: document.querySelector("#stat-correct"),
    statWrong: document.querySelector("#stat-wrong"),
    statMisconceptions: document.querySelector("#stat-misconceptions"),
    statRetries: document.querySelector("#stat-retries"),
    historyRate: document.querySelector("#history-rate"),
    historyTotal: document.querySelector("#history-total"),
    historyCorrect: document.querySelector("#history-correct"),
    historyWrong: document.querySelector("#history-wrong"),
    historyMisconceptions: document.querySelector("#history-misconceptions"),
    historyReview: document.querySelector("#history-review"),
    historySuperHard: document.querySelector("#history-super-hard"),
    historyHard: document.querySelector("#history-hard"),
    historyRedo: document.querySelector("#history-redo"),
    resultMessage: document.querySelector("#result-message"),
    nextQuestion: document.querySelector("#next-question"),
    masteredCount: document.querySelector("#mastered-count"),
    statsCard: document.querySelector("#stats-card"),
    testResultView: document.querySelector("#test-result-view"),
    testResultScore: document.querySelector("#test-result-score"),
    testResultRate: document.querySelector("#test-result-rate"),
    testResultRange: document.querySelector("#test-result-range"),
    testWrongSection: document.querySelector("#test-wrong-section"),
    testWrongList: document.querySelector("#test-wrong-list"),
    reviewTestWrongs: document.querySelector("#review-test-wrongs"),
    testHistoryList: document.querySelector("#test-history-list")
  };

  const allKanjiQuestions = createAllKanjiQuestions();
  const fullSentenceQuestions = createFullSentenceQuestions();
  let selectedUser = loadSelectedUser();
  let selectedScope = "new";
  let selectedMode = "all";
  let history = loadHistory();
  let testHistory = loadTestHistory();
  let queue = [];
  let currentIndex = 0;
  let currentIntent = null;
  let retryIds = new Set();
  let sessionStats = createEmptyStats();
  let testAnswers = [];
  let lastTestWrongQuestions = [];
  let activeTestRangeLabel = "";

  function createEmptyStats() {
    return { total: 0, correct: 0, wrong: 0, misconceptions: 0, retries: 0 };
  }

  function loadSelectedUser() {
    try {
      const saved = localStorage.getItem(SELECTED_USER_KEY);
      return USERS.includes(saved) ? saved : "k";
    } catch (error) {
      console.warn("ユーザー設定を読み込めませんでした。", error);
      return "k";
    }
  }

  function saveSelectedUser() {
    try {
      localStorage.setItem(SELECTED_USER_KEY, selectedUser);
    } catch (error) {
      console.warn("ユーザー設定を保存できませんでした。", error);
    }
  }

  function getUserStorageKey(baseKey) {
    return `${baseKey}:${selectedUser}`;
  }

  function migrateLegacyStorage() {
    if (selectedUser !== "k") return;
    try {
      if (localStorage.getItem(LEGACY_MIGRATION_KEY) === "done") return;
      copyLegacyStorage(STORAGE_KEY);
      copyLegacyStorage(TEST_STORAGE_KEY);
      localStorage.setItem(LEGACY_MIGRATION_KEY, "done");
    } catch (error) {
      console.warn("旧履歴の移行状態を保存できませんでした。", error);
    }
  }

  function copyLegacyStorage(baseKey) {
    try {
      const userKey = getUserStorageKey(baseKey);
      if (localStorage.getItem(userKey) !== null) return;
      const legacy = localStorage.getItem(baseKey);
      if (legacy !== null) localStorage.setItem(userKey, legacy);
    } catch (error) {
      console.warn("旧履歴をユーザー別履歴へ移行できませんでした。", error);
    }
  }

  function loadHistory() {
    migrateLegacyStorage();
    try {
      const saved = JSON.parse(localStorage.getItem(getUserStorageKey(STORAGE_KEY)));
      return saved && typeof saved === "object" ? saved : {};
    } catch (error) {
      console.warn("学習履歴を読み込めませんでした。", error);
      return {};
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem(getUserStorageKey(STORAGE_KEY), JSON.stringify(history));
    } catch (error) {
      console.warn("学習履歴を保存できませんでした。", error);
    }
  }

  function loadTestHistory() {
    migrateLegacyStorage();
    try {
      const saved = JSON.parse(localStorage.getItem(getUserStorageKey(TEST_STORAGE_KEY)));
      return Array.isArray(saved) ? saved : [];
    } catch (error) {
      console.warn("テスト履歴を読み込めませんでした。", error);
      return [];
    }
  }

  function saveTestHistory() {
    try {
      localStorage.setItem(getUserStorageKey(TEST_STORAGE_KEY), JSON.stringify(testHistory));
    } catch (error) {
      console.warn("テスト履歴を保存できませんでした。", error);
    }
  }

  function getQuestionHistory(id) {
    const record = history[id] || {
      attempts: 0,
      correct: 0,
      unsure: 0,
      wrong: 0,
      hints: 0,
      consecutiveCorrect: 0,
      mastered: false,
      lastResult: null,
      lastHintUsed: false,
      lastStudiedAt: null
    };
    record.masteryCorrectDates = Array.isArray(record.masteryCorrectDates)
      ? record.masteryCorrectDates
      : [];
    if (record.mastered && record.masteryCorrectDates.length === 0) {
      record.masteryCorrectDates.push("legacy-mastered");
    }
    record.misconceptions = record.misconceptions || 0;
    record.misconceptionPending = Boolean(record.misconceptionPending);
    record.misconceptionDate = record.misconceptionDate || null;
    record.needsReview = Boolean(
      record.needsReview || record.lastResult === "wrong" || record.lastResult === "unsure"
    );
    record.errorDate = record.errorDate || null;
    return record;
  }

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  }

  function createAllKanjiQuestions() {
    return QUESTIONS.flatMap((baseQuestion) => {
      const targets = getTargetsForQuestion(baseQuestion);

      return targets.map((target, index) => ({
        ...baseQuestion,
        id: index === 0 ? baseQuestion.id : `all-${baseQuestion.id}-${index + 1}`,
        sourceId: baseQuestion.id,
        target: target.target,
        answer: target.answer,
        reading: target.reading,
        variantPosition: index + 1,
        variantCount: targets.length
      }));
    });
  }

  function getTargetsForQuestion(baseQuestion) {
    return ALL_KANJI_TARGETS[baseQuestion.id] || [{
      target: baseQuestion.target || baseQuestion.answer,
      answer: baseQuestion.answer,
      reading: baseQuestion.reading
    }];
  }

  function createFullSentenceQuestions() {
    return QUESTIONS.map((baseQuestion) => {
      const segments = createSentenceSegments(baseQuestion);
      const completedSentence = segments.map((segment) =>
        segment.kind === "target" ? segment.answer : segment.text
      ).join("");
      const fullReading = segments.map((segment) =>
        segment.kind === "target" ? segment.reading : segment.text
      ).join("");

      return {
        ...baseQuestion,
        id: `sentence-${baseQuestion.id}`,
        sourceId: baseQuestion.id,
        isFullSentence: true,
        sentenceSegments: segments,
        question: completedSentence,
        answer: completedSentence,
        reading: fullReading
      };
    });
  }

  function createSentenceSegments(baseQuestion) {
    const text = baseQuestion.question;
    const targets = getTargetsForQuestion(baseQuestion)
      .map((target, index) => ({
        target: target.target || target.answer,
        answer: target.answer,
        reading: target.reading,
        index
      }))
      .map((target) => ({
        ...target,
        start: findTargetStart(text, target.target)
      }))
      .filter((target) => target.start >= 0)
      .sort((a, b) => a.start - b.start || b.target.length - a.target.length);

    const segments = [];
    let cursor = 0;

    targets.forEach((target) => {
      if (target.start < cursor) return;
      if (target.start > cursor) {
        segments.push({
          kind: "text",
          text: text.slice(cursor, target.start)
        });
      }
      segments.push({
        kind: "target",
        text: target.target,
        answer: target.answer,
        reading: target.reading,
        hasOkurigana: hasOkurigana(target.answer)
      });
      cursor = target.start + target.target.length;
    });

    if (cursor < text.length) {
      segments.push({ kind: "text", text: text.slice(cursor) });
    }

    return segments.length > 0 ? segments : [{ kind: "text", text }];
  }

  function findTargetStart(text, target) {
    return text.indexOf(target);
  }

  function hasOkurigana(text) {
    return /[一-龯々][ぁ-ん]+/.test(text);
  }

  function getQuestionCatalog() {
    return selectedScope === "allKanji" ? allKanjiQuestions : QUESTIONS;
  }

  function getStatsCatalog() {
    return selectedMode === "fullSentence" ? fullSentenceQuestions : getQuestionCatalog();
  }

  function reviewWeight(question) {
    const record = getQuestionHistory(question.id);
    const level = getReviewLevel(record);
    if (level === "superHard") return 5;
    if (level === "hard") return 4;
    if (level === "redo") return 3;
    return 0;
  }

  function isActiveReview(record) {
    return Boolean(
      record.needsReview ||
      record.misconceptionPending ||
      record.lastResult === "wrong" ||
      record.lastResult === "unsure"
    );
  }

  function getReviewLevel(record) {
    if (!isActiveReview(record)) return "none";

    const wrongCount =
      (Number(record.wrong) || 0) +
      (Number(record.unsure) || 0) +
      (Number(record.testWrongCount) || 0);
    const misconceptionCount = Number(record.misconceptions) || 0;

    if (wrongCount >= 3 || misconceptionCount >= 2) return "superHard";
    if (wrongCount >= 2 || misconceptionCount >= 1) return "hard";
    if (wrongCount >= 1) return "redo";
    return "redo";
  }

  function matchesReviewFilter(level) {
    const filter = elements.reviewSelect.value;
    if (filter === "superHard") return level === "superHard";
    if (filter === "hardPlus") return level === "superHard" || level === "hard";
    if (filter === "redo") return level === "redo";
    return level !== "none";
  }

  function buildQueue() {
    if (selectedMode === "test") {
      return buildTestQuestions().map((question) => ({ question, isRetry: false }));
    }
    if (selectedMode === "fullSentence") {
      return buildFullSentenceQueue().map((question) => ({ question, isRetry: false }));
    }
    let questions = getQuestionCatalog().filter((question) => {
      if (selectedMode === "flashcard") {
        const segment = getFlashcardSegment();
        return !segment || (
          question.page === segment.page &&
          question.number >= segment.start &&
          question.number <= segment.end
        );
      }
      if (selectedMode === "segment") {
        const segment = getSelectedSegment();
        return question.page === segment.page &&
          question.number >= segment.start &&
          question.number <= segment.end;
      }
      if (selectedMode === "priority") return question.priority === "A";
      if (selectedMode === "wrong") {
        const record = getQuestionHistory(question.id);
        return matchesReviewFilter(getReviewLevel(record));
      }
      return true;
    });

    if (elements.randomOrder.checked) {
      questions = shuffle(questions);
    }

    if (elements.reviewFirst.checked &&
        selectedMode !== "flashcard" &&
        selectedMode !== "test") {
      questions.sort((a, b) => reviewWeight(b) - reviewWeight(a));
    }

    return questions.map((question) => ({ question, isRetry: false }));
  }

  function buildFullSentenceQueue() {
    const value = elements.fullSentenceSelect.value;
    let questions = value === "all"
      ? [...fullSentenceQuestions]
      : fullSentenceQuestions.filter((question) => {
        const segment = parseSegment(value);
        return question.page === segment.page &&
          question.number >= segment.start &&
          question.number <= segment.end;
      });

    if (elements.randomOrder.checked) {
      questions = shuffle(questions);
    }

    if (elements.reviewFirst.checked) {
      questions.sort((a, b) => reviewWeight(b) - reviewWeight(a));
    }

    return questions;
  }

  function buildTestQuestions() {
    const catalog = getQuestionCatalog();
    const value = elements.testSelect.value;
    if (value === "random10") return shuffle(catalog).slice(0, 10);
    if (value === "random20") return shuffle(catalog).slice(0, 20);

    let questions;
    if (value === "all") {
      questions = [...catalog];
    } else if (value === "priority") {
      questions = catalog.filter((question) => question.priority === "A");
    } else {
      const segment = parseSegment(value);
      questions = catalog.filter((question) =>
        question.page === segment.page &&
        question.number >= segment.start &&
        question.number <= segment.end
      );
    }
    return elements.randomOrder.checked ? shuffle(questions) : questions;
  }

  function startSession() {
    queue = buildQueue();
    currentIndex = 0;
    currentIntent = null;
    retryIds = new Set();
    sessionStats = createEmptyStats();
    testAnswers = [];
    lastTestWrongQuestions = [];
    activeTestRangeLabel = selectedMode === "test" ? getTestRangeLabel() : "";
    elements.testResultView.hidden = true;
    elements.statsCard.hidden = selectedMode === "test";
    elements.modeLabel.textContent = getModeLabel();
    updateStats();
    showCurrentQuestion();
  }

  function getSelectedSegment() {
    return parseSegment(elements.segmentSelect.value);
  }

  function getFlashcardSegment() {
    if (elements.flashcardSelect.value === "all") return null;
    return parseSegment(elements.flashcardSelect.value);
  }

  function parseSegment(value) {
    const [page, range] = value.split(":");
    const [start, end] = range.split("-").map(Number);
    return { page, start, end };
  }

  function populateRangeSelectors() {
    const segments = getQuestionSegments();

    replaceOptions(
      elements.segmentSelect,
      segments.map((segment) => createRangeOption(segment))
    );
    replaceOptions(elements.flashcardSelect, [
      createOption("all", `全${getQuestionCatalog().length}問`, "flashcard-all-option"),
      ...segments.map((segment) => createRangeOption(segment))
    ]);
    replaceOptions(elements.testSelect, [
      createOption("random10", "全問題からランダム10問"),
      createOption("random20", "全問題からランダム20問"),
      createOption("all", `全${getQuestionCatalog().length}問`, "test-all-option"),
      createOption("priority", "A優先", "test-priority-option"),
      ...segments.map((segment) => createRangeOption(segment))
    ]);
    replaceOptions(elements.fullSentenceSelect, [
      createOption("all", `全${fullSentenceQuestions.length}文`, "full-sentence-all-option"),
      ...segments.map((segment) => createRangeOption(segment))
    ]);

    elements.flashcardAllOption = document.querySelector("#flashcard-all-option") ||
      elements.flashcardSelect.querySelector('option[value="all"]');
    elements.testAllOption = document.querySelector("#test-all-option");
    elements.testPriorityOption = document.querySelector("#test-priority-option");
    elements.fullSentenceAllOption = document.querySelector("#full-sentence-all-option");
  }

  function getQuestionSegments() {
    const pages = new Map();
    QUESTIONS.forEach((question) => {
      if (!pages.has(question.page)) pages.set(question.page, []);
      pages.get(question.page).push(Number(question.number));
    });

    return [...pages.entries()].flatMap(([page, numbers]) => {
      const maxNumber = Math.max(...numbers);
      const segments = [];
      for (let start = 1; start <= maxNumber; start += 10) {
        const end = Math.min(start + 9, maxNumber);
        if (numbers.some((number) => number >= start && number <= end)) {
          segments.push({ page, start, end });
        }
      }
      return segments;
    });
  }

  function createRangeOption(segment) {
    return createOption(
      `${segment.page}:${segment.start}-${segment.end}`,
      `${segment.page}　${segment.start}〜${segment.end}番`
    );
  }

  function createOption(value, label, id = "") {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = label;
    if (id) option.id = id;
    return option;
  }

  function replaceOptions(select, options) {
    select.replaceChildren(...options);
  }

  function getModeLabel() {
    if (selectedMode === "segment") {
      const segment = getSelectedSegment();
      return selectedScope === "allKanji"
        ? `${segment.page} ${segment.start}〜${segment.end}番・10例文の全漢字（${queue.length}問）`
        : `${segment.page} ${segment.start}〜${segment.end}番・10問特訓`;
    }
    if (selectedMode === "flashcard") {
      const segment = getFlashcardSegment();
      return segment
        ? `${segment.page} ${segment.start}〜${segment.end}番・フラッシュカード`
        : `全${getQuestionCatalog().length}問・フラッシュカード`;
    }
    if (selectedMode === "fullSentence") return getFullSentenceRangeLabel();
    if (selectedMode === "test") return getTestRangeLabel();
    if (selectedMode === "wrong") return `段階別復習・${REVIEW_LABELS[elements.reviewSelect.value]}`;
    return MODE_LABELS[selectedMode];
  }

  function getFullSentenceRangeLabel() {
    const value = elements.fullSentenceSelect.value;
    if (value === "all") return `全${fullSentenceQuestions.length}文・全文モード`;
    const segment = parseSegment(value);
    return `${segment.page} ${segment.start}〜${segment.end}番・全文モード`;
  }

  function getTestRangeLabel() {
    const catalog = getQuestionCatalog();
    const value = elements.testSelect.value;
    if (value === "random10") return "ランダム10問・テスト";
    if (value === "random20") return "ランダム20問・テスト";
    if (value === "all") return `全${catalog.length}問・テスト`;
    if (value === "priority") {
      const count = catalog.filter((question) => question.priority === "A").length;
      return `A優先${count}問・テスト`;
    }
    const segment = parseSegment(value);
    return `${segment.page} ${segment.start}〜${segment.end}番・テスト`;
  }

  function showCurrentQuestion() {
    if (queue.length === 0) {
      showEmptyState(
        selectedMode === "wrong" ? "復習する問題はありません" : "問題がありません",
        selectedMode === "wrong"
          ? "この分類の復習問題はありません。別の復習の種類を選ぶか、通常練習を進めてください。"
          : "questions.js に問題を追加してください。"
      );
      return;
    }

    if (currentIndex >= queue.length) {
      if (selectedMode === "test") {
        finishTest();
        return;
      }
      const isFlashcard = selectedMode === "flashcard";
      showEmptyState(
        isFlashcard ? "カードを全部見ました！" : "今回の練習はおわり！",
        isFlashcard
          ? `全${queue.length}枚を確認しました。設定を変えるか、もう一度はじめてください。`
          : `初回答${sessionStats.total}問、おつかれさまでした。設定を変えるか、もう一度はじめてください。`
      );
      elements.progressLabel.textContent = "完了";
      return;
    }

    const entry = queue[currentIndex];
    const question = entry.question;
    currentIntent = null;
    elements.questionView.hidden = false;
    elements.emptyView.hidden = true;
    elements.progressLabel.textContent =
      `${currentIndex + 1} / ${queue.length}${entry.isRetry ? "（再出題）" : ""}`;
    elements.questionText.classList.toggle("is-full-sentence", Boolean(question.isFullSentence));
    elements.questionText.replaceChildren(createMaskedQuestion(question));
    elements.questionMeta.textContent =
      `${question.page}・${question.number}番・優先度 ${question.priority}` +
      (question.variantCount > 1
        ? `・文中漢字 ${question.variantPosition}/${question.variantCount}`
        : "") +
      (question.isFullSentence ? "・全文" : "");
    elements.studyInstruction.textContent =
      selectedMode === "flashcard"
        ? "問題を見て答えを思い出してから、「答えを見る」を押そう。"
        : selectedMode === "test"
          ? "紙に答えを書いてから、「回答した」を押そう。途中の点数は表示されません。"
          : selectedMode === "fullSentence"
            ? "読みを見て、文全体を漢字かな交じりで紙に書こう。波線は送り仮名まで気をつける言葉です。"
            : "紙に漢字を書いてから、「書けた」か「わからない」を選ぼう。";
    elements.answerPanel.hidden = true;
    elements.recallControls.hidden =
      selectedMode === "flashcard" || selectedMode === "test";
    elements.flashcardControls.hidden = selectedMode !== "flashcard";
    elements.testControls.hidden = selectedMode !== "test";
    elements.scoreControls.hidden = true;
    elements.resultMessage.hidden = true;
    elements.resultMessage.className = "result-message";
    elements.nextQuestion.textContent = selectedMode === "flashcard"
      ? "次のカードへ"
      : selectedMode === "test"
        ? "次の問題へ"
        : "次の問題へ";
    elements.nextQuestion.hidden = true;
    elements.answerChecklist.hidden = selectedMode === "flashcard";
    elements.answerKanji.classList.toggle("is-sentence-answer", Boolean(question.isFullSentence));
    elements.answerKanji.textContent = question.answer;
    elements.answerReading.textContent = `読み：${question.reading}`;
    elements.answerExample.replaceChildren(createHighlightedExample(question));
  }

  function createMaskedQuestion(question) {
    if (question.isFullSentence) {
      return createFullSentencePrompt(question);
    }

    const fragment = document.createDocumentFragment();
    const target = question.target || question.answer;
    const parts = question.question.split(target);

    if (parts.length === 1) {
      fragment.append(document.createTextNode(question.question));
      return fragment;
    }

    parts.forEach((part, index) => {
      fragment.append(document.createTextNode(part));
      if (index < parts.length - 1) {
        const blank = document.createElement("span");
        blank.className = "reading-blank";
        blank.textContent = question.reading;
        blank.setAttribute("aria-label", `${question.reading}を漢字で書く`);
        fragment.append(blank);
      }
    });
    return fragment;
  }

  function createFullSentencePrompt(question) {
    const fragment = document.createDocumentFragment();

    question.sentenceSegments.forEach((segment) => {
      if (segment.kind === "text") {
        fragment.append(document.createTextNode(segment.text));
        return;
      }

      const blank = document.createElement("span");
      blank.className = segment.hasOkurigana
        ? "reading-blank is-okurigana"
        : "reading-blank";
      blank.textContent = segment.reading;
      blank.setAttribute("aria-label", `${segment.reading}を漢字かな交じりで書く`);
      fragment.append(blank);
    });

    return fragment;
  }

  function createHighlightedExample(question) {
    if (question.isFullSentence) {
      return createFullSentenceAnswer(question);
    }

    const fragment = document.createDocumentFragment();
    const target = question.target || question.answer;
    const parts = question.question.split(target);

    parts.forEach((part, index) => {
      fragment.append(document.createTextNode(part));
      if (index < parts.length - 1) {
        const mark = document.createElement("mark");
        mark.textContent = question.answer;
        fragment.append(mark);
      }
    });
    return fragment;
  }

  function createFullSentenceAnswer(question) {
    const fragment = document.createDocumentFragment();

    question.sentenceSegments.forEach((segment) => {
      if (segment.kind === "text") {
        fragment.append(document.createTextNode(segment.text));
        return;
      }

      const mark = document.createElement("mark");
      mark.className = segment.hasOkurigana ? "has-okurigana" : "";
      mark.textContent = segment.answer;
      fragment.append(mark);
    });

    return fragment;
  }

  function revealAnswer(intent) {
    if (currentIntent || currentIndex >= queue.length) return;
    currentIntent = intent;
    elements.answerPanel.hidden = false;
    elements.recallControls.hidden = true;

    if (intent === "unknown") {
      recordResult("wrong", intent);
      currentIntent = "completed";
      showResultMessage("×として記録しました。答えをよく見てから次へ進もう。", "wrong");
      elements.nextQuestion.hidden = false;
    } else {
      elements.scoreControls.hidden = false;
    }
  }

  function revealFlashcardAnswer() {
    if (selectedMode !== "flashcard" || currentIndex >= queue.length) return;
    elements.answerPanel.hidden = false;
    elements.flashcardControls.hidden = true;
    elements.nextQuestion.hidden = false;
  }

  function revealTestAnswer() {
    if (selectedMode !== "test" || currentIndex >= queue.length) return;
    currentIntent = "test";
    elements.answerPanel.hidden = false;
    elements.testControls.hidden = true;
    elements.scoreControls.hidden = false;
  }

  function scoreQuestion(result) {
    if (selectedMode === "test") {
      scoreTestQuestion(result);
      return;
    }
    if (currentIntent !== "wrote") return;
    recordResult(result, currentIntent);
    currentIntent = "completed";
    elements.scoreControls.hidden = true;

    if (result === "correct") {
      showResultMessage("○です。答えと合っていることを確認できました。");
    } else {
      showResultMessage(
        "思い違いとして記録しました。3〜5問後にもう一度出ます。",
        "misconception"
      );
    }
    elements.nextQuestion.hidden = false;
  }

  function scoreTestQuestion(result) {
    if (currentIntent !== "test" || currentIndex >= queue.length) return;
    const question = queue[currentIndex].question;
    testAnswers.push({ question, result });
    currentIntent = "completed";
    elements.scoreControls.hidden = true;
    elements.answerPanel.hidden = true;
    elements.nextQuestion.hidden = false;

    if (result === "wrong") {
      const record = getQuestionHistory(question.id);
      record.needsReview = true;
      record.errorDate = getLocalDateKey();
      record.testWrongCount = (Number(record.testWrongCount) || 0) + 1;
      record.lastTestWrongAt = new Date().toISOString();
      history[question.id] = record;
      saveHistory();
    }
  }

  function finishTest() {
    const correct = testAnswers.filter((answer) => answer.result === "correct").length;
    const wrongAnswers = testAnswers.filter((answer) => answer.result === "wrong");
    const total = testAnswers.length;
    const rate = total ? Math.round((correct / total) * 100) : 0;
    const range = activeTestRangeLabel.replace("・テスト", "");
    lastTestWrongQuestions = wrongAnswers.map((answer) => answer.question);

    testHistory.unshift({
      completedAt: new Date().toISOString(),
      range,
      total,
      correct,
      wrong: wrongAnswers.length,
      rate,
      wrongIds: lastTestWrongQuestions.map((question) => question.id)
    });
    testHistory = testHistory.slice(0, 50);
    saveTestHistory();

    elements.questionView.hidden = true;
    elements.emptyView.hidden = true;
    elements.testResultView.hidden = false;
    elements.testResultScore.textContent = `${correct} / ${total}`;
    elements.testResultRate.textContent = `正答率 ${rate}%`;
    elements.testResultRange.textContent = range;
    elements.testWrongList.replaceChildren(
      ...lastTestWrongQuestions.map((question) => {
        const item = document.createElement("li");
        item.textContent =
          `${question.page} ${question.number}番：${question.question}（答え：${question.answer}）`;
        return item;
      })
    );
    elements.testWrongSection.hidden = wrongAnswers.length === 0;
    elements.reviewTestWrongs.hidden = wrongAnswers.length === 0;
    elements.progressLabel.textContent = "完了";
    renderTestHistory();
  }

  function startTestWrongReview() {
    if (lastTestWrongQuestions.length === 0) return;
    selectedMode = "testReview";
    queue = lastTestWrongQuestions.map((question) => ({ question, isRetry: false }));
    currentIndex = 0;
    currentIntent = null;
    retryIds = new Set();
    sessionStats = createEmptyStats();
    elements.testResultView.hidden = true;
    elements.statsCard.hidden = false;
    elements.modeLabel.textContent = MODE_LABELS.testReview;
    updateStats();
    showCurrentQuestion();
  }

  function recordResult(result, intent) {
    if (currentIndex >= queue.length) return;

    const entry = queue[currentIndex];
    const question = entry.question;
    const record = getQuestionHistory(question.id);
    const today = getLocalDateKey();
    record.attempts += 1;
    record[result] += 1;
    record.lastResult = result;
    record.lastHintUsed = intent === "unknown";
    record.lastStudiedAt = new Date().toISOString();

    if (result === "correct") {
      if (!record.masteryCorrectDates.includes(today)) {
        record.masteryCorrectDates.push(today);
      }
      record.consecutiveCorrect = record.masteryCorrectDates.length;
      record.mastered = record.masteryCorrectDates.length >= 2;

      if (record.errorDate && record.errorDate !== today) {
        record.needsReview = false;
      }
      if (record.misconceptionDate && record.misconceptionDate !== today) {
        record.misconceptionPending = false;
      }
    } else {
      record.consecutiveCorrect = 0;
      record.masteryCorrectDates = [];
      record.mastered = false;
      record.needsReview = true;
      record.errorDate = today;

      if (intent === "wrote") {
        record.misconceptions += 1;
        record.misconceptionPending = true;
        record.misconceptionDate = today;
      }
    }

    history[question.id] = record;
    saveHistory();

    if (entry.isRetry) {
      sessionStats.retries += 1;
    } else {
      sessionStats.total += 1;
      sessionStats[result] += 1;
      if (result === "wrong" && intent === "wrote") {
        sessionStats.misconceptions += 1;
      }
    }

    if (result === "wrong" && !entry.isRetry && !retryIds.has(question.id)) {
      retryIds.add(question.id);
      insertRetry(question);
    }

    updateStats();
  }

  function insertRetry(question) {
    const gap = 3 + Math.floor(Math.random() * 3);
    const insertAt = Math.min(queue.length, currentIndex + gap + 1);
    queue.splice(insertAt, 0, { question, isRetry: true });
  }

  function getLocalDateKey() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function showResultMessage(message, type = "") {
    elements.resultMessage.textContent = message;
    elements.resultMessage.className =
      `result-message${type ? ` is-${type}` : ""}`;
    elements.resultMessage.hidden = false;
  }

  function goToNextQuestion() {
    if (elements.nextQuestion.hidden) return;
    currentIndex += 1;
    showCurrentQuestion();
  }

  function updateStats() {
    const rate = sessionStats.total
      ? Math.round((sessionStats.correct / sessionStats.total) * 100)
      : 0;
    const catalog = getQuestionCatalog();
    const cumulative = catalog.reduce((total, question) => {
      const record = getQuestionHistory(question.id);
      const legacyUnsure = Number(record.unsure) || 0;
      const correct = Number(record.correct) || 0;
      const wrong = (Number(record.wrong) || 0) + legacyUnsure;

      total.correct += correct;
      total.wrong += wrong;
      total.misconceptions += Number(record.misconceptions) || 0;
      total.mastered += record.mastered ? 1 : 0;
      const level = getReviewLevel(record);
      total.review += level !== "none" ? 1 : 0;
      if (level === "superHard") total.superHard += 1;
      if (level === "hard") total.hard += 1;
      if (level === "redo") total.redo += 1;
      return total;
    }, {
      correct: 0,
      wrong: 0,
      misconceptions: 0,
      mastered: 0,
      review: 0,
      superHard: 0,
      hard: 0,
      redo: 0
    });
    const cumulativeTotal = cumulative.correct + cumulative.wrong;
    const cumulativeRate = cumulativeTotal
      ? Math.round((cumulative.correct / cumulativeTotal) * 100)
      : 0;

    elements.statRate.textContent = `${rate}%`;
    elements.statTotal.textContent = sessionStats.total;
    elements.statCorrect.textContent = sessionStats.correct;
    elements.statWrong.textContent = sessionStats.wrong;
    elements.statMisconceptions.textContent = sessionStats.misconceptions;
    elements.statRetries.textContent = sessionStats.retries;
    elements.masteredCount.textContent =
      `習得済み: ${cumulative.mastered} / ${catalog.length}問`;
    elements.historyRate.textContent = `${cumulativeRate}%`;
    elements.historyTotal.textContent = cumulativeTotal;
    elements.historyCorrect.textContent = cumulative.correct;
    elements.historyWrong.textContent = cumulative.wrong;
    elements.historyMisconceptions.textContent = cumulative.misconceptions;
    elements.historyReview.textContent = `${cumulative.review}問`;
    elements.historySuperHard.textContent = `${cumulative.superHard}問`;
    elements.historyHard.textContent = `${cumulative.hard}問`;
    elements.historyRedo.textContent = `${cumulative.redo}問`;
  }

  function renderTestHistory() {
    if (testHistory.length === 0) {
      const item = document.createElement("li");
      item.textContent = "まだテスト履歴はありません。";
      elements.testHistoryList.replaceChildren(item);
      return;
    }

    elements.testHistoryList.replaceChildren(
      ...testHistory.slice(0, 5).map((test) => {
        const item = document.createElement("li");
        const date = new Date(test.completedAt).toLocaleString("ja-JP", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });
        item.textContent =
          `${date}　${test.range}　${test.correct}/${test.total}（${test.rate}%）`;
        return item;
      })
    );
  }

  function updateScopeDisplay() {
    const catalog = getQuestionCatalog();
    const priorityCount = catalog.filter(
      (question) => question.priority === "A"
    ).length;

    elements.scopeSummary.textContent = selectedScope === "allKanji"
      ? `例文中の漢字語を別々に出題します。全${catalog.length}問です。10問区分は10例文分の漢字語へ展開されます。`
      : `指定された新出漢字を中心に、全${catalog.length}問を学習します。`;
    elements.flashcardAllOption.textContent = `全${catalog.length}問`;
    elements.fullSentenceAllOption.textContent = `全${fullSentenceQuestions.length}文`;
    elements.testAllOption.textContent = `全${catalog.length}問`;
    elements.testPriorityOption.textContent = `A優先${priorityCount}問`;
    updateStats();
  }

  function showEmptyState(title, message) {
    elements.questionView.hidden = true;
    elements.emptyView.hidden = false;
    elements.emptyTitle.textContent = title;
    elements.emptyMessage.textContent = message;
  }

  function resetHistory() {
    const shouldReset = window.confirm(
      `${selectedUser} の学習履歴・習得済み・テスト履歴をすべて消しますか？`
    );
    if (!shouldReset) return;

    history = {};
    testHistory = [];
    localStorage.removeItem(getUserStorageKey(STORAGE_KEY));
    localStorage.removeItem(getUserStorageKey(TEST_STORAGE_KEY));
    renderTestHistory();
    startSession();
  }

  function switchUser(user) {
    if (!USERS.includes(user) || user === selectedUser) return;
    selectedUser = user;
    saveSelectedUser();
    history = loadHistory();
    testHistory = loadTestHistory();
    retryIds = new Set();
    sessionStats = createEmptyStats();
    testAnswers = [];
    lastTestWrongQuestions = [];
    renderTestHistory();
    startSession();
  }

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedMode = button.dataset.mode;
      elements.modeButtons.forEach((item) => {
        const isSelected = item === button;
        item.classList.toggle("is-selected", isSelected);
        item.setAttribute("aria-pressed", String(isSelected));
      });
      elements.segmentSettings.hidden = selectedMode !== "segment";
      elements.flashcardSettings.hidden = selectedMode !== "flashcard";
      elements.fullSentenceSettings.hidden = selectedMode !== "fullSentence";
      elements.testSettings.hidden = selectedMode !== "test";
      elements.reviewSettings.hidden = selectedMode !== "wrong";
    });
  });

  elements.scopeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedScope = button.dataset.scope;
      elements.scopeButtons.forEach((item) => {
        const isSelected = item === button;
        item.classList.toggle("is-selected", isSelected);
        item.setAttribute("aria-pressed", String(isSelected));
      });
      updateScopeDisplay();
    });
  });

  elements.startSession.addEventListener("click", startSession);
  elements.resetHistory.addEventListener("click", resetHistory);
  elements.userSelect.addEventListener("change", () => switchUser(elements.userSelect.value));
  elements.wroteAnswer.addEventListener("click", () => revealAnswer("wrote"));
  elements.unknownAnswer.addEventListener("click", () => revealAnswer("unknown"));
  elements.flashcardShowAnswer.addEventListener("click", revealFlashcardAnswer);
  elements.testShowAnswer.addEventListener("click", revealTestAnswer);
  elements.reviewTestWrongs.addEventListener("click", startTestWrongReview);
  elements.nextQuestion.addEventListener("click", goToNextQuestion);
  elements.scoreButtons.forEach((button) => {
    button.addEventListener("click", () => scoreQuestion(button.dataset.score));
  });

  elements.userSelect.value = selectedUser;
  populateRangeSelectors();
  updateStats();
  updateScopeDisplay();
  renderTestHistory();
  startSession();
})();
