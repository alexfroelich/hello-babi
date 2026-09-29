export default {
    id: 'past-continuous',
    label: 'Past Continuous',
    description: 'Actions in progress in the past',
    titleFirst: 'Past',
    titleSecond: 'Continuous',
    grammarHelp: [
      'Use <strong>was / were + verbo com -ing</strong> para ações em andamento no passado.',
      '<strong>I, he, she, it</strong> usam <strong>was</strong>; <strong>you, we, they</strong> usam <strong>were</strong>.',
      'Na <strong>negativa</strong>, acrescente <strong>not</strong> após o verbo to be (was not / wasn’t, were not / weren’t).',
      'Na <strong>interrogativa</strong>, coloque <strong>was ou were antes do sujeito</strong> (Was she...? Were you...?).'
    ],
    questions: [
      // 1 a 10
      {
        infinitive: 'to make',
        question: 'At 8 p.m. yesterday, Ava ___ dinner.',
        translation: 'Às 20h de ontem, Ava estava preparando o jantar.',
        answers: ['were making', 'was making', 'was makeing', 'was make'],
        correct: 1,
        fact: 'Com “Ava” (she) usamos was. Em “make”, o e final cai antes de -ing: was making.'
      },
      {
        infinitive: 'to play',
        question: 'The children ___ outside when it began to rain.',
        translation: 'As crianças estavam brincando lá fora quando começou a chover.',
        answers: ['was playing', 'were playing', 'were plaing', 'were play'],
        correct: 1,
        fact: 'Com “the children” (they) usamos were, seguido de “playing”: were playing.'
      },
      {
        infinitive: 'to sleep',
        question: 'I ___ when you called me.',
        translation: 'Eu estava dormindo quando você me ligou.',
        answers: ['were sleeping', 'was sleeping', 'was sleep', 'was sleepping'],
        correct: 1,
        fact: 'Com “I” usamos was. “Sleep” recebe -ing sem dobrar o p: was sleeping.'
      },
      {
        infinitive: 'to read',
        question: 'He ___ a book while I was cooking.',
        translation: 'Ele estava lendo um livro enquanto eu cozinhava.',
        answers: ['was reading', 'were reading', 'was read', 'was readed'],
        correct: 0,
        fact: 'Com “he” usamos was, seguido da forma com -ing: was reading.'
      },
      {
        infinitive: 'to drive',
        question: 'We ___ home at midnight.',
        translation: 'Nós estávamos dirigindo para casa à meia-noite.',
        answers: ['was driving', 'were driving', 'were driveing', 'were drive'],
        correct: 1,
        fact: 'Com “we” usamos were. O e final de “drive” cai antes de -ing: were driving.'
      },
      {
        infinitive: 'to study',
        question: '___ you studying when the lights went out?',
        translation: 'Você estava estudando quando as luzes se apagaram?',
        response: 'Yes, I was studying for my test.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Em perguntas com o sujeito “you” no passado contínuo, usamos “Were”.'
      },
      {
        infinitive: 'to work',
        question: 'He ___ not working yesterday afternoon.',
        translation: 'Ele não estava trabalhando ontem à tarde.',
        answers: ['was', 'were', 'did', 'is'],
        correct: 0,
        fact: 'Com “he”, a forma negativa no passado contínuo usa “was not” (wasn’t).'
      },
      {
        infinitive: 'to run',
        question: 'The dog ___ across the yard when it slipped.',
        translation: 'O cachorro estava correndo pelo quintal quando escorregou.',
        answers: ['was runing', 'was running', 'were running', 'was run'],
        correct: 1,
        fact: '“The dog” (it) exige was. O verbo CVC “run” dobra a consoante n: was running.'
      },
      {
        infinitive: 'to watch',
        question: '___ she watching the news when I arrived?',
        translation: 'Ela estava assistindo ao jornal quando eu cheguei?',
        response: 'No, she was listening to music.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'Frases interrogativas no Past Continuous para “she” iniciam com “Was”.'
      },
      {
        infinitive: 'to rain',
        question: 'It ___ heavily while we were walking home.',
        translation: 'Estava chovendo forte enquanto estávamos caminhando para casa.',
        answers: ['was raining', 'were raining', 'was rainning', 'was rain'],
        correct: 0,
        fact: 'Com “it” usamos was. “Rain” possui duas vogais antes da consoante, logo não se dobra o n: was raining.'
      },

      // 11 a 20
      {
        infinitive: 'to cook',
        question: '___ they cooking dinner when you arrived at their house?',
        translation: 'Eles estavam cozinhando o jantar quando você chegou na casa deles?',
        response: 'Yes, they were making pasta.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Perguntas com o sujeito “they” no Past Continuous usam “Were”.'
      },
      {
        infinitive: 'to write',
        question: 'The journalist ___ an article when the power cut happened.',
        translation: 'O jornalista estava escrevendo um artigo quando ocorreu o corte de energia.',
        answers: ['was writeing', 'was writing', 'were writing', 'was writting'],
        correct: 1,
        fact: 'Com “the journalist” (he/she) usamos was. O e final de “write” é descartado: was writing.'
      },
      {
        infinitive: 'to wait',
        question: 'We ___ for the bus for over twenty minutes.',
        translation: 'Nós estávamos esperando o ônibus por mais de vinte minutos.',
        answers: ['was waiting', 'were waiting', 'were waitting', 'were wait'],
        correct: 1,
        fact: 'Com “we” usamos foram/were + verbo com -ing: were waiting.'
      },
      {
        infinitive: 'to swim',
        question: '___ he swimming in the lake when you saw him?',
        translation: 'Ele estava nadando no lago quando você o viu?',
        response: 'Yes, he was swimming near the dock.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'Para o pronome “he”, a forma interrogativa no passado contínuo é “Was”.'
      },
      {
        infinitive: 'to prepare',
        question: 'The team ___ a presentation all morning yesterday.',
        translation: 'A equipe estava preparando uma apresentação durante toda a manhã de ontem.',
        answers: ['was preparing', 'were prepareing', 'was prepareing', 'was preparring'],
        correct: 0,
        fact: '“The team” (singular) exige was. Remove-se o e final do verbo: was preparing.'
      },
      {
        infinitive: 'to listen',
        question: 'I ___ to the teacher, so I missed the instructions.',
        translation: 'Eu não estava ouvindo o professor, então perdi as instruções.',
        answers: ['was not listening', 'were not listening', 'was not listenning', 'did not listening'],
        correct: 0,
        fact: 'Com “I”, a negação é “was not listening” (sem dobrar o n em listen).'
      },
      {
        infinitive: 'to travel',
        question: 'They ___ through South America this time last year.',
        translation: 'Eles estavam viajando pela América do Sul nesta época no ano passado.',
        answers: ['was traveling', 'were traveling', 'were travellling', 'were travel'],
        correct: 1,
        fact: 'Com “they” usamos were. No padrão americano, “traveling” tem apenas um l: were traveling.'
      },
      {
        infinitive: 'to clean',
        question: '___ you cleaning the garage all day yesterday?',
        translation: 'Você estava limpando a garagem o dia todo ontem?',
        response: 'Yes, it was completely messy.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Perguntas com “you” exigem a forma “Were”.'
      },
      {
        infinitive: 'to fix',
        question: 'The mechanic ___ the engine when I called him.',
        translation: 'O mecânico estava consertando o motor quando eu lhe liguei.',
        answers: ['was fixing', 'was fixxing', 'were fixing', 'was fix'],
        correct: 0,
        fact: 'Com “the mechanic” (he/she) usamos was. A letra x jamais é dobrada: was fixing.'
      },
      {
        infinitive: 'to practice',
        question: 'The students ___ their presentation before the event started.',
        translation: 'Os estudantes estavam praticando sua apresentação antes de o evento começar.',
        answers: ['was practicing', 'were practiceing', 'were practicing', 'were practiccing'],
        correct: 2,
        fact: '“The students” (they) leva were. Corta-se o e final de “practice”: were practicing.'
      },

      // 21 a 30
      {
        infinitive: 'to shop',
        question: 'She ___ for clothes when she bumped into her old friend.',
        translation: 'Ela estava fazendo compras de roupas quando esbarrou na sua antiga amiga.',
        answers: ['was shoping', 'was shopping', 'were shopping', 'was shop'],
        correct: 1,
        fact: 'Com “she” usamos was. “Shop” é um verbo CVC de uma sílaba, dobrando o p: was shopping.'
      },
      {
        infinitive: 'to lie',
        question: 'He ___ on the grass reading a book when it started to snow.',
        translation: 'Ele estava deitado na grama lendo um livro quando começou a nevar.',
        answers: ['was lieing', 'was lying', 'were lying', 'was lyng'],
        correct: 1,
        fact: 'Com “he” usamos was. Verbos terminados em -ie (como lie) mudam para -ying: was lying.'
      },
      {
        infinitive: 'to talk',
        question: '___ they talking about the new policy during the lunch break?',
        translation: 'Eles estavam falando sobre a nova política durante a pausa para o almoço?',
        response: 'Yes, everyone was discussing it.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Perguntas para o sujeito “they” usam “Were”.'
      },
      {
        infinitive: 'to stop',
        question: 'The train ___ at every small town along the way.',
        translation: 'O trem estava parando em cada pequena cidade ao longo do caminho.',
        answers: ['was stoping', 'was stopping', 'were stopping', 'was stop'],
        correct: 1,
        fact: 'Com “the train” (it) usamos was. “Stop” é um verbo CVC curto, dobrando o p: was stopping.'
      },
      {
        infinitive: 'to fly',
        question: '___ the plane flying at high altitude when the turbulence hit?',
        translation: 'O avião estava voando em alta altitude quando a turbulência atingiu?',
        response: 'Yes, it was at 30,000 feet.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: '“The plane” equivale a “it”, então a pergunta no passado contínuo começa com “Was”.'
      },
      {
        infinitive: 'to walk',
        question: 'We ___ in the park when the thunderstorm began.',
        translation: 'Nós estávamos caminhando no parque quando a tempestade começou.',
        answers: ['was walking', 'were walking', 'were walkking', 'were walk'],
        correct: 1,
        fact: 'Com “we” usamos a forma do verbo to be “were”: were walking.'
      },
      {
        infinitive: 'to speak',
        question: 'Why ___ you speaking so loudly during the movie?',
        translation: 'Por que você estava falando tão alto durante o filme?',
        response: 'Because my friend couldn\'t hear me well.',
        answers: ['was', 'were', 'did', 'are'],
        correct: 1,
        fact: 'Perguntas com o pronome “you” no tempo passado contínuo exigem “were”.'
      },
      {
        infinitive: 'to dance',
        question: 'They ___ at the party when the lights suddenly went out.',
        translation: 'Eles estavam dançando na festa quando as luzes se apagaram de repente.',
        answers: ['were danceing', 'were dancing', 'was dancing', 'were danccing'],
        correct: 1,
        fact: 'Com “they” usamos were. O e final de “dance” é removido: were dancing.'
      },
      {
        infinitive: 'to sit',
        question: 'She ___ by the window watching the rain fall.',
        translation: 'Ela estava sentada perto da janela assistindo à chuva cair.',
        answers: ['was siting', 'was sitting', 'were sitting', 'was siteing'],
        correct: 1,
        fact: 'Com “she” usamos was. “Sit” é verbo CVC de uma sílaba, dobrando o t: was sitting.'
      },
      {
        infinitive: 'to plan',
        question: '___ you planning a trip to Europe last summer?',
        translation: 'Você estava planejando uma viagem para a Europa no verão passado?',
        response: 'Yes, but we had to cancel it.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'A estrutura interrogativa no passado para “you” utiliza “Were”.'
      },

      // 31 a 40
      {
        infinitive: 'to build',
        question: 'The workers ___ a new bridge when the accident occurred.',
        translation: 'Os trabalhadores estavam construindo uma nova ponte quando o acidente ocorreu.',
        answers: ['was building', 'were building', 'were buildding', 'were build'],
        correct: 1,
        fact: '“The workers” (they) exige o auxiliar were: were building.'
      },
      {
        infinitive: 'to put',
        question: 'He ___ his tools away when the boss called him.',
        translation: 'Ele estava guardando suas ferramentas quando o chefe o chamou.',
        answers: ['was puting', 'was putting', 'were putting', 'was put'],
        correct: 1,
        fact: 'Com “he” usamos was. “Put” segue a regra CVC e dobra o t: was putting.'
      },
      {
        infinitive: 'to perform',
        question: '___ the musicians performing when you entered the hall?',
        translation: 'Os músicos estavam se apresentando quando você entrou no salão?',
        response: 'Yes, they were playing a classical song.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: '“The musicians” está no plural (they), pedindo o verbo “Were”.'
      },
      {
        infinitive: 'to smile',
        question: 'She ___ at the old photographs when I walked in.',
        translation: 'Ela estava sorrindo para as fotos antigas quando eu entrei.',
        answers: ['was smileing', 'was smiling', 'were smiling', 'was smilling'],
        correct: 1,
        fact: 'Com “she” usamos was. Retira-se a letra e final de “smile”: was smiling.'
      },
      {
        infinitive: 'to discuss',
        question: 'The directors ___ the budget cuts all afternoon.',
        translation: 'Os diretores estavam discutindo os cortes de orçamento a tarde toda.',
        answers: ['was discussing', 'were discussing', 'were discuss', 'were discussings'],
        correct: 1,
        fact: '“The directors” está no plural (they), exigindo o uso de were: were discussing.'
      },
      {
        infinitive: 'to wear',
        question: '___ he wearing a dark coat last night?',
        translation: 'Ele estava vestindo um casaco escuro ontem à noite?',
        response: 'Yes, he had a black coat on.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'Perguntas no Past Continuous direcionadas ao pronome “he” começam com “Was”.'
      },
      {
        infinitive: 'to open',
        question: 'The store clerk ___ the shop when the customer arrived.',
        translation: 'O funcionário da loja estava abrindo a loja quando o cliente chegou.',
        answers: ['was openning', 'was opening', 'were opening', 'was open'],
        correct: 1,
        fact: '“Open” tem a tônica na primeira sílaba (O-pen), portanto não se dobra o n: was opening.'
      },
      {
        infinitive: 'to cut',
        question: 'The chef ___ the vegetables while the assistant prepared the meat.',
        translation: 'O chef estava cortando os vegetais enquanto o assistente preparava a carne.',
        answers: ['was cuting', 'was cutting', 'were cutting', 'was cut'],
        correct: 1,
        fact: 'Com “the chef” (he/she) usamos was. Verbo CVC curto “cut” dobra o t: was cutting.'
      },
      {
        infinitive: 'to change',
        question: 'The market conditions ___ rapidly during that period.',
        translation: 'As condições de mercado estavam mudando rapidamente durante aquele período.',
        answers: ['was changing', 'were changing', 'were changeing', 'were changging'],
        correct: 1,
        fact: '“Conditions” está no plural (they), portanto usamos were: were changing.'
      },
      {
        infinitive: 'to complain',
        question: '___ they complaining about the bad hotel service?',
        translation: 'Eles estavam se queixando do péssimo serviço do hotel?',
        response: 'Yes, they were very unhappy.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Para o sujeito “they”, a frase interrogativa no passado inicia com “Were”.'
      },

      // 41 a 50
      {
        infinitive: 'to win',
        question: 'Our team ___ the game until the opponent scored at the last minute.',
        translation: 'Nosso time estava ganhando o jogo até o adversário marcar no último minuto.',
        answers: ['was wining', 'was winning', 'were winning', 'was win'],
        correct: 1,
        fact: '“Our team” (it) exige was. “Win” é um verbo CVC de uma sílaba, dobrando o n: was winning.'
      },
      {
        infinitive: 'to leave',
        question: 'They ___ the building when the alarm sounded.',
        translation: 'Eles estavam saindo do prédio quando o alarme soou.',
        answers: ['was leaving', 'were leaving', 'were leaveing', 'were leavving'],
        correct: 1,
        fact: 'Com “they” usamos were. O e final cai antes da adição do sufixo -ing: were leaving.'
      },
      {
        infinitive: 'to pay',
        question: '___ she paying attention to what the manager was saying?',
        translation: 'Ela estava prestando atenção ao que o gerente estava dizendo?',
        response: 'No, she was taking notes on something else.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'Perguntas no Past Continuous para o pronome “she” começam com “Was”.'
      },
      {
        infinitive: 'to begin',
        question: 'The show ___ just as we walked into the theater.',
        translation: 'O show estava começando bem quando entramos no teatro.',
        answers: ['was begining', 'was beginning', 'were beginning', 'was begin'],
        correct: 1,
        fact: '“The show” (it) usa was. “Begin” tem tônica na última sílaba CVC (be-GIN), dobrando o n: was beginning.'
      },
      {
        infinitive: 'to paint',
        question: 'He ___ the kitchen wall when he dropped the brush.',
        translation: 'Ele estava pintando a parede da cozinha quando deixou o pincel cair.',
        answers: ['was painting', 'were painting', 'was paintting', 'was paint'],
        correct: 0,
        fact: 'Com “he” usamos was. O verbo “paint” recebe -ing normalmente: was painting.'
      },
      {
        infinitive: 'to try',
        question: 'I ___ to call you all morning, but your phone was turned off.',
        translation: 'Eu estava tentando te ligar a manhã toda, mas seu telefone estava desligado.',
        answers: ['was trying', 'were trying', 'was tring', 'was try'],
        correct: 0,
        fact: 'Com o pronome “I” usamos was. O verbo “try” mantém a letra y: was trying.'
      },
      {
        infinitive: 'to get',
        question: 'It ___ darker as we hiked down the mountain.',
        translation: 'Estava ficando mais escuro enquanto descíamos a montanha.',
        answers: ['was geting', 'was getting', 'were getting', 'was get'],
        correct: 1,
        fact: 'Com “it” usamos was. “Get” é verbo de uma sílaba CVC, dobrando o t: was getting.'
      },
      {
        infinitive: 'to stay',
        question: '___ they staying at a hotel near the station?',
        translation: 'Eles estavam ficando em um hotel perto da estação?',
        response: 'Yes, they stayed there for three nights.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'A forma interrogativa no Past Continuous para o sujeito “they” exige “Were”.'
      },
      {
        infinitive: 'to tie',
        question: 'The runner ___ his shoelaces when the race started.',
        translation: 'O corredor estava amarrando os cadarços dos sapatos quando a corrida começou.',
        answers: ['was tieing', 'was tying', 'were tying', 'was tyng'],
        correct: 1,
        fact: 'Com “the runner” (he/she) usamos was. Verbos em -ie trocam a terminação por -y + ing: was tying.'
      },
      {
        infinitive: 'to drink',
        question: 'We ___ coffee while waiting for our flight to board.',
        translation: 'Nós estávamos bebendo café enquanto esperávamos nosso voo embarcar.',
        answers: ['was drinking', 'were drinking', 'were drinkking', 'were drink'],
        correct: 1,
        fact: 'Com o sujeito “we”, usamos o auxiliar “were” seguido de -ing: were drinking.'
      },

      // 51 a 60
      {
        infinitive: 'to forget',
        question: 'I realized I ___ my key details during the presentation.',
        translation: 'Percebi que não estava esquecendo meus detalhes principais durante a apresentação.',
        answers: ['was not forgetting', 'were not forgetting', 'was not forgeting', 'did not forgetting'],
        correct: 0,
        fact: 'Com “I”, usaremos “was not forgetting”. “Forget” tem a tônica na última sílaba (for-GET) CVC, dobrando o t.'
      },
      {
        infinitive: 'to call',
        question: '___ she calling her doctor when you entered the room?',
        translation: 'Ela estava ligando para o médico dela quando você entrou no quarto?',
        response: 'Yes, she needed to reschedule her appointment.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'Perguntas direcionadas ao pronome “she” iniciam com “Was”.'
      },
      {
        infinitive: 'to organize',
        question: 'The assistant ___ the files when the computer crashed.',
        translation: 'O assistente estava organizando os arquivos quando o computador travou.',
        answers: ['was organizeing', 'was organizing', 'were organizing', 'was organizzing'],
        correct: 1,
        fact: 'Com “the assistant” (he/she) usamos was. O e final do verbo é eliminado: was organizing.'
      },
      {
        infinitive: 'to look',
        question: 'We ___ for a parking space when we found a spot on the street.',
        translation: 'Nós estávamos procurando por uma vaga de estacionamento quando encontramos um lugar na rua.',
        answers: ['was looking', 'were looking', 'were lookking', 'were look'],
        correct: 1,
        fact: 'Com o pronome “we” usamos a estrutura “were looking”.'
      },
      {
        infinitive: 'to explain',
        question: 'The professor ___ the theory when the bell rang.',
        translation: 'O professor estava explicando a teoria quando o sinal tocou.',
        answers: ['was explaining', 'were explaining', 'was explainning', 'was explain'],
        correct: 0,
        fact: '“The professor” (he/she) exige was. Adiciona-se -ing a “explain”: was explaining.'
      },
      {
        infinitive: 'to test',
        question: '___ the engineers testing the new equipment yesterday?',
        translation: 'Os engenheiros estavam testando os novos equipamentos ontem?',
        response: 'Yes, they conducted tests all afternoon.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: '“Engineers” está no plural (they), exigindo “Were” no início da pergunta.'
      },
      {
        infinitive: 'to improve',
        question: 'His condition ___ before he suffered a setback.',
        translation: 'A condição dele estava melhorando antes de sofrer uma recaída.',
        answers: ['was improving', 'were improving', 'was improveing', 'was improvering'],
        correct: 0,
        fact: '“His condition” (it) exige was. Remove-se a letra e final de “improve”: was improving.'
      },
      {
        infinitive: 'to pack',
        question: 'They ___ their bags when the taxicab arrived.',
        translation: 'Eles estavam arrumando suas malas quando o táxi chegou.',
        answers: ['was packing', 'were packing', 'were packking', 'were pack'],
        correct: 1,
        fact: 'Com “they” utilizamos were + o verbo com o sufixo -ing: were packing.'
      },
      {
        infinitive: 'to offer',
        question: 'The company ___ discounts during the holiday season.',
        translation: 'A empresa estava oferecendo descontos durante a temporada de festas.',
        answers: ['was offering', 'were offering', 'was offerring', 'was offer'],
        correct: 0,
        fact: '“The company” (it) usa was. A sílaba tônica é a primeira (OF-fer), sem dobrar a letra r: was offering.'
      },
      {
        infinitive: 'to hold',
        question: '___ he holding the umbrella when it started raining?',
        translation: 'Ele estava segurando o guarda-chuva quando começou a chover?',
        response: 'Yes, he was holding it for both of us.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'Perguntas com “he” no tempo passado contínuo iniciam com “Was”.'
      },

      // 61 a 70
      {
        infinitive: 'to dig',
        question: 'The gardener ___ a hole in the backyard when he found an old coin.',
        translation: 'O jardinheiro estava cavando um buraco no quintal quando encontrou uma moeda antiga.',
        answers: ['was diging', 'was digging', 'were digging', 'was dig'],
        correct: 1,
        fact: '“The gardener” (he/she) exige was. O verbo CVC “dig” dobra a letra g: was digging.'
      },
      {
        infinitive: 'to spend',
        question: 'I ___ too much money on dining out last month.',
        translation: 'Eu estava gastando dinheiro demais comendo fora no mês passado.',
        answers: ['was spending', 'were spending', 'was spendding', 'was spend'],
        correct: 0,
        fact: 'Com o pronome “I” usamos a forma “was spending”.'
      },
      {
        infinitive: 'to show',
        question: 'He ___ us his photo album when the doorbell rang.',
        translation: 'Ele estava nos mostrando o álbum de fotos dele quando a campainha tocou.',
        answers: ['was showing', 'were showing', 'was showwing', 'was show'],
        correct: 0,
        fact: 'Com “he” usamos was seguido de -ing adicionado a “show”: was showing.'
      },
      {
        infinitive: 'to push',
        question: '___ the people pushing to get into the venue?',
        translation: 'As pessoas estavam empurrando para entrar no local?',
        response: 'Yes, the crowd was very impatient.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: '“The people” está no plural (they), exigindo “Were” no início da pergunta.'
      },
      {
        infinitive: 'to ring',
        question: 'The phone ___ constantly while I was trying to work.',
        translation: 'O telefone estava tocando constantemente enquanto eu tentava trabalhar.',
        answers: ['was ringing', 'were ringing', 'was ringging', 'was ring'],
        correct: 0,
        fact: '“The phone” (it) usa was. Adiciona-se -ing a “ring”: was ringing.'
      },
      {
        infinitive: 'to follow',
        question: 'We ___ the GPS instructions, but we still got lost.',
        translation: 'Nós estávamos seguindo as instruções do GPS, mas ainda assim nos perdemos.',
        answers: ['was following', 'were following', 'were followwing', 'were follow'],
        correct: 1,
        fact: 'Com o sujeito “we” usamos o auxiliar “were”: were following.'
      },
      {
        infinitive: 'to visit',
        question: '___ they visiting their relatives in Canada last summer?',
        translation: 'Eles estavam visitando seus parentes no Canadá no verão passado?',
        response: 'Yes, they stayed there for two weeks.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Pergunta para o pronome “they” exige a forma “Were”.'
      },
      {
        infinitive: 'to design',
        question: 'The architect ___ a new hospital building when he received the call.',
        translation: 'O arquiteto estava projetando um novo prédio hospitalar quando recebeu a ligação.',
        answers: ['was designing', 'were designing', 'was designning', 'was design'],
        correct: 0,
        fact: '“The architect” (he/she) usa was + o verbo acrescido de -ing: was designing.'
      },
      {
        infinitive: 'to type',
        question: 'She ___ an email to her manager when the screen froze.',
        translation: 'Ela estava digitando um e-mail para o gerente dela quando a tela travou.',
        answers: ['was typeing', 'was typing', 'were typing', 'was typping'],
        correct: 1,
        fact: 'Com “she” usamos was. O e final do verbo “type” cai antes de -ing: was typing.'
      },
      {
        infinitive: 'to carry',
        question: '___ he carrying heavy boxes when you saw him?',
        translation: 'Ele estava carregando caixas pesadas quando você o viu?',
        response: 'Yes, he was moving some old equipment.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'Frase interrogativa direcionada ao pronome “he” usa “Was”.'
      },

      // 71 a 80
      {
        infinitive: 'to enjoy',
        question: 'Everyone ___ the evening concert until it started to rain.',
        translation: 'Todo mundo estava aproveitando o show noturno até começar a chover.',
        answers: ['were enjoying', 'was enjoying', 'was enjoing', 'were enjoing'],
        correct: 1,
        fact: 'O pronome indefinido “everyone” é gramaticalmente singular, usando “was enjoying”.'
      },
      {
        infinitive: 'to exercise',
        question: 'I ___ at the gym when you called me yesterday.',
        translation: 'Eu estava me exercitando na academia quando você me ligou ontem.',
        answers: ['was exercising', 'were exercising', 'was exerciseing', 'was exercissing'],
        correct: 0,
        fact: 'Com o pronome “I” usamos was. O e final de “exercise” cai antes do sufixo -ing: was exercising.'
      },
      {
        infinitive: 'to teach',
        question: '___ the instructor teaching when the alarm went off?',
        translation: 'O instrutor estava ensinando quando o alarme disparou?',
        response: 'Yes, he was explaining a new lesson.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: '“The instructor” (he/she) pede o auxiliar “Was” em perguntas.'
      },
      {
        infinitive: 'to cross',
        question: 'The pedestrians ___ the street when the light changed.',
        translation: 'Os pedestres estavam atravessando a rua quando o sinal mudou.',
        answers: ['was crossing', 'were crossing', 'were crosssing', 'were cross'],
        correct: 1,
        fact: '“The pedestrians” está no plural (they), exigindo o uso de were: were crossing.'
      },
      {
        infinitive: 'to learn',
        question: '___ you learning German when you lived in Berlin?',
        translation: 'Você estava aprendendo alemão quando morava em Berlim?',
        response: 'Yes, I was taking daily classes.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Perguntas direcionadas ao sujeito “you” começam com “Were”.'
      },
      {
        infinitive: 'to rob',
        question: 'The thieves ___ the bank when the security team arrived.',
        translation: 'Os ladrões estavam roubando o banco quando a equipe de segurança chegou.',
        answers: ['was robbing', 'were robbing', 'were robing', 'were rob'],
        correct: 1,
        fact: '“The thieves” está no plural (they). “Rob” é CVC de uma sílaba, dobrando o b: were robbing.'
      },
      {
        infinitive: 'to perform',
        question: 'She ___ on stage when her microphone suddenly stopped working.',
        translation: 'Ela estava se apresentando no palco quando o microfone dela parou de funcionar de repente.',
        answers: ['was performing', 'were performing', 'was performming', 'was perform'],
        correct: 0,
        fact: 'Com “she” usamos was. Adiciona-se o sufixo -ing ao verbo: was performing.'
      },
      {
        infinitive: 'to miss',
        question: 'I realized I ___ my daily bus while checking my phone.',
        translation: 'Percebi que estava perdendo meu ônibus diário enquanto olhava o celular.',
        answers: ['was missing', 'were missing', 'was missging', 'did missing'],
        correct: 0,
        fact: 'Com o pronome “I” usamos a estrutura “was missing”.'
      },
      {
        infinitive: 'to cost',
        question: '___ the repairs costing more than you expected?',
        translation: 'Os consertos estavam custando mais do que você esperava?',
        response: 'Yes, they were quite expensive.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: '“The repairs” está no plural (they), exigindo a forma interrogativa “Were”.'
      },
      {
        infinitive: 'to pass',
        question: 'Cars ___ by rapidly while we stood by the highway.',
        translation: 'Carros estavam passando rapidamente enquanto estávamos à beira da rodovia.',
        answers: ['was passing', 'were passing', 'were passsing', 'were pass'],
        correct: 1,
        fact: '“Cars” é um substantivo no plural (they), necessitando de “were passing”.'
      },

      // 81 a 90
      {
        infinitive: 'to bake',
        question: 'My grandmother ___ bread when the power went out.',
        translation: 'Minha avó estava assando pão quando a energia caiu.',
        answers: ['was bakeing', 'was baking', 'were baking', 'was bakking'],
        correct: 1,
        fact: '“My grandmother” (she) exige was. O e final do verbo “bake” é descartado: was baking.'
      },
      {
        infinitive: 'to chat',
        question: '___ they chatting online when you joined the call?',
        translation: 'Eles estavam conversando online quando você entrou na chamada?',
        response: 'Yes, they were discussing the upcoming trip.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Frases interrogativas no passado contínuo para “they” iniciam com “Were”.'
      },
      {
        infinitive: 'to build',
        question: 'The company ___ a new headquarters during that year.',
        translation: 'A empresa estava construindo uma nova sede durante aquele ano.',
        answers: ['was building', 'were building', 'was buildding', 'was build'],
        correct: 0,
        fact: '“The company” (it) exige a forma singular “was building”.'
      },
      {
        infinitive: 'to try',
        question: '___ she trying to reach her brother all afternoon?',
        translation: 'Ela estava tentando falar com o irmão dela a tarde toda?',
        response: 'Yes, but his line was constantly busy.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'Perguntas com “she” no Past Continuous usam o verbo auxiliar “Was”.'
      },
      {
        infinitive: 'to fly',
        question: 'Birds ___ south in large groups as winter approached.',
        translation: 'Pássaros estavam voando para o sul em grandes grupos enquanto o inverno se aproximava.',
        answers: ['was flying', 'were flying', 'were fling', 'were fly'],
        correct: 1,
        fact: '“Birds” está no plural (they), usando o verbo no passado “were flying”.'
      },
      {
        infinitive: 'to organize',
        question: 'He ___ his desk when he accidentally spilled his tea.',
        translation: 'Ele estava organizando sua mesa quando acidentalmente derramou seu chá.',
        answers: ['was organizeing', 'was organizing', 'were organizing', 'was organizzing'],
        correct: 1,
        fact: 'Com “he” usamos was. O e final do verbo “organize” é descartado: was organizing.'
      },
      {
        infinitive: 'to discuss',
        question: 'We ___ our plans for the weekend when the phone rang.',
        translation: 'Nós estávamos discutindo nossos planos para o fim de semana quando o telefone tocou.',
        answers: ['was discussing', 'were discussing', 'were discuss', 'were discussings'],
        correct: 1,
        fact: 'Com o pronome “we” usamos o auxiliar “were”: were discussing.'
      },
      {
        infinitive: 'to wash',
        question: '___ you washing the dishes when I knocked on the door?',
        translation: 'Você estava lavando a louça quando eu bati à porta?',
        response: 'Yes, I had my hands full of soap.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'A forma interrogativa com “you” no passado contínuo começa com “Were”.'
      },
      {
        infinitive: 'to leave',
        question: 'The guests ___ the party when the host made an announcement.',
        translation: 'Os convidados estavam saindo da festa quando o anfitrião fez um anúncio.',
        answers: ['was leaving', 'were leaving', 'were leaveing', 'were leavving'],
        correct: 1,
        fact: '“The guests” (they) leva foram/were. Remove-se o e final de “leave”: were leaving.'
      },
      {
        infinitive: 'to study',
        question: 'She ___ hard for her exam, so she didn\'t go out.',
        translation: 'Ela estava estudando bastante para a prova dela, então não saiu.',
        answers: ['was studing', 'was studying', 'were studying', 'was study'],
        correct: 1,
        fact: 'Com “she” usamos was. Manter o y e adicionar -ing: was studying.'
      },

      // 91 a 100
      {
        infinitive: 'to run',
        question: '___ he running in the park when he twisted his ankle?',
        translation: 'Ele estava correndo no parque quando torceu o tornozelo?',
        response: 'Yes, he fell near the entrance.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'Perguntas no tempo contínuo do passado com “he” usam “Was”.'
      },
      {
        infinitive: 'to cook',
        question: 'The chef ___ a special meal when the inspectors arrived.',
        translation: 'O chef estava cozinhando uma refeição especial quando os inspetores chegaram.',
        answers: ['was cooking', 'were cooking', 'was cookking', 'was cook'],
        correct: 0,
        fact: '“The chef” (he/she) exige was. O verbo “cook” recebe -ing normalmente: was cooking.'
      },
      {
        infinitive: 'to rain',
        question: '___ it raining when you left the office this afternoon?',
        translation: 'Estava chovendo quando você saiu do escritório esta tarde?',
        response: 'No, it had stopped a few minutes before.',
        answers: ['Were', 'Was', 'Did', 'Is'],
        correct: 1,
        fact: 'A pergunta impessoal no passado com “it” começa com “Was”.'
      },
      {
        infinitive: 'to drive',
        question: 'They ___ carefully through the fog when they saw the deer.',
        translation: 'Eles estavam dirigindo cuidadosamente pelo nevoeiro quando viram o cervo.',
        answers: ['was driving', 'were driving', 'were driveing', 'were drive'],
        correct: 1,
        fact: 'Com “they” usamos were. O e final do verbo “drive” cai antes de -ing: were driving.'
      },
      {
        infinitive: 'to sleep',
        question: 'I ___ when the loud thunder woke me up.',
        translation: 'Eu estava dormindo quando o trovão alto me acordou.',
        answers: ['was sleeping', 'were sleeping', 'was sleep', 'was sleepping'],
        correct: 0,
        fact: 'Com “I” usamos was. O verbo “sleep” ganha -ing sem alterações: was sleeping.'
      },
      {
        infinitive: 'to listen',
        question: '___ you listening to the radio when the breaking news was announced?',
        translation: 'Você estava ouvindo o rádio quando o boletim de última hora foi anunciado?',
        response: 'Yes, I heard the whole broadcast.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Em frases interrogativas no passado para o pronome “you”, usaremos “Were”.'
      },
      {
        infinitive: 'to wait',
        question: 'She ___ for her sister at the cafe when I ran into her.',
        translation: 'Ela estava esperando pela irmã no café quando esbarrei com ela.',
        answers: ['was waiting', 'were waiting', 'was waitting', 'was wait'],
        correct: 0,
        fact: 'Com “she” usamos was + verbo com -ing: was waiting.'
      },
      {
        infinitive: 'to make',
        question: 'We ___ plans for our anniversary when he got the promotion.',
        translation: 'Nós estávamos fazendo planos para o nosso aniversário quando ele recebeu a promoção.',
        answers: ['was making', 'were making', 'were makeing', 'were make'],
        correct: 1,
        fact: 'Com “we” usamos were. O e final de “make” cai antes de acrescentar -ing: were making.'
      },
      {
        infinitive: 'to wear',
        question: 'He ___ his glasses, so he couldn\'t read the sign.',
        translation: 'Ele não estava usando os óculos dele, por isso não conseguiu ler a placa.',
        answers: ['was not wearing', 'were not wearing', 'was not weering', 'did not wearing'],
        correct: 0,
        fact: 'Com “he”, a negação no Past Continuous é “was not wearing” (wasn’t wearing).'
      },
      {
        infinitive: 'to work',
        question: '___ they working on the proposal all night long?',
        translation: 'Eles estavam trabalhando na proposta a noite toda?',
        response: 'Yes, they submitted it early this morning.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'A estrutura interrogativa no Past Continuous para o sujeito “they” exige “Were”.'
      }
    ]
}