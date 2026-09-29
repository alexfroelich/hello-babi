export const vocabularyExpressions = [
  { expression: 'realize', translation: 'perceber; dar-se conta', distractors: ['run out of', 'turn up', 'wardrobe'], question: 'I didn’t ___ that the store was already closed.', sentenceTranslation: 'Eu não percebi que a loja já estava fechada.' },
  { expression: 'run out of', translation: 'ficar sem; acabar', distractors: ['turn up', 'turn down', 'turn on'], question: 'We might ___ milk before breakfast.', sentenceTranslation: 'Talvez fiquemos sem leite antes do café da manhã.' },
  { expression: 'turn up', translation: 'aumentar (o volume)', distractors: ['turn down', 'turn on', 'turn off'], question: 'Could you ___ the volume? I can barely hear it.', sentenceTranslation: 'Você poderia aumentar o volume? Mal consigo ouvir.' },
  { expression: 'turn down', translation: 'abaixar (o volume)', distractors: ['turn up', 'turn off', 'turn on'], question: 'Please ___ the volume; it’s too loud.', sentenceTranslation: 'Por favor, abaixe o volume; está muito alto.' },
  { expression: 'turn on', translation: 'ligar', distractors: ['turn off', 'turn up', 'turn down'], question: 'Please ___ the lamp; this room is dark.', sentenceTranslation: 'Por favor, ligue a luminária; este cômodo está escuro.' },
  { expression: 'turn off', translation: 'desligar', distractors: ['turn on', 'turn up', 'run out of'], question: 'Please ___ the lights before you leave.', sentenceTranslation: 'Por favor, desligue as luzes antes de sair.' },
  { expression: 'as a matter of fact', translation: 'na verdade; de fato', distractors: ['realize', 'wardrobe', 'turn down'], question: '___, I had already sent the email before your reminder.', sentenceTranslation: 'Na verdade, eu já tinha enviado o e-mail antes do seu lembrete.' },
  { expression: 'actually', translation: 'na realidade; na verdade', distractors: ['run out of', 'wardrobe', 'turn on'], question: 'I thought the café closed at six, but it ___ closes at eight.', sentenceTranslation: 'Eu achava que o café fechava às seis, mas na realidade fecha às oito.' },
  { expression: 'wardrobe', translation: 'guarda-roupa; armário', distractors: ['realize', 'turn up', 'as a matter of fact'], question: 'She hung her coat inside the ___.', sentenceTranslation: 'Ela pendurou o casaco dentro do guarda-roupa.' }
]

export default {
  id: 'vocabulary',
  label: 'Vocabulary & Phrasal Verbs',
  description: 'Words and expressions in context',
  titleFirst: 'Useful',
  titleSecond: 'Vocabulary',
  grammarHelp: [],
  questions: vocabularyExpressions.map((entry, entryIndex) => {
    const optionEntries = [entry, ...entry.distractors.map(expression => vocabularyExpressions.find(item => item.expression === expression)).filter(Boolean)]
    const shift = entryIndex % optionEntries.length
    const answers = [...optionEntries.slice(shift), ...optionEntries.slice(0, shift)]
    const correct = answers.findIndex(option => option.expression === entry.expression)
    return {
      question: entry.question,
      translation: entry.sentenceTranslation,
      answers: answers.map(option => option.expression),
      optionTranslations: answers.map(option => option.translation),
      correct,
      fact: ''
    }
  })
}
