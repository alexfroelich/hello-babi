export default {
  id: 'comparatives-superlatives',
  label: 'Comparatives & Superlatives',
  description: 'Compare people, places and things',
  titleFirst: 'Comparatives',
  titleSecond: '& Superlatives',
  grammarHelp: [
    'Use o <strong>comparativo</strong> para comparar duas coisas: adjetivos curtos recebem <strong>-er + than</strong>; adjetivos longos usam <strong>more + adjetivo + than</strong>.',
    'Use o <strong>superlativo</strong> para destacar algo dentro de um grupo: adjetivos curtos recebem <strong>the + adjetivo + -est</strong>; adjetivos longos usam <strong>the most + adjetivo</strong>.',
    'Atenção às exceções irregulares: <strong>good $\rightarrow$ better / the best</strong> e <strong>bad $\rightarrow$ worse / the worst</strong>.'
  ],
  questions: [
    // 1 a 10
    {
      question: 'A cheetah is ___ than a horse.',
      translation: 'Um guepardo é mais rápido do que um cavalo.',
      answers: ['fastest', 'faster', 'more fast', 'fast'],
      correct: 1,
      fact: 'Com o adjetivo curto “fast”, formamos o comparativo acrescentando -er: faster.'
    },
    {
      question: 'This is the ___ cake in the bakery.',
      translation: 'Este é o bolo mais delicioso da padaria.',
      answers: ['more delicious', 'delicious', 'most delicious', 'deliciouser'],
      correct: 2,
      fact: 'Com o adjetivo longo “delicious”, o superlativo é formado com “the most”: the most delicious.'
    },
    {
      question: 'My new backpack is ___ than my old one.',
      translation: 'Minha mochila nova é mais leve do que a antiga.',
      answers: ['lighter', 'lightest', 'more light', 'light'],
      correct: 0,
      fact: '“Light” é um adjetivo curto: acrescentamos -er para formar o comparativo “lighter”.'
    },
    {
      question: 'Mount Everest is the ___ mountain in the world.',
      translation: 'O Monte Everest é a montanha mais alta do mundo.',
      answers: ['higher', 'most high', 'highest', 'high'],
      correct: 2,
      fact: 'O superlativo do adjetivo curto “high” leva -est: the highest.'
    },
    {
      question: 'This puzzle is ___ than the one we did yesterday.',
      translation: 'Este quebra-cabeça é mais difícil do que o que fizemos ontem.',
      answers: ['the most difficult', 'difficulter', 'difficult', 'more difficult'],
      correct: 3,
      fact: 'Com o adjetivo longo “difficult”, usamos “more” para formar o comparativo: more difficult.'
    },
    {
      question: 'She is the ___ swimmer on our school team.',
      translation: 'Ela é a melhor nadadora da nossa equipe escolar.',
      answers: ['goodest', 'better', 'best', 'more good'],
      correct: 2,
      fact: '“Good” é irregular: o superlativo correto é “the best”.'
    },
    {
      question: 'Today’s weather is ___ than yesterday’s.',
      translation: 'O tempo hoje está pior do que o de ontem.',
      answers: ['badder', 'worse', 'worst', 'more bad'],
      correct: 1,
      fact: '“Bad” é um adjetivo irregular e seu comparativo é “worse”.'
    },
    {
      question: 'This laptop is ___ than my old desktop computer.',
      translation: 'Este notebook é mais poderoso do que meu antigo computador de mesa.',
      answers: ['powerfuller', 'more powerful', 'most powerful', 'powerfuler'],
      correct: 1,
      fact: 'Com adjetivos longos como “powerful”, usamos “more” para comparar: more powerful.'
    },
    {
      question: 'Tokyo is one of the ___ cities in the world.',
      translation: 'Tóquio é uma das cidades mais movimentadas do mundo.',
      answers: ['busyest', 'busier', 'busiest', 'more busy'],
      correct: 2,
      fact: 'Adjetivos terminados em consoante + y trocam o y por i + -est no superlativo: busiest.'
    },
    {
      question: 'His house is ___ from the station than mine.',
      translation: 'A casa dele é mais distante da estação do que a minha.',
      answers: ['farer', 'farther', 'farthest', 'more far'],
      correct: 1,
      fact: '“Far” é irregular. Seu comparativo de distância é “farther” (ou “further”).'
    },

    // 11 a 20
    {
      question: 'An elephant is ___ than a hippo.',
      translation: 'Um elefante é maior do que um hipopótamo.',
      answers: ['bigger', 'biger', 'biggest', 'more big'],
      correct: 0,
      fact: '“Big” é CVC (consoante-vogal-consoante), portanto dobramos o g antes de -er: bigger.'
    },
    {
      question: 'That was the ___ movie I have ever seen.',
      translation: 'Aquele foi o filme mais chato que eu já vi.',
      answers: ['boringer', 'boringest', 'most boring', 'more boring'],
      correct: 2,
      fact: 'Para adjetivos longos como “boring”, usamos “most” para o superlativo: the most boring.'
    },
    {
      question: 'This sofa is ___ than the wooden chair.',
      translation: 'Este sofá é mais confortável do que a cadeira de madeira.',
      answers: ['comfortabler', 'more comfortable', 'most comfortable', 'comfortablest'],
      correct: 1,
      fact: '“Comfortable” é um adjetivo de várias sílabas, exigindo “more” no comparativo.'
    },
    {
      question: 'Russia is the ___ country in the world by land area.',
      translation: 'A Rússia é o maior país do mundo em área terrestre.',
      answers: ['largest', 'larger', 'most large', 'largestest'],
      correct: 0,
      fact: '“Large” termina em e, então apenas acrescentamos -st no superlativo: the largest.'
    },
    {
      question: 'Learning a language is ___ than people think.',
      translation: 'Aprender um idioma é mais fácil do que as pessoas pensam.',
      answers: ['easiest', 'more easy', 'easier', 'easyer'],
      correct: 2,
      fact: 'Adjetivos de duas sílabas em consoante + y trocam o y por -ier no comparativo: easier.'
    },
    {
      question: 'Which of these three cars is the ___?',
      translation: 'Qual destes três carros é o mais barato?',
      response: 'The red one is the cheapest option.',
      answers: ['cheaper', 'cheapest', 'more cheap', 'cheap'],
      correct: 1,
      fact: 'Para destacar um item em um grupo de três ou mais, usamos o superlativo: cheapest.'
    },
    {
      question: 'Health is ___ than wealth.',
      translation: 'Saúde é mais importante do que riqueza.',
      answers: ['importanter', 'the most important', 'more important', 'important'],
      correct: 2,
      fact: 'Com o adjetivo longo “important”, usamos “more” na comparação: more important.'
    },
    {
      question: 'It was the ___ decision of his entire career.',
      translation: 'Foi a pior decisão de toda a carreira dele.',
      answers: ['baddest', 'worse', 'worst', 'more bad'],
      correct: 2,
      fact: 'O superlativo irregular do adjetivo “bad” é “the worst”.'
    },
    {
      question: 'Gold is ___ than silver.',
      translation: 'Ouro é mais pesado do que prata.',
      answers: ['heavier', 'heaviest', 'more heavy', 'heavyer'],
      correct: 0,
      fact: '“Heavy” termina em consoante + y. Trocamos o y por i e adicionamos -er: heavier.'
    },
    {
      question: 'This is the ___ building in the whole city.',
      translation: 'Este é o prédio mais moderno de toda a cidade.',
      answers: ['moderner', 'modernest', 'most modern', 'more modern'],
      correct: 2,
      fact: '“Modern” forma o superlativo com “the most”: the most modern.'
    },

    // 21 a 30
    {
      question: 'The Pacific Ocean is ___ than the Atlantic Ocean.',
      translation: 'O Oceano Pacífico é mais profundo do que o Oceano Atlântico.',
      answers: ['deepest', 'deeper', 'more deep', 'deep'],
      correct: 1,
      fact: 'Com o adjetivo curto “deep”, acrescentamos -er para o comparativo: deeper.'
    },
    {
      question: 'She is the ___ person I know.',
      translation: 'Ela é a pessoa mais gentil que eu conheço.',
      answers: ['kindest', 'kinder', 'most kind', 'kind'],
      correct: 0,
      fact: 'Adjetivo curto “kind” ganha -est para formar o superlativo: the kindest.'
    },
    {
      question: 'Travelling by plane is ___ than going by train.',
      translation: 'Viajar de avião é mais rápido do que ir de trem.',
      answers: ['more quick', 'quicker', 'quickest', 'quickness'],
      correct: 1,
      fact: '“Quick” é curto, portanto acrescentamos -er no comparativo: quicker.'
    },
    {
      question: 'That was the ___ exam we had this semester.',
      translation: 'Aquele foi o exame mais difícil que tivemos neste semestre.',
      answers: ['harder', 'hardest', 'most hard', 'harderer'],
      correct: 1,
      fact: 'O superlativo do adjetivo curto “hard” é “the hardest”.'
    },
    {
      question: 'My brother is much ___ than me.',
      translation: 'Meu irmão é muito mais alto do que eu.',
      answers: ['taller', 'tallest', 'more tall', 'tall'],
      correct: 0,
      fact: 'Comparando duas pessoas com o adjetivo curto “tall”, usamos -er: taller.'
    },
    {
      question: 'This restaurant offers the ___ seafood in town.',
      translation: 'Este restaurante oferece os melhores frutos do mar da cidade.',
      answers: ['goodest', 'better', 'best', 'more good'],
      correct: 2,
      fact: 'O superlativo de “good” é “the best”.'
    },
    {
      question: 'A dog is usually ___ than a cat.',
      translation: 'Um cachorro é geralmente mais barulhento do que um gato.',
      answers: ['noisier', 'noisiest', 'more noisy', 'noisyer'],
      correct: 0,
      fact: '“Noisy” termina em consoante + y: trocamos o y por -ier no comparativo: noisier.'
    },
    {
      question: 'This is the ___ artwork in the entire museum.',
      translation: 'Esta é a obra de arte mais valiosa de todo o museu.',
      answers: ['valuabler', 'valuablest', 'most valuable', 'more valuable'],
      correct: 2,
      fact: '“Valuable” é um adjetivo longo, cujo superlativo usa “the most”.'
    },
    {
      question: 'The traffic today is ___ than it was yesterday.',
      translation: 'O trânsito hoje está mais denso do que esteve ontem.',
      answers: ['heavier', 'heaviest', 'more heavy', 'heavyer'],
      correct: 0,
      fact: 'O comparativo do adjetivo “heavy” altera a terminação para -ier: heavier.'
    },
    {
      question: 'Who is the ___ student in your classroom?',
      translation: 'Quem é o estudante mais inteligente na sua sala de aula?',
      response: 'Lucas is the smartest student in our class.',
      answers: ['smarter', 'smartest', 'more smart', 'most smart'],
      correct: 1,
      fact: 'Adjetivo curto “smart” no superlativo recebe -est: the smartest.'
    },

    // 31 a 40
    {
      question: 'The Amazon River is ___ than the Mississippi.',
      translation: 'O Rio Amazonas é mais longo do que o Mississippi.',
      answers: ['longer', 'longest', 'more long', 'longerer'],
      correct: 0,
      fact: '“Long” é um adjetivo curto. O comparativo é formado com -er: longer.'
    },
    {
      question: 'That is the ___ story I have ever heard.',
      translation: 'Essa é a história mais engraçada que eu já ouvi.',
      answers: ['funnier', 'funniest', 'more funny', 'funniestest'],
      correct: 1,
      fact: '“Funny” (consoante + y) vira -iest no superlativo: funniest.'
    },
    {
      question: 'Her new car is ___ than her old one.',
      translation: 'O carro novo dela é mais seguro do que o antigo.',
      answers: ['safer', 'safest', 'more safe', 'safeer'],
      correct: 0,
      fact: 'Como “safe” termina em e, acrescentamos apenas -r para o comparativo: safer.'
    },
    {
      question: 'It was the ___ day of the entire winter season.',
      translation: 'Foi o dia mais frio de toda a estação de inverno.',
      answers: ['colder', 'coldest', 'most cold', 'coldester'],
      correct: 1,
      fact: 'O superlativo de “cold” é “the coldest”.'
    },
    {
      question: 'This phone battery lasts ___ than the previous model.',
      translation: 'A bateria deste celular dura mais do que o modelo anterior.',
      answers: ['longer', 'longest', 'more long', 'longness'],
      correct: 0,
      fact: 'A comparação entre dois modelos usa a forma -er: longer.'
    },
    {
      question: 'She was chosen as the ___ candidate for the position.',
      translation: 'Ela foi escolhida como a candidata mais adequada para o cargo.',
      answers: ['suitabler', 'suitablest', 'most suitable', 'more suitable'],
      correct: 2,
      fact: 'Com adjetivos de três ou mais sílabas (“suitable”), usamos “most”: the most suitable.'
    },
    {
      question: 'Summer in Spain is ___ than in England.',
      translation: 'O verão na Espanha é mais quente do que na Inglaterra.',
      answers: ['hoter', 'hotter', 'hottest', 'more hot'],
      correct: 1,
      fact: '“Hot” segue a regra CVC: dobramos o t antes de acrescentar -er: hotter.'
    },
    {
      question: 'What is the ___ place you have ever visited?',
      translation: 'Qual é o lugar mais bonito que você já visitou?',
      response: 'Paris is the most beautiful place I have visited.',
      answers: ['beautifulest', 'more beautiful', 'most beautiful', 'beautifuler'],
      correct: 2,
      fact: '“Beautiful” é adjetivo longo e forma o superlativo com “the most”.'
    },
    {
      question: 'Working in sales is ___ than working alone in an office.',
      translation: 'Trabalhar em vendas é mais dinâmico do que trabalhar sozinho em um escritório.',
      answers: ['dynamicer', 'more dynamic', 'most dynamic', 'dynamicest'],
      correct: 1,
      fact: 'Adjetivo longo “dynamic” utiliza “more” na comparação: more dynamic.'
    },
    {
      question: 'He feels much ___ after taking a short nap.',
      translation: 'Ele se sente muito melhor depois de tirar uma rápida soneca.',
      answers: ['better', 'gooder', 'best', 'more good'],
      correct: 0,
      fact: 'O comparativo irregular de “good” é “better”.'
    },

    // 41 a 50
    {
      question: 'This task is ___ than I expected.',
      translation: 'Esta tarefa é mais simples do que eu esperava.',
      answers: ['simpler', 'simplest', 'more simple', 'simpleer'],
      correct: 0,
      fact: 'Adjetivos de duas sílabas terminados em -le (como simple) acrescentam -r: simpler.'
    },
    {
      question: 'She lives in the ___ house on our block.',
      translation: 'Ela mora na casa mais antiga do nosso quarteirão.',
      answers: ['older', 'oldest', 'most old', 'elder'],
      correct: 1,
      fact: 'O superlativo de “old” é “the oldest”.'
    },
    {
      question: 'This road is ___ than the highway.',
      translation: 'Esta estrada é mais estreita do que a rodovia.',
      answers: ['narrower', 'narrowest', 'more narrow', 'narrowerer'],
      correct: 0,
      fact: '“Narrow” aceita a terminação -er no comparativo: narrower.'
    },
    {
      question: 'It is the ___ hotel in the downtown area.',
      translation: 'É o hotel mais caro da região central.',
      answers: ['expensiver', 'expensivest', 'most expensive', 'more expensive'],
      correct: 2,
      fact: '“Expensive” é um adjetivo longo, portanto o superlativo leva “the most”.'
    },
    {
      question: 'The water in this lake is ___ than in the ocean.',
      translation: 'A água neste lago é mais calma do que no oceano.',
      answers: ['calmer', 'calmest', 'more calm', 'calmerer'],
      correct: 0,
      fact: '“Calm” é adjetivo curto e recebe -er no comparativo: calmer.'
    },
    {
      question: 'Which of these three subjects is the ___ for you?',
      translation: 'Qual destas três matérias é a mais fácil para você?',
      response: 'English is the easiest subject for me.',
      answers: ['easier', 'easiest', 'more easy', 'easyest'],
      correct: 1,
      fact: 'Para um grupo de três coisas, o superlativo de “easy” é “the easiest”.'
    },
    {
      question: 'My boots are ___ than your sneakers.',
      translation: 'Minhas botas estão mais sujas do que seus tênis.',
      answers: ['dirtier', 'dirtiest', 'more dirty', 'dirtyer'],
      correct: 0,
      fact: 'Adjetivo “dirty” (consoante + y) vira “dirtier” no comparativo.'
    },
    {
      question: 'That was the ___ explanation of the entire lecture.',
      translation: 'Aquela foi a explicação mais clara de toda a palestra.',
      answers: ['clearer', 'clearest', 'most clear', 'clearerest'],
      correct: 1,
      fact: 'Adjetivo curto “clear” no superlativo recebe -est: the clearest.'
    },
    {
      question: 'Fresh food is ___ than fast food.',
      translation: 'Comida fresca é mais saudável do que fast food.',
      answers: ['healthier', 'healthiest', 'more healthy', 'healthyer'],
      correct: 0,
      fact: '“Healthy” troca o y por -ier para fazer a comparação: healthier.'
    },
    {
      question: 'Who was the ___ player in the entire championship?',
      translation: 'Quem foi o jogador mais valioso no campeonato inteiro?',
      response: 'The goalkeeper was the most valuable player.',
      answers: ['valuabler', 'valuablest', 'most valuable', 'more valuable'],
      correct: 2,
      fact: 'Com adjetivos longos como “valuable”, o superlativo usa “the most”.'
    },

    // 51 a 60
    {
      question: 'The news was ___ than anyone anticipated.',
      translation: 'A notícia foi mais chocante do que qualquer um antecipou.',
      answers: ['shockinger', 'more shocking', 'most shocking', 'shockingest'],
      correct: 1,
      fact: '“Shocking” é adjetivo longo e requer “more” na comparação: more shocking.'
    },
    {
      question: 'This is the ___ day of my life!',
      translation: 'Este é o dia mais feliz da minha vida!',
      answers: ['happier', 'happiest', 'most happy', 'happyest'],
      correct: 1,
      fact: 'O superlativo de “happy” troca o y por i + -est: the happiest.'
    },
    {
      question: 'The city center is ___ during the day than at night.',
      translation: 'O centro da cidade é mais barulhento durante o dia do que à noite.',
      answers: ['noisier', 'noisiest', 'more noisy', 'noisyer'],
      correct: 0,
      fact: 'Substitui-se a terminação -y por -ier no comparativo de “noisy”: noisier.'
    },
    {
      question: 'Who is the ___ runner in your family?',
      translation: 'Quem é o corredor mais rápido na sua família?',
      response: 'My sister is the fastest runner in our family.',
      answers: ['faster', 'fastest', 'most fast', 'fastestest'],
      correct: 1,
      fact: 'Superlativo de “fast” recebe a terminação -est: the fastest.'
    },
    {
      question: 'Plastic is ___ than metal.',
      translation: 'Plástico é mais leve do que metal.',
      answers: ['lighter', 'lightest', 'more light', 'lightness'],
      correct: 0,
      fact: 'Adjetivo curto “light” acresce -er na comparação: lighter.'
    },
    {
      question: 'This store has the ___ customer service in town.',
      translation: 'Esta loja tem o pior atendimento ao cliente da cidade.',
      answers: ['baddest', 'worse', 'worst', 'more bad'],
      correct: 2,
      fact: 'A forma superlativa irregular de “bad” é “the worst”.'
    },
    {
      question: 'My computer is ___ than my smartphone.',
      translation: 'Meu computador é mais rápido do que meu smartphone.',
      answers: ['faster', 'fastest', 'more fast', 'fastness'],
      correct: 0,
      fact: 'Comparando dois dispositivos com adjetivo curto: faster.'
    },
    {
      question: 'It was the ___ experience of his journey.',
      translation: 'Foi a experiência mais assustadora da jornada dele.',
      answers: ['scarier', 'scariest', 'most scary', 'scaryest'],
      correct: 1,
      fact: 'Superlativo de “scary” troca o y por -iest: the scariest.'
    },
    {
      question: 'An iron bar is ___ than a wooden stick.',
      translation: 'Uma barra de ferro é mais dura do que um bastão de madeira.',
      answers: ['harder', 'hardest', 'more hard', 'harderer'],
      correct: 0,
      fact: 'Adjetivo curto “hard” no comparativo exige -er: harder.'
    },
    {
      question: 'This is the ___ chocolate cake I have ever eaten.',
      translation: 'Este é o bolo de chocolate mais saboroso que eu já comi.',
      answers: ['tastier', 'tastiest', 'more tasty', 'tastyest'],
      correct: 1,
      fact: 'Superlativo do adjetivo de duas sílabas em y (“tasty”) é “the tastiest”.'
    },

    // 61 a 70
    {
      question: 'Air travel is ___ than driving long distances.',
      translation: 'Viajar de avião é mais conveniente do que dirigir longas distâncias.',
      answers: ['convenienter', 'more convenient', 'most convenient', 'convenientest'],
      correct: 1,
      fact: 'Com adjetivos de várias sílabas (“convenient”), usa-se “more” no comparativo.'
    },
    {
      question: 'What is the ___ mountain peak in South America?',
      translation: 'Qual é o pico de montanha mais alto da América do Sul?',
      response: 'Aconcagua is the highest mountain peak in South America.',
      answers: ['higher', 'highest', 'most high', 'highestest'],
      correct: 1,
      fact: 'Adjetivo curto “high” no superlativo recebe -est: the highest.'
    },
    {
      question: 'Her results were ___ than mine in the test.',
      translation: 'Os resultados dela foram melhores do que os meus no teste.',
      answers: ['gooder', 'better', 'best', 'more good'],
      correct: 1,
      fact: 'Comparativo irregular de “good” é “better”.'
    },
    {
      question: 'This is the ___ avenue in the whole country.',
      translation: 'Esta é a avenida mais larga de todo o país.',
      answers: ['wider', 'widest', 'most wide', 'widerest'],
      correct: 1,
      fact: '“Wide” termina em e e ganha -st no superlativo: the widest.'
    },
    {
      question: 'The ocean is much ___ near the coast.',
      translation: 'O oceano é muito mais raso perto da costa.',
      answers: ['shallower', 'shallowest', 'more shallow', 'shallowerer'],
      correct: 0,
      fact: '“Shallow” é um adjetivo curto de duas sílabas e ganha -er: shallower.'
    },
    {
      question: 'She wore the ___ dress at the formal gala.',
      translation: 'Ela usou o vestido mais elegante na gala formal.',
      answers: ['eleganter', 'elegantest', 'most elegant', 'more elegant'],
      correct: 2,
      fact: 'Adjetivos de três ou mais sílabas (“elegant”) usam “the most” no superlativo.'
    },
    {
      question: 'The coffee is ___ than the tea.',
      translation: 'O café está mais quente do que o chá.',
      answers: ['hoter', 'hotter', 'hottest', 'more hot'],
      correct: 1,
      fact: '“Hot” dobra a consoante t (regra CVC) no comparativo: hotter.'
    },
    {
      question: 'He is the ___ member of the scientific committee.',
      translation: 'Ele é o membro mais jovem do comitê científico.',
      answers: ['younger', 'youngest', 'most young', 'youngestest'],
      correct: 1,
      fact: 'Adjetivo curto “young” recebe -est no superlativo: the youngest.'
    },
    {
      question: 'This solution is ___ than the previous one.',
      translation: 'Esta solução é mais eficiente do que a anterior.',
      answers: ['efficienter', 'more efficient', 'most efficient', 'efficientest'],
      correct: 1,
      fact: 'Com adjetivos longos como “efficient”, usará “more” para comparar.'
    },
    {
      question: 'That was the ___ winter in fifty years.',
      translation: 'Aquele foi o inverno mais rigoroso (frio) em cinquenta anos.',
      answers: ['colder', 'coldest', 'most cold', 'coldestest'],
      correct: 1,
      fact: 'Superlativo do adjetivo curto “cold” é “the coldest”.'
    },

    // 71 a 80
    {
      question: 'The new office is ___ than our old workplace.',
      translation: 'O novo escritório é mais espaçoso do que nosso antigo local de trabalho.',
      answers: ['spaciouser', 'more spacious', 'most spacious', 'spacioustest'],
      correct: 1,
      fact: 'Adjetivos longos como “spacious” exigem “more” na comparação: more spacious.'
    },
    {
      question: 'Who is the ___ artist in the gallery?',
      translation: 'Quem é o artista mais famoso na galeria?',
      response: 'Picasso is the most famous artist in the gallery.',
      answers: ['famouser', 'famousest', 'most famous', 'more famous'],
      correct: 2,
      fact: '“Famous” forma o superlativo com “the most”: the most famous.'
    },
    {
      question: 'The weather today is ___ than it was on Monday.',
      translation: 'O tempo hoje está mais agradável do que esteve na segunda-feira.',
      answers: ['nicer', 'nicest', 'more nice', 'niceer'],
      correct: 0,
      fact: '“Nice” termina em e e recebe apenas -r para o comparativo: nicer.'
    },
    {
      question: 'It was the ___ night of his life.',
      translation: 'Foi a noite mais longa da vida dele.',
      answers: ['longer', 'longest', 'most long', 'longerest'],
      correct: 1,
      fact: 'Adjetivo curto “long” ganha -est no superlativo: the longest.'
    },
    {
      question: 'My suitcase is ___ than yours.',
      translation: 'Minha mala é mais pesada do que a sua.',
      answers: ['heavier', 'heaviest', 'more heavy', 'heavyer'],
      correct: 0,
      fact: 'Adjetivo em consoante + y (“heavy”) vira “heavier” no comparativo.'
    },
    {
      question: 'This is the ___ moment of the entire movie.',
      translation: 'Este é o momento mais emocionante do filme inteiro.',
      answers: ['excitinger', 'excitingest', 'most exciting', 'more exciting'],
      correct: 2,
      fact: '“Exciting” é um adjetivo longo e seu superlativo é “the most exciting”.'
    },
    {
      question: 'Paper is ___ than cardboard.',
      translation: 'Papel é mais fino do que papelão.',
      answers: ['thiner', 'thinner', 'thinnest', 'more thin'],
      correct: 1,
      fact: '“Thin” segue a regra CVC e dobra o n antes de -er: thinner.'
    },
    {
      question: 'What is the ___ animal in the world?',
      translation: 'Qual é o animal mais perigoso do mundo?',
      response: 'The box jellyfish is considered the most dangerous animal.',
      answers: ['dangerouser', 'dangerousest', 'most dangerous', 'more dangerous'],
      correct: 2,
      fact: 'Adjetivos longos como “dangerous” formam o superlativo com “the most”.'
    },
    {
      question: 'Your explanation was ___ than his.',
      translation: 'Sua explicação foi mais clara do que a dele.',
      answers: ['clearer', 'clearest', 'more clear', 'clearerest'],
      correct: 0,
      fact: 'Comparativo do adjetivo curto “clear” recebe a terminação -er: clearer.'
    },
    {
      question: 'This is the ___ water I have ever tasted.',
      translation: 'Esta é a água mais pura que eu já me saboreei.',
      answers: ['purer', 'purest', 'most pure', 'purerest'],
      correct: 1,
      fact: '“Pure” termina em e e recebe -st para o superlativo: the purest.'
    },

    // 81 a 90
    {
      question: 'A car is ___ than a bicycle.',
      translation: 'Um carro é mais rápido do que uma bicicleta.',
      answers: ['faster', 'fastest', 'more fast', 'fastness'],
      correct: 0,
      fact: 'O comparativo para o adjetivo curto “fast” é “faster”.'
    },
    {
      question: 'She is the ___ woman in the company.',
      translation: 'Ela é a mulher mais rica da empresa.',
      answers: ['richer', 'richest', 'most rich', 'richness'],
      correct: 1,
      fact: 'Superlativo do adjetivo curto “rich” leva a terminação -est: the richest.'
    },
    {
      question: 'This chair is ___ than that stool.',
      translation: 'Esta cadeira é mais macia do que aquele banco.',
      answers: ['softer', 'softest', 'more soft', 'softerer'],
      correct: 0,
      fact: 'Adjetivo curto “soft” no comparativo recebe -er: softer.'
    },
    {
      question: 'What is the ___ memory from your childhood?',
      translation: 'Qual é a memória mais doce da sua infância?',
      response: 'Visiting my grandparents during summer is my sweetest memory.',
      answers: ['sweeter', 'sweetest', 'most sweet', 'sweetness'],
      correct: 1,
      fact: 'Superlativo do adjetivo curto “sweet” é “the sweetest”.'
    },
    {
      question: 'Living in a village is ___ than in a metropolis.',
      translation: 'Morar em uma vila é mais quieto do que em uma metrópole.',
      answers: ['quieter', 'quietest', 'more quiet', 'quietness'],
      correct: 0,
      fact: '“Quiet” pode aceitar a forma comparativa “quieter”.'
    },
    {
      question: 'He made the ___ mistake during his speech.',
      translation: 'Ele cometeu o maior erro durante o discurso dele.',
      answers: ['bigger', 'biggest', 'most big', 'biger'],
      correct: 1,
      fact: '“Big” é CVC e seu superlativo dobra a consoante g: the biggest.'
    },
    {
      question: 'This knife is ___ than the old one.',
      translation: 'Esta faca é mais afiada do que a antiga.',
      answers: ['sharper', 'sharpest', 'more sharp', 'sharperer'],
      correct: 0,
      fact: 'Adjetivo curto “sharp” ganha -er na comparação: sharper.'
    },
    {
      question: 'That was the ___ speech of the whole conference.',
      translation: 'Aquele foi o discurso mais inspirador de toda a conferência.',
      answers: ['inspiringer', 'inspiringest', 'most inspiring', 'more inspiring'],
      correct: 2,
      fact: '“Inspiring” é um adjetivo longo, e o superlativo leva “the most”.'
    },
    {
      question: 'Her hair is ___ than her sister’s.',
      translation: 'O cabelo dela é mais escuro do que o da irmã dela.',
      answers: ['darker', 'darkest', 'more dark', 'darkerer'],
      correct: 0,
      fact: 'O comparativo para o adjetivo curto “dark” é “darker”.'
    },
    {
      question: 'This is the ___ spot to relax in the park.',
      translation: 'Este é o local mais agradável para relaxar no parque.',
      answers: ['nicer', 'nicest', 'most nice', 'niceer'],
      correct: 1,
      fact: 'O superlativo do adjetivo curto “nice” leva -st: the nicest.'
    },

    // 91 a 100
    {
      question: 'The new model is ___ than the previous version.',
      translation: 'O novo modelo é mais eficiente do que a versão anterior.',
      answers: ['efficienter', 'more efficient', 'most efficient', 'efficientest'],
      correct: 1,
      fact: 'Comparativo de adjetivos longos exige “more”: more efficient.'
    },
    {
      question: 'Who is the ___ person in your group?',
      translation: 'Quem é a pessoa mais alta no seu grupo?',
      response: 'Gabriel is the tallest person in our group.',
      answers: ['taller', 'tallest', 'most tall', 'tallestest'],
      correct: 1,
      fact: 'Superlativo de “tall” é formado acrescentando -est: the tallest.'
    },
    {
      question: 'This room is ___ than the living room.',
      translation: 'Este quarto é mais brilhante/iluminado do que a sala de estar.',
      answers: ['brighter', 'brightest', 'more bright', 'brighterer'],
      correct: 0,
      fact: 'Adjetivo curto “bright” no comparativo recebe -er: brighter.'
    },
    {
      question: 'It was the ___ exam of the whole year.',
      translation: 'Foi o exame mais longo do ano inteiro.',
      answers: ['longer', 'longest', 'most long', 'longerest'],
      correct: 1,
      fact: 'Superlativo do adjetivo curto “long”: the longest.'
    },
    {
      question: 'A motorcycle is ___ than a bicycle.',
      translation: 'Uma motocicleta é mais pesada do que uma bicicleta.',
      answers: ['heavier', 'heaviest', 'more heavy', 'heavyer'],
      correct: 0,
      fact: 'Adjetivo terminado em consoante + y (“heavy”) vira “heavier” no comparativo.'
    },
    {
      question: 'This is the ___ news I have heard today.',
      translation: 'Esta é a notícia mais impressionante que eu ouvi hoje.',
      answers: ['impressiver', 'impressivest', 'most impressive', 'more impressive'],
      correct: 2,
      fact: '“Impressive” é adjetivo longo, portanto seu superlativo é “the most impressive”.'
    },
    {
      question: 'Your hands are ___ than mine.',
      translation: 'Suas mãos estão mais frias do que as minhas.',
      answers: ['colder', 'coldest', 'more cold', 'colderer'],
      correct: 0,
      fact: 'Adjetivo curto “cold” no comparativo recebe a terminação -er: colder.'
    },
    {
      question: 'He is the ___ player on the team.',
      translation: 'Ele é o jogador mais forte do time.',
      answers: ['stronger', 'strongest', 'most strong', 'strongestest'],
      correct: 1,
      fact: 'O superlativo do adjetivo curto “strong” é “the strongest”.'
    },
    {
      question: 'This task is ___ than the last one.',
      translation: 'Esta tarefa é mais simples do que a última.',
      answers: ['simpler', 'simplest', 'more simple', 'simpleer'],
      correct: 0,
      fact: 'Adjetivo “simple” no comparativo leva -r: simpler.'
    },
    {
      question: 'This is the ___ view from the mountain peak.',
      translation: 'Esta é a vista mais espetacular do pico da montanha.',
      answers: ['spectacularer', 'spectacularest', 'most spectacular', 'more spectacular'],
      correct: 2,
      fact: 'Com adjetivos longos como “spectacular”, usaremos “the most” no superlativo.'
    }
  ]
}