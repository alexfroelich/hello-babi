export default {
    id: 'simple-present',
    label: 'Simple Present',
    description: 'Routines and facts',
    titleFirst: 'Simple',
    titleSecond: 'Present',
    grammarHelp: [
      'Use o <strong>Simple Present</strong> para rotinas, verdades gerais e hábitos.',
      'Na <strong>afirmativa</strong> com <strong>he, she, it</strong>, acrescente <strong>-s, -es, ou -ies</strong> ao verbo.',
      'Na <strong>negativa</strong>, use <strong>don’t</strong> (I/you/we/they) ou <strong>doesn’t</strong> (he/she/it) + verbo na forma base.',
      'Na <strong>interrogativa</strong>, comece com <strong>Do</strong> ou <strong>Does</strong> + sujeito + verbo na forma base.'
    ],
    questions: [
      // 1 a 10
      {
        infinitive: 'to play',
        question: 'Mia ___ soccer every Saturday.',
        translation: 'Mia joga futebol todos os sábados.',
        answers: ['playes', 'plays', 'plaies', 'play'],
        correct: 1,
        fact: 'Com he, she ou it, acrescentamos -s ao verbo: play vira plays.'
      },
      {
        infinitive: 'to go',
        question: 'My brother ___ to school by bus.',
        translation: 'Meu irmão vai para a escola de ônibus.',
        answers: ['gos', 'goes', 'goies', 'go'],
        correct: 1,
        fact: 'Com he, she ou it, “go” recebe -es e vira “goes”.'
      },
      {
        infinitive: 'to study',
        question: 'Ella ___ English after dinner.',
        translation: 'Ella estuda inglês depois do jantar.',
        answers: ['studys', 'studies', 'study', 'studyes'],
        correct: 1,
        fact: 'Quando o verbo termina em consoante + y, trocamos o y por i e acrescentamos -es: studies.'
      },
      {
        infinitive: 'to watch',
        question: 'He ___ TV before bed.',
        translation: 'Ele assiste à TV antes de dormir.',
        answers: ['watchs', 'watches', 'watchies', 'watch'],
        correct: 1,
        fact: 'Verbos terminados em -ch recebem -es com he, she ou it: watches.'
      },
      {
        infinitive: 'to have',
        question: 'Our teacher ___ a red notebook.',
        translation: 'Nosso professor tem um caderno vermelho.',
        answers: ['haves', 'has', 'have', 'hases'],
        correct: 1,
        fact: '“Have” é irregular na terceira pessoa do singular: sua forma é “has”.'
      },
      {
        infinitive: 'to work',
        question: 'They ___ at a tech company in the city center.',
        translation: 'Eles trabalham em uma empresa de tecnologia no centro da cidade.',
        answers: ['works', 'working', 'work', 'workes'],
        correct: 2,
        fact: 'Com o sujeito “they”, o verbo permanece na sua forma base: work.'
      },
      {
        infinitive: 'to live',
        question: 'She ___ in a small apartment near the station.',
        translation: 'Ela mora em um apartamento pequeno perto da estação.',
        answers: ['lives', 'live', 'livs', 'living'],
        correct: 0,
        fact: 'Com “she”, acrescentamos -s ao verbo regular que já termina em e: lives.'
      },
      {
        infinitive: 'to eat',
        question: 'Lucas ___ vegetables with every meal.',
        translation: 'Lucas come vegetais em todas as refeições.',
        answers: ['eats', 'eat', 'eates', 'eating'],
        correct: 0,
        fact: 'Com sujeitos na terceira pessoa (Lucas = he), adicionamos -s ao verbo: eats.'
      },
      {
        infinitive: 'to drink',
        question: '___ you drink coffee in the morning?',
        translation: 'Você bebe café de manhã?',
        answers: ['Does', 'Is', 'Do', 'Are'],
        correct: 2,
        fact: 'Para fazer perguntas no Simple Present com “you”, usamos o verbo auxiliar “Do”.'
      },
      {
        infinitive: 'to like',
        question: 'He ___ like spicy food very much.',
        translation: 'Ele não gosta muito de comida apimentada.',
        answers: ['don\'t', 'doesn\'t', 'isn\'t', 'not'],
        correct: 1,
        fact: 'Para negações na terceira pessoa do singular (he/she/it), usamos “doesn’t”.'
      },

      // 11 a 20
      {
        infinitive: 'to speak',
        question: 'My manager ___ three languages fluently.',
        translation: 'Meu gerente fala três idiomas fluentemente.',
        answers: ['speaks', 'speak', 'speakes', 'speaking'],
        correct: 0,
        fact: 'My manager equivale a he ou she, por isso adicionamos -s ao verbo: speaks.'
      },
      {
        infinitive: 'to teach',
        question: 'Mrs. Davis ___ history at the local high school.',
        translation: 'A Sra. Davis ensina história na escola de ensino médio local.',
        answers: ['teachs', 'teacher', 'teaches', 'teaching'],
        correct: 2,
        fact: 'Verbos terminados em -ch ganham a terminação -es na terceira pessoa: teaches.'
      },
      {
        infinitive: 'to do',
        question: 'She ___ her homework right after class.',
        translation: 'Ela faz o dever de casa logo após a aula.',
        answers: ['dos', 'does', 'doing', 'do'],
        correct: 1,
        fact: 'O verbo “do” na terceira pessoa do singular se transforma em “does”.'
      },
      {
        infinitive: 'to commute',
        question: 'We ___ to work by train every morning.',
        translation: 'Nós viajamos para o trabalho de trem todas as manhãs.',
        answers: ['commutes', 'commuted', 'commute', 'commuting'],
        correct: 2,
        fact: 'Para o pronome “we”, usamos a forma base do verbo: commute.'
      },
      {
        infinitive: 'to finish',
        question: 'The meeting usually ___ around 5 PM.',
        translation: 'A reunião geralmente termina por volta das 17h.',
        answers: ['finishs', 'finishes', 'finish', 'finishing'],
        correct: 1,
        fact: 'Verbos terminados em -sh recebem -es na terceira pessoa do singular: finishes.'
      },
      {
        infinitive: 'to enjoy',
        question: '___ Sarah enjoy spending time outdoors?',
        translation: 'A Sarah gosta de passar tempo ao ar livre?',
        answers: ['Do', 'Is', 'Does', 'Has'],
        correct: 2,
        fact: 'Para perguntas com “Sarah” (she), o verbo auxiliar correto é “Does”.'
      },
      {
        infinitive: 'to know',
        question: 'I ___ know the answer to that complex question.',
        translation: 'Eu não sei a resposta para essa pergunta complexa.',
        answers: ['doesn\'t', 'don\'t', 'not', 'am not'],
        correct: 1,
        fact: 'Com o pronome “I”, usamos a negativa “don’t” (do not).'
      },
      {
        infinitive: 'to fly',
        question: 'The pilot ___ to Europe twice a month.',
        translation: 'O piloto voa para a Europa duas vezes por mês.',
        answers: ['flys', 'flies', 'flyes', 'fly'],
        correct: 1,
        fact: 'Quando o verbo termina em consoante + y (fl-y), trocamos o y por i e adicionamos -es: flies.'
      },
      {
        infinitive: 'to carry',
        question: 'He ___ a heavy backpack to college every day.',
        translation: 'Ele carrega uma mochila pesada para a faculdade todos os dias.',
        answers: ['carrys', 'carries', 'carryes', 'carry'],
        correct: 1,
        fact: 'Terminado em consoante + y, substitui-se o y por -ies com he, she, it: carries.'
      },
      {
        infinitive: 'to take',
        question: '___ they take the bus or drive to work?',
        translation: 'Eles pegam o ônibus ou dirigem para o trabalho?',
        answers: ['Does', 'Do', 'Are', 'Have'],
        correct: 1,
        fact: 'Perguntas com o sujeito “they” exigem o verbo auxiliar “Do”.'
      },

      // 21 a 30
      {
        infinitive: 'to wash',
        question: 'David ___ his car on Sunday mornings.',
        translation: 'David lava o carro dele nos domingos de manhã.',
        answers: ['washs', 'washes', 'washies', 'wash'],
        correct: 1,
        fact: 'Verbos terminados em -sh exigem a terminação -es na 3ª pessoa: washes.'
      },
      {
        infinitive: 'to open',
        question: 'The bakery ___ at 6:00 AM every single day.',
        translation: 'A padaria abre às 6:00 todos os dias.',
        answers: ['opens', 'openes', 'open', 'opening'],
        correct: 0,
        fact: '“The bakery” é singular (it), então acrescentamos -s ao verbo: opens.'
      },
      {
        infinitive: 'to close',
        question: 'The museum ___ not open on Mondays.',
        translation: 'O museu não abre às segundas-feiras.',
        answers: ['is', 'do', 'does', 'has'],
        correct: 2,
        fact: 'Usamos “does not” (ou doesn’t) para negar frases na terceira pessoa no Simple Present.'
      },
      {
        infinitive: 'to practice',
        question: 'We ___ playing the guitar after class.',
        translation: 'Nós praticamos tocar violão depois da aula.',
        answers: ['practices', 'practicing', 'practice', 'practis'],
        correct: 2,
        fact: 'Com o sujeito “we”, o verbo não sofre alterações: practice.'
      },
      {
        infinitive: 'to make',
        question: 'She ___ a delicious cake for her family every weekend.',
        translation: 'Ela faz um bolo delicioso para a família todo fim de semana.',
        answers: ['makes', 'make', 'makees', 'making'],
        correct: 0,
        fact: 'Na terceira pessoa do singular, adicionamos -s ao verbo make: makes.'
      },
      {
        infinitive: 'to travel',
        question: '___ your boss travel a lot for business?',
        translation: 'O seu chefe viaja muito a negócios?',
        answers: ['Do', 'Does', 'Is', 'Has'],
        correct: 1,
        fact: '“Your boss” (ele/ela) é 3ª pessoa do singular, então a pergunta usa “Does”.'
      },
      {
        infinitive: 'to understand',
        question: 'They ___ understand the new safety regulations.',
        translation: 'Eles não entendem os novos regulamentos de segurança.',
        answers: ['doesn\'t', 'don\'t', 'aren\'t', 'not'],
        correct: 1,
        fact: 'Com o sujeito “they”, a forma negativa no Simple Present é “don’t”.'
      },
      {
        infinitive: 'to try',
        question: 'Mark always ___ to do his best in exams.',
        translation: 'Mark sempre tenta dar o seu melhor nas provas.',
        answers: ['trys', 'tries', 'tryes', 'try'],
        correct: 1,
        fact: 'Consoante + y vira -ies na terceira pessoa do singular: tries.'
      },
      {
        infinitive: 'to fix',
        question: 'The mechanic ___ broken engines quickly.',
        translation: 'O mecânico conserta motores quebrados rapidamente.',
        answers: ['fixs', 'fixes', 'fixies', 'fix'],
        correct: 1,
        fact: 'Verbos terminados em -x recebem a terminação -es na 3ª pessoa: fixes.'
      },
      {
        infinitive: 'to need',
        question: 'I ___ some extra help with this project.',
        translation: 'Eu preciso de uma ajuda extra com este projeto.',
        answers: ['needs', 'needing', 'need', 'needes'],
        correct: 2,
        fact: 'Com o pronome “I”, o verbo não recebe -s: need.'
      },

      // 31 a 40
      {
        infinitive: 'to miss',
        question: 'She rarely ___ the morning bus.',
        translation: 'Ela raramente perde o ônibus da manhã.',
        answers: ['misses', 'miss', 'missies', 'misss'],
        correct: 0,
        fact: 'Verbos terminados em -ss ganham -es com he, she, it: misses.'
      },
      {
        infinitive: 'to arrive',
        question: '___ the train arrive on time every day?',
        translation: 'O trem chega no horário todos os dias?',
        answers: ['Do', 'Is', 'Does', 'Are'],
        correct: 2,
        fact: '“The train” equivale a “it”, por isso a pergunta começa com “Does”.'
      },
      {
        infinitive: 'to spend',
        question: 'We ___ too much money on dining out.',
        translation: 'Nós gastamos dinheiro demais comendo fora.',
        answers: ['spends', 'spend', 'spending', 'spendes'],
        correct: 1,
        fact: 'Sujeitos no plural como “we” utilizam o verbo em sua forma base: spend.'
      },
      {
        infinitive: 'to clean',
        question: 'He ___ his room every Saturday morning.',
        translation: 'Ele limpa o quarto dele todo sábado de manhã.',
        answers: ['cleans', 'cleanes', 'clean', 'cleaning'],
        correct: 0,
        fact: 'Para a 3ª pessoa do singular (he), acrescenta-se -s: cleans.'
      },
      {
        infinitive: 'to speak',
        question: '___ you speak French fluently?',
        translation: 'Você fala francês fluentemente?',
        answers: ['Does', 'Are', 'Do', 'Have'],
        correct: 2,
        fact: 'Perguntas direcionadas a “you” usam o auxiliar “Do”.'
      },
      {
        infinitive: 'to want',
        question: 'My friends ___ to move to a bigger city.',
        translation: 'Meus amigos querem se mudar para uma cidade maior.',
        answers: ['wants', 'want', 'wantes', 'wanting'],
        correct: 1,
        fact: '“My friends” é o mesmo que “they”, portanto usamos a forma base: want.'
      },
      {
        infinitive: 'to cost',
        question: 'How much ___ this ticket cost?',
        translation: 'Quanto custa este ingresso?',
        answers: ['do', 'is', 'does', 'are'],
        correct: 2,
        fact: '“This ticket” é singular (it), logo a pergunta exige “does”.'
      },
      {
        infinitive: 'to pay',
        question: 'He ___ his bills on time every month.',
        translation: 'Ele paga suas contas no prazo todo mês.',
        answers: ['payes', 'paies', 'pays', 'pay'],
        correct: 2,
        fact: 'Terminado em vogal + y (p-a-y), apenas acrescenta-se -s: pays.'
      },
      {
        infinitive: 'to worry',
        question: 'She ___ too much about small details.',
        translation: 'Ela se preocupa demais com pequenos detalhes.',
        answers: ['worrys', 'worries', 'worryes', 'worry'],
        correct: 1,
        fact: 'Consoante + y (r + y) troca o y por -ies na 3ª pessoa: worries.'
      },
      {
        infinitive: 'to work',
        question: '___ your parents work at the same office?',
        translation: 'Seus pais trabalham no mesmo escritório?',
        answers: ['Does', 'Do', 'Are', 'Is'],
        correct: 1,
        fact: '“Your parents” é plural (they), então o auxiliar correto para perguntas é “Do”.'
      },

      // 41 a 50
      {
        infinitive: 'to listen',
        question: 'I always ___ to music while studying.',
        translation: 'Eu sempre ouço música enquanto estudo.',
        answers: ['listens', 'listen', 'listenes', 'listening'],
        correct: 1,
        fact: 'Com o sujeito “I”, o verbo fica na forma infinita sem o to: listen.'
      },
      {
        infinitive: 'to buy',
        question: 'He ___ fresh bread from the bakery every day.',
        translation: 'Ele compra pão fresco da padaria todos os dias.',
        answers: ['buys', 'buyes', 'buies', 'buy'],
        correct: 0,
        fact: 'Vogal + y no final recebe apenas -s na 3ª pessoa do singular: buys.'
      },
      {
        infinitive: 'to prepare',
        question: 'The chef ___ special meals for vegetarian clients.',
        translation: 'O chef prepara refeições especiais para clientes vegetarianos.',
        answers: ['prepares', 'prepare', 'prepareses', 'preparing'],
        correct: 0,
        fact: 'The chef (he/she) acrescenta -s à forma base do verbo: prepares.'
      },
      {
        infinitive: 'to sleep',
        question: 'Children usually ___ about 8 to 10 hours a day.',
        translation: 'Crianças geralmente dormem cerca de 8 a 10 horas por dia.',
        answers: ['sleeps', 'sleep', 'sleepes', 'sleeping'],
        correct: 1,
        fact: '“Children” está no plural (they), portanto o verbo fica sem alterações: sleep.'
      },
      {
        infinitive: 'to rain',
        question: 'It rarely ___ in this area during the summer.',
        translation: 'Raramente chove nesta área durante o verão.',
        answers: ['rain', 'rains', 'raines', 'raining'],
        correct: 1,
        fact: 'Com o pronome impessoal “it”, acrescentamos -s ao verbo: rains.'
      },
      {
        infinitive: 'to have',
        question: 'We ___ a team meeting every Monday morning.',
        translation: 'Nós temos uma reunião de equipe toda segunda-feira de manhã.',
        answers: ['has', 'haves', 'have', 'having'],
        correct: 2,
        fact: 'Com o sujeito “we”, usamos a forma base “have”.'
      },
      {
        infinitive: 'to prefer',
        question: 'She ___ tea over coffee in the afternoon.',
        translation: 'Ela prefere chá a café à tarde.',
        answers: ['prefers', 'preferes', 'prefer', 'preferring'],
        correct: 0,
        fact: 'Terceira pessoa do singular leva -s: prefers.'
      },
      {
        infinitive: 'to drive',
        question: '___ Tom drive to work or take the subway?',
        translation: 'O Tom dirige para o trabalho ou pega o metrô?',
        answers: ['Do', 'Does', 'Is', 'Are'],
        correct: 1,
        fact: 'Tom equivale a “he”, então a pergunta inicia com “Does”.'
      },
      {
        infinitive: 'to relax',
        question: 'My father ___ in the garden on Sunday afternoons.',
        translation: 'Meu pai relaxa no jardim nos domingos à tarde.',
        answers: ['relaxs', 'relaxes', 'relaxies', 'relax'],
        correct: 1,
        fact: 'Verbos que terminam em -x ganham a terminação -es para he/she/it: relaxes.'
      },
      {
        infinitive: 'to remember',
        question: 'I ___ always remember people\'s names easily.',
        translation: 'Eu nem sempre me lembro do nome das pessoas facilmente.',
        answers: ['doesn\'t', 'don\'t', 'not', 'am not'],
        correct: 1,
        fact: 'A forma negativa para “I” no Simple Present é “don’t”.'
      },

      // 51 a 60
      {
        infinitive: 'to push',
        question: 'He ___ the door instead of pulling it.',
        translation: 'Ele empurra a porta em vez de puxá-la.',
        answers: ['pushs', 'pushes', 'pushies', 'push'],
        correct: 1,
        fact: 'Verbos terminados em -sh exigem -es na 3ª pessoa do singular: pushes.'
      },
      {
        infinitive: 'to offer',
        question: 'The hotel ___ free breakfast for all guests.',
        translation: 'O hotel oferece café da manhã gratuito para todos os hóspedes.',
        answers: ['offers', 'offeres', 'offer', 'offering'],
        correct: 0,
        fact: 'The hotel (it) leva o verbo com -s no Simple Present: offers.'
      },
      {
        infinitive: 'to reply',
        question: 'The secretary ___ to emails promptly.',
        translation: 'A secretária responde aos e-mails prontamente.',
        answers: ['replys', 'replies', 'replyes', 'reply'],
        correct: 1,
        fact: 'Consoante + y (pl + y) muda para -ies com a 3ª pessoa: replies.'
      },
      {
        infinitive: 'to write',
        question: '___ she write articles for a tech magazine?',
        translation: 'Ela escreve artigos para uma revista de tecnologia?',
        answers: ['Do', 'Does', 'Is', 'Has'],
        correct: 1,
        fact: 'Com o pronome “she”, o auxiliar interrogativo é “Does”.'
      },
      {
        infinitive: 'to call',
        question: 'They ___ their grandparents every Sunday night.',
        translation: 'Eles ligam para os avós todo domingo à noite.',
        answers: ['calls', 'call', 'calles', 'calling'],
        correct: 1,
        fact: 'Na terceira pessoa do plural (they), mantém-se a forma base: call.'
      },
      {
        infinitive: 'to cross',
        question: 'The pedestrian carefully ___ the busy street.',
        translation: 'O pedestre atravessa a rua movimentada com cuidado.',
        answers: ['crosses', 'crosss', 'cross', 'crossies'],
        correct: 0,
        fact: 'Terminado em -ss, o verbo recebe -es na terceira pessoa: crosses.'
      },
      {
        infinitive: 'to sell',
        question: 'This shop ___ handmade wooden furniture.',
        translation: 'Esta loja vende móveis de madeira feitos à mão.',
        answers: ['sells', 'selles', 'sell', 'selling'],
        correct: 0,
        fact: '“This shop” é singular (it), então adicionamos -s ao verbo: sells.'
      },
      {
        infinitive: 'to walk',
        question: '___ you walk to school every morning?',
        translation: 'Você caminha para a escola toda manhã?',
        answers: ['Does', 'Do', 'Are', 'Is'],
        correct: 1,
        fact: 'Para o sujeito “you”, a pergunta no presente simples inicia com “Do”.'
      },
      {
        infinitive: 'to dance',
        question: 'Anna ___ salsa very well.',
        translation: 'Anna dança salsa muito bem.',
        answers: ['dances', 'dancees', 'dance', 'dancing'],
        correct: 0,
        fact: 'Terceira pessoa do singular (Anna = she) acrescenta -s ao verbo: dances.'
      },
      {
        infinitive: 'to help',
        question: 'He ___ his father in the garden on Saturdays.',
        translation: 'Ele ajuda o pai no jardim aos sábados.',
        answers: ['helps', 'helpes', 'help', 'helping'],
        correct: 0,
        fact: 'O verbo regular “help” recebe -s com o sujeito “he”: helps.'
      },

      // 61 a 70
      {
        infinitive: 'to choose',
        question: 'Customers ___ their favorite dishes from the menu.',
        translation: 'Os clientes escolhem seus pratos favoritos do cardápio.',
        answers: ['chooses', 'choose', 'chooseses', 'choosing'],
        correct: 1,
        fact: '“Customers” é plural (they), mantendo o verbo na forma base: choose.'
      },
      {
        infinitive: 'to buzz',
        question: 'The alarm clock ___ loudly at 6 AM.',
        translation: 'O despertador toca (zune) alto às 6h da manhã.',
        answers: ['buzzs', 'buzzes', 'buzz', 'buzzies'],
        correct: 1,
        fact: 'Verbos terminados em -z recebem -es na 3ª pessoa do singular: buzzes.'
      },
      {
        infinitive: 'to attend',
        question: '___ he attend classes regularly?',
        translation: 'Ele frequenta as aulas regularmente?',
        answers: ['Do', 'Is', 'Does', 'Has'],
        correct: 2,
        fact: 'A pergunta para o pronome “he” é iniciada por “Does”.'
      },
      {
        infinitive: 'to cost',
        question: 'These shoes ___ a lot of money.',
        translation: 'Estes sapatos custam muito dinheiro.',
        answers: ['costs', 'cost', 'costes', 'costing'],
        correct: 1,
        fact: '“These shoes” está no plural (they), por isso usamos “cost” sem -s.'
      },
      {
        infinitive: 'to start',
        question: 'The concert ___ at 8:00 PM tonight.',
        translation: 'O show começa às 20h hoje à noite.',
        answers: ['starts', 'startes', 'start', 'starting'],
        correct: 0,
        fact: 'The concert equivale a “it”, adicionando -s ao verbo: starts.'
      },
      {
        infinitive: 'to believe',
        question: 'I ___ not believe that story at all.',
        translation: 'Eu não acredito de forma alguma nessa história.',
        answers: ['does', 'do', 'am', 'is'],
        correct: 1,
        fact: 'Com “I”, usamos “do not” (ou don’t) para formar a negativa.'
      },
      {
        infinitive: 'to discuss',
        question: 'The committee ___ key issues every Tuesday.',
        translation: 'O comitê discute questões importantes toda terça-feira.',
        answers: ['discusses', 'discuss', 'discussies', 'discussesed'],
        correct: 0,
        fact: 'Verbo terminado em -ss ganha a terminação -es na 3ª pessoa: discusses.'
      },
      {
        infinitive: 'to say',
        question: 'The article ___ that technology improves education.',
        translation: 'O artigo diz que a tecnologia melhora a educação.',
        answers: ['sayes', 'saies', 'says', 'say'],
        correct: 2,
        fact: 'Terminado em vogal + y, acrescenta-se apenas -s com “the article” (it): says.'
      },
      {
        infinitive: 'to make',
        question: '___ you make your own lunch every day?',
        translation: 'Você faz seu próprio almoço todos os dias?',
        answers: ['Does', 'Do', 'Are', 'Is'],
        correct: 1,
        fact: 'Para o pronome “you”, a estrutura interrogativa usa “Do”.'
      },
      {
        infinitive: 'to stay',
        question: 'My brother ___ at a hotel when he visits us.',
        translation: 'Meu irmão fica em um hotel quando nos visita.',
        answers: ['staies', 'stays', 'stayes', 'stay'],
        correct: 1,
        fact: 'Vogal + y no final recebe apenas -s na 3ª pessoa do singular: stays.'
      },

      // 71 a 80
      {
        infinitive: 'to exercise',
        question: 'She ___ at the gym three times a week.',
        translation: 'Ela se exercita na academia três vezes por semana.',
        answers: ['exercises', 'exercise', 'exerciseses', 'exercising'],
        correct: 0,
        fact: 'Para a 3ª pessoa do singular (she), acrescentamos -s ao verbo: exercises.'
      },
      {
        infinitive: 'to travel',
        question: 'We ___ to the beach during summer vacations.',
        translation: 'Nós viajamos para a praia durante as férias de verão.',
        answers: ['travels', 'travel', 'travelex', 'traveling'],
        correct: 1,
        fact: 'O pronome “we” não requer alterações no verbo: travel.'
      },
      {
        infinitive: 'to need',
        question: '___ she need a new laptop for work?',
        translation: 'Ela precisa de um notebook novo para o trabalho?',
        answers: ['Do', 'Does', 'Is', 'Has'],
        correct: 1,
        fact: 'Em frases interrogativas com “she”, usa-se o auxiliar “Does”.'
      },
      {
        infinitive: 'to wash',
        question: 'They ___ their dog in the backyard.',
        translation: 'Eles lavam o cachorro deles no quintal.',
        answers: ['washes', 'wash', 'washies', 'washing'],
        correct: 1,
        fact: 'Com “they”, não flexionamos o verbo com -es: wash.'
      },
      {
        infinitive: 'to teach',
        question: '___ Mr. Thompson teach physics?',
        translation: 'O Sr. Thompson ensina física?',
        answers: ['Does', 'Do', 'Is', 'Are'],
        correct: 0,
        fact: 'Mr. Thompson é 3ª pessoa do singular (he), logo usarmos “Does”.'
      },
      {
        infinitive: 'to wear',
        question: 'He ___ a suit to formal events.',
        translation: 'Ele veste um terno em eventos formais.',
        answers: ['wears', 'weares', 'wear', 'wearing'],
        correct: 0,
        fact: 'Com o sujeito “he”, adicionamos -s ao verbo: wears.'
      },
      {
        infinitive: 'to express',
        question: 'Art ___ emotions and ideas.',
        translation: 'A arte expressa emoções e ideias.',
        answers: ['expresses', 'express', 'expresss', 'expressies'],
        correct: 0,
        fact: 'Terminado em -ss, o verbo recebe -es para a terceira pessoa (Art = it): expresses.'
      },
      {
        infinitive: 'to listen',
        question: '___ they listen to podcasts regularly?',
        translation: 'Eles ouvem podcasts regularmente?',
        answers: ['Does', 'Do', 'Are', 'Is'],
        correct: 1,
        fact: 'Perguntas para o sujeito “they” usam o verbo auxiliar “Do”.'
      },
      {
        infinitive: 'to leave',
        question: 'The train ___ at exactly 9:15 AM.',
        translation: 'O trem parte exatamente às 9h15.',
        answers: ['leaves', 'leavees', 'leave', 'leaving'],
        correct: 0,
        fact: '“The train” é 3ª pessoa do singular (it), por isso acrescenta-se -s: leaves.'
      },
      {
        infinitive: 'to clean',
        question: 'We ___ the kitchen after dinner.',
        translation: 'Nós limpamos a cozinha depois do jantar.',
        answers: ['cleans', 'clean', 'cleanes', 'cleaning'],
        correct: 1,
        fact: 'Para o pronome “we”, mantemos a forma original do verbo: clean.'
      },

      // 81 a 90
      {
        infinitive: 'to study',
        question: '___ your brother study engineering at university?',
        translation: 'Seu irmão estuda engenharia na universidade?',
        answers: ['Do', 'Does', 'Is', 'Are'],
        correct: 1,
        fact: '“Your brother” equivale a “he”, então a pergunta começa com “Does”.'
      },
      {
        infinitive: 'to buy',
        question: 'They ___ groceries from the local market.',
        translation: 'Eles compram mantimentos do mercado local.',
        answers: ['buys', 'buy', 'buyes', 'buies'],
        correct: 1,
        fact: 'Com o pronome “they”, o verbo permanece na sua forma base: buy.'
      },
      {
        infinitive: 'to watch',
        question: 'She ___ the evening news every night.',
        translation: 'Ela assiste ao jornal da noite todas as noites.',
        answers: ['watchs', 'watches', 'watchies', 'watch'],
        correct: 1,
        fact: 'Verbos terminados em -ch recebem -es com “she”: watches.'
      },
      {
        infinitive: 'to agree',
        question: 'I ___ not agree with that statement.',
        translation: 'Eu não concordo com essa afirmação.',
        answers: ['does', 'do', 'am', 'are'],
        correct: 1,
        fact: 'Com “I”, a negação utiliza a combinação “do not” (ou don’t).'
      },
      {
        infinitive: 'to fix',
        question: '___ he fix smartphones at his shop?',
        translation: 'Ele conserta smartphones na loja dele?',
        answers: ['Does', 'Do', 'Is', 'Has'],
        correct: 0,
        fact: 'A forma interrogativa no Simple Present para “he” é iniciada por “Does”.'
      },
      {
        infinitive: 'to pass',
        question: 'She easily ___ all her exams.',
        translation: 'Ela passa facilmente em todos os seus exames.',
        answers: ['passes', 'passs', 'pass', 'passies'],
        correct: 0,
        fact: 'Verbos terminados em -ss ganham a terminação -es na 3ª pessoa: passes.'
      },
      {
        infinitive: 'to build',
        question: 'Engineers ___ strong structures for bridges.',
        translation: 'Engenheiros constroem estruturas fortes para pontes.',
        answers: ['builds', 'build', 'buildes', 'building'],
        correct: 1,
        fact: '“Engineers” está no plural (they), por isso usamos a forma base: build.'
      },
      {
        infinitive: 'to fly',
        question: '___ birds fly south during the winter?',
        translation: 'Os passarinhos voam para o sul durante o inverno?',
        answers: ['Does', 'Do', 'Are', 'Is'],
        correct: 1,
        fact: '“Birds” está no plural (they), exigindo o auxiliar “Do” na pergunta.'
      },
      {
        infinitive: 'to organize',
        question: 'He ___ his desk before leaving the office.',
        translation: 'Ele organiza sua mesa antes de sair do escritório.',
        answers: ['organizes', 'organize', 'organizeses', 'organizing'],
        correct: 0,
        fact: 'Adiciona-se -s ao verbo regular que termina em e com o sujeito “he”: organizes.'
      },
      {
        infinitive: 'to drive',
        question: 'She ___ not drive on busy highways.',
        translation: 'Ela não dirige em rodovias movimentadas.',
        answers: ['do', 'does', 'is', 'are'],
        correct: 1,
        fact: 'A forma negativa para “she” exige o verbo auxiliar “does not” (doesn’t).'
      },

      // 91 a 100
      {
        infinitive: 'to change',
        question: 'Technology ___ rapidly every single year.',
        translation: 'A tecnologia muda rapidamente a cada ano.',
        answers: ['changes', 'changees', 'change', 'changing'],
        correct: 0,
        fact: '“Technology” (it) requer o verbo acrescido da letra -s: changes.'
      },
      {
        infinitive: 'to speak',
        question: '___ your friends speak English at work?',
        translation: 'Seus amigos falam inglês no trabalho?',
        answers: ['Does', 'Do', 'Are', 'Is'],
        correct: 1,
        fact: '“Your friends” é o mesmo que “they”, requerendo o auxiliar “Do”.'
      },
      {
        infinitive: 'to cook',
        question: 'My father ___ dinner for us on Fridays.',
        translation: 'Meu pai cozinha o jantar para nós nas sextas-feiras.',
        answers: ['cooks', 'cookes', 'cook', 'cooking'],
        correct: 0,
        fact: 'My father equivale a “he”, portanto adiciona-se -s ao verbo: cooks.'
      },
      {
        infinitive: 'to worry',
        question: 'They ___ not worry about minor problems.',
        translation: 'Eles não se preocupam com problemas menores.',
        answers: ['does', 'do', 'are', 'is'],
        correct: 1,
        fact: 'A forma negativa para “they” é “do not” (don’t).'
      },
      {
        infinitive: 'to catch',
        question: 'He ___ the early train every morning.',
        translation: 'Ele pega o trem das primeiras horas toda manhã.',
        answers: ['catchs', 'catches', 'catchies', 'catch'],
        correct: 1,
        fact: 'Verbos terminados em -ch recebem a terminação -es para he/she/it: catches.'
      },
      {
        infinitive: 'to run',
        question: '___ she run in the park every afternoon?',
        translation: 'Ela corre no parque todas as tardes?',
        answers: ['Do', 'Does', 'Is', 'Has'],
        correct: 1,
        fact: 'Perguntas com o sujeito “she” exigem o auxiliar “Does”.'
      },
      {
        infinitive: 'to cost',
        question: 'Living in the city center ___ more than in the suburbs.',
        translation: 'Morar no centro da cidade custa mais do que nos subúrbios.',
        answers: ['costs', 'cost', 'costes', 'costing'],
        correct: 0,
        fact: '“Living in the city center” é uma ação singular (it), logo usamos “costs”.'
      },
      {
        infinitive: 'to mix',
        question: 'The painter ___ blue and yellow to create green.',
        translation: 'O pintor mistura azul e amarelo para criar verde.',
        answers: ['mixs', 'mixes', 'mixies', 'mix'],
        correct: 1,
        fact: 'Verbos terminados em -x recebem -es na terceira pessoa do singular: mixes.'
      },
      {
        infinitive: 'to prefer',
        question: '___ you prefer online or face-to-face meetings?',
        translation: 'Você prefere reuniões online ou presenciais?',
        answers: ['Does', 'Do', 'Are', 'Is'],
        correct: 1,
        fact: 'A pergunta direta com o pronome “you” utiliza o verbo auxiliar “Do”.'
      },
      {
        infinitive: 'to study',
        question: 'She ___ hard to achieve her career goals.',
        translation: 'Ela estuda bastante para alcançar seus objetivos de carreira.',
        answers: ['studys', 'studies', 'study', 'studyes'],
        correct: 1,
        fact: 'Consoante + y (d + y) em “study” muda para -ies com a 3ª pessoa: studies.'
      }
    ]
  }