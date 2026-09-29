import simplePast from './simple-past.js'
import simplePresent from './simple-present.js'
import presentContinuous from './present-continuous.js'
import pastContinuous from './past-continuous.js'
import questionWords from './question-words.js'
import thereBe from './there-be.js'
import pastQuestions from './past-questions.js'
import modalVerbs from './modal-verbs.js'
import comparativesSuperlatives from './comparatives-superlatives.js'
import borrowLend from './borrow-lend.js'
import vocabulary, { vocabularyExpressions } from './vocabulary.js'

export const grammarTopics = [
  simplePast,
  simplePresent,
  presentContinuous,
  pastContinuous,
  questionWords,
  thereBe,
  pastQuestions,
  modalVerbs,
  comparativesSuperlatives,
  borrowLend,
  vocabulary
]

export { vocabularyExpressions }

export const ALL_TOPICS_ID = 'all-topics'
export const allTopicsOption = {
  id: ALL_TOPICS_ID,
  label: 'All Topics',
  description: 'Random questions from every grammar topic',
  titleFirst: 'All',
  titleSecond: 'Topics',
  grammarHelp: ['Questions in this round are drawn from <strong>all grammar topics</strong>. Use Help to review the rule for the current question.']
}
