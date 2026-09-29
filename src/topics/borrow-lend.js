export default {
  id: 'borrow-lend',
  label: 'Borrow & Lend',
  description: 'Talk about borrowing and lending in present and past',
  titleFirst: 'Borrow',
  titleSecond: '& Lend',
  grammarHelp: [
    '<strong>Borrow</strong>: receber algo emprestado de alguém (geralmente acompanhado de <em>from</em>).',
    '<strong>Lend</strong>: emprestar algo a alguém (geralmente acompanhado de <em>to</em>). O passado de lend é <strong>lent</strong>.',
    'O passado de <strong>borrow</strong> é <strong>borrowed</strong>. Em perguntas com <strong>did</strong> ou modais (can/could), use a forma base (borrow ou lend).'
  ],
  questions: [
    // 1 a 10
    {
      question: 'I often ___ novels from the library.',
      translation: 'Eu frequentemente pego romances emprestados na biblioteca.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Quem recebe o livro emprestado da biblioteca "borrows" it.'
    },
    {
      question: 'Leo sometimes ___ his games to his friends.',
      translation: 'Leo às vezes empresta seus jogos aos amigos.',
      answers: ['borrow', 'lends', 'lent', 'borrows'],
      correct: 1,
      fact: 'Leo entrega os jogos aos amigos; por isso, usamos “lends” no presente com he.'
    },
    {
      question: 'Last week, we ___ two chairs from our neighbor.',
      translation: 'Na semana passada, pegamos duas cadeiras emprestadas do nosso vizinho.',
      answers: ['borrow', 'lent', 'borrowed', 'lends'],
      correct: 2,
      fact: '“Borrow” é um verbo regular: seu passado é “borrowed”.'
    },
    {
      question: 'Ava ___ her notes to me yesterday.',
      translation: 'Ava me emprestou as anotações ontem.',
      answers: ['borrowed', 'lended', 'lends', 'lent'],
      correct: 3,
      fact: '“Lend” é um verbo irregular: seu passado é “lent”.'
    },
    {
      question: 'Did you ___ Maya’s blue jacket?',
      translation: 'Você pegou a jaqueta azul da Maya emprestada?',
      response: 'Yes, I did. I returned it this morning.',
      answers: ['lent', 'borrow', 'borrowed', 'lends'],
      correct: 1,
      fact: 'Após o auxiliar “did”, usamos o verbo na sua forma base: borrow.'
    },
    {
      question: 'Who ___ you this lovely scarf?',
      translation: 'Quem lhe emprestou este lindo cachecol?',
      response: 'My aunt lent it to me.',
      answers: ['borrowed', 'lend', 'lent', 'borrows'],
      correct: 2,
      fact: 'Quando a pergunta pergunta quem realizou a ação no passado, usamos diretamente “lent”.'
    },
    {
      question: 'Could I ___ your notes for a day?',
      translation: 'Eu poderia pegar suas anotações emprestadas por um dia?',
      response: 'Of course. Just bring them back tomorrow.',
      answers: ['lend', 'borrow', 'lent', 'lends'],
      correct: 1,
      fact: 'Quem pede para receber as anotações pede para borrow them.'
    },
    {
      question: 'My brother never ___ his clothes to anyone.',
      translation: 'Meu irmão nunca empresta suas roupas para ninguém.',
      answers: ['borrows', 'lends', 'lent', 'borrow'],
      correct: 1,
      fact: 'Como ele cede o objeto para terceiros (to anyone), usamos “lends” no presente.'
    },
    {
      question: 'Can you ___ me your umbrella, please?',
      translation: 'Você pode me emprestar seu guarda-chuva, por favor?',
      response: 'Sure, here you go.',
      answers: ['borrow', 'lend', 'borrowed', 'lends'],
      correct: 1,
      fact: 'Pedir a alguém para ceder algo a você exige o verbo “lend” (lend me).'
    },
    {
      question: 'She ___ fifty dollars from her sister yesterday.',
      translation: 'Ela pegou cinquenta dólares emprestados da irmã ontem.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 0,
      fact: 'Como ela recebeu o dinheiro (from her sister) no passado, usamos “borrowed”.'
    },

    // 11 a 20
    {
      question: 'The bank agreed to ___ them money for the new project.',
      translation: 'O banco concordou em emprestar dinheiro a eles para o novo projeto.',
      answers: ['borrow', 'lend', 'borrowed', 'lents'],
      correct: 1,
      fact: 'O banco cede o dinheiro (lend money to them).'
    },
    {
      question: 'He ___ my car last weekend to travel to the coast.',
      translation: 'Ele pegou meu carro emprestado no fim de semana passado para viajar até o litoral.',
      answers: ['lent', 'borrowed', 'lended', 'borrows'],
      correct: 1,
      fact: 'Ele usou o carro pertencente a outra pessoa; no passado usamos “borrowed”.'
    },
    {
      question: '___ you lend me your dictionary for five minutes?',
      translation: 'Você poderia me emprestar seu dicionário por cinco minutos?',
      response: 'Yes, no problem at all.',
      answers: ['Did', 'Could', 'Do', 'Were'],
      correct: 1,
      fact: '“Could” é o modal adequado para fazer pedidos educados no presente.'
    },
    {
      question: 'Students can ___ up to four books from the library.',
      translation: 'Os estudantes podem pegar até quatro livros emprestados da biblioteca.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Os estudantes retiram os livros da biblioteca (borrow from).'
    },
    {
      question: 'My neighbor kindly ___ me his ladder to fix the roof.',
      translation: 'Meu vizinho gentilmente me emprestou a escada dele para consertar o telhado.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'O vizinho cedeu o objeto dele (lent me).'
    },
    {
      question: 'Why did you ___ his bicycle without asking?',
      translation: 'Por que você pegou a bicicleta dele emprestada sem pedir?',
      response: 'Because I was in a big rush.',
      answers: ['borrowed', 'borrow', 'lent', 'lended'],
      correct: 1,
      fact: 'Após a partícula auxiliar “did”, o verbo permanece no infinitivo sem to: borrow.'
    },
    {
      question: 'I ___ my favorite lawnmower to Tom, but he hasn\'t returned it.',
      translation: 'Eu emprestei meu cortador de grama favorito para o Tom, mas ele não devolveu.',
      answers: ['borrowed', 'lended', 'lent', 'borrows'],
      correct: 2,
      fact: 'Ceder algo no passado usa a forma irregular “lent”.'
    },
    {
      question: 'She usually ___ headphones from her roommate.',
      translation: 'Ela geralmente pega fones de ouvido emprestados de sua colega de quarto.',
      answers: ['lends', 'borrows', 'lent', 'borrow'],
      correct: 1,
      fact: 'Com o sujeito “she” no presente para quem recebe o objeto, acrescenta-se -s: borrows.'
    },
    {
      question: 'Did the landlord ___ you the tools you needed?',
      translation: 'O senhorio lhe emprestou as ferramentas que você precisava?',
      response: 'Yes, he left them in the garage.',
      answers: ['lend', 'borrow', 'lent', 'borrowed'],
      correct: 0,
      fact: 'Perguntas com “did” exigem a forma base do verbo: lend.'
    },
    {
      question: 'I don\'t like to ___ money to people I barely know.',
      translation: 'Eu não gosto de emprestar dinheiro para pessoas que mal conheço.',
      answers: ['borrow', 'lend', 'lent', 'borrows'],
      correct: 1,
      fact: 'Ceder dinheiro para terceiros utiliza “lend money to”.'
    },

    // 21 a 30
    {
      question: 'He ___ some sugar from his neighbor to bake a cake.',
      translation: 'Ele pegou um pouco de açúcar emprestado da vizinha dele para assar um bolo.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Ele pegou o ingrediente de alguém no passado (from): borrowed.'
    },
    {
      question: 'Will you ___ me your camera for the trip?',
      translation: 'Você vai me emprestar sua câmera para a viagem?',
      response: 'Only if you promise to be careful with it.',
      answers: ['borrow', 'lend', 'lent', 'borrowed'],
      correct: 1,
      fact: 'Depois do auxiliar do futuro “will”, usamos o verbo na forma base: lend.'
    },
    {
      question: 'They ___ two tents from the club for their camping trip.',
      translation: 'Eles pegaram duas barracas emprestadas do clube para o acampamento.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 0,
      fact: 'Retirar ou pedir algo emprestado no passado usa “borrowed”.'
    },
    {
      question: 'My teacher ___ me a very helpful grammar guide.',
      translation: 'Meu professor me emprestou um guia de gramática muito útil.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'O professor cedeu o livro dele para o aluno: lent.'
    },
    {
      question: 'May I ___ your pen for a second to sign this document?',
      translation: 'Posso pegar sua caneta emprestada por um segundo para assinar este documento?',
      response: 'Certainly, here it is.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Ao pedir a permissão de usar algo de outra pessoa, usa-se “borrow”.'
    },
    {
      question: 'He promised he would ___ me his surfboard this weekend.',
      translation: 'Ele prometeu que me emprestaria sua prancha de surfe este fim de semana.',
      answers: ['borrow', 'lend', 'lent', 'borrowed'],
      correct: 1,
      fact: 'Após o verbo modal “would”, usamos a forma base: lend.'
    },
    {
      question: 'I ___ his coat because it was freezing outside.',
      translation: 'Eu peguei o casaco dele emprestado porque estava congelando lá fora.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Usar temporariamente algo alheio no passado exige “borrowed”.'
    },
    {
      question: 'Who ___ you those gorgeous earrings?',
      translation: 'Quem lhe emprestou esses brincos deslumbrantes?',
      response: 'My sister gave them to me for the event.',
      answers: ['borrowed', 'lent', 'lends', 'borrows'],
      correct: 1,
      fact: 'Perguntando pela pessoa que forneceu os brincos no passado: lent.'
    },
    {
      question: 'She doesn\'t like to ___ her personal items to anyone.',
      translation: 'Ela não gosta de emprestar seus itens pessoais a ninguém.',
      answers: ['borrow', 'lend', 'lent', 'borrows'],
      correct: 1,
      fact: 'O ato de ceder pertences usa o verbo “lend”.'
    },
    {
      question: 'Did you ___ those tools from your uncle\'s workshop?',
      translation: 'Você pegouquelas ferramentas emprestadas da oficina do seu tio?',
      response: 'Yes, he said I could keep them until Sunday.',
      answers: ['borrow', 'lend', 'borrowed', 'lent'],
      correct: 0,
      fact: 'Frase interrogativa com “did” exige a forma base “borrow”.'
    },

    // 31 a 40
    {
      question: 'The library will not ___ you any more books if you have late fees.',
      translation: 'A biblioteca não lhe emprestará mais livros se você tiver multas em atraso.',
      answers: ['borrow', 'lend', 'lent', 'borrows'],
      correct: 1,
      fact: 'A biblioteca cede os livros para os leitores: lend.'
    },
    {
      question: 'We ___ some camping equipment from our cousins last summer.',
      translation: 'Nós pegamos alguns equipamentos de acampamento emprestados dos nossos primos no verão passado.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Receber algo no passado (from) exige a forma regular “borrowed”.'
    },
    {
      question: 'Can I ___ your charging cable for a few minutes?',
      translation: 'Posso pegar seu cabo de carregar emprestado por alguns minutos?',
      response: 'Sure, plug it in over there.',
      answers: ['lend', 'borrow', 'lent', 'lends'],
      correct: 1,
      fact: 'A pessoa que deseja usar o cabo pede para “borrow”.'
    },
    {
      question: 'He generously ___ his apartment to us during our stay.',
      translation: 'Ele generosamente nos emprestou seu apartamento durante nossa estadia.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Ceder a propriedade para outros no passado usa o verbo irregular “lent”.'
    },
    {
      question: 'You shouldn\'t ___ money if you aren\'t sure you can pay it back.',
      translation: 'Você não deveria pegar dinheiro emprestado se não tem certeza se pode devolvê-lo.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Pegar fundos de alguém para si mesmo é “borrow money”.'
    },
    {
      question: 'The company ___ several laptops to remote workers last month.',
      translation: 'A empresa emprestou vários notebooks para trabalhadores remotos no mês passado.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'A empresa forneceu os notebooks para o uso dos funcionários: lent.'
    },
    {
      question: 'She ___ a high-end camera from her photo club.',
      translation: 'Ela pegou uma câmera de alta qualidade emprestada de seu clube de fotografia.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Ela retirou a câmera do clube (from): borrowed.'
    },
    {
      question: 'Could you please ___ me a helping hand with this heavy table?',
      translation: 'Você poderia, por favor, me dar (emprestar) uma ajuda com esta mesa pesada?',
      response: 'Of course, let me grab that side.',
      answers: ['borrow', 'lend', 'lent', 'borrows'],
      correct: 1,
      fact: 'A expressão “lend a hand” significa dar/estender uma ajuda a alguém.'
    },
    {
      question: 'Did he ___ your car to go to the supermarket?',
      translation: 'Ele pegou seu carro emprestado para ir ao supermercado?',
      response: 'Yes, he took it twenty minutes ago.',
      answers: ['borrow', 'lend', 'borrowed', 'lent'],
      correct: 0,
      fact: 'Com o auxiliar “did”, o verbo fica no infinitivo sem to: borrow.'
    },
    {
      question: 'My grandfather ___ me his antique watch for the graduation ceremony.',
      translation: 'Meu avô me emprestou seu relógio antigo para a cerimônia de graduação.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'O avô cedeu o relógio dele no passado: lent.'
    },

    // 41 a 50
    {
      question: 'I had to ___ an umbrella from the hotel reception.',
      translation: 'Eu tive que pegar um guarda-chuva emprestado na recepção do hotel.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Retirar um item para uso próprio usa “borrow”.'
    },
    {
      question: 'Will the museum ___ these ancient artifacts to other galleries?',
      translation: 'O museu emprestará estes artefatos antigos a outras galerias?',
      response: 'Yes, they have a international loan program.',
      answers: ['borrow', 'lend', 'lent', 'borrowed'],
      correct: 1,
      fact: 'O museu concede a posse temporária a outras entidades: lend.'
    },
    {
      question: 'They ___ a projector from the IT department yesterday.',
      translation: 'Eles pegaram um projetor emprestado do departamento de TI ontem.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Pegar emprestado no passado (from) utiliza a forma regular “borrowed”.'
    },
    {
      question: 'She ___ her favorite leather jacket to her sister.',
      translation: 'Ela emprestou sua jaqueta de couro favorita para a irmã dela.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Ação no passado de ceder algo a alguém (to her sister): lent.'
    },
    {
      question: 'How many books did you ___ from the local library?',
      translation: 'Quantos livros você pegou emprestados da biblioteca local?',
      response: 'I borrowed three novels.',
      answers: ['borrow', 'lend', 'borrowed', 'lent'],
      correct: 0,
      fact: 'Pergunta no passado com “did” requer o verbo na forma base: borrow.'
    },
    {
      question: 'My colleague ___ me his tablet while mine was being repaired.',
      translation: 'Meu colega me emprestou o tablet dele enquanto o meu estava sendo consertado.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Ele me forneceu o tablet dele no passado: lent.'
    },
    {
      question: 'I usually don\'t ___ my dresses to people who are careless.',
      translation: 'Eu geralmente não empresto meus vestidos para pessoas que são descuidadas.',
      answers: ['borrow', 'lend', 'lent', 'borrows'],
      correct: 1,
      fact: 'Ceder objetos para terceiros no presente: lend.'
    },
    {
      question: 'He ___ some money from his parents to buy a laptop.',
      translation: 'Ele pegou algum dinheiro emprestado dos pais dele para comprar um notebook.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Receber fundos no passado (from his parents) exige “borrowed”.'
    },
    {
      question: 'Can I ___ your calculator for the math test?',
      translation: 'Posso pegar sua calculadora emprestada para a prova de matemática?',
      response: 'Yes, but please bring it back right after.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Pedir algo para usar temporariamente: borrow.'
    },
    {
      question: 'She ___ her bike to her neighbor so he could go to work.',
      translation: 'Ela emprestou a bicicleta dela ao vizinho para que ele pudesse ir trabalhar.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Disponibilizar um bem para uso alheio no passado: lent.'
    },

    // 51 a 60
    {
      question: 'Why don\'t you ___ a suit from your father for the interview?',
      translation: 'Por que você não pega um terno emprestado do seu pai para a entrevista?',
      response: 'That\'s a great idea, we are the same size.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Pegar uma peça de roupa de outra pessoa (from) é “borrow”.'
    },
    {
      question: 'The bank wouldn\'t ___ him any more cash due to his bad credit.',
      translation: 'O banco não emprestaria a ele mais nenhum dinheiro devido ao seu crédito ruim.',
      answers: ['borrow', 'lend', 'lent', 'borrowed'],
      correct: 1,
      fact: 'Após o modal negativo “wouldn’t”, usa-se a forma base “lend”.'
    },
    {
      question: 'We ___ a high-pressure washer from our landlord last weekend.',
      translation: 'Nós pegamos uma lavadora de alta pressão emprestada do nosso senhorio no fim de semana passado.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Ação no passado de pegar algo emprestado de alguém: borrowed.'
    },
    {
      question: 'Who ___ you this excellent bicycle?',
      translation: 'Quem lhe emprestou esta bicicleta excelente?',
      response: 'My cousin lent it to me for the weekend.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Investigando quem cedeu a bicicleta no passado: lent.'
    },
    {
      question: 'Do you mind if I ___ your phone for a quick call?',
      translation: 'Você se importa se eu pegar seu telefone emprestado para uma ligação rápida?',
      response: 'Not at all, here you go.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Solicitar permissão para usar um objeto alheio: borrow.'
    },
    {
      question: 'I ___ my favorite tennis racket to Leo, and he broke a string.',
      translation: 'Eu emprestei minha raquete de tênis favorita para o Leo, e ele arrebentou uma corda.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Forma no passado do verbo ceder (lend $\rightarrow$ lent).'
    },
    {
      question: 'She never ___ books from the library; she prefers buying them.',
      translation: 'Ela nunca pega livros emprestados na biblioteca; ela prefere comprá-los.',
      answers: ['lends', 'borrows', 'lent', 'borrow'],
      correct: 1,
      fact: 'Ela não retira os livros (borrows) para si mesma.'
    },
    {
      question: 'Could you ___ me a couple of dollars for the vending machine?',
      translation: 'Você poderia me emprestar um par de dólares para a máquina de vendas?',
      response: 'Sure, I have some coins in my pocket.',
      answers: ['borrow', 'lend', 'lent', 'borrows'],
      correct: 1,
      fact: 'Pedindo para outra pessoa lhe conceder dinheiro: lend me.'
    },
    {
      question: 'Did she ___ the money from a private lender?',
      translation: 'Ela pegou o dinheiro emprestado de um credor privado?',
      response: 'No, she got a traditional bank loan.',
      answers: ['borrow', 'lend', 'borrowed', 'lent'],
      correct: 0,
      fact: 'A estrutura interrogativa com “did” exige a forma base “borrow”.'
    },
    {
      question: 'My parents ___ their beach house to our family friends.',
      translation: 'Meus pais emprestaram a casa de praia deles para nossos amigos da família.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Meus pais cederam o uso da propriedade no passado: lent.'
    },

    // 61 a 70
    {
      question: 'I had to ___ some winter clothes when I went to Canada.',
      translation: 'Eu tive que pegar algumas roupas de inverno emprestadas quando fui ao Canadá.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Após a estrutura “had to”, usa-se o verbo na forma base: borrow.'
    },
    {
      question: 'He promised to ___ me his old guitar once he buys a new one.',
      translation: 'Ele prometeu me emprestar sua violão antigo assim que comprar um novo.',
      answers: ['borrow', 'lend', 'lent', 'borrowed'],
      correct: 1,
      fact: 'Ele disponibilizará o instrumento para o amigo: lend.'
    },
    {
      question: 'We ___ a folding table from our neighbors for the dinner party.',
      translation: 'Nós pegamos uma mesa dobrável emprestada dos nossos vizinhos para o jantar.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Receber um objeto no passado (from our neighbors): borrowed.'
    },
    {
      question: 'She kindly ___ her notes to all the classmates who missed the lecture.',
      translation: 'Ela gentilmente emprestou suas anotações para todos os colegas que perderam a aula.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Ela cedeu o material dela para os estudantes: lent.'
    },
    {
      question: 'Why do you always ___ my clothes without asking me first?',
      translation: 'Por que você sempre pega minhas roupas emprestadas sem me perguntar primeiro?',
      response: 'Sorry, I will ask next time.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Uso da 2ª pessoa (you) no presente para pegar pertences alheios: borrow.'
    },
    {
      question: 'The university ___ specialized instruments to research students.',
      translation: 'A universidade empresta instrumentos especializados para estudantes de pesquisa.',
      answers: ['borrows', 'lends', 'lent', 'borrow'],
      correct: 1,
      fact: 'A universidade cede os equipamentos (lends) na 3ª pessoa do singular (it).'
    },
    {
      question: 'I ___ a suitcase from my friend because mine was broken.',
      translation: 'Eu peguei uma mala emprestada do meu amigo porque a minha estava quebrada.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Usar o objeto de outra pessoa no passado: borrowed.'
    },
    {
      question: 'Can your brother ___ us his van for the relocation?',
      translation: 'Seu irmão pode nos emprestar a van dele para a mudança?',
      response: 'Yes, he said he is free on Saturday.',
      answers: ['borrow', 'lend', 'lent', 'borrows'],
      correct: 1,
      fact: 'O irmão cedendo o veículo dele para nós é “lend us”.'
    },
    {
      question: 'Did you ___ any money from your brother last week?',
      translation: 'Você pegou algum dinheiro emprestado do seu irmão na semana passada?',
      response: 'No, I didn\'t need any.',
      answers: ['borrow', 'lend', 'borrowed', 'lent'],
      correct: 0,
      fact: 'Pergunta no passado com o auxiliar “did” no infinitivo: borrow.'
    },
    {
      question: 'My uncle ___ me his fishing gear for the camping weekend.',
      translation: 'Meu tio me emprestou seu equipamento de pesca para o fim de semana de acampamento.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'O tio entregou o equipamento no passado: lent.'
    },

    // 71 a 80
    {
      question: 'Is it okay if I ___ your charger for half an hour?',
      translation: 'Está tudo bem se eu pegar seu carregador emprestado por meia hora?',
      response: 'Yes, of course, help yourself.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Solicitar o uso do carregador de outra pessoa: borrow.'
    },
    {
      question: 'I will never ___ my car to anyone who drives recklessly.',
      translation: 'Eu nunca vou emprestar meu carro para ninguém que dirija de forma imprudente.',
      answers: ['borrow', 'lend', 'lent', 'borrowed'],
      correct: 1,
      fact: 'Ceder um bem próprio no futuro com “will” exige a forma base “lend”.'
    },
    {
      question: 'She ___ a rare comic book from a local collector.',
      translation: 'Ela pegou uma revista em quadrinhos rara emprestada de um colecionador local.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Ação de obter algo no passado (from a collector): borrowed.'
    },
    {
      question: 'He ___ his expensive suit to his brother for the wedding.',
      translation: 'Ele emprestou seu terno caro ao irmão dele para o casamento.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Ele cedeu o terno para o irmão no passado: lent.'
    },
    {
      question: 'You should not ___ things from people without returning them promptly.',
      translation: 'Você não deveria pegar coisas emprestadas das pessoas sem devolvê-las prontamente.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Após “should not”, usamos a forma base para a ação de pegar emprestado: borrow.'
    },
    {
      question: 'The company ___ its facilities to local artists on weekends.',
      translation: 'A empresa empresta suas instalações para artistas locais nos fins de semana.',
      answers: ['borrows', 'lends', 'lent', 'borrow'],
      correct: 1,
      fact: 'A empresa (it) cede o espaço no presente: lends.'
    },
    {
      question: 'I ___ a bicycle from the hotel to explore the seaside town.',
      translation: 'Eu peguei uma bicicleta emprestada do hotel para explorar a cidade litorânea.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Pegar uma bicicleta no passado para uso temporário: borrowed.'
    },
    {
      question: 'Could you ___ me your car keys for just a moment?',
      translation: 'Você poderia me emprestar as chaves do seu carro por apenas um momento?',
      response: 'Here they are, drive safely.',
      answers: ['borrow', 'lend', 'lent', 'borrows'],
      correct: 1,
      fact: 'Pedir que outra pessoa ceda as chaves a você: lend me.'
    },
    {
      question: 'Did they ___ any equipment from the science laboratory?',
      translation: 'Eles pegaram algum equipamento emprestado do laboratório de ciências?',
      response: 'Yes, they signed the checkout log.',
      answers: ['borrow', 'lend', 'borrowed', 'lent'],
      correct: 0,
      fact: 'Pergunta no passado com “did” requer “borrow”.'
    },
    {
      question: 'Her aunt ___ her a gold necklace for the ball.',
      translation: 'A tia dela lhe emprestou um colar de ouro para o baile.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'A tia cedeu o colar no passado: lent.'
    },

    // 81 a 90
    {
      question: 'May I ___ this book from you until next Friday?',
      translation: 'Posso pegar este livro emprestado de você até a próxima sexta-feira?',
      response: 'Yes, take your time reading it.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Pedir autorização para retirar o livro (from you): borrow.'
    },
    {
      question: 'He wouldn\'t ___ his lawnmower to his neighbor because he was careless.',
      translation: 'Ele não emprestaria seu cortador de grama para o vizinho porque ele era descuidado.',
      answers: ['borrow', 'lend', 'lent', 'borrowed'],
      correct: 1,
      fact: 'Negar-se a ceder um pertence: lend.'
    },
    {
      question: 'We ___ a video camera from the media department for our project.',
      translation: 'Nós pegamos uma câmera de vídeo emprestada do departamento de mídia para nosso projeto.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Nós retiramos a câmera no passado: borrowed.'
    },
    {
      question: 'The professor ___ his personal notes to the struggling student.',
      translation: 'O professor emprestou suas anotações pessoais ao aluno com dificuldades.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'O professor forneceu suas anotações no passado: lent.'
    },
    {
      question: 'You can ___ my coat if you are feeling cold.',
      translation: 'Você pode pegar meu casaco emprestado se estiver sentindo frio.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Permitir que outra pessoa pegue e use seu casaco: borrow my coat.'
    },
    {
      question: 'She ___ her favorite cookbook to her friend who loves baking.',
      translation: 'Ela emprestou seu livro de receitas favorito para a amiga que ama assar.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Ela cedeu o livro de receitas dela no passado: lent.'
    },
    {
      question: 'I had to ___ a winter hat from my brother yesterday.',
      translation: 'Eu tive que pegar um chapéu de inverno emprestado do meu irmão ontem.',
      answers: ['lent', 'lended', 'borrow', 'borrows'],
      correct: 2,
      fact: 'A estrutura “had to” exige o verbo na forma base “borrow”.'
    },
    {
      question: 'Will your friend ___ us his speaker for the party tonight?',
      translation: 'Seu amigo vai nos emprestar a caixa de som dele para a festa de hoje à noite?',
      response: 'Yes, he said we can pick it up at 6 PM.',
      answers: ['borrow', 'lend', 'lent', 'borrows'],
      correct: 1,
      fact: 'A pergunta sobre ceder a caixa de som no futuro usa “lend”.'
    },
    {
      question: 'Did you ___ this money from the bank or a friend?',
      translation: 'Você pegou esse dinheiro emprestado do banco ou de um amigo?',
      response: 'I borrowed it from my brother.',
      answers: ['borrow', 'lend', 'borrowed', 'lent'],
      correct: 0,
      fact: 'Em perguntas com o auxiliar “did”, usa-se “borrow”.'
    },
    {
      question: 'The librarian ___ me a very rare historical document.',
      translation: 'O bibliotecário me emprestou um documento histórico muito raro.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'O bibliotecário disponibilizou o documento para consulta: lent.'
    },

    // 91 a 100
    {
      question: 'I need to ___ a tie from someone for tonight\'s dinner.',
      translation: 'Eu preciso pegar uma gravata emprestada de alguém para o jantar de hoje à noite.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Necessidade de obter um acessório de outra pessoa: borrow.'
    },
    {
      question: 'They will not ___ their lawnmower to anyone who doesn\'t know how to use it.',
      translation: 'Eles não vão emprestar o cortador de grama deles para ninguém que não saiba usá-lo.',
      answers: ['borrow', 'lend', 'lent', 'borrowed'],
      correct: 1,
      fact: 'Forma no futuro negativo “will not” para ceder um objeto: lend.'
    },
    {
      question: 'She ___ three dresses from her sister for the vacation.',
      translation: 'Ela pegou três vestidos emprestados da irmã dela para as férias.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Pegar peças de roupa da irmã no passado (from): borrowed.'
    },
    {
      question: 'He ___ his truck to us so we could move our furniture.',
      translation: 'Ele nos emprestou o caminhão dele para que pudéssemos mudar nossos móveis.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'Ele disponibilizou o veículo dele no passado: lent.'
    },
    {
      question: 'Can I ___ your pencil sharpener for a moment?',
      translation: 'Posso pegar seu apontador de lápis emprestado por um momento?',
      response: 'Sure, here you go.',
      answers: ['lend', 'borrow', 'lent', 'borrows'],
      correct: 1,
      fact: 'Pedir permissão para usar temporariamente um pertence alheio: borrow.'
    },
    {
      question: 'The neighbor ___ us a ladder to trim the tall trees.',
      translation: 'O vizinho nos emprestou uma escada para podar as árvores altas.',
      answers: ['borrowed', 'lent', 'lended', 'borrows'],
      correct: 1,
      fact: 'O vizinho cedeu a ferramenta no passado: lent.'
    },
    {
      question: 'Did you ___ that blue sweater from Sarah\'s closet?',
      translation: 'Você pegou aquele suéter azul emprestado do armário da Sarah?',
      response: 'Yes, she said I could wear it.',
      answers: ['borrow', 'lend', 'borrowed', 'lent'],
      correct: 0,
      fact: 'Perguntas no passado iniciadas por “did” pedem o verbo “borrow”.'
    },
    {
      question: 'She usually ___ her acoustic guitar to her music students.',
      translation: 'Ela geralmente empresta seu violão acústico para seus alunos de música.',
      answers: ['borrows', 'lends', 'lent', 'borrow'],
      correct: 1,
      fact: 'Ceder o instrumento no presente (she) exige “lends”.'
    },
    {
      question: 'We ___ a folding table from the community center last night.',
      translation: 'Nós pegamos uma mesa dobrável emprestada do centro comunitário ontem à noite.',
      answers: ['lent', 'lended', 'borrowed', 'borrows'],
      correct: 2,
      fact: 'Retirar ou obter um objeto de uma instituição no passado: borrowed.'
    },
    {
      question: 'He promised he would ___ me his ski gear for the weekend trip.',
      translation: 'Ele prometeu que me emprestaria seu equipamento de esqui para a viagem de fim de semana.',
      answers: ['borrow', 'lend', 'lent', 'borrowed'],
      correct: 1,
      fact: 'Prometer ceder um item a alguém usa o verbo “lend”.'
    }
  ]
}