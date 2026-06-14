(() => {
  "use strict";

  const STORAGE_KEY = "kanji-card-history-v1";
  const MODE_LABELS = {
    all: "全問モード",
    segment: "10問特訓",
    flashcard: "フラッシュカード",
    priority: "A優先モード",
    wrong: "×だけ復習モード"
  };

  const elements = {
    modeButtons: [...document.querySelectorAll(".mode-button")],
    segmentSettings: document.querySelector("#segment-settings"),
    segmentSelect: document.querySelector("#segment-select"),
    flashcardSettings: document.querySelector("#flashcard-settings"),
    flashcardSelect: document.querySelector("#flashcard-select"),
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
    resultMessage: document.querySelector("#result-message"),
    nextQuestion: document.querySelector("#next-question"),
    masteredCount: document.querySelector("#mastered-count")
  };

  let selectedMode = "all";
  let history = loadHistory();
  let queue = [];
  let currentIndex = 0;
  let currentIntent = null;
  let retryIds = new Set();
  let sessionStats = createEmptyStats();

  function createEmptyStats() {
    return { total: 0, correct: 0, wrong: 0, misconceptions: 0, retries: 0 };
  }

  function loadHistory() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return saved && typeof saved === "object" ? saved : {};
    } catch (error) {
      console.warn("学習履歴を読み込めませんでした。", error);
      return {};
    }
  }

  function saveHistory() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (error) {
      console.warn("学習履歴を保存できませんでした。", error);
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

  function reviewWeight(question) {
    const record = getQuestionHistory(question.id);
    if (record.misconceptionPending) return 4;
    if (record.needsReview || record.lastResult === "wrong") return 3;
    if (record.lastResult === "unsure") return 2;
    return 0;
  }

  function buildQueue() {
    let questions = QUESTIONS.filter((question) => {
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
        return record.needsReview || record.misconceptionPending ||
          record.lastResult === "wrong" || record.lastResult === "unsure";
      }
      return true;
    });

    if (elements.randomOrder.checked) {
      questions = shuffle(questions);
    }

    if (elements.reviewFirst.checked && selectedMode !== "flashcard") {
      questions.sort((a, b) => reviewWeight(b) - reviewWeight(a));
    }

    return questions.map((question) => ({ question, isRetry: false }));
  }

  function startSession() {
    queue = buildQueue();
    currentIndex = 0;
    currentIntent = null;
    retryIds = new Set();
    sessionStats = createEmptyStats();
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

  function getModeLabel() {
    if (selectedMode === "segment") {
      const segment = getSelectedSegment();
      return `${segment.page} ${segment.start}〜${segment.end}番・10問特訓`;
    }
    if (selectedMode === "flashcard") {
      const segment = getFlashcardSegment();
      return segment
        ? `${segment.page} ${segment.start}〜${segment.end}番・フラッシュカード`
        : "全140問・フラッシュカード";
    }
    return MODE_LABELS[selectedMode];
  }

  function showCurrentQuestion() {
    if (queue.length === 0) {
      showEmptyState(
        selectedMode === "wrong" ? "×の問題はありません" : "問題がありません",
        selectedMode === "wrong"
          ? "すばらしい！ ×をつけた問題ができると、ここに表示されます。"
          : "questions.js に問題を追加してください。"
      );
      return;
    }

    if (currentIndex >= queue.length) {
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
    elements.questionText.replaceChildren(createMaskedQuestion(question));
    elements.questionMeta.textContent =
      `${question.page}・${question.number}番・優先度 ${question.priority}`;
    elements.studyInstruction.textContent = selectedMode === "flashcard"
      ? "問題を見て答えを思い出してから、「答えを見る」を押そう。"
      : "紙に漢字を書いてから、「書けた」か「わからない」を選ぼう。";
    elements.answerPanel.hidden = true;
    elements.recallControls.hidden = selectedMode === "flashcard";
    elements.flashcardControls.hidden = selectedMode !== "flashcard";
    elements.scoreControls.hidden = true;
    elements.resultMessage.hidden = true;
    elements.resultMessage.className = "result-message";
    elements.nextQuestion.textContent =
      selectedMode === "flashcard" ? "次のカードへ" : "次の問題へ";
    elements.nextQuestion.hidden = true;
    elements.answerChecklist.hidden = selectedMode === "flashcard";
    elements.answerKanji.textContent = question.answer;
    elements.answerReading.textContent = `読み：${question.reading}`;
    elements.answerExample.replaceChildren(createHighlightedExample(question));
  }

  function createMaskedQuestion(question) {
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

  function createHighlightedExample(question) {
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

  function scoreQuestion(result) {
    if (currentIntent !== "wrote") return;
    recordResult(result, currentIntent);
    currentIntent = "completed";
    elements.scoreControls.hidden = true;

    if (result === "correct") {
      showResultMessage("○です。全部合っていることを確認できました。");
    } else {
      showResultMessage(
        "思い違いとして記録しました。3〜5問後にもう一度出ます。",
        "misconception"
      );
    }
    elements.nextQuestion.hidden = false;
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
    const cumulative = QUESTIONS.reduce((total, question) => {
      const record = getQuestionHistory(question.id);
      const legacyUnsure = Number(record.unsure) || 0;
      const correct = Number(record.correct) || 0;
      const wrong = (Number(record.wrong) || 0) + legacyUnsure;

      total.correct += correct;
      total.wrong += wrong;
      total.misconceptions += Number(record.misconceptions) || 0;
      total.mastered += record.mastered ? 1 : 0;
      total.review += record.needsReview || record.misconceptionPending ? 1 : 0;
      return total;
    }, {
      correct: 0,
      wrong: 0,
      misconceptions: 0,
      mastered: 0,
      review: 0
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
      `習得済み: ${cumulative.mastered} / ${QUESTIONS.length}問`;
    elements.historyRate.textContent = `${cumulativeRate}%`;
    elements.historyTotal.textContent = cumulativeTotal;
    elements.historyCorrect.textContent = cumulative.correct;
    elements.historyWrong.textContent = cumulative.wrong;
    elements.historyMisconceptions.textContent = cumulative.misconceptions;
    elements.historyReview.textContent = `${cumulative.review}問`;
  }

  function showEmptyState(title, message) {
    elements.questionView.hidden = true;
    elements.emptyView.hidden = false;
    elements.emptyTitle.textContent = title;
    elements.emptyMessage.textContent = message;
  }

  function resetHistory() {
    const shouldReset = window.confirm(
      "○・×、思い違い、復習、習得済みの履歴をすべて消しますか？"
    );
    if (!shouldReset) return;

    history = {};
    localStorage.removeItem(STORAGE_KEY);
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
    });
  });

  elements.startSession.addEventListener("click", startSession);
  elements.resetHistory.addEventListener("click", resetHistory);
  elements.wroteAnswer.addEventListener("click", () => revealAnswer("wrote"));
  elements.unknownAnswer.addEventListener("click", () => revealAnswer("unknown"));
  elements.flashcardShowAnswer.addEventListener("click", revealFlashcardAnswer);
  elements.nextQuestion.addEventListener("click", goToNextQuestion);
  elements.scoreButtons.forEach((button) => {
    button.addEventListener("click", () => scoreQuestion(button.dataset.score));
  });

  updateStats();
  startSession();
})();
