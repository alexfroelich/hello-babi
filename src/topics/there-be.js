export default {
    id: 'there-be',
    label: 'There is / are / was / were',
    description: 'Talk about what exists',
    titleFirst: 'There is / are',
    titleSecond: 'was / were',
    grammarHelp: [
      'Presente: <strong>there is</strong> para singular e incontáveis; <strong>there are</strong> para plural.',
      'Passado: <strong>there was</strong> para singular e incontáveis; <strong>there were</strong> para plural.',
      'Na <strong>negativa</strong>, acrescente <strong>not</strong> (there isn\'t, there aren\'t, there wasn\'t, there weren\'t).',
      'Na <strong>interrogativa</strong>, inverta a ordem (Is there...?, Are there...?, Was there...?, Were there...?).'
    ],
    questions: [
      // 1 a 10
      {
        question: '___ a little milk in the fridge right now.',
        translation: 'Há um pouco de leite na geladeira agora.',
        answers: ['There are', 'There is', 'There were', 'There was'],
        correct: 1,
        fact: 'Usamos “there is” para coisas incontáveis ou no singular no presente.'
      },
      {
        question: '___ three new students in our class this year.',
        translation: 'Há três alunos novos na nossa turma este ano.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 2,
        fact: 'Usamos “there are” com coisas ou pessoas no plural que existem no presente.'
      },
      {
        question: '___ a beautiful old tree in this park now.',
        translation: 'Há uma árvore antiga e bonita neste parque agora.',
        answers: ['There are', 'There were', 'There is', 'There was'],
        correct: 2,
        fact: '“There is” indica que uma coisa no singular existe no presente.'
      },
      {
        question: '___ a big party at the school last Friday.',
        translation: 'Houve uma grande festa na escola na sexta-feira passada.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 2,
        fact: 'Usamos “there was” para falar de algo no singular que aconteceu/existia no passado.'
      },
      {
        question: '___ many colorful balloons at the celebration yesterday.',
        translation: 'Havia muitos balões coloridos na comemoração ontem.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: 'Usamos “there were” para elementos no plural no passado.'
      },
      {
        question: '___ any coffee left in the pot right now?',
        translation: 'Há algum café sobrando no bule agora?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 0,
        fact: 'Para perguntas com substantivos incontáveis (coffee) no presente, usamos “Is there”.'
      },
      {
        question: '___ several messages on your desk this morning.',
        translation: 'Havia várias mensagens na sua mesa esta manhã.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Messages” está no plural e o contexto é passado (this morning), usando “There were”.'
      },
      {
        question: '___ a mistake in the monthly financial report.',
        translation: 'Há um erro no relatório financeiro mensal.',
        answers: ['There are', 'There is', 'There were', 'There be'],
        correct: 1,
        fact: '“A mistake” é singular no presente, exigindo “There is”.'
      },
      {
        question: '___ any seats available for the concert tonight?',
        translation: 'Há assentos disponíveis para o show hoje à noite?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 1,
        fact: 'Para fazer perguntas com palavras no plural (seats) no presente, usamos “Are there”.'
      },
      {
        question: '___ not enough time to complete the project yesterday.',
        translation: 'Não houve tempo suficiente para concluir o projeto ontem.',
        answers: ['There isn\'t', 'There aren\'t', 'There wasn\'t', 'There weren\'t'],
        correct: 2,
        fact: '“Time” é incontável e a frase está no passado (yesterday), logo usamos “There wasn’t”.'
      },

      // 11 a 20
      {
        question: '___ a famous restaurant near the hotel in 2010.',
        translation: 'Havia um restaurante famoso perto do hotel em 2010.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: 'Em 2010 marca um evento passado no singular (a restaurant), usando “There was”.'
      },
      {
        question: '___ many options on the lunch menu today.',
        translation: 'Há muitas opções no cardápio de almoço hoje.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 2,
        fact: '“Many options” indica plural no presente (today), exigindo “There are”.'
      },
      {
        question: '___ any problem with the server last night?',
        translation: 'Houve algum problema com o servidor ontem à noite?',
        answers: ['Is there', 'Was there', 'Are there', 'Were there'],
        correct: 1,
        fact: 'Perguntas no passado (last night) no singular usam “Was there”.'
      },
      {
        question: '___ no sugar in this tea, could you bring me some?',
        translation: 'Não há açúcar neste chá, você poderia me trazer um pouco?',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 0,
        fact: 'Com substantivos incontáveis no presente como “sugar”, usamos “There is”.'
      },
      {
        question: '___ a lot of people waiting outside the theater right now.',
        translation: 'Há muitas pessoas esperando do lado de fora do teatro agora.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: 'A palavra “people” é um plural irregular, necessitando de “There are”.'
      },
      {
        question: '___ two heavy storms in our region last summer.',
        translation: 'Houve duas tempestades fortes em nossa região no verão passado.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 3,
        fact: '“Two heavy storms” é plural e ocorreu no passado, pedindo “There were”.'
      },
      {
        question: '___ a live chat support available on their website?',
        translation: 'Há um suporte por chat ao vivo disponível no site deles?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 0,
        fact: 'Pergunta no presente no singular (a live chat support) utiliza “Is there”.'
      },
      {
        question: '___ any traffic jams on your way home this afternoon?',
        translation: 'Houve engarrafamentos no seu caminho para casa esta tarde?',
        answers: ['Was there', 'Were there', 'Is there', 'Are there'],
        correct: 1,
        fact: '“Traffic jams” está no plural e a frase é interrogativa no passado: “Were there”.'
      },
      {
        question: '___ only one flight available for Paris yesterday.',
        translation: 'Havia apenas um voo disponível para Paris ontem.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“One flight” é singular e a indicação de tempo é passada, exigindo “There was”.'
      },
      {
        question: '___ no reasons to panic about the situation now.',
        translation: 'Não há razões para ter pânico com a situação agora.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Reasons” é plural no presente, então usaremos “There are”.'
      },

      // 21 a 30
      {
        question: '___ an interesting documentary on TV last night?',
        translation: 'Houve um documentário interessante na TV ontem à noite?',
        answers: ['Is there', 'Was there', 'Are there', 'Were there'],
        correct: 1,
        fact: 'Para perguntar no passado sobre um item no singular, usamos “Was there”.'
      },
      {
        question: '___ some fresh apples in the kitchen basket.',
        translation: 'Há algumas maçãs frescas na cesta da cozinha.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Apples” é um substantivo contável no plural, por isso usaremos “There are”.'
      },
      {
        question: '___ no internet connection in the building yesterday.',
        translation: 'Não havia conexão de internet no prédio ontem.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“Internet connection” é singular e a situação ocorreu ontem: “There was”.'
      },
      {
        question: '___ any computers in schools fifty years ago?',
        translation: 'Havia computadores nas escolas cinquenta anos atrás?',
        answers: ['Are there', 'Is there', 'Were there', 'Was there'],
        correct: 2,
        fact: 'Em perguntas no passado sobre coisas no plural (computers), usa-se “Were there”.'
      },
      {
        question: '___ a leak in the bathroom pipe right now.',
        translation: 'Há um vazamento no cano do banheiro agora.',
        answers: ['There are', 'There is', 'There were', 'There was'],
        correct: 1,
        fact: 'No presente e no singular (“a leak”), usamos “There is”.'
      },
      {
        question: '___ many questions during yesterday\'s presentation.',
        translation: 'Houve muitas perguntas durante a apresentação de ontem.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Many questions” está no plural e o tempo verbal é o passado: “There were”.'
      },
      {
        question: '___ any direct flights to London from this airport?',
        translation: 'Há algum voo direto para Londres a partir deste aeroporto?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 1,
        fact: 'A pergunta se refere a “direct flights” (plural) no presente: “Are there”.'
      },
      {
        question: '___ a noise coming from the basement a minute ago.',
        translation: 'Havia um barulho vindo do porão um minuto atrás.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“A noise” é singular e ocorreu no passado recente: “There was”.'
      },
      {
        question: '___ aren\'t any clean towels in the cabinet.',
        translation: 'Não há toalhas limpas no armário.',
        answers: ['There', 'They', 'It', 'Here'],
        correct: 0,
        fact: 'A estrutura para falar da inexistência no plural é “There aren’t”.'
      },
      {
        question: '___ a huge crowd at the stadium during the final match.',
        translation: 'Havia uma multidão enorme no estádio durante a partida final.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 0,
        fact: '“A huge crowd” é um substantivo singular, exigindo “There was” no passado.'
      },

      // 31 a 40
      {
        question: '___ any instructions included in the box?',
        translation: 'Há alguma instrução inclusa na caixa?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 1,
        fact: 'Para o plural “instructions” no presente, a pergunta começa com “Are there”.'
      },
      {
        question: '___ a delay on our flight this morning due to fog.',
        translation: 'Houve um atraso em nosso voo esta manhã devido ao nevoeiro.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“A delay” é um evento no singular no passado, exigindo “There was”.'
      },
      {
        question: '___ some important details missing from this contract.',
        translation: 'Há alguns detalhes importantes faltando neste contrato.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Details” está no plural no presente, requerendo o uso de “There are”.'
      },
      {
        question: '___ any doctors available at the clinic yesterday?',
        translation: 'Havia médicos disponíveis na clínica ontem?',
        answers: ['Are there', 'Were there', 'Is there', 'Was there'],
        correct: 1,
        fact: 'Frase interrogativa no passado para o plural (doctors): “Were there”.'
      },
      {
        question: '___ no water in the bottle, I need to refill it.',
        translation: 'Não há água na garrafa, preciso reenchê-la.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 0,
        fact: 'Substantivo incontável “water” no presente usa “There is”.'
      },
      {
        question: '___ five main chapters in this textbook.',
        translation: 'Há cinco capítulos principais neste livro didático.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Five main chapters” é plural no presente: “There are”.'
      },
      {
        question: '___ a fire in the building last night?',
        translation: 'Houve um incêndio no prédio ontem à noite?',
        answers: ['Is there', 'Was there', 'Are there', 'Were there'],
        correct: 1,
        fact: 'Pergunta no passado singular (a fire): “Was there”.'
      },
      {
        question: '___ many clear nights to watch the stars last week.',
        translation: 'Houve muitas noites límpidas para observar as estrelas na semana passada.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Many clear nights” está no plural e refere-se ao passado: “There were”.'
      },
      {
        question: '___ a customer service counter on the second floor.',
        translation: 'Há um balcão de atendimento ao cliente no segundo andar.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 0,
        fact: 'Elemento singular no presente: “There is”.'
      },
      {
        question: '___ weren\'t any complaints from our clients.',
        translation: 'Não houve reclamações dos nossos clientes.',
        answers: ['There', 'They', 'It', 'Here'],
        correct: 0,
        fact: 'Para indicar a não existência no passado no plural, usamos “There weren’t”.'
      },

      // 41 a 50
      {
        question: '___ a security guard standing at the door right now.',
        translation: 'Há um guarda de segurança parado na porta agora.',
        answers: ['There are', 'There is', 'There were', 'There was'],
        correct: 1,
        fact: '“A security guard” é singular e a ação é no presente: “There is”.'
      },
      {
        question: '___ any heavy traffic on the highway this morning?',
        translation: 'Houve trânsito pesado na rodovia esta manhã?',
        answers: ['Was there', 'Were there', 'Is there', 'Are there'],
        correct: 0,
        fact: '“Traffic” é um substantivo incontável (singular), então a pergunta no passado usa “Was there”.'
      },
      {
        question: '___ three different options for our summer trip.',
        translation: 'Há três opções diferentes para nossa viagem de verão.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Three different options” está no plural e refere-se ao presente: “There are”.'
      },
      {
        question: '___ a power outage in our neighborhood last week.',
        translation: 'Houve uma queda de energia no nosso bairro na semana passada.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“A power outage” no passado exige a forma “There was”.'
      },
      {
        question: '___ any parking spaces left near the restaurant?',
        translation: 'Há vagas de estacionamento sobrando perto do restaurante?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 1,
        fact: 'Pergunta no presente para o plural “parking spaces”: “Are there”.'
      },
      {
        question: '___ no evidence to support that claim during the trial.',
        translation: 'Não havia evidências para sustentar aquela alegação durante o julgamento.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“Evidence” é incontável (trata-se como singular). No passado, usa-se “There was”.'
      },
      {
        question: '___ many wild animals in this forest centuries ago.',
        translation: 'Havia muitos animais selvagens nesta floresta séculos atrás.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Many wild animals” está no plural no passado: “There were”.'
      },
      {
        question: '___ a bakery around here where I can buy fresh bread?',
        translation: 'Há uma padaria por aqui onde eu possa comprar pão fresco?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 0,
        fact: 'Para procurar um local no singular no presente, a pergunta é “Is there”.'
      },
      {
        question: '___ wasn\'t any hot water in the shower this morning.',
        translation: 'Não havia água quente no chuveiro esta manhã.',
        answers: ['There', 'It', 'They', 'Here'],
        correct: 0,
        fact: 'A expressão correta para falta de algo incontável no passado é “There wasn’t”.'
      },
      {
        question: '___ several errors in the computer code.',
        translation: 'Há vários erros no código do computador.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Several errors” é plural e está no presente: “There are”.'
      },

      // 51 a 60
      {
        question: '___ a change in the schedule for tomorrow\'s meeting.',
        translation: 'Há uma mudança no cronograma para a reunião de amanhã.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 0,
        fact: '“A change” é um substantivo no singular presente: “There is”.'
      },
      {
        question: '___ any warnings given before the storm hit?',
        translation: 'Houve avisos dados antes de a tempestade atingir?',
        answers: ['Was there', 'Were there', 'Is there', 'Are there'],
        correct: 1,
        fact: 'Pergunta no passado para “warnings” (plural): “Were there”.'
      },
      {
        question: '___ many children playing in the park yesterday.',
        translation: 'Havia muitas crianças brincando no parque ontem.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Children” é um substantivo no plural e a frase é no passado: “There were”.'
      },
      {
        question: '___ a gym inside the hotel building?',
        translation: 'Há uma academia dentro do prédio do hotel?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 0,
        fact: 'A pergunta sobre a existência presente no singular usa “Is there”.'
      },
      {
        question: '___ no clouds in the sky, it\'s a clear day.',
        translation: 'Não há nuvens no céu, é um dia limpo.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Clouds” está no plural e o tempo do contexto é presente: “There are”.'
      },
      {
        question: '___ a strong wind blowing all afternoon yesterday.',
        translation: 'Havia um vento forte soprando a tarde toda ontem.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“A strong wind” no passado requer “There was”.'
      },
      {
        question: '___ any vegetarian dishes on the dinner menu?',
        translation: 'Há pratos vegetarianos no cardápio de jantar?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 1,
        fact: '“Vegetarian dishes” no plural e no presente: “Are there”.'
      },
      {
        question: '___ two cars parked in front of our garage last night.',
        translation: 'Havia dois carros estacionados na frente da nossa garagem ontem à noite.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Two cars” é plural e o momento é o passado: “There were”.'
      },
      {
        question: '___ a discount on these shoes right now.',
        translation: 'Há um desconto nestes sapatos agora.',
        answers: ['There are', 'There is', 'There were', 'There was'],
        correct: 1,
        fact: '“A discount” está no singular no presente: “There is”.'
      },
      {
        question: '___ any key left on the reception desk yesterday?',
        translation: 'Houve alguma chave deixada no balcão da recepção ontem?',
        answers: ['Was there', 'Were there', 'Is there', 'Are there'],
        correct: 0,
        fact: 'Pergunta no passado para “key” (singular): “Was there”.'
      },

      // 61 a 70
      {
        question: '___ some strange sounds in the attic last week.',
        translation: 'Havia alguns sons estranhos no sótão na semana passada.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Strange sounds” no plural e no passado exige “There were”.'
      },
      {
        question: '___ a cash machine nearby?',
        translation: 'Há um caixa eletrônico por perto?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 0,
        fact: 'Pergunta no presente no singular para saber sobre a existência de algo: “Is there”.'
      },
      {
        question: '___ no fresh bread left at the bakery when I arrived.',
        translation: 'Não havia pão fresco sobrando na padaria quando eu cheguei.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“Fresh bread” é incontável (singular) e a ação ocorreu no passado: “There was”.'
      },
      {
        question: '___ many interested applicants for the job opening.',
        translation: 'Há muitos candidatos interessados para a vaga de emprego.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Many applicants” no presente pede “There are”.'
      },
      {
        question: '___ a beautiful sunset yesterday evening.',
        translation: 'Houve um pôr do sol lindo ontem à tarde.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“A beautiful sunset” no passado leva “There was”.'
      },
      {
        question: '___ any open seats on the late train last night?',
        translation: 'Havia assentos vagos no trem da noite ontem?',
        answers: ['Are there', 'Were there', 'Is there', 'Was there'],
        correct: 1,
        fact: 'Pergunta no passado para “open seats” (plural): “Were there”.'
      },
      {
        question: '___ a lot of dirt on the kitchen floor.',
        translation: 'Há muita sujeira no chão da cozinha.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 0,
        fact: '“Dirt” é um substantivo incontável (trata-se como singular) no presente: “There is”.'
      },
      {
        question: '___ aren\'t any tickets available for tonight\'s match.',
        translation: 'Não há ingressos disponíveis para o jogo de hoje à noite.',
        answers: ['There', 'They', 'It', 'Here'],
        correct: 0,
        fact: 'A estrutura negativa no plural no presente exige o pronome “There”.'
      },
      {
        question: '___ a great concert in the town square last summer.',
        translation: 'Houve um ótimo show na praça da cidade no verão passado.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“A great concert” no passado exige “There was”.'
      },
      {
        question: '___ any water bottles left in the cooler?',
        translation: 'Há alguma garrafa de água sobrando no refrigerador?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 1,
        fact: 'Perguntas para objetos contáveis no plural (“water bottles”) no presente usam “Are there”.'
      },

      // 71 a 80
      {
        question: '___ a few questions after the presentation yesterday.',
        translation: 'Houve algumas perguntas depois da apresentação ontem.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“A few questions” é plural e se refere ao passado: “There were”.'
      },
      {
        question: '___ an urgent message for you on the answering machine.',
        translation: 'Há uma mensagem urgente para você na caixa de mensagens.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 0,
        fact: '“An urgent message” é singular e no presente: “There is”.'
      },
      {
        question: '___ any valid reasons for their absence yesterday?',
        translation: 'Houve razões válidas para a ausência deles ontem?',
        answers: ['Are there', 'Were there', 'Is there', 'Was there'],
        correct: 1,
        fact: 'Frase interrogativa no passado para “reasons” (plural): “Were there”.'
      },
      {
        question: '___ a small garden behind our old house.',
        translation: 'Havia um pequeno jardim atrás da nossa antiga casa.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: 'Refere-se ao passado (“our old house”) no singular: “There was”.'
      },
      {
        question: '___ many flights canceled during the storm last week.',
        translation: 'Houve muitos voos cancelados durante a tempestade na semana passada.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Many flights” no plural e no passado requer “There were”.'
      },
      {
        question: '___ any good movies playing at the cinema this week?',
        translation: 'Há bons filmes passando no cinema esta semana?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 1,
        fact: 'Perguntas sobre “movies” (plural) no presente pedem “Are there”.'
      },
      {
        question: '___ a loud noise outside a few minutes ago.',
        translation: 'Houve um barulho alto lá fora alguns minutos atrás.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: 'Com evento no singular no passado recente, usamos “There was”.'
      },
      {
        question: '___ no reason to worry about the results right now.',
        translation: 'Não há razão para se preocupar com os resultados agora.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 0,
        fact: '“Reason” no singular e no presente exige “There is”.'
      },
      {
        question: '___ four seasons in a year.',
        translation: 'Há quatro estações em um ano.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: 'Trata-se de uma verdade geral no plural: “There are”.'
      },
      {
        question: '___ any security issues during the festival last month?',
        translation: 'Houve problemas de segurança durante o festival no mês passado?',
        answers: ['Was there', 'Were there', 'Is there', 'Are there'],
        correct: 1,
        fact: 'A pergunta trata de “security issues” (plural) no passado: “Were there”.'
      },

      // 81 a 90
      {
        question: '___ a book on the table that belonged to the teacher.',
        translation: 'Havia um livro na mesa que pertencia ao professor.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“A book” no passado requer o uso de “There was”.'
      },
      {
        question: '___ no traffic on the roads early this morning.',
        translation: 'Não havia trânsito nas estradas hoje cedo.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“Traffic” é incontável (singular) e a frase está no passado: “There was”.'
      },
      {
        question: '___ any fruits left in the kitchen basket?',
        translation: 'Há alguma fruta sobrando na cesta da cozinha?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 1,
        fact: 'Para o plural “fruits” no presente, a pergunta começa com “Are there”.'
      },
      {
        question: '___ two new buildings under construction in our street.',
        translation: 'Há dois prédios novos em construção na nossa rua.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Two new buildings” está no plural no presente: “There are”.'
      },
      {
        question: '___ an interesting speech by the CEO yesterday.',
        translation: 'Houve um discurso interessante feito pelo CEO ontem.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“An interesting speech” é singular no passado: “There was”.'
      },
      {
        question: '___ any clean glasses in the kitchen right now?',
        translation: 'Há copos limpos na cozinha agora?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 1,
        fact: 'A pergunta se refere a “glasses” (plural) no presente: “Are there”.'
      },
      {
        question: '___ wasn\'t any electricity in the village last night.',
        translation: 'Não havia eletricidade na vila ontem à noite.',
        answers: ['There', 'They', 'It', 'Here'],
        correct: 0,
        fact: 'Expressão de não existência no passado singular/incontável: “There wasn’t”.'
      },
      {
        question: '___ several options available for our vacation plan.',
        translation: 'Havia várias opções disponíveis para o nosso plano de férias.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Several options” no passado exige o uso de “There were”.'
      },
      {
        question: '___ a customer asking for help at the front desk.',
        translation: 'Há um cliente pedindo ajuda no balcão de atendimento.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 0,
        fact: 'Substantivo singular no presente (“a customer”): “There is”.'
      },
      {
        question: '___ any complaints about the hotel service last week?',
        translation: 'Houve reclamações sobre o serviço do hotel na semana passada?',
        answers: ['Was there', 'Were there', 'Is there', 'Are there'],
        correct: 1,
        fact: 'Pergunta no passado para “complaints” (plural): “Were there”.'
      },

      // 91 a 100
      {
        question: '___ a problem with the internet signal this morning.',
        translation: 'Houve um problema com o sinal de internet esta manhã.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“A problem” no passado requer “There was”.'
      },
      {
        question: '___ many interesting articles in this magazine.',
        translation: 'Há muitos artigos interessantes nesta revista.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Many interesting articles” no presente exige “There are”.'
      },
      {
        question: '___ any rain in your region last month?',
        translation: 'Houve alguma chuva na sua região no mês passado?',
        answers: ['Was there', 'Were there', 'Is there', 'Are there'],
        correct: 0,
        fact: '“Rain” é incontável (trata-se como singular). A pergunta no passado usa “Was there”.'
      },
      {
        question: '___ a grand opening of the shop yesterday afternoon.',
        translation: 'Houve uma grande inauguração da loja ontem à tarde.',
        answers: ['There is', 'There was', 'There are', 'There were'],
        correct: 1,
        fact: '“A grand opening” no passado leva “There was”.'
      },
      {
        question: '___ no computers in this office ten years ago.',
        translation: 'Não havia computadores neste escritório dez anos atrás.',
        answers: ['There was', 'There were', 'There is', 'There are'],
        correct: 1,
        fact: '“Computers” no plural e no passado exige “There were”.'
      },
      {
        question: '___ a pharmacy near the train station?',
        translation: 'Há uma farmácia perto da estação de trem?',
        answers: ['Is there', 'Are there', 'Was there', 'Were there'],
        correct: 0,
        fact: 'Pergunta no presente no singular: “Is there”.'
      },
      {
        question: '___ many wild flowers growing along the road.',
        translation: 'Há muitas flores selvagens crescendo ao longo da estrada.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Many wild flowers” está no plural no presente: “There are”.'
      },
      {
        question: '___ any empty tables at the restaurant last night?',
        translation: 'Havia mesas vazias no restaurante ontem à noite?',
        answers: ['Are there', 'Were there', 'Is there', 'Was there'],
        correct: 1,
        fact: 'A pergunta sobre “empty tables” (plural) no passado exige “Were there”.'
      },
      {
        question: '___ a huge difference between the two proposals.',
        translation: 'Há uma enorme diferença entre as duas propostas.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 0,
        fact: '“A huge difference” no presente é singular: “There is”.'
      },
      {
        question: '___ three dogs playing in the yard right now.',
        translation: 'Há três cachorros brincando no quintal agora.',
        answers: ['There is', 'There are', 'There was', 'There were'],
        correct: 1,
        fact: '“Three dogs” é plural no presente: “There are”.'
      }
    ]
  }