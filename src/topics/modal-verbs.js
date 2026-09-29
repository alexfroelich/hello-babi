export default {
  id: 'modal-verbs',
  label: 'Modal Verbs: Can / Could / Will',
  description: 'Ability, polite requests and future actions',
  titleFirst: 'Modal',
  titleSecond: 'Verbs',
  grammarHelp: [
    '<strong>Can</strong> pode indicar habilidade ou possibilidade no presente.',
    '<strong>Could</strong> pode indicar habilidade no passado ou um pedido educado.',
    '<strong>Will</strong> é usado para falar de decisões, promessas e previsões futuras.'
  ],
  questions: [
    { question: 'Maya ___ read music now; she practices every day.', translation: 'Maya sabe ler partituras agora; ela pratica todos os dias.', answers: ['could', 'will', 'can', 'cans'], correct: 2, fact: '“Can” indica uma habilidade que Maya tem no presente.' },
    { question: 'When Leo was five, he ___ already read short books.', translation: 'Quando Leo tinha cinco anos, ele já conseguia ler livros curtos.', answers: ['can', 'could', 'will', 'coulded'], correct: 1, fact: '“Could” é usado para falar de uma habilidade no passado.' },
    { question: 'The forecast guarantees it ___ snow tomorrow.', translation: 'A previsão garante que vai nevar amanhã.', answers: ['can', 'could', 'will', 'wills'], correct: 2, fact: '“Will” expressa uma previsão sobre o futuro.' },
    { question: 'I ___ help you with the project tonight; I promise.', translation: 'Vou ajudar você com o projeto hoje à noite; prometo.', answers: ['could', 'can', 'will', 'willed'], correct: 2, fact: '“Will” pode expressar uma promessa ou decisão futura.' },
    { question: '___ you possibly help me with this, please? (choose the more polite request)', translation: 'Você poderia me ajudar com isso, por favor? (escolha o pedido mais educado)', response: 'Of course. I’d be happy to help.', answers: ['Will', 'Could', 'Can', 'Cans'], correct: 1, fact: '“Could” deixa o pedido mais educado.' }
  ]
}
