export default {
    id: 'present-continuous',
    label: 'Present Continuous',
    description: 'Actions happening now',
    titleFirst: 'Present',
    titleSecond: 'Continuous',
    grammarHelp: [
      'Use <strong>am / is / are + verbo com -ing</strong> para ações acontecendo no momento da fala ou planos futuros.',
      '<strong>I</strong> usa am; <strong>he, she, it</strong> usam is; <strong>you, we, they</strong> usam are.',
      'Na <strong>negativa</strong>, acrescente <strong>not</strong> após o verbo to be (am not, isn’t, aren’t).',
      'Na <strong>interrogativa</strong>, coloque o verbo <strong>to be antes do sujeito</strong> (Is she...? Are they...?).'
    ],
    questions: [
      // 1 a 10
      {
        infinitive: 'to read',
        question: 'Right now, Sofia ___ a book.',
        translation: 'Agora, Sofia está lendo um livro.',
        answers: ['are reading', 'is reading', 'is read', 'is readed'],
        correct: 1,
        fact: 'Com “Sofia” (she) usamos is, seguido do verbo com -ing: is reading.'
      },
      {
        infinitive: 'to cook',
        question: 'They ___ dinner at the moment.',
        translation: 'Eles estão preparando o jantar neste momento.',
        answers: ['is cooking', 'are cooking', 'are cookking', 'are cook'],
        correct: 1,
        fact: 'Com “they” usamos are. Depois, acrescentamos -ing ao verbo: are cooking.'
      },
      {
        infinitive: 'to listen',
        question: 'I ___ to music right now.',
        translation: 'Estou ouvindo música agora.',
        answers: ['am listening', 'is listening', 'am listenning', 'am listen'],
        correct: 0,
        fact: 'Com “I” usamos am. “Listen” recebe -ing sem dobrar o n: am listening.'
      },
      {
        infinitive: 'to drive',
        question: 'He ___ to work today.',
        translation: 'Ele está dirigindo para o trabalho hoje.',
        answers: ['are driving', 'is driving', 'is driveing', 'is drive'],
        correct: 1,
        fact: 'Com “he” usamos is. O e final de “drive” cai antes de -ing: driving.'
      },
      {
        infinitive: 'to wait',
        question: 'We ___ for the bus.',
        translation: 'Estamos esperando o ônibus.',
        answers: ['is waiting', 'are waiting', 'are waitting', 'are wait'],
        correct: 1,
        fact: 'Com “we” usamos are e acrescentamos -ing a “wait”: are waiting.'
      },
      {
        infinitive: 'to study',
        question: 'Emma ___ for her final exam right now.',
        translation: 'Emma está estudando para a prova final dela agora.',
        answers: ['is studying', 'is studing', 'are studying', 'is study'],
        correct: 0,
        fact: 'Com “Emma” (she) usamos is. Verbos terminados em y mantêm o y ao receber -ing: studying.'
      },
      {
        infinitive: 'to run',
        question: 'Look! The athletes ___ in the park.',
        translation: 'Olhe! Os atletas estão correndo no parque.',
        answers: ['is running', 'are runing', 'are running', 'are run'],
        correct: 2,
        fact: '“The athletes” é plural (they), usando are. “Run” termina em CVC tônico, logo dobra-se o n: running.'
      },
      {
        infinitive: 'to write',
        question: 'The author ___ a new chapter of the book.',
        translation: 'O autor está escrevendo um novo capítulo do livro.',
        answers: ['is writing', 'is writeing', 'are writing', 'is writting'],
        correct: 0,
        fact: 'Com “the author” (he/she) usamos is. O e final de “write” é removido antes de -ing: writing.'
      },
      {
        infinitive: 'to talk',
        question: '___ you talking on the phone with your manager?',
        translation: 'Você está falando no telefone com o seu gerente?',
        response: 'Yes, I am. We are discussing the project.',
        answers: ['Is', 'Do', 'Are', 'Am'],
        correct: 2,
        fact: 'Em perguntas direcionadas ao sujeito “you”, iniciamos com a forma “Are”.'
      },
      {
        infinitive: 'to watch',
        question: 'He ___ not watching TV, he is reading.',
        translation: 'Ele não está assistindo à TV, ele está lendo.',
        answers: ['is', 'are', 'does', 'am'],
        correct: 0,
        fact: 'A negação na terceira pessoa do singular usa “is not” (ou isn’t).'
      },

      // 11 a 20
      {
        infinitive: 'to prepare',
        question: 'The team ___ a presentation for tomorrow.',
        translation: 'A equipe está preparando uma apresentação para amanhã.',
        answers: ['is preparing', 'are prepareing', 'is prepareing', 'is preparring'],
        correct: 0,
        fact: '“The team” (singular) exige is. Remove-se a letra e final antes de adicionar -ing: preparing.'
      },
      {
        infinitive: 'to swim',
        question: 'The kids ___ in the pool right now.',
        translation: 'As crianças estão nadando na piscina agora.',
        answers: ['is swimming', 'are swiming', 'are swimming', 'are swim'],
        correct: 2,
        fact: '“The kids” está no plural (they) -> are. “Swim” é CVC, então dobramos o m: swimming.'
      },
      {
        infinitive: 'to work',
        question: 'I ___ on a very important project this week.',
        translation: 'Eu estou trabalhando em um projeto muito importante esta semana.',
        answers: ['is working', 'am working', 'am workking', 'are working'],
        correct: 1,
        fact: 'O pronome “I” requer am. Acrescenta-se -ing diretamente a “work”: am working.'
      },
      {
        infinitive: 'to rain',
        question: 'Look outside! It ___ heavily right now.',
        translation: 'Olhe lá fora! Está chovendo forte agora.',
        answers: ['is raining', 'are raining', 'is rainning', 'is rain'],
        correct: 0,
        fact: 'O pronome “it” usa is. Em “rain” temos duas vogais antes do n, então não dobramos o n: raining.'
      },
      {
        infinitive: 'to travel',
        question: '___ they traveling to London next weekend?',
        translation: 'Eles estão viajando para Londres no próximo fim de semana?',
        response: 'Yes, they are taking an early flight.',
        answers: ['Is', 'Do', 'Are', 'Does'],
        correct: 2,
        fact: 'Perguntas com o pronome “they” no Present Continuous começam com “Are”.'
      },
      {
        infinitive: 'to make',
        question: 'She ___ a delicious fruit smoothie for breakfast.',
        translation: 'Ela está fazendo uma vitamina de frutas deliciosa para o café da manhã.',
        answers: ['is makeing', 'is making', 'are making', 'is makking'],
        correct: 1,
        fact: 'Com “she” usamos is. Removemos a vogal e final antes de acrescentar -ing: making.'
      },
      {
        infinitive: 'to plan',
        question: 'We ___ a surprise party for our colleague.',
        translation: 'Nós estamos planejando uma festa surpresa para nossa colega.',
        answers: ['are planing', 'are planning', 'is planning', 'are planering'],
        correct: 1,
        fact: 'Com “we” usamos are. O verbo “plan” é de uma sílaba CVC, por isso dobramos o n: planning.'
      },
      {
        infinitive: 'to sleep',
        question: 'The baby ___ peacefully in the bedroom.',
        translation: 'O bebê está dormindo tranquilamente no quarto.',
        answers: ['is sleeping', 'are sleeping', 'is sleeping', 'is sleep'],
        correct: 0,
        fact: '“The baby” (he/she/it) utiliza is. O verbo “sleep” recebe -ing normalmente: is sleeping.'
      },
      {
        infinitive: 'to clean',
        question: '___ she cleaning the house at the moment?',
        translation: 'Ela está limpando a casa no momento?',
        response: 'No, she is resting in the living room.',
        answers: ['Are', 'Is', 'Does', 'Do'],
        correct: 1,
        fact: 'Perguntas com “she” no Present Continuous iniciam com a forma “Is”.'
      },
      {
        infinitive: 'to practice',
        question: 'The musicians ___ for their upcoming concert.',
        translation: 'Os músicos estão praticando para o próximo show.',
        answers: ['is practicing', 'are practiceing', 'are practicing', 'are practiccing'],
        correct: 2,
        fact: '“The musicians” (they) exige are. O e final de “practice” é omitido ao pôr -ing: practicing.'
      },

      // 21 a 30
      {
        infinitive: 'to fix',
        question: 'The technician ___ the office printer right now.',
        translation: 'O técnico está consertando a impressora do escritório agora.',
        answers: ['is fixing', 'is fixxing', 'are fixing', 'is fix'],
        correct: 0,
        fact: 'Com “the technician” (he/she) usamos is. A letra x nunca é dobrada em inglês: fixing.'
      },
      {
        infinitive: 'to lie',
        question: 'He ___ on the couch reading a magazine.',
        translation: 'Ele está deitado no sofá lendo uma revista.',
        answers: ['is lieing', 'is lying', 'are lying', 'is lyng'],
        correct: 1,
        fact: 'Verbos terminados em -ie (como lie) trocam o -ie por -y antes de receber -ing: lying.'
      },
      {
        infinitive: 'to stop',
        question: 'The train ___ at the downtown station.',
        translation: 'O trem está parando na estação do centro.',
        answers: ['is stoping', 'is stopping', 'are stopping', 'is stop'],
        correct: 1,
        fact: 'Com “the train” (it) usamos is. “Stop” é um verbo CVC de uma sílaba, dobrando o p: stopping.'
      },
      {
        infinitive: 'to try',
        question: 'I ___ to solve this difficult problem.',
        translation: 'Eu estou tentando resolver este problema difícil.',
        answers: ['am trying', 'am tring', 'is trying', 'are trying'],
        correct: 0,
        fact: 'Com “I” usamos am. Verbos em y mantêm a letra ao juntar -ing: am trying.'
      },
      {
        infinitive: 'to carry',
        question: 'They ___ heavy boxes to the truck.',
        translation: 'Eles estão carregando caixas pesadas para o caminhão.',
        answers: ['is carrying', 'are carring', 'are carrying', 'are carrying'],
        correct: 2,
        fact: 'Com “they” usamos are. O verbo “carry” mantém o y antes de -ing: carrying.'
      },
      {
        infinitive: 'to fly',
        question: '___ the birds flying south for the winter?',
        translation: 'Os passarinhos estão voando para o sul no inverno?',
        response: 'Yes, they migrate every autumn.',
        answers: ['Is', 'Do', 'Are', 'Does'],
        correct: 2,
        fact: '“Birds” está no plural (they), exigindo a forma interrogativa “Are”.'
      },
      {
        infinitive: 'to play',
        question: 'My children ___ video games in the living room.',
        translation: 'Meus filhos estão jogando videogame na sala de estar.',
        answers: ['is playing', 'are plaing', 'are playing', 'are playing'],
        correct: 2,
        fact: '“My children” (they) leva are. Adiciona-se -ing diretamente a “play”: playing.'
      },
      {
        infinitive: 'to move',
        question: 'We ___ to a new apartment next month.',
        translation: 'Nós estamos nos mudando para um apartamento novo no próximo mês.',
        answers: ['are moveing', 'are moving', 'is moving', 'are movving'],
        correct: 1,
        fact: 'Com “we” usamos are. Corta-se a letra e final do verbo “move”: moving.'
      },
      {
        infinitive: 'to eat',
        question: 'Why ___ you eating your lunch so fast?',
        translation: 'Por que você está comendo seu almoço tão rápido?',
        response: 'Because I have an urgent meeting in ten minutes.',
        answers: ['is', 'are', 'do', 'am'],
        correct: 1,
        fact: 'Em frases interrogativas com “you”, o verbo to be correto é “are”.'
      },
      {
        infinitive: 'to dance',
        question: 'Look at them! They ___ salsa together.',
        translation: 'Olhe para eles! Eles estão dançando salsa juntos.',
        answers: ['are danceing', 'are dancing', 'is dancing', 'are danccing'],
        correct: 1,
        fact: 'Com “they” usamos are. Remove-se a letra e final do verbo “dance”: dancing.'
      },

      // 31 a 40
      {
        infinitive: 'to listen',
        question: 'She ___ not listening to what the speaker says.',
        translation: 'Ela não está ouvindo o que o palestrante diz.',
        answers: ['are', 'is', 'does', 'am'],
        correct: 1,
        fact: 'Com “she”, a forma negativa do verbo to be é “is not” (isn’t).'
      },
      {
        infinitive: 'to open',
        question: 'The shop manager ___ the new store today.',
        translation: 'O gerente da loja está abrindo a nova loja hoje.',
        answers: ['is openning', 'is opening', 'are opening', 'is open'],
        correct: 1,
        fact: '“Open” tem a tônica na primeira sílaba (O-pen), portanto não dobras o n: opening.'
      },
      {
        infinitive: 'to wear',
        question: 'He ___ a blue jacket for the interview.',
        translation: 'Ele está vestindo uma jaqueta azul para a entrevista.',
        answers: ['is wearing', 'are wearing', 'is weering', 'is wear'],
        correct: 0,
        fact: 'Com “he” usamos is. Acrescenta-se -ing a “wear” sem alterações: wearing.'
      },
      {
        infinitive: 'to discuss',
        question: 'The managers ___ the new project budget.',
        translation: 'Os gerentes estão discutindo o novo orçamento do projeto.',
        answers: ['is discussing', 'are discussing', 'are discussing', 'are discuss'],
        correct: 2,
        fact: '“The managers” (they) leva are. Adiciona-se -ing ao verbo: discussing.'
      },
      {
        infinitive: 'to sit',
        question: 'She ___ near the window to get more light.',
        translation: 'Ela está sentando perto da janela para pegar mais luz.',
        answers: ['is siting', 'is sitting', 'are sitting', 'is siteing'],
        correct: 1,
        fact: 'Com “she” usamos is. “Sit” é um verbo CVC de uma sílaba, dobrando o t: sitting.'
      },
      {
        infinitive: 'to learn',
        question: '___ you learning how to code in Python?',
        translation: 'Você está aprendendo a programar em Python?',
        response: 'Yes, I take online classes every evening.',
        answers: ['Are', 'Is', 'Do', 'Am'],
        correct: 0,
        fact: 'Para fazer perguntas com o sujeito “you” no Present Continuous, usamos “Are”.'
      },
      {
        infinitive: 'to die',
        question: 'The flowers ___ because of the heat.',
        translation: 'As flores estão morrendo devido ao calor.',
        answers: ['is dying', 'are dieing', 'are dying', 'are dyling'],
        correct: 2,
        fact: '“Flowers” (they) usa are. Verbos em -ie trocam essa terminação por -y + ing: dying.'
      },
      {
        infinitive: 'to build',
        question: 'They ___ a new bridge across the river.',
        translation: 'Eles estão construindo uma ponte nova sobre o rio.',
        answers: ['are building', 'is building', 'are buildding', 'are build'],
        correct: 0,
        fact: 'Com o pronome “they” utilizamos are. Adiciona-se -ing normalmente: building.'
      },
      {
        infinitive: 'to put',
        question: 'He ___ the documents into his briefcase.',
        translation: 'Ele está colocando os documentos em sua pasta.',
        answers: ['is puting', 'is putting', 'are putting', 'is put'],
        correct: 1,
        fact: 'Com “he” usamos is. O verbo “put” segue a regra CVC e dobra a consoante: putting.'
      },
      {
        infinitive: 'to perform',
        question: 'The actor ___ on stage right now.',
        translation: 'O ator está se apresentando no palco agora.',
        answers: ['is performing', 'are performing', 'is performming', 'is perform'],
        correct: 0,
        fact: '“The actor” (he) utiliza o auxiliar is. Adiciona-se o sufixo -ing ao verbo: performing.'
      },

      // 41 a 50
      {
        infinitive: 'to smile',
        question: 'Look! She ___ at the camera.',
        translation: 'Olhe! Ela está sorrindo para a câmera.',
        answers: ['is smileing', 'is smiling', 'are smiling', 'is smilling'],
        correct: 1,
        fact: 'Com “she” usamos is. Remove-se o e final do verbo “smile”: smiling.'
      },
      {
        infinitive: 'to shop',
        question: 'We ___ for groceries at the local supermarket.',
        translation: 'Nós estamos fazendo compras no supermercado local.',
        answers: ['are shoping', 'are shopping', 'is shopping', 'are shop'],
        correct: 1,
        fact: 'Com “we” usamos are. “Shop” é CVC de uma sílaba, dobrando o p: shopping.'
      },
      {
        infinitive: 'to speak',
        question: '___ the presenter speaking clearly enough?',
        translation: 'O apresentador está falando de forma clara o suficiente?',
        response: 'Yes, everyone can understand him well.',
        answers: ['Are', 'Is', 'Does', 'Do'],
        correct: 1,
        fact: '“The presenter” (he/she) exige a forma interrogativa “Is”.'
      },
      {
        infinitive: 'to cut',
        question: 'The chef ___ the fresh vegetables into pieces.',
        translation: 'O chef está cortando os vegetais frescos em pedaços.',
        answers: ['is cuting', 'is cutting', 'are cutting', 'is cut'],
        correct: 1,
        fact: '“The chef” (he/she) exige is. Verbo CVC “cut” dobra a consoante t: cutting.'
      },
      {
        infinitive: 'to organize',
        question: 'I ___ my office desk right now.',
        translation: 'Eu estou organizando minha mesa do escritório agora.',
        answers: ['am organizeing', 'am organizing', 'is organizing', 'are organizing'],
        correct: 1,
        fact: 'Com “I” usamos am. O e final de “organize” é retirado antes de -ing: organizing.'
      },
      {
        infinitive: 'to change',
        question: 'The weather ___ very quickly today.',
        translation: 'O tempo está mudando muito rapidamente hoje.',
        answers: ['is changeing', 'is changing', 'are changing', 'is changging'],
        correct: 1,
        fact: '“The weather” (it) usa is. O e final é descartado ao juntar -ing: changing.'
      },
      {
        infinitive: 'to win',
        question: 'Our local team ___ the football match!',
        translation: 'Nosso time local está ganhando a partida de futebol!',
        answers: ['is wining', 'is winning', 'are winning', 'is win'],
        correct: 1,
        fact: '“Our team” (it) requer is. “Win” é um verbo CVC curto, dobrando o n: winning.'
      },
      {
        infinitive: 'to leave',
        question: 'Hurry up! The bus ___ right now.',
        translation: 'Apresse-se! O ônibus está partindo agora.',
        answers: ['is leaveing', 'is leaving', 'are leaving', 'is leavving'],
        correct: 1,
        fact: 'Com “the bus” (it) usamos is. O e final cai para adicionar -ing: leaving.'
      },
      {
        infinitive: 'to pay',
        question: 'He ___ for the drinks with his credit card.',
        translation: 'Ele está pagando pelas bebidas com seu cartão de crédito.',
        answers: ['is paying', 'is paing', 'are paying', 'is paying'],
        correct: 0,
        fact: 'Com “he” usamos is. Verbos terminados em vogal + y mantêm o y + ing: paying.'
      },
      {
        infinitive: 'to complain',
        question: 'They ___ about the delay in the service.',
        translation: 'Eles estão se queixando sobre o atraso no serviço.',
        answers: ['is complaining', 'are complaining', 'are complainning', 'are complain'],
        correct: 1,
        fact: 'Com o pronome “they” usamos are. Adiciona-se -ing a “complain”: complaining.'
      },

      // 51 a 60
      {
        infinitive: 'to show',
        question: 'The guide ___ us the historical paintings.',
        translation: 'O guia está nos mostrando as pinturas históricas.',
        answers: ['is showing', 'are showing', 'is showwing', 'is show'],
        correct: 0,
        fact: '“The guide” leva o auxiliar is. Adiciona-se -ing ao verbo base: showing.'
      },
      {
        infinitive: 'to begin',
        question: 'The movie ___ right now, turn off your phone.',
        translation: 'O filme está começando agora, desligue seu telefone.',
        answers: ['is begining', 'is beginning', 'are beginning', 'is begin'],
        correct: 1,
        fact: '“The movie” (it) exige is. “Begin” tem tônica na última sílaba (be-GIN) CVC, dobrando o n: beginning.'
      },
      {
        infinitive: 'to paint',
        question: 'She ___ the kitchen walls light gray.',
        translation: 'Ela está pintando as paredes da cozinha de cinza claro.',
        answers: ['is painting', 'are painting', 'is paintting', 'is paint'],
        correct: 0,
        fact: 'Com “she” usamos is. O verbo “paint” recebe -ing normalmente: painting.'
      },
      {
        infinitive: 'to ask',
        question: '___ you asking for additional information?',
        translation: 'Você está pedindo informações adicionais?',
        response: 'Yes, I need more details about the contract.',
        answers: ['Is', 'Are', 'Do', 'Am'],
        correct: 1,
        fact: 'Formas interrogativas direcionadas ao sujeito “you” utilizam “Are”.'
      },
      {
        infinitive: 'to try',
        question: 'The company ___ to expand its operations.',
        translation: 'A empresa está tentando expandir suas operações.',
        answers: ['is trying', 'are trying', 'is tring', 'is trying'],
        correct: 0,
        fact: '“The company” (it) usa is. Manter o y antes de -ing: is trying.'
      },
      {
        infinitive: 'to get',
        question: 'It ___ darker outside as the sun sets.',
        translation: 'Está ficando mais escuro lá fora enquanto o sol se põe.',
        answers: ['is geting', 'is getting', 'are getting', 'is get'],
        correct: 1,
        fact: 'Com “it” utilizamos is. “Get” é verbo de uma sílaba CVC, dobrando a consoante t: getting.'
      },
      {
        infinitive: 'to stay',
        question: 'We ___ at a very comfortable hotel near the beach.',
        translation: 'Nós estamos ficando em um hotel muito confortável perto da praia.',
        answers: ['are staing', 'are staying', 'is staying', 'are staying'],
        correct: 1,
        fact: 'Com “we” usamos are. Manter o y e acrescentar -ing: staying.'
      },
      {
        infinitive: 'to travel',
        question: 'My boss ___ to Japan for a business summit.',
        translation: 'Meu chefe está viajando para o Japão para uma cúpula de negócios.',
        answers: ['is traveling', 'are traveling', 'is travelling', 'is travel'],
        correct: 0,
        fact: '“My boss” usa is. No inglês americano, “traveling” tem apenas um l; ambas são corretas, mas '
             + '“is traveling” é padrão.'
      },
      {
        infinitive: 'to tie',
        question: 'He ___ his shoes before going for a jog.',
        translation: 'Ele está amarrando os sapatos antes de sair para correr.',
        answers: ['is tieing', 'is tying', 'are tying', 'is tyng'],
        correct: 1,
        fact: 'Verbos terminados em -ie trocam essa terminação por -y + ing: tying.'
      },
      {
        infinitive: 'to drink',
        question: '___ she drinking tea or herbal tea?',
        translation: 'Ela está bebendo chá ou chá de ervas?',
        response: 'She is drinking herbal tea.',
        answers: ['Are', 'Is', 'Does', 'Do'],
        correct: 1,
        fact: 'Perguntas com “she” no tempo contínuo iniciam com o verbo “Is”.'
      },

      // 61 a 70
      {
        infinitive: 'to forget',
        question: 'I hope I ___ not forgetting anything important.',
        translation: 'Espero não estar esquecendo nada importante.',
        answers: ['are', 'am', 'is', 'do'],
        correct: 1,
        fact: 'Com o pronome “I” utilizamos a forma verbal “am”.'
      },
      {
        infinitive: 'to call',
        question: 'The receptionist ___ the next patient now.',
        translation: 'A recepcionista está chamando o próximo paciente agora.',
        answers: ['is calling', 'are calling', 'is caling', 'is call'],
        correct: 0,
        fact: '“The receptionist” (he/she) exige is. Acrescenta-se -ing a “call”: calling.'
      },
      {
        infinitive: 'to drive',
        question: '___ they driving home together tonight?',
        translation: 'Eles estão dirigindo para casa juntos hoje à noite?',
        response: 'No, they are taking separate cars.',
        answers: ['Is', 'Are', 'Do', 'Does'],
        correct: 1,
        fact: 'Para o sujeito “they” na forma interrogativa, a frase começa com “Are”.'
      },
      {
        infinitive: 'to build',
        question: 'The worker ___ a wooden fence in the garden.',
        translation: 'O trabalhador está construindo uma cerca de madeira no jardim.',
        answers: ['is building', 'are building', 'is buildding', 'is build'],
        correct: 0,
        fact: '“The worker” (he/she) usa o verbo auxiliar is: is building.'
      },
      {
        infinitive: 'to look',
        question: 'We ___ for a place to park the car.',
        translation: 'Nós estamos procurando um lugar para estacionar o carro.',
        answers: ['are looking', 'is looking', 'are lookking', 'are look'],
        correct: 0,
        fact: 'Com “we” usa-se o auxiliar are + verbo com -ing: looking.'
      },
      {
        infinitive: 'to explain',
        question: 'The teacher ___ the grammar rule once more.',
        translation: 'O professor está explicando a regra gramatical mais uma vez.',
        answers: ['is explaining', 'are explaining', 'is explainning', 'is explain'],
        correct: 0,
        fact: 'Com “the teacher” (he/she) usamos is. Adiciona-se -ing normalmente: explaining.'
      },
      {
        infinitive: 'to meet',
        question: '___ you meeting your friends after work?',
        translation: 'Você vai se encontrar / está se encontrando com seus amigos depois do trabalho?',
        response: 'Yes, we are grabbing dinner together.',
        answers: ['Is', 'Are', 'Do', 'Does'],
        correct: 1,
        fact: 'Para frases interrogativas com “you”, iniciamos a pergunta com “Are”.'
      },
      {
        infinitive: 'to test',
        question: 'The engineers ___ the new engine system.',
        translation: 'Os engenheiros estão testando o novo sistema de motor.',
        answers: ['is testing', 'are testing', 'are testting', 'are test'],
        correct: 1,
        fact: '“Engineers” está no plural (they), exigindo o uso de are: testing.'
      },
      {
        infinitive: 'to improve',
        question: 'Her English level ___ day by day.',
        translation: 'O nível de inglês dela está melhorando dia a dia.',
        answers: ['is improving', 'are improving', 'is improveing', 'is improvering'],
        correct: 0,
        fact: '“Her English level” (it) usa is. Exclui-se o e final do verbo: improving.'
      },
      {
        infinitive: 'to sleep',
        question: 'Why ___ the dog sleeping under the table?',
        translation: 'Por que o cachorro está dormindo embaixo da mesa?',
        response: 'Because it is cooler down there.',
        answers: ['are', 'is', 'does', 'do'],
        correct: 1,
        fact: '“The dog” (it) é singular, portanto a pergunta leva o verbo “is”.'
      },

      // 71 a 80
      {
        infinitive: 'to enjoy',
        question: 'Everyone ___ the evening event at the beach.',
        translation: 'Todo mundo está aproveitando o evento noturno na praia.',
        answers: ['are enjoying', 'is enjoying', 'is enjoing', 'are enjoing'],
        correct: 1,
        fact: 'O pronome indefinido “everyone” é gramaticalmente singular e exige “is”.'
      },
      {
        infinitive: 'to pack',
        question: 'They ___ their suitcases for the vacation.',
        translation: 'Eles estão arrumando suas malas para as férias.',
        answers: ['is packing', 'are packing', 'are packking', 'are pack'],
        correct: 1,
        fact: 'Com “they” usamos are. O verbo “pack” ganha -ing no final: packing.'
      },
      {
        infinitive: 'to offer',
        question: 'The store ___ special discounts this week.',
        translation: 'A loja está oferecendo descontos especiais esta semana.',
        answers: ['is offering', 'are offering', 'is offerring', 'is offer'],
        correct: 0,
        fact: '“The store” (it) usa is. A sílaba tônica de “offer” é a primeira (OF-fer), sem dobrar r: offering.'
      },
      {
        infinitive: 'to study',
        question: '___ he studying at the library right now?',
        translation: 'Ele está estudando na biblioteca agora?',
        response: 'Yes, he has a big exam tomorrow.',
        answers: ['Are', 'Is', 'Does', 'Do'],
        correct: 1,
        fact: 'Em frases interrogativas para “he”, o verbo auxiliar é “Is”.'
      },
      {
        infinitive: 'to hold',
        question: 'She ___ a warm cup of coffee in her hands.',
        translation: 'Ela está segurando uma xícara de café quente nas mãos.',
        answers: ['is holding', 'are holding', 'is holdding', 'is hold'],
        correct: 0,
        fact: 'Com o pronome “she” usamos is. Acrescenta-se o sufixo -ing: holding.'
      },
      {
        infinitive: 'to fix',
        question: 'We ___ the software bugs step by step.',
        translation: 'Nós estamos corrigindo os erros do software passo a passo.',
        answers: ['are fixing', 'is fixing', 'are fixxing', 'are fix'],
        correct: 0,
        fact: 'Com o sujeito “we” usamos are. O x não se dobra em inglês: fixing.'
      },
      {
        infinitive: 'to dig',
        question: 'The gardener ___ a hole to plant a new tree.',
        translation: 'O jardinheiro está cavando um buraco para plantar uma nova árvore.',
        answers: ['is diging', 'is digging', 'are digging', 'is dig'],
        correct: 1,
        fact: '“The gardener” (he/she) usa is. O verbo “dig” é CVC de uma sílaba, dobrando o g: digging.'
      },
      {
        infinitive: 'to spend',
        question: 'I ___ too much money on coffee these days.',
        translation: 'Eu estou gastando dinheiro demais com café estes dias.',
        answers: ['am spending', 'is spending', 'am spendding', 'are spending'],
        correct: 0,
        fact: 'Para o pronome “I”, o verbo to be correto é “am”: am spending.'
      },
      {
        infinitive: 'to leave',
        question: '___ they leaving the office early today?',
        translation: 'Eles estão saindo do escritório mais cedo hoje?',
        response: 'Yes, they are heading to a conference.',
        answers: ['Is', 'Are', 'Do', 'Does'],
        correct: 1,
        fact: 'A forma interrogativa com “they” inicia com o auxiliar “Are”.'
      },
      {
        infinitive: 'to show',
        question: 'He ___ us how to operate the machine.',
        translation: 'Ele está nos mostrando como operar a máquina.',
        answers: ['is showing', 'are showing', 'is showwing', 'is show'],
        correct: 0,
        fact: 'Com “he” usamos is + o verbo principal acrescido de -ing: showing.'
      },

      // 81 a 90
      {
        infinitive: 'to cook',
        question: '___ your father cooking dinner for everyone tonight?',
        translation: 'Seu pai está cozinhando o jantar para todos hoje à noite?',
        response: 'Yes, he is making spaghetti.',
        answers: ['Is', 'Are', 'Does', 'Do'],
        correct: 0,
        fact: '“Your father” equivale a “he”, por isso iniciamos a pergunta com “Is”.'
      },
      {
        infinitive: 'to push',
        question: 'The crowd ___ forward to enter the stadium.',
        translation: 'A multidão está empurrando para a frente para entrar no estádio.',
        answers: ['is pushing', 'are pushing', 'is pushning', 'is push'],
        correct: 0,
        fact: '“The crowd” (substantivo coletivo singular = it) utiliza is: pushing.'
      },
      {
        infinitive: 'to rob',
        question: 'The police officers ___ searching for the suspect.',
        translation: 'Os policiais estão procurando pelo suspeito.',
        answers: ['is', 'are', 'do', 'does'],
        correct: 1,
        fact: '“The police officers” está no plural (they), exigindo a forma “are”.'
      },
      {
        infinitive: 'to ring',
        question: 'Listen! Someone\'s phone ___ during the meeting.',
        translation: 'Escute! O telefone de alguém está tocando durante a reunião.',
        answers: ['is ringing', 'are ringing', 'is ringging', 'is ring'],
        correct: 0,
        fact: '“Someone\'s phone” (it) usa is. Adiciona-se -ing a “ring”: ringing.'
      },
      {
        infinitive: 'to follow',
        question: 'We ___ the instructions given on the screen.',
        translation: 'Nós estamos seguindo as instruções dadas na tela.',
        answers: ['are following', 'is following', 'are followwing', 'are follow'],
        correct: 0,
        fact: 'Com “we” usa-se o auxiliar are. O sufixo -ing liga-se diretamente: following.'
      },
      {
        infinitive: 'to wait',
        question: '___ you waiting for the train or the bus?',
        translation: 'Você está esperando pelo trem ou pelo ônibus?',
        response: 'I am waiting for the bus.',
        answers: ['Is', 'Are', 'Do', 'Am'],
        correct: 1,
        fact: 'Com o sujeito “you” em frases interrogativas, usamos “Are”.'
      },
      {
        infinitive: 'to carry',
        question: 'She ___ a box full of old books.',
        translation: 'Ela está carregando uma caixa cheia de livros antigos.',
        answers: ['is carrying', 'are carrying', 'is carring', 'is carrying'],
        correct: 0,
        fact: 'Com “she” usamos is. Manter o y e adicionar -ing: carrying.'
      },
      {
        infinitive: 'to visit',
        question: 'They ___ their relatives in Canada this summer.',
        translation: 'Eles estão visitando seus parentes no Canadá neste verão.',
        answers: ['is visiting', 'are visiting', 'are visitting', 'are visit'],
        correct: 1,
        fact: 'Com “they” usamos are. “Visit” tem tônica na primeira sílaba (VIS-it), sem dobrar o t: visiting.'
      },
      {
        infinitive: 'to drive',
        question: 'I ___ not driving fast, don\'t worry.',
        translation: 'Eu não estou dirigindo rápido, não se preocupe.',
        answers: ['am', 'is', 'are', 'do'],
        correct: 0,
        fact: 'A forma negativa para “I” no Present Continuous usa “am not”.'
      },
      {
        infinitive: 'to rain',
        question: '___ it raining heavily in your city right now?',
        translation: 'Está chovendo forte na sua cidade agora?',
        response: 'No, it is sunny here.',
        answers: ['Is', 'Are', 'Does', 'Do'],
        correct: 0,
        fact: 'Frases interrogativas impessoais com “it” iniciam com “Is”.'
      },

      // 91 a 100
      {
        infinitive: 'to design',
        question: 'The architect ___ a modern building for the client.',
        translation: 'O arquiteto está projetando um prédio moderno para o cliente.',
        answers: ['is designing', 'are designing', 'is designning', 'is design'],
        correct: 0,
        fact: '“The architect” (he/she) utiliza is + verbo com -ing: designing.'
      },
      {
        infinitive: 'to run',
        question: 'Why ___ you running towards the station?',
        translation: 'Por que você está correndo em direção à estação?',
        response: 'Because my train leaves in two minutes!',
        answers: ['is', 'are', 'do', 'am'],
        correct: 1,
        fact: 'Em frases interrogativas com o pronome “you”, a forma correta do to be é “are”.'
      },
      {
        infinitive: 'to clean',
        question: 'He ___ his bedroom window right now.',
        translation: 'Ele está limpando a janela do quarto dele agora.',
        answers: ['is cleaning', 'are cleaning', 'is cleanning', 'is clean'],
        correct: 0,
        fact: 'Com o pronome “he” usamos is. Adiciona-se -ing a “clean”: cleaning.'
      },
      {
        infinitive: 'to dance',
        question: '___ she dancing at the local studio today?',
        translation: 'Ela está dançando no estúdio local hoje?',
        response: 'Yes, she has a rehearsal this afternoon.',
        answers: ['Are', 'Is', 'Does', 'Do'],
        correct: 1,
        fact: 'Perguntas no Present Continuous com o sujeito “she” começam com “Is”.'
      },
      {
        infinitive: 'to shop',
        question: 'My sister ___ for new clothes online.',
        translation: 'Minha irmã está comprando roupas novas online.',
        answers: ['is shoping', 'is shopping', 'are shopping', 'is shop'],
        correct: 1,
        fact: '“My sister” (she) exige is. “Shop” é CVC de uma sílaba, dobrando o p: shopping.'
      },
      {
        infinitive: 'to discuss',
        question: 'We ___ not discussing that sensitive topic right now.',
        translation: 'Nós não estamos discutindo esse tópico sensível agora.',
        answers: ['is', 'are', 'do', 'does'],
        correct: 1,
        fact: 'Com “we”, a forma negativa do verbo to be é “are not” (aren’t).'
      },
      {
        infinitive: 'to cook',
        question: 'The chef ___ a special dinner for the guests.',
        translation: 'O chef está cozinhando um jantar especial para os convidados.',
        answers: ['is cooking', 'are cooking', 'is cookking', 'is cook'],
        correct: 0,
        fact: '“The chef” (he/she) exige is. Adiciona-se -ing ao verbo: cooking.'
      },
      {
        infinitive: 'to type',
        question: 'She ___ an important email to her client.',
        translation: 'Ela está digitando um e-mail importante para o cliente dela.',
        answers: ['is typeing', 'is typing', 'are typing', 'is typping'],
        correct: 1,
        fact: 'Com “she” usamos is. O e final do verbo “type” é descartado antes do -ing: typing.'
      },
      {
        infinitive: 'to listen',
        question: '___ they listening to the new album?',
        translation: 'Eles estão ouvindo o álbum novo?',
        response: 'Yes, they love this artist.',
        answers: ['Is', 'Are', 'Do', 'Does'],
        correct: 1,
        fact: 'Para o sujeito “they” na forma interrogativa, iniciamos a pergunta com “Are”.'
      },
      {
        infinitive: 'to organize',
        question: 'The event planners ___ the details for tonight.',
        translation: 'Os organizadores do evento estão organizando os detalhes para hoje à noite.',
        answers: ['is organizing', 'are organizing', 'are organizeing', 'are organizzing'],
        correct: 1,
        fact: '“The event planners” está no plural (they) -> are. Corta-se o e final: organizing.'
      }
    ]
  }