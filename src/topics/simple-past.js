export default {
    id: 'simple-past',
    label: 'Simple Past',
    description: 'Completed actions',
    titleFirst: 'Simple',
    titleSecond: 'Past',
    grammarHelp: [
      'Use o <strong>Simple Past</strong> para ações concluídas no passado.',
      'Verbos regulares geralmente recebem <strong>-ed</strong>; verbos irregulares têm formas próprias.',
      'Expressões como <strong>yesterday</strong> e <strong>last weekend</strong> indicam quando a ação aconteceu.'
    ],
  questions:[
  {
    infinitive: 'to read',
    question: 'Yesterday, I ___ a fascinating book.',
    translation: 'Ontem, eu li um livro fascinante.',
    answers: ['readed', 'read', 'readid', 'readeded'],
    correct: 1,
    fact: 'O passado de “read” é escrito igual ao infinitivo: read. A pronúncia muda para “red”.'
  },
  {
    infinitive: 'to play',
    question: 'Last weekend, Mia ___ soccer with her friends.',
    translation: 'No fim de semana passado, Mia jogou futebol com os amigos.',
    answers: ['playd', 'played', 'plaied', 'playded'],
    correct: 1,
    fact: '“Play” é regular: basta acrescentar -ed. Como termina em vogal + y, mantém o y: played.'
  },
  {
    infinitive: 'to go',
    question: 'We ___ to the beach on Sunday.',
    translation: 'Nós fomos à praia no domingo.',
    answers: ['goed', 'goeded', 'went', 'gowed'],
    correct: 2,
    fact: '“Go” é irregular: seu passado é “went”, não “goed”.'
  },
  {
    infinitive: 'to study',
    question: 'Emma ___ for her English test last night.',
    translation: 'Emma estudou para a prova de inglês ontem à noite.',
    answers: ['studyed', 'studied', 'studyedid', 'studyd'],
    correct: 1,
    fact: '“Study” termina em consoante + y: trocamos o y por i e acrescentamos -ed, formando “studied”.'
  },
  {
    infinitive: 'to eat',
    question: 'Tom ___ a sandwich before school.',
    translation: 'Tom comeu um sanduíche antes da escola.',
    answers: ['eated', 'eateded', 'ate', 'eatid'],
    correct: 2,
    fact: '“Eat” é irregular e vira “ate” no Simple Past.'
  },
  {
    infinitive: 'to write',
    question: 'The author ___ a detailed article about climate change.',
    translation: 'O autor escreveu um artigo detalhado sobre mudança climática.',
    answers: ['writed', 'wrote', 'written', 'wroted'],
    correct: 1,
    fact: '“Write” é um verbo irregular. A forma correta no Simple Past é “wrote”.'
  },
  {
    infinitive: 'to decide',
    question: 'They ___ to postpone the meeting until next week.',
    translation: 'Eles decidiram adiar a reunião até a próxima semana.',
    answers: ['decided', 'decideed', 'decidid', 'decideded'],
    correct: 0,
    fact: 'Como “decide” é regular e já termina em “e”, acrescentamos apenas o “d”: decided.'
  },
  {
    infinitive: 'to buy',
    question: 'She ___ a new laptop for her college courses.',
    translation: 'Ela comprou um notebook novo para seus cursos da faculdade.',
    answers: ['buyed', 'bought', 'boughted', 'buied'],
    correct: 1,
    fact: '“Buy” é um verbo irregular: seu passado simples é “bought”.'
  },
  {
    infinitive: 'to stop',
    question: 'The driver ___ the car immediately at the red light.',
    translation: 'O motorista parou o carro imediatamente no sinal vermelho.',
    answers: ['stoped', 'stopped', 'stopd', 'stoppeded'],
    correct: 1,
    fact: '“Stop” segue a regra CVC (consoante-vogal-consoante). Dobra-se a última consoante antes de adicionar -ed: stopped.'
  },
  {
    infinitive: 'to speak',
    question: 'The manager ___ to the team about the new project.',
    translation: 'O gerente falou com a equipe sobre o novo projeto.',
    answers: ['speaked', 'spoke', 'spoken', 'spoked'],
    correct: 1,
    fact: '“Speak” é irregular: sua forma no Simple Past é “spoke”.'
  },
  {
    infinitive: 'to carry',
    question: 'He ___ the heavy boxes up the stairs.',
    translation: 'Ele carregou as caixas pesadas escada acima.',
    answers: ['carryed', 'carried', 'caried', 'carrieded'],
    correct: 1,
    fact: 'Verbos regulares terminados em consoante + y trocam o “y” por “i” antes de receber -ed: carried.'
  },
  {
    infinitive: 'to take',
    question: 'The photograph ___ several minutes to process.',
    translation: 'A fotografia levou vários minutos para processar.',
    answers: ['taked', 'took', 'tooked', 'taken'],
    correct: 1,
    fact: '“Take” é irregular e forma o Simple Past como “took”.'
  },
  {
    infinitive: 'to enjoy',
    question: 'We really ___ the concert despite the heavy rain.',
    translation: 'Nós realmente aproveitamos o show apesar da chuva forte.',
    answers: ['enjoyed', 'enjoied', 'enjoyd', 'enjoyeded'],
    correct: 0,
    fact: 'Quando o verbo termina em vogal + y, mantém-se o “y” e adiciona-se apenas -ed: enjoyed.'
  },
  {
    infinitive: 'to see',
    question: 'I ___ an interesting documentary last night.',
    translation: 'Eu vi um documentário interessante ontem à noite.',
    answers: ['seed', 'saw', 'sawed', 'seen'],
    correct: 1,
    fact: '“See” é um verbo irregular e torna-se “saw” no passado simples.'
  },
  {
    infinitive: 'to plan',
    question: 'The team ___ the entire event in advance.',
    translation: 'A equipe planejou o evento inteiro com antecedência.',
    answers: ['planed', 'planned', 'pland', 'planneded'],
    correct: 1,
    fact: '“Plan” é um verbo de uma sílaba terminado em CVC. Dobramos a última letra antes de -ed: planned.'
  },
  {
    infinitive: 'to think',
    question: 'She ___ the proposal was reasonable.',
    translation: 'Ela achou (pensou) que a proposta era razoável.',
    answers: ['thinked', 'thought', 'thoughted', 'thank'],
    correct: 1,
    fact: '“Think” é irregular no Simple Past e vira “thought”.'
  },
  {
    infinitive: 'to arrive',
    question: 'The train ___ on time at the station.',
    translation: 'O trem chegou a tempo na estação.',
    answers: ['arrivied', 'arrived', 'arriveed', 'arrivd'],
    correct: 1,
    fact: 'Por ser um verbo regular terminado em “e”, acrescenta-se apenas o “d”: arrived.'
  },
  {
    infinitive: 'to give',
    question: 'The company ___ us a generous bonus last December.',
    translation: 'A empresa nos deu um bônus generoso em dezembro passado.',
    answers: ['gived', 'gave', 'given', 'gaved'],
    correct: 1,
    fact: '“Give” é um verbo irregular cujo passado é “gave”.'
  },
  {
    infinitive: 'to try',
    question: 'Lucas ___ to fix the engine by himself.',
    translation: 'Lucas tentou consertar o motor sozinho.',
    answers: ['tryed', 'tried', 'triied', 'tryded'],
    correct: 1,
    fact: 'Como “try” termina em consoante + y, trocamos o “y” por “i” e acrescentamos -ed: tried.'
  },
  {
    infinitive: 'to find',
    question: 'They ___ a hidden wallet under the couch.',
    translation: 'Eles encontraram uma carteira escondida debaixo do sofá.',
    answers: ['finded', 'found', 'founded', 'farthest'],
    correct: 1,
    fact: '“Find” é irregular. O passado simples correto é “found”.'
  },
  {
    infinitive: 'to accept',
    question: 'She graciously ___ the offer for the promotion.',
    translation: 'Ela graciosamente aceitou a oferta de promoção.',
    answers: ['accepted', 'acceptid', 'acceptd', 'accepteded'],
    correct: 0,
    fact: '“Accept” é um verbo regular básico. Adiciona-se o sufixo -ed: accepted.'
  },
  {
    infinitive: 'to make',
    question: 'The chef ___ a delicious meal for the guests.',
    translation: 'O chef fez uma refeição deliciosa para os convidados.',
    answers: ['maked', 'made', 'maded', 'makid'],
    correct: 1,
    fact: '“Make” é irregular. No Simple Past, troca-se o k por d: made.'
  },
  {
    infinitive: 'to prefer',
    question: 'He ___ to stay indoors during the storm.',
    translation: 'Ele preferiu ficar dentro de casa durante a tempestade.',
    answers: ['prefered', 'preferred', 'preferrd', 'preferied'],
    correct: 1,
    fact: '“Prefer” é dissílabo com a última sílaba tônica terminada em CVC. Dobra-se o “r”: preferred.'
  },
  {
    infinitive: 'to drive',
    question: 'They ___ across the country during their summer vacation.',
    translation: 'Eles dirigiram pelo país durante as férias de verão.',
    answers: ['drived', 'drove', 'droved', 'driven'],
    correct: 1,
    fact: '“Drive” é irregular. Sua forma no passado simples é “drove”.'
  },
  {
    infinitive: 'to offer',
    question: 'The company ___ him a higher salary.',
    translation: 'A empresa ofereceu a ele um salário maior.',
    answers: ['offered', 'offorred', 'offerred', 'offerd'],
    correct: 0,
    fact: '“Offer” termina em CVC, mas a sílaba tônica é a PRIMEIRA (OF-fer). Portanto, não dobramos a consoante: offered.'
  },
  {
    infinitive: 'to lose',
    question: 'The team ___ the final match by one point.',
    translation: 'O time perdeu a partida final por um ponto.',
    answers: ['losed', 'lost', 'losten', 'loseded'],
    correct: 1,
    fact: '“Lose” é irregular. O passado correto é “lost”.'
  },
  {
    infinitive: 'to discuss',
    question: 'The board ___ the budget cuts for almost two hours.',
    translation: 'A diretoria discutiu os cortes no orçamento por quase duas horas.',
    answers: ['discussed', 'discussid', 'discussd', 'discussded'],
    correct: 0,
    fact: '“Discuss” é um verbo regular. Basta adicionar -ed ao final: discussed.'
  },
  {
    infinitive: 'to pay',
    question: 'I ___ for the tickets using my credit card.',
    translation: 'Eu paguei pelos ingressos usando meu cartão de crédito.',
    answers: ['payed', 'paid', 'paied', 'payded'],
    correct: 1,
    fact: 'Embora pareça regular, “pay” é irregular em sua grafia do passado: paid.'
  },
  {
    infinitive: 'to cancel',
    question: 'The airline ___ our flight due to bad weather.',
    translation: 'A companhia aérea cancelou nosso voo devido ao mau tempo.',
    answers: ['canceled', 'cancelled', 'canceld', 'cancelleed'],
    correct: 1,
    fact: 'Ambas as formas “canceled” (US) e “cancelled” (UK) são válidas. Aqui temos a forma padrão britânica/internacional com o l dobrado.'
  },
  {
    infinitive: 'to bring',
    question: 'She ___ some delicious pastries to the office.',
    translation: 'Ela trouxe alguns doces saborosos para o escritório.',
    answers: ['bringed', 'brought', 'brang', 'broughted'],
    correct: 1,
    fact: '“Bring” é um verbo irregular no passado simples: brought.'
  },
  {
    infinitive: 'to reply',
    question: 'He ___ to my email almost immediately.',
    translation: 'Ele respondeu ao meu e-mail quase imediatamente.',
    answers: ['replyed', 'replied', 'replid', 'replyded'],
    correct: 1,
    fact: 'Terminado em consoante + y, trocamos o “y” por “i” antes de -ed: replied.'
  },
  {
    infinitive: 'to sleep',
    question: 'The baby ___ peacefully through the night.',
    translation: 'O bebê dormiu tranquilamente a noite toda.',
    answers: ['sleeped', 'slept', 'slepted', 'sleepd'],
    correct: 1,
    fact: '“Sleep” é irregular e torna-se “slept” no Simple Past.'
  },
  {
    infinitive: 'to show',
    question: 'The guide ___ us the historical monuments of the town.',
    translation: 'O guia nos mostrou os monumentos históricos da cidade.',
    answers: ['showed', 'shown', 'showded', 'shoed'],
    correct: 0,
    fact: 'No Simple Past, “show” funciona como regular adicionando -ed: showed. (Shown é o particípio).'
  },
  {
    infinitive: 'to choose',
    question: 'After much consideration, she ___ the blue dress.',
    translation: 'Após pensar muito, ela escolheu o vestido azul.',
    answers: ['choosed', 'chose', 'chosen', 'chosed'],
    correct: 1,
    fact: '“Choose” é irregular. No passado simples perde um “o”, ficando “chose”.'
  },
  {
    infinitive: 'to explain',
    question: 'The teacher ___ the rules of the game clearly.',
    translation: 'O professor explicou as regras do jogo claramente.',
    answers: ['explained', 'explaind', 'explainied', 'explainded'],
    correct: 0,
    fact: '“Explain” é um verbo regular simples. Acrescenta-se apenas -ed ao final: explained.'
  },
  {
    infinitive: 'to teach',
    question: 'Professor Smith ___ literature at the university for years.',
    translation: 'O Professor Smith ensinou literatura na universidade por anos.',
    answers: ['teached', 'taught', 'taughted', 'teachen'],
    correct: 1,
    fact: '“Teach” é irregular e seu passado simples é “taught”.'
  },
  {
    infinitive: 'to change',
    question: 'The company ___ its policy regarding remote work.',
    translation: 'A empresa mudou sua política em relação ao trabalho remoto.',
    answers: ['changed', 'changeed', 'changid', 'changeded'],
    correct: 0,
    fact: 'Como o verbo regular “change” já termina em “e”, acrescenta-se apenas “d”: changed.'
  },
  {
    infinitive: 'to fall',
    question: 'The temperature ___ sharply during the night.',
    translation: 'A temperatura caiu bruscamente durante a noite.',
    answers: ['falled', 'fell', 'fallen', 'felled'],
    correct: 1,
    fact: '“Fall” é um verbo irregular. A forma do Simple Past é “fell”.'
  },
  {
    infinitive: 'to create',
    question: 'The designer ___ a stunning outfit for the event.',
    translation: 'O estilista criou um traje deslumbrante para o evento.',
    answers: ['created', 'createed', 'creatid', 'createded'],
    correct: 0,
    fact: 'Verbo regular terminado em “e”: acrescenta-se apenas a letra “d”: created.'
  },
  {
    infinitive: 'to understand',
    question: 'Everyone ___ the instructions provided by the instructor.',
    translation: 'Todos entenderam as instruções fornecidas pelo instrutor.',
    answers: ['understanded', 'understood', 'understode', 'understandd'],
    correct: 1,
    fact: 'O verbo “understand” é irregular e vira “understood” no passado.'
  },
  {
    infinitive: 'to happen',
    question: 'An unforeseen incident ___ during the live broadcast.',
    translation: 'Um incidente imprevisto aconteceu durante a transmissão ao vivo.',
    answers: ['happened', 'happenred', 'happenned', 'happenid'],
    correct: 0,
    fact: '“Happen” é dissílabo com tônica na primeira sílaba (HAP-pen), por isso não dobra a consoante final: happened.'
  },
  {
    infinitive: 'to hear',
    question: 'We ___ a strange noise coming from the basement.',
    translation: 'Nós ouvimos um barulho estranho vindo do porão.',
    answers: ['heared', 'heard', 'hearded', 'hoard'],
    correct: 1,
    fact: '“Hear” é irregular. O passado simples é formado apenas adicionando a letra “d”: heard.'
  },
  {
    infinitive: 'to open',
    question: 'The local shop ___ a new branch in the city center.',
    translation: 'A loja local abriu uma nova filial no centro da cidade.',
    answers: ['opened', 'openned', 'opend', 'openeded'],
    correct: 0,
    fact: '“Open” tem a tônica na primeira sílaba (O-pen), logo não dobra o “n” ao receber -ed: opened.'
  },
  {
    infinitive: 'to run',
    question: 'She ___ five miles before breakfast this morning.',
    translation: 'Ela correu cinco milhas antes do café da manhã esta manhã.',
    answers: ['runned', 'ran', 'rand', 'runneded'],
    correct: 1,
    fact: '“Run” é um verbo irregular. Sua forma no Simple Past é “ran”.'
  },
  {
    infinitive: 'to listen',
    question: 'The audience ___ attentively to the keynote speaker.',
    translation: 'O público ouviu atentamente o palestrante principal.',
    answers: ['listened', 'listenred', 'listenned', 'listend'],
    correct: 0,
    fact: '“Listen” tem a sílaba tônica em “LIS”, portanto não dobra o “n” ao adicionar -ed: listened.'
  },
  {
    infinitive: 'to feel',
    question: 'He ___ exhausted after working a double shift.',
    translation: 'Ele se sentiu exausto depois de trabalhar em um turno duplo.',
    answers: ['feeled', 'felt', 'felted', 'feeld'],
    correct: 1,
    fact: '“Feel” é um verbo irregular que se transforma em “felt” no passado.'
  },
  {
    infinitive: 'to improve',
    question: 'The new strategy ___ our sales significantly.',
    translation: 'A nova estratégia melhorou nossas vendas significativamente.',
    answers: ['improved', 'improveed', 'improvd', 'improveded'],
    correct: 0,
    fact: 'Como “improve” é regular e termina em “e”, acrescenta-se apenas “d”: improved.'
  },
  {
    infinitive: 'to sell',
    question: 'They ___ their old house and moved to another state.',
    translation: 'Eles venderam a casa antiga e se mudaram para outro estado.',
    answers: ['selled', 'sold', 'solded', 'solde'],
    correct: 1,
    fact: '“Sell” é irregular e sua forma no Simple Past é “sold”.'
  },
  {
    infinitive: 'to destroy',
    question: 'The wildfire ___ vast areas of the natural park.',
    translation: 'O incêndio florestal destruiu vastas áreas do parque natural.',
    answers: ['destroyed', 'destroied', 'destroyd', 'destroyeded'],
    correct: 0,
    fact: 'Como “destroy” termina em vogal + y, mantemos o “y” e acrescentamos -ed: destroyed.'
  },
  {
    infinitive: 'to keep',
    question: 'She ___ all the confidential documents in a safe place.',
    translation: 'Ela guardou todos os documentos confidenciais em um lugar seguro.',
    answers: ['keeped', 'kept', 'kepted', 'keepd'],
    correct: 1,
    fact: '“Keep” é um verbo irregular. O Simple Past correto é “kept”.'
  }
]
  }
