<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ALL_TOPICS_ID, allTopicsOption, grammarTopics } from './topics/index.js'

const introVisible = ref(true)
const appReady = ref(false)
const hasStarted = ref(false)
const quizContentVisible = ref(false)
let splashTimer
let contentTimer
let replayTimer
let quizEnterTimer

function playIntro() {
  window.clearTimeout(splashTimer)
  window.clearTimeout(contentTimer)
  window.clearTimeout(replayTimer)
  appReady.value = false
  introVisible.value = true
  splashTimer = window.setTimeout(() => {
    introVisible.value = false
  }, 1200)
  contentTimer = window.setTimeout(() => {
    appReady.value = true
  }, 2250)
}

onMounted(playIntro)
onMounted(() => document.addEventListener('pointerdown', handleOutsideTopicClick))
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleOutsideTopicClick)
  window.clearTimeout(quizEnterTimer)
})

function showIntro() {
  restartQuiz()
  hasStarted.value = false
  quizContentVisible.value = false
  window.clearTimeout(quizEnterTimer)
  topicBrowserOpen.value = false
  themeMenuOpen.value = false
  window.clearTimeout(splashTimer)
  window.clearTimeout(contentTimer)
  window.clearTimeout(replayTimer)
  appReady.value = false
  introVisible.value = false

  replayTimer = window.setTimeout(() => {
    introVisible.value = true
    splashTimer = window.setTimeout(() => {
      introVisible.value = false
    }, 1200)
    contentTimer = window.setTimeout(() => {
      appReady.value = true
    }, 2250)
  }, 940)
}

// Temporarily hidden topics remain in their files and can be restored by removing their IDs here.
const hiddenTopicIds = new Set(['vocabulary', 'modal-verbs'])
const visibleGrammarTopics = grammarTopics.filter(topic => !hiddenTopicIds.has(topic.id))
const selectedTopicId = ref('simple-past')
const activeTopic = computed(() => selectedTopicId.value === ALL_TOPICS_ID
  ? allTopicsOption
  : visibleGrammarTopics.find(topic => topic.id === selectedTopicId.value) ?? visibleGrammarTopics[0])

function shuffleQuestions(items) {
  const shuffled = [...items]
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[otherIndex]] = [shuffled[otherIndex], shuffled[index]]
  }
  return shuffled
}

function createQuizQuestions(topicId) {
  if (topicId === ALL_TOPICS_ID) {
    // Mix five randomly chosen topics and draw one question from each.
    return shuffleQuestions(visibleGrammarTopics).slice(0, 5).map(topic => ({
      ...shuffleQuestions(topic.questions)[0],
      topicId: topic.id
    }))
  }

  const topic = visibleGrammarTopics.find(item => item.id === topicId) ?? visibleGrammarTopics[0]
  // A shuffled copy prevents repeats in a session and reshuffles on every restart.
  return shuffleQuestions(topic.questions).slice(0, 5).map(question => ({ ...question, topicId: topic.id }))
}

const questions = ref(createQuizQuestions(selectedTopicId.value))
const topicBrowserOpen = ref(false)
const topicSearch = ref('')
const filteredTopics = computed(() => {
  const query = topicSearch.value.trim().toLowerCase()
  const matchingTopics = visibleGrammarTopics.filter(topic => !query || `${topic.label} ${topic.description}`.toLowerCase().includes(query))
  return [allTopicsOption, ...matchingTopics]
})
const themeOptions = [
  { id: 'kids', label: 'Hello Babi', description: 'Pink bows and lots of sweetness', symbol: '🎀' },
  { id: 'kids-dark', label: 'Hello Babi Night', description: 'A cozy rosy night palette', symbol: '🌙' },
  { id: 'emo', label: 'Midnight Rebel', description: 'A moody plum and rose palette', symbol: '🌙' },
  { id: 'christian', label: 'Grace & Light', description: 'A warm, peaceful palette inspired by faith', symbol: '✝' },
  { id: 'floral', label: 'Halloween', description: 'Pumpkins, ghosts and magic', symbol: '🎃' }
]
const selectedThemeId = ref('kids')
const isBabiTheme = computed(() => selectedThemeId.value === 'kids' || selectedThemeId.value === 'kids-dark')
const themeMenuOpen = ref(false)
watch(selectedThemeId, id => {
  const darkMode = id === 'kids-dark'
  document.documentElement.dataset.theme = darkMode ? 'kids' : id
  document.documentElement.dataset.colorMode = darkMode ? 'dark' : 'light'
}, { immediate: true })

const currentIndex = ref(0)
const selectedAnswer = ref(null)
const answers = ref([])
const finished = ref(false)
const currentQuestion = computed(() => questions.value[currentIndex.value])
const currentQuestionTopic = computed(() => grammarTopics.find(topic => topic.id === currentQuestion.value.topicId) ?? activeTopic.value)
const currentQuestionParts = computed(() => {
  const [before = '', after = ''] = currentQuestion.value.question.split('___')
  const expected = currentQuestion.value.answers[currentQuestion.value.correct]
  const width = Math.min(Math.max(expected.length * 0.42, 2.5), 6)
  return { before: before.trimEnd(), after: after.trimStart(), blankWidth: `${width}em` }
})
const gameMode = ref('choice')
const typedAnswer = ref('')
const modePickerOpen = ref(false)
const mixedModes = ref([])
const helpOpen = ref(false)
const gameModes = [
  { id: 'choice', label: 'Choose an answer', description: 'Pick from the options', symbol: '✿' },
  { id: 'write', label: 'Write the answer', description: 'Type it from memory', symbol: '✎' },
  { id: 'builder', label: 'Build a sentence', description: 'Put the words in order', symbol: '▤' },
  { id: 'mixed', label: 'Mixed practice', description: 'A random mode for each question', symbol: '✧' }
]
const activeGameMode = computed(() => gameModes.find(mode => mode.id === gameMode.value) ?? gameModes[0])
const activeQuestionMode = computed(() => gameMode.value === 'mixed' ? mixedModes.value[currentIndex.value] ?? 'choice' : gameMode.value)
const questionModeLabel = computed(() => gameModes.find(mode => mode.id === activeQuestionMode.value)?.label ?? gameModes[0].label)
const builderTiles = ref([])
const builderSequence = ref([])
const builderExpectedSentence = computed(() => currentQuestion.value.question.replace('___', currentQuestion.value.answers[currentQuestion.value.correct]))
const progress = computed(() => finished.value ? 100 : (currentIndex.value / questions.value.length) * 100)
const score = computed(() => answers.value.reduce((total, answer, index) => total + (answer === questions.value[index].correct ? 1 : 0), 0))
const resultLevel = computed(() => {
  const percentage = score.value / questions.value.length
  if (percentage === 1) return 'perfect-score'
  if (percentage >= 0.8) return 'excellent-score'
  if (percentage >= 0.6) return 'great-progress'
  if (percentage > 0) return 'good-start'
  return 'fresh-start'
})
const resultMessage = computed(() => {
  const messages = {
    'perfect-score': {
      title: 'Perfect!',
      text: 'You got every question right. That is wonderful work!'
    },
    'excellent-score': {
      title: 'Excellent work!',
      text: 'You got almost every question right. Your skills are really growing!'
    },
    'great-progress': {
      title: 'Great progress!',
      text: 'You are building strong skills. Review anything tricky and keep going!'
    },
    'good-start': {
      title: 'Good start!',
      text: 'Every answer helps you learn. Review the explanations and try again when you are ready.'
    },
    'fresh-start': {
      title: 'You are learning!',
      text: 'A fresh start is part of learning. Take your time, review the explanations, and give it another try.'
    }
  }
  return messages[resultLevel.value]
})

function chooseAnswer(index) {
  if (selectedAnswer.value !== null) return
  selectedAnswer.value = index
  answers.value[currentIndex.value] = index
}

function checkTypedAnswer() {
  if (selectedAnswer.value !== null || !typedAnswer.value.trim()) return
  const normalize = value => value.toLowerCase().trim().replace(/[.!?]+$/g, '').replace(/\s+/g, ' ')
  const expected = currentQuestion.value.answers[currentQuestion.value.correct]
  const isCorrect = normalize(typedAnswer.value) === normalize(expected)
  selectedAnswer.value = isCorrect ? currentQuestion.value.correct : -1
  answers.value[currentIndex.value] = selectedAnswer.value
}

function prepareBuilder() {
  const words = builderExpectedSentence.value.split(/\s+/).map((text, id) => ({ id, text }))
  for (let index = words.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1))
    ;[words[index], words[otherIndex]] = [words[otherIndex], words[index]]
  }
  builderTiles.value = words
  builderSequence.value = []
}

function addBuilderTile(id) {
  if (selectedAnswer.value !== null || builderSequence.value.includes(id)) return
  builderSequence.value.push(id)
}

function removeBuilderTile(id) {
  if (selectedAnswer.value !== null) return
  builderSequence.value = builderSequence.value.filter(tileId => tileId !== id)
}

function checkBuilderAnswer() {
  if (selectedAnswer.value !== null || builderSequence.value.length !== builderTiles.value.length) return
  const builtSentence = builderSequence.value.map(id => builderTiles.value.find(tile => tile.id === id).text).join(' ')
  const normalize = value => value.toLowerCase().trim().replace(/[.!?]+$/g, '').replace(/\s+/g, ' ')
  const isCorrect = normalize(builtSentence) === normalize(builderExpectedSentence.value)
  selectedAnswer.value = isCorrect ? currentQuestion.value.correct : -1
  answers.value[currentIndex.value] = selectedAnswer.value
}

function nextQuestion() {
  if (selectedAnswer.value === null) return
  if (currentIndex.value === questions.value.length - 1) {
    finished.value = true
    return
  }
  currentIndex.value += 1
  selectedAnswer.value = null
  typedAnswer.value = ''
  helpOpen.value = false
  if (activeQuestionMode.value === 'builder') prepareBuilder()
}

function restartQuiz() {
  questions.value = createQuizQuestions(selectedTopicId.value)
  currentIndex.value = 0
  selectedAnswer.value = null
  answers.value = []
  finished.value = false
  typedAnswer.value = ''
  helpOpen.value = false
  if (gameMode.value === 'mixed') prepareMixedModes()
  if (activeQuestionMode.value === 'builder') prepareBuilder()
}

function prepareMixedModes() {
  const options = ['choice', 'write', 'builder']
  const sequence = [...options]
  while (sequence.length < questions.value.length) sequence.push(options[Math.floor(Math.random() * options.length)])
  for (let index = sequence.length - 1; index > 0; index -= 1) {
    const otherIndex = Math.floor(Math.random() * (index + 1))
    ;[sequence[index], sequence[otherIndex]] = [sequence[otherIndex], sequence[index]]
  }
  mixedModes.value = sequence.slice(0, questions.value.length)
}

function selectTopic() {
  restartQuiz()
}

function startQuiz() {
  restartQuiz()
  quizContentVisible.value = false
  hasStarted.value = true
  window.clearTimeout(quizEnterTimer)
  quizEnterTimer = window.setTimeout(() => {
    quizContentVisible.value = true
  }, window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ? 0 : 640)
}

function chooseTopic(topicId) {
  selectedTopicId.value = topicId
  selectTopic()
}

function chooseBrowserTopic(topicId) {
  chooseTopic(topicId)
  topicBrowserOpen.value = false
  topicSearch.value = ''
}

function handleOutsideTopicClick(event) {
  if (!event.target.closest?.('.game-mode-picker')) modePickerOpen.value = false
  if (!event.target.closest?.('.theme-picker')) themeMenuOpen.value = false
}

function chooseGameMode(modeId) {
  gameMode.value = modeId
  modePickerOpen.value = false
  restartQuiz()
}

function chooseTheme(themeId) {
  selectedThemeId.value = themeId
  themeMenuOpen.value = false
}

function answerState(index) {
  if (selectedAnswer.value === null) return ''
  if (index === currentQuestion.value.correct) return 'correct'
  if (index === selectedAnswer.value) return 'incorrect'
  return 'muted'
}
</script>

<template>
  <Transition name="splash">
    <div v-if="introVisible" class="splash-screen" aria-label="Hello Babi">
      <p class="splash-wordmark">Hello <span>Babi</span></p>
    </div>
  </Transition>

  <main class="page-shell" :class="{ 'app-ready': appReady }">
    <header class="topbar">
      <a class="brand" href="#" aria-label="Hello Babi home" @click.prevent="showIntro">
        <span class="brand-mark" aria-hidden="true">
          <svg class="brand-flower" viewBox="0 0 24 24" focusable="false">
            <g fill="#fff">
              <ellipse cx="12" cy="5.5" rx="3.1" ry="4" />
              <ellipse cx="18.2" cy="9.8" rx="3.1" ry="4" transform="rotate(58 18.2 9.8)" />
              <ellipse cx="15.8" cy="17" rx="3.1" ry="4" transform="rotate(130 15.8 17)" />
              <ellipse cx="8.2" cy="17" rx="3.1" ry="4" transform="rotate(-130 8.2 17)" />
              <ellipse cx="5.8" cy="9.8" rx="3.1" ry="4" transform="rotate(-58 5.8 9.8)" />
            </g>
            <circle cx="12" cy="12" r="2.2" fill="#e8519b" />
          </svg>
        </span>
        <span class="brand-name"><span>Hello</span> <em>Babi</em></span>
      </a>
      <button
        v-if="hasStarted && quizContentVisible"
        class="topic-picker-trigger topic-browser-trigger quiz-toolbar-fade"
        type="button"
        aria-label="Search grammar topics"
        aria-haspopup="dialog"
        aria-controls="topic-browser-title"
        :aria-expanded="topicBrowserOpen"
        @click="topicBrowserOpen = true"
      >
        <span class="topic-picker-flower" aria-hidden="true">❀</span>
        <span class="topic-picker-value">{{ activeTopic.label }}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.2" /><path d="m15.4 15.4 4.1 4.1" /></svg>
      </button>
      <div class="theme-picker" @keydown.esc.stop.prevent="themeMenuOpen = false">
        <button
          class="theme-picker-trigger"
          type="button"
          aria-label="Select a color theme"
          aria-haspopup="listbox"
          aria-controls="theme-listbox"
          :aria-expanded="themeMenuOpen"
          @click="themeMenuOpen = !themeMenuOpen"
        >
          <span class="theme-swatches" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
        <Transition name="topic-menu">
          <div v-if="themeMenuOpen" class="theme-menu">
            <p class="topic-menu-heading">CHOOSE A LOOK</p>
            <div id="theme-listbox" role="listbox" aria-label="Color themes">
              <button
                v-for="theme in themeOptions"
                :key="theme.id"
                class="theme-option"
                :class="{ selected: theme.id === selectedThemeId }"
                type="button"
                role="option"
                :aria-selected="theme.id === selectedThemeId"
                @click="chooseTheme(theme.id)"
              >
                <span class="theme-preview" :class="`preview-${theme.id}`" aria-hidden="true">{{ theme.symbol }}</span>
                <span class="topic-option-copy">
                  <strong>{{ theme.label }}</strong>
                  <small>{{ theme.description }}</small>
                </span>
                <span v-if="theme.id === selectedThemeId" class="topic-option-check" aria-hidden="true">✓</span>
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </header>

    <Transition name="welcome-fade" mode="out-in" appear>
      <section v-if="!hasStarted && appReady" class="welcome-screen" aria-labelledby="welcome-title">
        <div class="welcome-card">
          <span class="welcome-symbol" aria-hidden="true">{{ isBabiTheme ? '🎀' : selectedThemeId === 'christian' ? '✝' : selectedThemeId === 'floral' ? '🎃' : selectedThemeId === 'emo' ? '☾' : '✿' }}</span>
          <p class="welcome-eyebrow">YOUR ENGLISH PRACTICE SPACE</p>
          <h1 id="welcome-title">Welcome to <em>Hello Babi</em></h1>
          <p class="welcome-copy">Choose a grammar topic and start practicing at your own pace.</p>
          <label class="welcome-topic-label" for="welcome-topic">What would you like to study?</label>
          <div class="welcome-topic-control">
            <button
              id="welcome-topic"
              class="topic-picker-trigger welcome-topic-trigger"
              type="button"
              aria-label="Search and choose a grammar topic"
              aria-haspopup="dialog"
              aria-controls="topic-browser-title"
              :aria-expanded="topicBrowserOpen"
              @click="topicBrowserOpen = true"
            >
              <span class="topic-picker-flower" aria-hidden="true">❀</span>
              <span class="topic-picker-value">{{ activeTopic.label }}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.2" /><path d="m15.4 15.4 4.1 4.1" /></svg>
            </button>
          </div>
          <p class="welcome-topic-description">{{ activeTopic.description }}</p>
          <button class="welcome-start-button" type="button" @click="startQuiz">Start learning <span aria-hidden="true">→</span></button>
        </div>
      </section>
    </Transition>

    <Transition name="topic-browser-fade">
      <div v-if="topicBrowserOpen" class="topic-browser-backdrop" @click.self="topicBrowserOpen = false" @keydown.esc.stop.prevent="topicBrowserOpen = false">
        <section class="topic-browser" role="dialog" aria-modal="true" aria-labelledby="topic-browser-title">
          <header class="topic-browser-head">
            <div>
              <p>GRAMMAR TOPICS</p>
              <h2 id="topic-browser-title">Find a topic</h2>
            </div>
            <button class="topic-browser-close" type="button" aria-label="Close topic search" @click="topicBrowserOpen = false">×</button>
          </header>
          <label class="topic-search-field">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.2" /><path d="m15.4 15.4 4.1 4.1" /></svg>
            <input v-model="topicSearch" type="search" placeholder="Search grammar topics..." autofocus />
          </label>
          <div class="topic-browser-results" role="listbox" aria-label="Matching grammar topics">
            <button
              v-for="topic in filteredTopics"
              :key="topic.id"
              class="topic-option"
              :class="{ selected: topic.id === selectedTopicId }"
              type="button"
              role="option"
              :aria-selected="topic.id === selectedTopicId"
              @click="chooseBrowserTopic(topic.id)"
            >
              <span class="topic-option-flower" aria-hidden="true">❀</span>
              <span class="topic-option-copy">
                <strong>{{ topic.label }}</strong>
                <small>{{ topic.description }}</small>
              </span>
              <span v-if="topic.id === selectedTopicId" class="topic-option-check" aria-hidden="true">✓</span>
            </button>
            <p v-if="filteredTopics.length === 0" class="topic-search-empty">No topics found. Try another search.</p>
          </div>
        </section>
      </div>
    </Transition>

    <Transition name="topic-fade" mode="out-in" appear>
    <section v-if="hasStarted && quizContentVisible" :key="selectedTopicId" class="quiz-layout" aria-live="polite">
      <div class="intro-column">
        <div class="title-wrap">
          <h1 :class="{ 'there-be-title': selectedTopicId === 'there-be', 'comparison-topic-title': selectedTopicId === 'comparatives-superlatives' }">{{ activeTopic.titleFirst }}<span class="title-break"><br /></span> <em>{{ activeTopic.titleSecond }}</em></h1>
          <template v-if="isBabiTheme">
            <span class="kitty-title-decor kitty-title-decor-one" aria-hidden="true">♡ ✧</span>
            <span class="kitty-title-decor kitty-title-decor-two" aria-hidden="true">✦</span>
            <span class="kitty-title-decor kitty-title-decor-three" aria-hidden="true">❀</span>
            <span class="kitty-title-decor kitty-title-decor-four" aria-hidden="true">♡</span>
            <span class="kitty-title-decor kitty-title-decor-five" aria-hidden="true">✧</span>
            <span class="kitty-title-decor kitty-title-decor-six" aria-hidden="true">✿</span>
          </template>
          <template v-else-if="selectedThemeId === 'emo'">
            <span class="emo-title-decor emo-title-decor-one" aria-hidden="true">✦</span>
            <span class="emo-title-decor emo-title-decor-two" aria-hidden="true">♥</span>
            <span class="emo-title-decor emo-title-decor-three" aria-hidden="true">✧</span>
          </template>
        </div>
        <p class="intro-copy">{{ gameMode === 'mixed' ? 'Each question brings a different way to practice.' : gameMode === 'builder' ? 'Use the translation to build the English sentence.' : gameMode === 'write' ? 'Complete each sentence by typing the correct form.' : 'Complete each sentence by choosing the correct form.' }}</p>
        <span class="flower-deco flower-deco-one" aria-hidden="true">✿</span>
        <span class="flower-deco flower-deco-two" aria-hidden="true">❀</span>
      </div>

      <div class="card-frame" :class="{ 'kitty-card-frame': isBabiTheme, 'halloween-card-frame': selectedThemeId === 'floral' }">
      <div class="quiz-card" :class="{ 'kitty-card': isBabiTheme, 'halloween-card': selectedThemeId === 'floral' }">
        <div v-if="isBabiTheme" class="theme-doodles kitty-doodles" aria-hidden="true">
          <span class="doodle kitty-bow">🎀</span>
        </div>
        <div v-else-if="selectedThemeId === 'floral'" class="theme-doodles halloween-doodles" aria-hidden="true">
          <span class="doodle halloween-ghost halloween-ghost-one">👻</span>
          <span class="doodle halloween-pumpkin">🎃</span>
          <span class="doodle halloween-bat halloween-bat-one">🦇</span>
          <span class="doodle halloween-bat halloween-bat-two">🦇</span>
          <span class="doodle halloween-web">🕸</span>
          <span class="doodle halloween-moon">☾</span>
          <span class="doodle halloween-sparkle halloween-sparkle-one">✦</span>
          <span class="doodle halloween-sparkle halloween-sparkle-two">✧</span>
        </div>
        <div v-else-if="selectedThemeId === 'emo'" class="theme-doodles emo-doodles" aria-hidden="true">
          <span class="doodle emo-heart emo-heart-one">♥</span>
          <span class="doodle emo-star emo-star-one">✦</span>
          <span class="doodle emo-moon">☾</span>
          <span class="doodle emo-star emo-star-two">✧</span>
        </div>
        <div v-else-if="selectedThemeId === 'christian'" class="theme-doodles faith-doodles" aria-hidden="true">
          <span class="doodle faith-cross">✝</span>
          <span class="doodle faith-bible">📖</span>
          <span class="doodle faith-dove">🕊</span>
        </div>
        <div class="sakura-petals" aria-hidden="true">
          <span class="petal petal-one">❀</span>
          <span class="petal petal-two">❀</span>
          <span class="petal petal-three">❀</span>
        </div>
        <template v-if="!finished">
          <div class="card-head">
            <span class="question-count">QUESTION <b>{{ String(currentIndex + 1).padStart(2, '0') }}</b><i>OF</i>{{ String(questions.length).padStart(2, '0') }}</span>
            <div class="game-mode-picker" @keydown.esc.stop.prevent="modePickerOpen = false">
              <button
                class="topic-picker-trigger game-mode-trigger"
                type="button"
                aria-label="Choose a game mode"
                aria-haspopup="listbox"
                aria-controls="game-mode-listbox"
                :aria-expanded="modePickerOpen"
                @click="modePickerOpen = !modePickerOpen"
              >
                <span class="topic-picker-flower" aria-hidden="true">{{ activeGameMode.symbol }}</span>
                <span class="topic-picker-value">{{ activeGameMode.label }}</span>
                <span class="topic-picker-chevron" :class="{ open: modePickerOpen }" aria-hidden="true">⌄</span>
              </button>
              <Transition name="topic-menu">
                <div v-if="modePickerOpen" class="topic-menu mode-menu">
                  <p class="topic-menu-heading">CHOOSE A GAME MODE</p>
                  <div id="game-mode-listbox" role="listbox" aria-label="Game modes">
                    <button
                      v-for="mode in gameModes"
                      :key="mode.id"
                      class="topic-option"
                      :class="{ selected: mode.id === gameMode }"
                      type="button"
                      role="option"
                      :aria-selected="mode.id === gameMode"
                      @click="chooseGameMode(mode.id)"
                    >
                      <span class="topic-option-flower" aria-hidden="true">{{ mode.symbol }}</span>
                      <span class="topic-option-copy">
                        <strong>{{ mode.label }}</strong>
                        <small>{{ mode.description }}</small>
                      </span>
                      <span v-if="mode.id === gameMode" class="topic-option-check" aria-hidden="true">✓</span>
                    </button>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
          <div class="progress-track" role="progressbar" :aria-valuenow="currentIndex + 1" :aria-valuemin="1" :aria-valuemax="questions.length" :aria-label="`Question ${currentIndex + 1} of ${questions.length}`">
            <span :style="{ width: `${progress}%` }"></span>
          </div>

          <div class="question-area">
            <p v-if="currentQuestion.infinitive" class="verb-label">VERB <strong>{{ currentQuestion.infinitive }}</strong></p>
            <h2 v-if="activeQuestionMode === 'builder'">{{ currentQuestion.translation }}</h2>
            <h2 v-else>
              <span v-if="currentQuestion.response" class="dialogue-speaker">A:</span>
              <template v-if="currentQuestion.question.includes('___')">{{ currentQuestionParts.before }}<span class="question-blank" aria-label="missing word" :style="{ width: currentQuestionParts.blankWidth }"></span>{{ currentQuestionParts.after }}</template>
              <template v-else>{{ currentQuestion.question }}</template>
            </h2>
            <div v-if="currentQuestion.response && activeQuestionMode !== 'builder'" class="dialogue-response">
              <span class="dialogue-speaker">B:</span>
              <p>{{ currentQuestion.response }}</p>
            </div>
            <div class="question-guidance">
              <p class="choose-hint">
                {{ activeQuestionMode === 'builder' ? 'BUILD THE ENGLISH SENTENCE FROM THIS TRANSLATION' : activeQuestionMode === 'write' ? 'TYPE THE CORRECT FORM' : currentQuestionTopic.id === 'question-words' ? 'CHOOSE THE CORRECT QUESTION WORD' : currentQuestionTopic.id === 'vocabulary' ? 'CHOOSE THE BEST EXPRESSION IN CONTEXT' : `CHOOSE THE CORRECT FORM IN ${currentQuestionTopic.label.toUpperCase()}` }}
              </p>
              <button class="help-toggle" type="button" :aria-expanded="helpOpen" @click="helpOpen = !helpOpen"><span>?</span> Help</button>
            </div>
            <div v-if="helpOpen" class="help-panel">
              <div v-if="currentQuestionTopic.id === 'vocabulary'" class="help-grammar-points">
                <strong>Option translations</strong>
                <ul>
                  <li v-for="(answer, index) in currentQuestion.answers" :key="answer"><b>{{ answer }}</b> — {{ currentQuestion.optionTranslations[index] }}</li>
                </ul>
              </div>
              <template v-else>
                <div class="help-grammar-points">
                  <strong>Grammar points</strong>
                  <ul>
                    <li v-for="(point, index) in currentQuestionTopic.grammarHelp" :key="index" v-html="point"></li>
                  </ul>
                </div>
                <p v-if="activeQuestionMode !== 'builder'"><strong>Translation</strong>{{ currentQuestion.translation }}</p>
              </template>
              <p v-if="gameMode === 'mixed'" class="help-mode-note">This question mode: {{ questionModeLabel }}</p>
            </div>
            <div v-if="activeQuestionMode === 'choice'" class="answers-list">
              <button
                v-for="(answer, index) in currentQuestion.answers"
                :key="answer"
                class="answer-option"
                :class="[answerState(index), { chosen: selectedAnswer === index, celebrating: selectedAnswer === currentQuestion.correct && index === currentQuestion.correct }]"
                :disabled="selectedAnswer !== null"
                @click="chooseAnswer(index)"
              >
                <span class="answer-letter">{{ String.fromCharCode(65 + index) }}</span>
                <span class="answer-text">{{ answer }}</span>
                <span v-if="answerState(index) === 'correct'" class="answer-result">✓</span>
                <span v-else-if="answerState(index) === 'incorrect'" class="answer-result">○</span>
                <span v-if="selectedAnswer === currentQuestion.correct && index === currentQuestion.correct" class="answer-sparkle-cluster" aria-hidden="true">
                  <i class="answer-sparkle sparkle-a">✧</i>
                  <i class="answer-sparkle sparkle-b">✦</i>
                  <i class="answer-sparkle sparkle-c">✧</i>
                  <i class="answer-sparkle sparkle-d">✦</i>
                </span>
              </button>
            </div>
            <form v-else-if="activeQuestionMode === 'write'" class="write-answer-form" @submit.prevent="checkTypedAnswer">
              <label for="typed-answer">Type the missing word or phrase</label>
              <div class="write-answer-controls">
                <input id="typed-answer" v-model="typedAnswer" type="text" autocomplete="off" :disabled="selectedAnswer !== null" placeholder="Your answer..." />
                <button type="submit" :disabled="selectedAnswer !== null || !typedAnswer.trim()">Check</button>
              </div>
            </form>
            <div v-else class="sentence-builder">
              <div class="sentence-builder-answer" aria-label="Your sentence">
                <span v-if="builderSequence.length === 0" class="builder-placeholder">Tap the words in order</span>
                <button
                  v-for="id in builderSequence"
                  :key="id"
                  type="button"
                  class="builder-tile selected-tile"
                  :disabled="selectedAnswer !== null"
                  @click="removeBuilderTile(id)"
                >{{ builderTiles.find(tile => tile.id === id)?.text }}</button>
              </div>
              <div class="sentence-builder-bank" aria-label="Word tiles">
                <button
                  v-for="tile in builderTiles"
                  :key="tile.id"
                  type="button"
                  class="builder-tile"
                  :disabled="selectedAnswer !== null || builderSequence.includes(tile.id)"
                  @click="addBuilderTile(tile.id)"
                >{{ tile.text }}</button>
              </div>
              <button class="builder-check" type="button" :disabled="selectedAnswer !== null || builderSequence.length !== builderTiles.length" @click="checkBuilderAnswer">Check sentence</button>
            </div>
            <div class="feedback-slot" aria-live="polite">
              <div v-if="selectedAnswer !== null" class="feedback" :class="selectedAnswer === currentQuestion.correct ? 'feedback-correct' : 'feedback-incorrect'">
                <span>{{ selectedAnswer === currentQuestion.correct ? 'Correct!' : 'Not quite!' }}</span>
                <template v-if="currentQuestionTopic.id !== 'vocabulary'">{{ currentQuestion.fact }}</template>
                <p v-else class="vocabulary-explanation"><strong>{{ currentQuestion.answers[currentQuestion.correct] }}</strong> — {{ currentQuestion.optionTranslations[currentQuestion.correct] }}</p>
                <small v-if="activeQuestionMode === 'write' && selectedAnswer !== currentQuestion.correct" class="typed-correction">Answer: <strong>{{ currentQuestion.answers[currentQuestion.correct] }}</strong></small>
                <small v-else-if="activeQuestionMode === 'builder' && selectedAnswer !== currentQuestion.correct" class="typed-correction">Sentence: <strong>{{ builderExpectedSentence }}</strong></small>
              </div>
            </div>
          </div>

          <div class="card-footer">
            <button class="next-button" :disabled="selectedAnswer === null" @click="nextQuestion">
              {{ currentIndex === questions.length - 1 ? 'See results' : 'Next' }} <span>→</span>
            </button>
          </div>
        </template>

        <div v-else class="result-screen" :class="resultLevel">
          <div class="result-decorations" aria-hidden="true">
            <span class="result-confetti confetti-one">✦</span>
            <span class="result-confetti confetti-two">✿</span>
            <span class="result-confetti confetti-three">✧</span>
            <span class="result-confetti confetti-four">♡</span>
            <span class="result-confetti confetti-five">✦</span>
          </div>
          <span class="category-tag result-tag"><span class="category-dot"></span>QUIZ COMPLETE</span>
          <p class="result-score">{{ String(score).padStart(2, '0') }}<span> / {{ String(questions.length).padStart(2, '0') }}</span></p>
          <h2>{{ resultMessage.title }}</h2>
          <p class="result-copy">{{ resultMessage.text }}</p>
          <div class="result-bar"><span :style="{ width: `${(score / questions.length) * 100}%` }"></span></div>
          <p class="result-caption">{{ score }} {{ score === 1 ? 'correct answer' : 'correct answers' }} out of {{ questions.length }}</p>
          <button class="restart-button" @click="restartQuiz">Try again <span>↻</span></button>
        </div>
      </div>
      <span v-if="selectedThemeId === 'floral'" class="halloween-card-front-ghost" aria-hidden="true">👻</span>
      <div v-if="isBabiTheme" class="kitty-surroundings" aria-hidden="true">
        <span class="kitty-outside kitty-outside-heart-one">♥</span>
        <span class="kitty-outside kitty-outside-sparkle-one">✦</span>
        <span class="kitty-outside kitty-outside-heart-six">♡</span>
        <span class="kitty-outside kitty-outside-footer">♡ <i>✦</i> ♡</span>
      </div>
      </div>
    </section>
    </Transition>

  </main>
</template>
