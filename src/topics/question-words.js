export default {
    id: 'question-words',
    label: 'Question Words',
    description: 'Ask about people, things, places, time and reasons',
    titleFirst: 'Question',
    titleSecond: 'Words',
    grammarHelp: [
      '<strong>Who</strong>: pessoas. <strong>What</strong>: coisas ou informações.',
      '<strong>Where</strong>: lugares. <strong>When</strong>: tempo. <strong>Why</strong>: motivos.',
      '<strong>How</strong> pergunta sobre modo ou condição. <strong>How often</strong>: frequência.',
      '<strong>How long</strong>: duração. <strong>How far</strong>: distância.',
      '<strong>How many</strong>: quantidade de itens contáveis. <strong>How much</strong>: quantidade incontável. <strong>How old</strong>: idade.'
    ],
    questions: [
      // 1 a 12 (Originals)
      {
        question: '___ is your English teacher?',
        translation: 'Quem é seu professor de inglês?',
        response: 'Ms. Lee is my English teacher.',
        answers: ['Who', 'What', 'Where', 'When'],
        correct: 0,
        fact: 'Usamos “who” para perguntar sobre uma pessoa.'
      },
      {
        question: '___ is in your lunchbox?',
        translation: 'O que há na sua lancheira?',
        response: 'A cheese sandwich and an apple.',
        answers: ['Where', 'What', 'Who', 'When'],
        correct: 1,
        fact: 'Usamos “what” para perguntar sobre uma coisa ou informação.'
      },
      {
        question: '___ is the school library?',
        translation: 'Onde fica a biblioteca da escola?',
        response: "It's next to the cafeteria.",
        answers: ['When', 'Who', 'Where', 'Why'],
        correct: 2,
        fact: 'Usamos “where” para perguntar sobre um lugar.'
      },
      {
        question: '___ does your class start?',
        translation: 'A que horas sua aula começa?',
        response: 'It starts at 8:30 a.m.',
        answers: ['What', 'Why', 'When', 'Where'],
        correct: 2,
        fact: 'Usamos “when” para perguntar sobre o momento ou horário.'
      },
      {
        question: '___ are you smiling?',
        translation: 'Por que você está sorrindo?',
        response: 'Because I got a good grade.',
        answers: ['Who', 'How', 'Why', 'When'],
        correct: 2,
        fact: 'Usamos “why” para perguntar o motivo ou a razão.'
      },
      {
        question: '___ are you feeling today?',
        translation: 'Como você está se sentindo hoje?',
        response: 'I’m feeling great, thank you.',
        answers: ['Why', 'How', 'When', 'Where'],
        correct: 1,
        fact: 'Usamos “how” para perguntar sobre o modo ou a condição de alguém.'
      },
      {
        question: '___ does Nina visit the library?',
        translation: 'Com que frequência Nina visita a biblioteca?',
        response: 'She goes every Saturday.',
        answers: ['How long', 'How often', 'How far', 'How many'],
        correct: 1,
        fact: '“How often” pergunta com que frequência algo acontece.'
      },
      {
        question: '___ does the movie last?',
        translation: 'Quanto tempo dura o filme?',
        response: 'It lasts about two hours.',
        answers: ['How far', 'How often', 'How long', 'How much'],
        correct: 2,
        fact: '“How long” pergunta sobre duração.'
      },
      {
        question: '___ is the train station from here?',
        translation: 'A que distância fica a estação de trem daqui?',
        response: 'It’s about three kilometers away.',
        answers: ['How old', 'How far', 'How long', 'How often'],
        correct: 1,
        fact: '“How far” pergunta sobre distância.'
      },
      {
        question: '___ cousins do you have?',
        translation: 'Quantos primos você tem?',
        response: 'I have four cousins.',
        answers: ['How much', 'How long', 'How many', 'How often'],
        correct: 2,
        fact: '“How many” é usado com substantivos contáveis no plural.'
      },
      {
        question: '___ juice is left in the bottle?',
        translation: 'Quanto suco ainda resta na garrafa?',
        response: 'There’s only a little left.',
        answers: ['How many', 'How often', 'How much', 'How far'],
        correct: 2,
        fact: '“How much” é usado com substantivos incontáveis, como “juice”.'
      },
      {
        question: '___ is your younger brother?',
        translation: 'Quantos anos tem seu irmão mais novo?',
        response: 'He’s twelve years old.',
        answers: ['How long', 'How old', 'How many', 'How well'],
        correct: 1,
        fact: '“How old” pergunta a idade.'
      },

      // 13 a 25
      {
        question: '___ umbrella is this on the couch?',
        translation: 'De quem é este guarda-chuva no sofá?',
        response: 'It belongs to Sarah.',
        answers: ['Who', 'Whose', 'Which', 'Where'],
        correct: 1,
        fact: 'Usamos “whose” para perguntar sobre posse ou de quem é algo.'
      },
      {
        question: '___ of these two dresses do you prefer?',
        translation: 'Qual destes dois vestidos você prefere?',
        response: 'I prefer the blue one.',
        answers: ['What', 'Which', 'Who', 'Whose'],
        correct: 1,
        fact: 'Usamos “which” para perguntar sobre escolhas dentro de um grupo limitado de opções.'
      },
      {
        question: '___ did you leave your keys last night?',
        translation: 'Onde você deixou suas chaves ontem à noite?',
        response: 'I left them on the kitchen counter.',
        answers: ['When', 'Where', 'Why', 'How'],
        correct: 1,
        fact: 'Usamos “where” para perguntar a localização de um objeto.'
      },
      {
        question: '___ time does the flight depart?',
        translation: 'A que horas o voo parte?',
        response: 'It departs at 9:00 p.m.',
        answers: ['When', 'What', 'Which', 'How'],
        correct: 1,
        fact: 'Usamos “what time” para perguntar o horário exato.'
      },
      {
        question: '___ opened the front door?',
        translation: 'Quem abriu a porta da frente?',
        response: 'The delivery guy opened it.',
        answers: ['Who', 'What', 'Which', 'Whose'],
        correct: 0,
        fact: 'Usamos “who” para identificar quem praticou uma ação.'
      },
      {
        question: '___ did you cancel the subscription?',
        translation: 'Por que você cancelou a assinatura?',
        response: 'Because I wasn\'t using it very often.',
        answers: ['How', 'Why', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “why” para perguntar o motivo ou razão de um acontecimento.'
      },
      {
        question: '___ money do you need for the groceries?',
        translation: 'Quanto dinheiro você precisa para as compras?',
        response: 'I need about fifty dollars.',
        answers: ['How many', 'How much', 'How long', 'How far'],
        correct: 1,
        fact: 'Usamos “how much” com substantivos incontáveis, como “money”.'
      },
      {
        question: '___ guests are attending the conference tomorrow?',
        translation: 'Quantos convidados assistirão à conferência amanhã?',
        response: 'About one hundred people.',
        answers: ['How much', 'How many', 'How often', 'How long'],
        correct: 1,
        fact: 'Usamos “how many” para contar elementos no plural (guests).'
      },
      {
        question: '___ do you take a bus to work?',
        translation: 'Com que frequência você pega ônibus para o trabalho?',
        response: 'Every morning on weekdays.',
        answers: ['How far', 'How long', 'How often', 'How much'],
        correct: 2,
        fact: 'Usamos “how often” para investigar a frequência de um hábito.'
      },
      {
        question: '___ is it from the airport to the city center?',
        translation: 'A que distância fica o aeroporto do centro da cidade?',
        response: 'It is about fifteen miles.',
        answers: ['How long', 'How far', 'How old', 'How many'],
        correct: 1,
        fact: 'Usamos “how far” para medir a distância entre lugares.'
      },
      {
        question: '___ have you been living in this city?',
        translation: 'Há quanto tempo você mora nesta cidade?',
        response: 'I have been living here for five years.',
        answers: ['How long', 'How often', 'How much', 'How far'],
        correct: 0,
        fact: 'Usamos “how long” para perguntar sobre a duração de um período de tempo.'
      },
      {
        question: '___ car is parked in front of our garage?',
        translation: 'De quem é o carro estacionado na frente da nossa garagem?',
        response: 'It’s our neighbor’s car.',
        answers: ['Who', 'Whose', 'Which', 'What'],
        correct: 1,
        fact: 'Usamos “whose” antes de um substantivo para perguntar a quem ele pertence.'
      },
      {
        question: '___ did you prepare for this difficult presentation?',
        translation: 'Como você se preparou para esta apresentação difícil?',
        response: 'I practiced every night after dinner.',
        answers: ['Why', 'How', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “how” para perguntar sobre a maneira ou processo de realização de algo.'
      },

      // 26 a 40
      {
        question: '___ subject do you like best, history or geography?',
        translation: 'Qual matéria você gosta mais, história ou geografia?',
        response: 'I prefer geography.',
        answers: ['What', 'Which', 'Who', 'Whose'],
        correct: 1,
        fact: 'Usamos “which” para fazer uma escolha específica entre opções definidas.'
      },
      {
        question: '___ was calling you so late last night?',
        translation: 'Quem estava te ligando tão tarde ontem à noite?',
        response: 'It was my coworker with an urgent question.',
        answers: ['Who', 'What', 'Where', 'Why'],
        correct: 0,
        fact: 'Usamos “who” para descobrir a identidade de uma pessoa.'
      },
      {
        question: '___ does it cost to rent a bicycle for a day?',
        translation: 'Quanto custa alugar uma bicicleta por um dia?',
        response: 'It costs twenty dollars a day.',
        answers: ['How many', 'How much', 'How long', 'How far'],
        correct: 1,
        fact: 'Usamos “how much” ao perguntar o preço de um serviço ou produto.'
      },
      {
        question: '___ page are we supposed to read for homework?',
        translation: 'Qual página devemos ler para a lição de casa?',
        response: 'We should read page 45.',
        answers: ['Which', 'What', 'Where', 'Who'],
        correct: 1,
        fact: 'Usamos “what page” ou “which page” para pedir informações sobre números/páginas.'
      },
      {
        question: '___ is your grandmothers house located?',
        translation: 'Onde está localizada a casa da sua avó?',
        response: 'It is located in a small countryside village.',
        answers: ['When', 'Where', 'Why', 'How'],
        correct: 1,
        fact: 'Usamos “where” para saber a localização de um imóvel ou lugar.'
      },
      {
        question: '___ did you decide to study engineering?',
        translation: 'Por que você decidiu estudar engenharia?',
        response: 'Because I always enjoyed mathematics and building things.',
        answers: ['Who', 'Why', 'How', 'Where'],
        correct: 1,
        fact: 'Usamos “why” para buscar a motivação de uma decisão.'
      },
      {
        question: '___ hours of sleep do you get each night?',
        translation: 'Quantas horas de sono você dorme a cada noite?',
        response: 'I usually sleep seven hours.',
        answers: ['How much', 'How many', 'How long', 'How often'],
        correct: 1,
        fact: 'Usamos “how many” com a palavra contável no plural “hours”.'
      },
      {
        question: '___ will the manager return from his vacation?',
        translation: 'Quando o gerente retornará das suas férias?',
        response: 'He will be back next Monday.',
        answers: ['Where', 'When', 'Why', 'Who'],
        correct: 1,
        fact: 'Usamos “when” para perguntar sobre uma data ou momento futuro.'
      },
      {
        question: '___ idea was it to organize this surprise party?',
        translation: 'De quem foi a ideia de organizar esta festa surpresa?',
        response: 'It was Jessica’s idea.',
        answers: ['Who', 'Whose', 'Which', 'What'],
        correct: 1,
        fact: 'Usamos “whose” para identificar o autor ou dono de uma ideia.'
      },
      {
        question: '___ do you spell your last name correctly?',
        translation: 'Como se soletra seu sobrenome corretamente?',
        response: 'It is S-M-I-T-H.',
        answers: ['Why', 'How', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “how” para perguntar sobre a maneira correta de executar uma ação (soletrar).'
      },
      {
        question: '___ times a week do you go to the gym?',
        translation: 'Quantas vezes por semana você vai à academia?',
        response: 'I go three times a week.',
        answers: ['How much', 'How many', 'How often', 'How long'],
        correct: 1,
        fact: 'Usamos “how many times” para perguntar a contagem exata de ocorrências.'
      },
      {
        question: '___ is the nearest bus stop from here?',
        translation: 'Onde fica o ponto de ônibus mais próximo daqui?',
        response: 'It is just around the corner.',
        answers: ['When', 'Where', 'Why', 'Who'],
        correct: 1,
        fact: 'Usamos “where” para encontrar um ponto de referência ou local.'
      },
      {
        question: '___ is your dog, in human years?',
        translation: 'Quantos anos tem seu cachorro, em anos humanos?',
        response: 'He is five years old.',
        answers: ['How long', 'How old', 'How many', 'How much'],
        correct: 1,
        fact: 'Usamos “how old” para perguntar a idade de animais ou pessoas.'
      },
      {
        question: '___ coffee do you drink in a day?',
        translation: 'Quanto café você bebe em um dia?',
        response: 'I usually drink two cups.',
        answers: ['How many', 'How much', 'How often', 'How far'],
        correct: 1,
        fact: 'Usamos “how much” para substantivos incontáveis como líquido (coffee).'
      },
      {
        question: '___ laptop are you using today, yours or Leo’s?',
        translation: 'Qual notebook você está usando hoje, o seu ou o do Leo?',
        response: 'I am using Leo’s laptop.',
        answers: ['Whose', 'Which', 'Who', 'Where'],
        correct: 1,
        fact: 'Usamos “which” para escolher entre duas opções específicas indicadas na pergunta.'
      },

      // 41 a 60
      {
        question: '___ was the weather like during your beach vacation?',
        translation: 'Como estava o tempo durante suas férias na praia?',
        response: 'It was very sunny and hot.',
        answers: ['How', 'What', 'Where', 'Why'],
        correct: 1,
        fact: 'A estrutura “What... like?” é usada para perguntar sobre características ou estado do tempo.'
      },
      {
        question: '___ did you find my lost keys?',
        translation: 'Onde você encontrou minhas chaves perdidas?',
        response: 'I found them under the sofa.',
        answers: ['When', 'Where', 'Why', 'Who'],
        correct: 1,
        fact: 'Usamos “where” para saber a localização em que um item foi achado.'
      },
      {
        question: '___ was driving the red car when the crash happened?',
        translation: 'Quem estava dirigindo o carro vermelho quando a batida aconteceu?',
        response: 'A young man was driving it.',
        answers: ['Who', 'What', 'Whose', 'Which'],
        correct: 0,
        fact: 'Usamos “who” para identificar o motorista/pessoa responsável.'
      },
      {
        question: '___ does the concert start tonight?',
        translation: 'Quando o show começa hoje à noite?',
        response: 'It starts at 8:00 p.m.',
        answers: ['Where', 'When', 'Why', 'How'],
        correct: 1,
        fact: 'Usamos “when” para determinar momentos no tempo.'
      },
      {
        question: '___ is your favorite season, summer or winter?',
        translation: 'Qual é a sua estação favorita, verão ou inverno?',
        response: 'I love summer the most.',
        answers: ['What', 'Which', 'Who', 'Where'],
        correct: 1,
        fact: 'Usamos “which” para escolher dentro de um conjunto limitado de opções apresentadas.'
      },
      {
        question: '___ did you choose to wear that formal suit?',
        translation: 'Por que você escolheu usar aquele terno formal?',
        response: 'Because I had a job interview.',
        answers: ['How', 'Why', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “why” para buscar a causa da escolha de vestuário.'
      },
      {
        question: '___ milk is required for this cake recipe?',
        translation: 'Quanta leite é necessária para esta receita de bolo?',
        response: 'You need two hundred milliliters.',
        answers: ['How many', 'How much', 'How long', 'How often'],
        correct: 1,
        fact: 'Usamos “how much” para medir a quantidade de ingredientes incontáveis.'
      },
      {
        question: '___ students are in your English group?',
        translation: 'Quantos alunos estão no seu grupo de inglês?',
        response: 'There are twelve students.',
        answers: ['How much', 'How many', 'How long', 'How old'],
        correct: 1,
        fact: 'Usamos “how many” com a contagem do plural “students”.'
      },
      {
        question: '___ does the bus take to reach the next town?',
        translation: 'Quanto tempo o ônibus leva para chegar à próxima cidade?',
        response: 'It takes about forty minutes.',
        answers: ['How far', 'How long', 'How often', 'How much'],
        correct: 1,
        fact: 'Usamos “how long” para medir o intervalo de tempo gasto em um percurso.'
      },
      {
        question: '___ is it from your home to your workplace?',
        translation: 'A que distância fica a sua casa do seu local de trabalho?',
        response: 'It is five kilometers away.',
        answers: ['How long', 'How far', 'How old', 'How often'],
        correct: 1,
        fact: 'Usamos “how far” para calcular distâncias físicas.'
      },
      {
        question: '___ shoes are these left at the entrance door?',
        translation: 'De quem são estes sapatos deixados na porta de entrada?',
        response: 'They are my brother\'s shoes.',
        answers: ['Who', 'Whose', 'Which', 'What'],
        correct: 1,
        fact: 'Usamos “whose” para perguntar sobre o proprietário dos sapatos.'
      },
      {
        question: '___ do you solve this complex math equation?',
        translation: 'Como você resolve esta equação matemática complexa?',
        response: 'You follow these three simple steps.',
        answers: ['Why', 'How', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “how” para requerer a explicação de um método ou processo.'
      },
      {
        question: '___ does the postman deliver our mail?',
        translation: 'Com que frequência o carteiro entrega nossa correspondência?',
        response: 'He comes once a day.',
        answers: ['How far', 'How long', 'How often', 'How many'],
        correct: 2,
        fact: 'Usamos “how often” para investigar a periodicidade das entregas.'
      },
      {
        question: '___ is your grandfather now?',
        translation: 'Quantos anos tem seu avô agora?',
        response: 'He is eighty years old.',
        answers: ['How long', 'How old', 'How far', 'How much'],
        correct: 1,
        fact: 'Usamos “how old” para saber a idade de uma pessoa.'
      },
      {
        question: '___ coat did you take from the rack by mistake?',
        translation: 'Qual casaco você pegou do cabide por engano?',
        response: 'I took Tom’s black coat.',
        answers: ['Which', 'Who', 'Where', 'When'],
        correct: 0,
        fact: 'Usamos “which” para especificar um objeto entre os disponíveis.'
      },

      // 61 a 80
      {
        question: '___ is the total cost of the repairs?',
        translation: 'Qual é o custo total dos consertos?',
        response: 'The total cost is three hundred dollars.',
        answers: ['How', 'What', 'Which', 'Where'],
        correct: 1,
        fact: 'Usamos “what” para solicitar uma informação específica sobre um valor.'
      },
      {
        question: '___ did you meet your best friend for the first time?',
        translation: 'Onde você conheceu seu melhor amigo pela primeira vez?',
        response: 'We met at elementary school.',
        answers: ['When', 'Where', 'Why', 'How'],
        correct: 1,
        fact: 'Usamos “where” para identificar o local do primeiro encontro.'
      },
      {
        question: '___ was the first president of this country?',
        translation: 'Quem foi o primeiro presidente deste país?',
        response: 'George Washington was the first president.',
        answers: ['Who', 'What', 'Which', 'Whose'],
        correct: 0,
        fact: 'Usamos “who” para pessoas históricas ou figuras conhecidas.'
      },
      {
        question: '___ did the storm start yesterday afternoon?',
        translation: 'Quando a tempestade começou ontem à tarde?',
        response: 'It started at around three o\'clock.',
        answers: ['Where', 'When', 'Why', 'How'],
        correct: 1,
        fact: 'Usamos “when” para determinar a hora em que o evento climático se iniciou.'
      },
      {
        question: '___ did they close the highway for two hours?',
        translation: 'Por que fecharam a rodovia por duas horas?',
        response: 'Because there was a severe traffic accident.',
        answers: ['How', 'Why', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “why” para buscar o motivo do bloqueio viário.'
      },
      {
        question: '___ water should we drink every day for good health?',
        translation: 'Quanta água devemos beber todos os dias para uma boa saúde?',
        response: 'We should drink about two liters.',
        answers: ['How many', 'How much', 'How long', 'How often'],
        correct: 1,
        fact: 'Usamos “how much” para tratar de volumes ou quantidades incontáveis.'
      },
      {
        question: '___ slices of pizza did you eat last night?',
        translation: 'Quantas fatias de pizza você comeu ontem à noite?',
        response: 'I ate three slices.',
        answers: ['How much', 'How many', 'How long', 'How far'],
        correct: 1,
        fact: 'Usamos “how many” com unidades contáveis no plural (slices).'
      },
      {
        question: '___ does it take to bake this chocolate cake?',
        translation: 'Quanto tempo leva para assar este bolo de chocolate?',
        response: 'It takes about forty-five minutes.',
        answers: ['How far', 'How long', 'How often', 'How much'],
        correct: 1,
        fact: 'Usamos “how long” para calcular o tempo de preparo/cozimento.'
      },
      {
        question: '___ is the gym from your new apartment?',
        translation: 'A que distância fica a academia do seu apartamento novo?',
        response: 'It is only ten minutes away on foot.',
        answers: ['How long', 'How far', 'How old', 'How many'],
        correct: 1,
        fact: 'Usamos “how far” para questionar a distância.'
      },
      {
        question: '___ book is this lying on the floor?',
        translation: 'De quem é este livro caído no chão?',
        response: 'It is the teacher\'s book.',
        answers: ['Who', 'Whose', 'Which', 'What'],
        correct: 1,
        fact: 'Usamos “whose” para identificar o dono do item encontrado.'
      },
      {
        question: '___ do you get to work every day, by train or by car?',
        translation: 'Como você vai para o trabalho todos os dias, de trem ou de carro?',
        response: 'I go by train every day.',
        answers: ['Why', 'How', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “how” para perguntar sobre meios de transporte e modo de deslocamento.'
      },
      {
        question: '___ do you clean your computer keyboard?',
        translation: 'Com que frequência você limpa o teclado do seu computador?',
        response: 'I clean it once a month.',
        answers: ['How far', 'How long', 'How often', 'How many'],
        correct: 2,
        fact: 'Usamos “how often” para mensurar a frequência de limpeza ou manutenção.'
      },
      {
        question: '___ is your city’s main library building?',
        translation: 'Quantos anos tem o prédio da biblioteca principal da sua cidade?',
        response: 'It is over one hundred years old.',
        answers: ['How long', 'How old', 'How far', 'How much'],
        correct: 1,
        fact: 'Usamos “how old” para perguntar a idade de edifícios e monumentos.'
      },
      {
        question: '___ route should we take to avoid traffic, option A or B?',
        translation: 'Qual rota devemos pegar para evitar o trânsito, a opção A ou B?',
        response: 'Option B is much faster.',
        answers: ['What', 'Which', 'Who', 'Whose'],
        correct: 1,
        fact: 'Usamos “which” para selecionar uma opção entre caminhos predefinidos.'
      },
      {
        question: '___ is going to lead the team during the manager’s absence?',
        translation: 'Quem vai liderar a equipe durante a ausência do gerente?',
        response: 'Anna will lead the team.',
        answers: ['Who', 'What', 'Which', 'Whose'],
        correct: 0,
        fact: 'Usamos “who” para apontar a pessoa encarregada de liderar.'
      },

      // 81 a 100
      {
        question: '___ is the main reason for your visit today?',
        translation: 'Qual é o motivo principal da sua visita hoje?',
        response: 'I am here for a routine medical checkup.',
        answers: ['How', 'What', 'Where', 'Why'],
        correct: 1,
        fact: 'Usamos “what” para pedir a identificação de um motivo ou objetivo.'
      },
      {
        question: '___ is the meeting taking place this afternoon?',
        translation: 'Onde a reunião está acontecendo esta tarde?',
        response: 'It is in conference room B.',
        answers: ['When', 'Where', 'Why', 'Who'],
        correct: 1,
        fact: 'Usamos “where” para definir o local de uma reunião.'
      },
      {
        question: '___ did you complete your university degree?',
        translation: 'Quando você concluiu seu diploma universitário?',
        response: 'I graduated in 2022.',
        answers: ['Where', 'When', 'Why', 'How'],
        correct: 1,
        fact: 'Usamos “when” para determinar o ano ou época de formatura.'
      },
      {
        question: '___ are you studying late at night?',
        translation: 'Por que você está estudando até tarde da noite?',
        response: 'Because I have an important test tomorrow morning.',
        answers: ['How', 'Why', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “why” para obter a justificativa para um comportamento.'
      },
      {
        question: '___ flour do we need to bake two loaves of bread?',
        translation: 'Quanta farinha precisamos para assar dois pães?',
        response: 'We need five hundred grams.',
        answers: ['How many', 'How much', 'How long', 'How often'],
        correct: 1,
        fact: 'Usamos “how much” para ingredientes em pó ou massa (flour).'
      },
      {
        question: '___ foreign languages can your brother speak?',
        translation: 'Quantos idiomas estrangeiros seu irmão consegue falar?',
        response: 'He can speak three languages.',
        answers: ['How much', 'How many', 'How long', 'How far'],
        correct: 1,
        fact: 'Usamos “how many” com elementos contáveis no plural (languages).'
      },
      {
        question: '___ do we have to wait for the next train to arrive?',
        translation: 'Quanto tempo temos que esperar o próximo trem chegar?',
        response: 'We have to wait about ten minutes.',
        answers: ['How far', 'How long', 'How often', 'How much'],
        correct: 1,
        fact: 'Usamos “how long” para medir tempo de espera.'
      },
      {
        question: '___ is your house from the beach?',
        translation: 'A que distância fica sua casa da praia?',
        response: 'It is about two kilometers from the beach.',
        answers: ['How long', 'How far', 'How old', 'How many'],
        correct: 1,
        fact: 'Usamos “how far” para pedir a medida de extensão do trajeto.'
      },
      {
        question: '___ car key did you find under the table?',
        translation: 'De quem é a chave do carro que você encontrou debaixo da mesa?',
        response: 'I found Mark’s car key.',
        answers: ['Who', 'Whose', 'Which', 'What'],
        correct: 1,
        fact: 'Usamos “whose” para vincular o objeto achado ao seu dono.'
      },
      {
        question: '___ do you make homemade pasta from scratch?',
        translation: 'Como você faz massa caseira do zero?',
        response: 'You mix flour, eggs, and a bit of salt.',
        answers: ['Why', 'How', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “how” para solicitar uma receita ou modo de preparo.'
      },
      {
        question: '___ do you update your software applications?',
        translation: 'Com que frequência você atualiza seus aplicativos de software?',
        response: 'I update them every week.',
        answers: ['How far', 'How long', 'How often', 'How many'],
        correct: 2,
        fact: 'Usamos “how often” para verificar o período regular de atualização.'
      },
      {
        question: '___ is this ancient castle on the hill?',
        translation: 'Quantos anos tem este castelo antigo na colina?',
        response: 'It is almost five hundred years old.',
        answers: ['How long', 'How old', 'How far', 'How much'],
        correct: 1,
        fact: 'Usamos “how old” para descobrir a antiguidade de monumentos históricos.'
      },
      {
        question: '___ laptop model should I buy for photo editing?',
        translation: 'Qual modelo de notebook devo comprar para edição de fotos?',
        response: 'You should buy the Pro model.',
        answers: ['What', 'Which', 'Who', 'Whose'],
        correct: 1,
        fact: 'Usamos “which” para selecionar o modelo ideal entre uma gama restrita.'
      },
      {
        question: '___ is responsible for managing the project tasks?',
        translation: 'Quem é responsável por gerenciar as tarefas do projeto?',
        response: 'David is responsible for managing them.',
        answers: ['Who', 'What', 'Which', 'Whose'],
        correct: 0,
        fact: 'Usamos “who” para determinar o responsável por um cargo ou tarefa.'
      },
      {
        question: '___ color did you choose for painting the living room walls?',
        translation: 'Qual cor você escolheu para pintar as paredes da sala de estar?',
        response: 'I chose light gray.',
        answers: ['How', 'What', 'Where', 'Why'],
        correct: 1,
        fact: 'Usamos “what color” para perguntar sobre tons ou cores.'
      },
      {
        question: '___ did you leave your luggage at the station?',
        translation: 'Onde você deixou sua bagagem na estação?',
        response: 'I left it at the luggage storage locker.',
        answers: ['When', 'Where', 'Why', 'How'],
        correct: 1,
        fact: 'Usamos “where” para identificar o local do depósito ou guarda-volumes.'
      },
      {
        question: '___ is the annual festival going to take place?',
        translation: 'Quando o festival anual vai acontecer?',
        response: 'It will take place in October.',
        answers: ['Where', 'When', 'Why', 'Who'],
        correct: 1,
        fact: 'Usamos “when” para indicar o mês ou período de realização de um evento.'
      },
      {
        question: '___ did you turn off the air conditioner?',
        translation: 'Por que você desligou o ar-condicionado?',
        response: 'Because it was getting too cold in the room.',
        answers: ['How', 'Why', 'Where', 'When'],
        correct: 1,
        fact: 'Usamos “why” para entender a razão do desligamento do aparelho.'
      },
      {
        question: '___ rice should I serve per person for dinner?',
        translation: 'Quanto arroz devo servir por pessoa para o jantar?',
        response: 'You should serve one cup per person.',
        answers: ['How many', 'How much', 'How long', 'How often'],
        correct: 1,
        fact: 'Usamos “how much” para porções de alimentos incontáveis em grão (rice).'
      },
      {
        question: '___ questions do you have before we finish the test?',
        translation: 'Quantas dúvidas você tem antes de terminarmos o teste?',
        response: 'I only have one question left.',
        answers: ['How much', 'How many', 'How long', 'How far'],
        correct: 1,
        fact: 'Usamos “how many” com a palavra contável plural “questions”.'
      }
    ]
  }