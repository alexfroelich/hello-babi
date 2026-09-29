export default {
    id: 'past-questions',
    label: 'Past Questions',
    description: 'Ask with did, was / were, and who',
    titleFirst: 'Past',
    titleSecond: 'Questions',
    grammarHelp: [
      'Com verbos de ação: <strong>Did + sujeito + verbo base?</strong>',
      'Com to be: <strong>Was / Were</strong> antes do sujeito.',
      'Quando <strong>who</strong> ou <strong>what</strong> pratica a ação (sujeito), use o verbo no passado sem did: <strong>Who called you? / What happened?</strong>'
    ],
    questions: [
      // 1 a 5 (Originais)
      {
        question: '___ you visit your cousins last weekend?',
        translation: 'Você visitou seus primos no fim de semana passado?',
        response: 'Yes, I did. We had lunch together.',
        answers: ['Did', 'Were', 'Was', 'Do'],
        correct: 0,
        fact: 'Para uma pergunta no Simple Past com um verbo de ação, usamos “Did” + sujeito + verbo na forma base.'
      },
      {
        question: '___ Mia at the library yesterday?',
        translation: 'Mia estava na biblioteca ontem?',
        response: 'Yes, she was. She returned a book.',
        answers: ['Were', 'Did', 'Was', 'Is'],
        correct: 2,
        fact: 'Com “Mia” (she), usamos “was” para perguntar sobre uma situação no passado. Não usamos “did” com o verbo to be.'
      },
      {
        question: '___ your friends at the school concert last night?',
        translation: 'Seus amigos estavam no show da escola ontem à noite?',
        response: 'Yes, they were. The band was great!',
        answers: ['Was', 'Did', 'Are', 'Were'],
        correct: 3,
        fact: 'Com “your friends” (they), usamos “were” para fazer uma pergunta com o verbo to be no passado.'
      },
      {
        question: '___ you after class yesterday?',
        translation: 'Quem ligou para você depois da aula ontem?',
        response: 'My mom called me to ask about dinner.',
        answers: ['Who called', 'Who did called', 'Who were called', 'Who was call'],
        correct: 0,
        fact: 'Em “Who called you?”, “who” é quem pratica a ação. Por isso, usamos o verbo no passado diretamente, sem “did”.'
      },
      {
        question: 'What ___ Leo buy at the market?',
        translation: 'O que Leo comprou no mercado?',
        response: 'He bought apples and fresh bread.',
        answers: ['did', 'was', 'were', 'does'],
        correct: 0,
        fact: 'Em perguntas com “did”, o verbo principal fica na forma base: “What did Leo buy?”'
      },

      // 6 a 20
      {
        question: '___ at the party last night?',
        translation: 'O que aconteceu na festa ontem à noite?',
        response: 'Someone spilled juice on the carpet.',
        answers: ['What happened', 'What did happen', 'What was happen', 'What were happened'],
        correct: 0,
        fact: 'Quando a palavra interrogativa (what) é o sujeito da frase, usamos o verbo direto no passado (“happened”) sem o auxiliar “did”.'
      },
      {
        question: '___ you at home when I texted you?',
        translation: 'Você estava em casa quando te enviei uma mensagem?',
        response: 'No, I was at the supermarket.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Com o sujeito “you” e o verbo to be no passado, iniciamos a pergunta com “Were”.'
      },
      {
        question: '___ broke the kitchen window this afternoon?',
        translation: 'Quem quebrou a janela da cozinha esta tarde?',
        response: 'The neighbor’s kids broke it with a ball.',
        answers: ['Who did break', 'Who broke', 'Who was broke', 'Who were break'],
        correct: 1,
        fact: '“Who” é o sujeito da ação. Por isso, o verbo principal entra na forma do passado (“broke”) sem “did”.'
      },
      {
        question: 'Where ___ you leave your car parked?',
        translation: 'Onde você deixou seu carro estacionado?',
        response: 'I parked it right in front of the building.',
        answers: ['did', 'were', 'was', 'are'],
        correct: 0,
        fact: 'Para perguntas com verbos de ação no passado, usamos “did” antes do sujeito e o verbo principal na forma base.'
      },
      {
        question: '___ the movie interesting?',
        translation: 'O filme foi interessante?',
        response: 'Yes, it was very entertaining.',
        answers: ['Were', 'Did', 'Was', 'Is'],
        correct: 2,
        fact: '“The movie” (it) exige o verbo to be no passado “Was”.'
      },
      {
        question: '___ told you about the meeting room change?',
        translation: 'Quem te contou sobre a mudança na sala de reunião?',
        response: 'The manager told me this morning.',
        answers: ['Who did tell', 'Who told', 'Who was tell', 'Who were told'],
        correct: 1,
        fact: 'Em perguntas sobre quem fez a ação (subject questions), usamos o verbo direto no passado (“told”).'
      },
      {
        question: 'Why ___ you late for work yesterday?',
        translation: 'Por que você se atrasou para o trabalho ontem?',
        response: 'Because the bus was delayed.',
        answers: ['were', 'did', 'was', 'are'],
        correct: 0,
        fact: 'Com o adjetivo “late” usaremos o verbo to be no passado: “Why were you late?”.'
      },
      {
        question: '___ she finish her project on time?',
        translation: 'Ela terminou o projeto dela a tempo?',
        response: 'Yes, she submitted it yesterday evening.',
        answers: ['Did', 'Was', 'Were', 'Does'],
        correct: 0,
        fact: 'Perguntas no Simple Past com verbos regulares de ação (finish) começam com “Did”.'
      },
      {
        question: '___ made that noise in the backyard?',
        translation: 'Quem fez aquele barulho no quintal?',
        response: 'It was just a stray cat.',
        answers: ['Who did make', 'Who made', 'Who was make', 'Who were made'],
        correct: 1,
        fact: '“Who” é o sujeito da pergunta, portanto usará o verbo “made” diretamente no passado.'
      },
      {
        question: '___ they happy with their test results?',
        translation: 'Eles ficaram felizes com os resultados dos testes deles?',
        response: 'Yes, they got top scores.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: 'Para o sujeito “they” e o adjetivo “happy”, usaremos a forma verbal “Were”.'
      },
      {
        question: 'What ___ you do during the weekend?',
        translation: 'O que você fez durante o fim de semana?',
        response: 'I went hiking with some friends.',
        answers: ['did', 'were', 'was', 'had'],
        correct: 0,
        fact: 'Para perguntar “o que você fez”, a estrutura padrão é “What did you do?”.'
      },
      {
        question: '___ started the fire in the kitchen?',
        translation: 'O que iniciou o incêndio na cozinha?',
        response: 'An old toaster short-circuited.',
        answers: ['What did start', 'What started', 'What was start', 'What were started'],
        correct: 1,
        fact: 'Quando a palavra “what” é o sujeito da frase, o verbo entra direto na forma do passado (“started”).'
      },
      {
        question: 'Where ___ she buy that beautiful coat?',
        translation: 'Onde ela comprou aquele casaco bonito?',
        response: 'She bought it at a boutique downtown.',
        answers: ['did', 'was', 'were', 'does'],
        correct: 0,
        fact: 'Com o verbo de ação “buy”, usaremos “did” como auxiliar no passado.'
      },
      {
        question: '___ your brother at the gym this morning?',
        translation: 'Seu irmão estava na academia esta manhã?',
        response: 'No, he was working early today.',
        answers: ['Were', 'Did', 'Was', 'Is'],
        correct: 2,
        fact: '“Your brother” (he) pede o verbo to be “Was” no passado.'
      },
      {
        question: '___ wrote this magnificent piece of music?',
        translation: 'Quem escreveu esta magnífica peça de música?',
        response: 'Mozart composed it when he was young.',
        answers: ['Who did write', 'Who wrote', 'Who was write', 'Who were written'],
        correct: 1,
        fact: 'Sem o uso de “did”, pois “Who” é o próprio sujeito que praticou a ação (“wrote”).'
      },

      // 21 a 40
      {
        question: '___ you see the news on TV this morning?',
        translation: 'Você viu as notícias na TV esta manhã?',
        response: 'Yes, I watched the morning report.',
        answers: ['Did', 'Were', 'Was', 'Do'],
        correct: 0,
        fact: 'Perguntas com o verbo de ação “see” utilizam o auxiliar “Did”.'
      },
      {
        question: '___ the weather nice during your trip to the coast?',
        translation: 'O tempo estava agradável durante sua viagem ao litoral?',
        response: 'No, it rained most of the time.',
        answers: ['Were', 'Did', 'Was', 'Is'],
        correct: 2,
        fact: '“The weather” (it) requer a forma no passado do verbo to be “Was”.'
      },
      {
        question: '___ cooked this delicious dinner for us?',
        translation: 'Quem cozinhou este jantar delicioso para nós?',
        response: 'My brother cooked it.',
        answers: ['Who did cook', 'Who cooked', 'Who was cook', 'Who were cooked'],
        correct: 1,
        fact: 'Para perguntar quem realizou a ação de cozinhar, usa-se “Who cooked” sem auxiliar “did”.'
      },
      {
        question: 'How ___ you fix the broken printer so fast?',
        translation: 'Como você consertou a impressora quebrada tão rápido?',
        response: 'I just replaced the ink cartridge.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Usa-se “did” para perguntar a maneira de realizar uma ação no passado.'
      },
      {
        question: '___ the store open when you arrived there?',
        translation: 'A loja estava aberta quando você chegou lá?',
        response: 'Yes, it was still open.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“The store” equivale ao pronome “it”, que pede o verbo “Was”.'
      },
      {
        question: '___ won the award for best actor last night?',
        translation: 'Quem ganhou o prêmio de melhor ator ontem à noite?',
        response: 'Tom Hanks won the award.',
        answers: ['Who did win', 'Who won', 'Who was win', 'Who were won'],
        correct: 1,
        fact: 'Pergunta de sujeito no passado: usamos o verbo no passado “won” diretamente após “Who”.'
      },
      {
        question: 'Why ___ you so tired after the meeting?',
        translation: 'Por que você estava tão cansado depois da reunião?',
        response: 'Because the session lasted three hours.',
        answers: ['were', 'did', 'was', 'are'],
        correct: 0,
        fact: 'O adjetivo “tired” é acompanhado do verbo to be no passado “were”.'
      },
      {
        question: '___ you call the customer back yesterday?',
        translation: 'Você retornou a ligação para o cliente ontem?',
        response: 'Yes, I called him twice.',
        answers: ['Did', 'Were', 'Was', 'Have'],
        correct: 0,
        fact: 'Usa-se “Did” para perguntas sobre ações que ocorreram em um tempo definido no passado.'
      },
      {
        question: '___ caused the power blackout in the neighborhood?',
        translation: 'O que causou o apagão de energia no bairro?',
        response: 'A fallen tree branch damaged the power line.',
        answers: ['What did cause', 'What caused', 'What was cause', 'What were caused'],
        correct: 1,
        fact: '“What” é o sujeito da frase, dispensando o uso do auxiliar “did”.'
      },
      {
        question: '___ your keys on the hall table this morning?',
        translation: 'Suas chaves estavam na mesa do hall esta manhã?',
        response: 'Yes, I found them right there.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“Your keys” é um substantivo plural (they), exigindo “Were”.'
      },
      {
        question: 'When ___ you receive the confirmation email?',
        translation: 'Quando você recebeu o e-mail de confirmação?',
        response: 'I received it two hours ago.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'A estrutura para “quando você recebeu” requer “When did you receive”.'
      },
      {
        question: '___ gave you this beautiful handmade necklace?',
        translation: 'Quem te deu este colar feito à mão tão bonito?',
        response: 'My grandmother gave it to me.',
        answers: ['Who did give', 'Who gave', 'Who was give', 'Who were given'],
        correct: 1,
        fact: '“Who” é o sujeito que dá o presente, por isso o verbo “gave” vai direto ao passado.'
      },
      {
        question: '___ the instructions clear enough for the team?',
        translation: 'As instruções foram claras o suficiente para a equipe?',
        response: 'Yes, everyone understood them well.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“The instructions” (they) é plural e combina com “Were”.'
      },
      {
        question: 'Where ___ she park her bicycle this afternoon?',
        translation: 'Onde ela estacionou a bicicleta dela esta tarde?',
        response: 'She parked it near the main gate.',
        answers: ['did', 'was', 'were', 'does'],
        correct: 0,
        fact: 'Auxiliar de tempo passado com o verbo base “park” é “did”.'
      },
      {
        question: '___ came to help you clean the apartment?',
        translation: 'Quem veio te ajudar a limpar o apartamento?',
        response: 'My roommate helped me.',
        answers: ['Who did come', 'Who came', 'Who was come', 'Who were coming'],
        correct: 1,
        fact: '“Who came” é a forma correta para perguntar quem veio, sem o uso do auxiliar “did”.'
      },
      {
        question: '___ you at work when the earthquake occurred?',
        translation: 'Você estava no trabalho quando o terremoto ocorreu?',
        response: 'No, I was driving home.',
        answers: ['Was', 'Were', 'Did', 'Are'],
        correct: 1,
        fact: 'Com o sujeito “you”, perguntamos a localização no passado com “Were you...”.'
      },
      {
        question: '___ happened to your computer screen?',
        translation: 'O que aconteceu com a tela do seu computador?',
        response: 'I accidentally dropped my phone on it.',
        answers: ['What did happen', 'What happened', 'What was happen', 'What were happened'],
        correct: 1,
        fact: 'Usa-se “What happened?” para perguntar o que aconteceu no passado.'
      },
      {
        question: 'Why ___ the teacher modify the exam schedule?',
        translation: 'Por que o professor modificou o cronograma das provas?',
        response: 'Because many students were sick.',
        answers: ['did', 'was', 'were', 'has'],
        correct: 0,
        fact: 'Perguntas com “why” + verbo de ação (modify) exigem “did”.'
      },
      {
        question: '___ the event successful last Sunday?',
        translation: 'O evento foi bem-sucedido no domingo passado?',
        response: 'Yes, we raised a lot of money.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“The event” (it) combina com a forma singular do verbo to be “Was”.'
      },
      {
        question: '___ lost the keys to the main entrance?',
        translation: 'Quem perdeu as chaves da entrada principal?',
        response: 'The security guard lost them.',
        answers: ['Who did lose', 'Who lost', 'Who was lose', 'Who were lost'],
        correct: 1,
        fact: 'Para identificar a pessoa que perdeu algo, o verbo vai direto no passado: “Who lost...”.'
      },

      // 41 a 60
      {
        question: '___ you meet your old friends during vacation?',
        translation: 'Você encontrou seus velhos amigos durante as férias?',
        response: 'Yes, we had a mini-reunion.',
        answers: ['Did', 'Were', 'Was', 'Have'],
        correct: 0,
        fact: 'Perguntas no passado com verbo de ação usam “Did”.'
      },
      {
        question: '___ your father born in this small city?',
        translation: 'Seu pai nasceu nesta pequena cidade?',
        response: 'Yes, he was born here in 1965.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: 'Expressamos nascimento no passado com o verbo to be: “Was your father born...”.'
      },
      {
        question: '___ sent you those lovely pink flowers?',
        translation: 'Quem te mandou aquelas belas flores cor-de-rosa?',
        response: 'An anonymous admirer sent them.',
        answers: ['Who did send', 'Who sent', 'Who was send', 'Who were sent'],
        correct: 1,
        fact: 'Forma direta de pergunta de sujeito no passado: “Who sent...”.'
      },
      {
        question: 'What time ___ the train leave the central station?',
        translation: 'A que horas o trem saiu da estação central?',
        response: 'It left at exactly 7:15 a.m.',
        answers: ['did', 'was', 'were', 'does'],
        correct: 0,
        fact: 'A pergunta sobre o horário em que uma ação ocorreu usa o auxiliar “did”.'
      },
      {
        question: '___ the children well-behaved at the restaurant?',
        translation: 'As crianças se comportaram bem no restaurante?',
        response: 'Yes, they were very quiet.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“The children” (they) exige o verbo no passado “Were”.'
      },
      {
        question: '___ built this historical house on the corner?',
        translation: 'Quem construiu esta casa histórica na esquina?',
        response: 'A famous local architect built it.',
        answers: ['Who did build', 'Who built', 'Who was build', 'Who were built'],
        correct: 1,
        fact: 'Utiliza-se “Who built” sem o uso da partícula “did”.'
      },
      {
        question: 'How much ___ you pay for that new bicycle?',
        translation: 'Quanto você pagou por aquela bicicleta nova?',
        response: 'I paid three hundred dollars for it.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Para perguntar valores pagos por uma ação no passado, usamos “did”.'
      },
      {
        question: '___ your boss angry when you arrived late?',
        translation: 'Seu chefe estava bravo quando você chegou atrasado?',
        response: 'No, he was quite understanding.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“Your boss” (he/she) com um adjetivo (angry) exige “Was”.'
      },
      {
        question: '___ answered the phone when you called the office?',
        translation: 'Quem atendeu o telefone quando você ligou para o escritório?',
        response: 'The secretary answered it.',
        answers: ['Who did answer', 'Who answered', 'Who was answer', 'Who were answered'],
        correct: 1,
        fact: 'Estrutura direta de pergunta no passado: “Who answered...”.'
      },
      {
        question: 'Where ___ they go after the movie ended?',
        translation: 'Aonde eles foram depois que o filme terminou?',
        response: 'They went to a nearby coffee shop.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'O auxiliar de pergunta no passado para o verbo “go” é “did”.'
      },
      {
        question: '___ the flight delayed because of fog?',
        translation: 'O voo atrasou por causa da neblina?',
        response: 'Yes, it was delayed for two hours.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“The flight” (it) na voz passiva/estado exige “Was”.'
      },
      {
        question: '___ brought this cute puppy to the shelter?',
        translation: 'Quem trouxe este filhote fofo para o abrigo?',
        response: 'A kind neighbor brought him in.',
        answers: ['Who did bring', 'Who brought', 'Who was bring', 'Who were brought'],
        correct: 1,
        fact: 'O verbo irregular “bring” vira “Who brought” em perguntas de sujeito no passado.'
      },
      {
        question: '___ you notice anything strange in the hallway?',
        translation: 'Você notou algo estranho no corredor?',
        response: 'No, everything looked normal.',
        answers: ['Did', 'Were', 'Was', 'Have'],
        correct: 0,
        fact: 'Usa-se “Did” para dar início a uma pergunta sobre notar algo.'
      },
      {
        question: '___ the students ready for the unexpected pop quiz?',
        translation: 'Os alunos estavam prontos para o teste surpresa?',
        response: 'No, they were taken by surprise.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“The students” é plural, exigindo a forma “Were”.'
      },
      {
        question: '___ opened the envelope on the kitchen table?',
        translation: 'Quem abriu o envelope na mesa da cozinha?',
        response: 'My sister opened it by mistake.',
        answers: ['Who did open', 'Who opened', 'Who was open', 'Who were opened'],
        correct: 1,
        fact: 'Usamos “Who opened” sem o verbo auxiliar “did”.'
      },
      {
        question: 'Why ___ you cancel your reservation yesterday?',
        translation: 'Por que você cancelou sua reserva ontem?',
        response: 'Because my travel partner got sick.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Forma interrogativa no passado: “Why did you cancel...”.'
      },
      {
        question: '___ the soup hot enough when it was served?',
        translation: 'A sopa estava quente o suficiente quando foi servida?',
        response: 'Yes, it was steaming hot.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“The soup” (it) exige o verbo no passado “Was”.'
      },
      {
        question: '___ took my umbrella from the stand by the door?',
        translation: 'Quem pegou meu guarda-chuva do suporte ao lado da porta?',
        response: 'I think Mark took it.',
        answers: ['Who did take', 'Who took', 'Who was take', 'Who were taken'],
        correct: 1,
        fact: 'Pergunta com “who” como sujeito utiliza o passado simples “took”.'
      },
      {
        question: 'How many people ___ you invite to your party?',
        translation: 'Quantas pessoas você convidou para a sua festa?',
        response: 'I invited around twenty people.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Auxiliar “did” para concordar com o verbo na forma base “invite”.'
      },
      {
        question: '___ they present at the ceremony last night?',
        translation: 'Eles estavam presentes na cerimônia ontem à noite?',
        response: 'Yes, they sat in the front row.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: 'O sujeito “they” combina com a forma no passado do verbo to be “Were”.'
      },

      // 61 a 80
      {
        question: '___ broke your favorite ceramic mug?',
        translation: 'Quem quebrou sua caneca de cerâmica favorita?',
        response: 'My little brother dropped it.',
        answers: ['Who did break', 'Who broke', 'Who was break', 'Who were broken'],
        correct: 1,
        fact: 'Usamos “Who broke” diretamente, pois “Who” é o agente da ação.'
      },
      {
        question: '___ you enjoy the theatrical performance last evening?',
        translation: 'Você gostou da apresentação teatral ontem à noite?',
        response: 'Yes, the actors were amazing.',
        answers: ['Did', 'Were', 'Was', 'Do'],
        correct: 0,
        fact: 'O verbo de ação “enjoy” pede o uso de “Did”.'
      },
      {
        question: '___ your apartment cold during the winter night?',
        translation: 'Seu apartamento esteve frio durante a noite de inverno?',
        response: 'Yes, the heating system broke down.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“Your apartment” (it) exige o uso de “Was”.'
      },
      {
        question: '___ organized the entire conference this year?',
        translation: 'Quem organizou a conferência inteira este ano?',
        response: 'The marketing team organized it.',
        answers: ['Who did organize', 'Who organized', 'Who was organize', 'Who were organized'],
        correct: 1,
        fact: 'Usamos “Who organized” sem o auxiliar “did”.'
      },
      {
        question: 'Where ___ you find those rare vintage coins?',
        translation: 'Onde você encontrou aquelas moedas antigas e raras?',
        response: 'I found them in my grandfather’s attic.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Pergunta de localização no passado com verbo base (find): “Where did you find...”.'
      },
      {
        question: '___ the museum exhibition crowded yesterday?',
        translation: 'A exposição do museu estava lotada ontem?',
        response: 'Yes, there were long lines everywhere.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“The museum exhibition” (it) concorda com “Was”.'
      },
      {
        question: '___ left the garage door unlocked all night?',
        translation: 'Quem deixou a porta da garagem destrancada a noite toda?',
        response: 'My cousin forgot to lock it.',
        answers: ['Who did leave', 'Who left', 'Who was leave', 'Who were left'],
        correct: 1,
        fact: 'O verbo irregular “leave” no passado fica “Who left” sem “did”.'
      },
      {
        question: 'Why ___ they sell their house so quickly?',
        translation: 'Por que eles venderam a casa deles tão rápido?',
        response: 'Because they were moving to another state.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Iniciamos com “Why did they sell...” para perguntar a razão da ação de vender.'
      },
      {
        question: '___ your colleagues helpful when you started the job?',
        translation: 'Seus colegas foram prestativos quando você começou no trabalho?',
        response: 'Yes, they showed me everything.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“Your colleagues” (they) exige o verbo no passado “Were”.'
      },
      {
        question: '___ fixed the leak in the bathroom pipe?',
        translation: 'Quem consertou o vazamento no cano do banheiro?',
        response: 'The plumber fixed it this morning.',
        answers: ['Who did fix', 'Who fixed', 'Who was fix', 'Who were fixed'],
        correct: 1,
        fact: 'Usamos “Who fixed” sem o auxílio do verbo “did”.'
      },
      {
        question: '___ you sleep well last night after the long drive?',
        translation: 'Você dormiu bem ontem à noite depois da longa viagem de carro?',
        response: 'Yes, I slept for nine hours.',
        answers: ['Did', 'Were', 'Was', 'Have'],
        correct: 0,
        fact: 'Com o verbo de ação “sleep”, iniciamos a pergunta com “Did”.'
      },
      {
        question: '___ the cake sweet enough for the party guests?',
        translation: 'O bolo estava doce o suficiente para os convidados da festa?',
        response: 'Yes, everyone loved the flavor.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“The cake” é singular (it) e pede o verbo “Was”.'
      },
      {
        question: '___ invited you to the charity gala?',
        translation: 'Quem te convidou para a gala de caridade?',
        response: 'Sarah invited me as her guest.',
        answers: ['Who did invite', 'Who invited', 'Who was invite', 'Who were invited'],
        correct: 1,
        fact: 'Sem “did”: para o sujeito da ação, usamos “Who invited...”.'
      },
      {
        question: 'When ___ your family move to this country?',
        translation: 'Quando sua família se mudou para este país?',
        response: 'We moved here ten years ago.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Usa-se “When did your family move...” para perguntar o momento da mudança.'
      },
      {
        question: '___ the exam questions difficult for you?',
        translation: 'As questões do exame foram difíceis para você?',
        response: 'Some of them were quite tricky.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“The exam questions” está no plural (they), exigindo “Were”.'
      },
      {
        question: '___ painted this colorful mural on the wall?',
        translation: 'Quem pintou este mural colorido na parede?',
        response: 'A group of local street artists painted it.',
        answers: ['Who did paint', 'Who painted', 'Who was paint', 'Who were painted'],
        correct: 1,
        fact: 'Pergunta de sujeito direto: “Who painted...”.'
      },
      {
        question: 'How ___ you lose your passport during the trip?',
        translation: 'Como você perdeu seu passaporte durante a viagem?',
        response: 'I left my bag in a taxi.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Usa-se “How did you lose...” para perguntar o modo como a perda ocorreu.'
      },
      {
        question: '___ the restaurant open late on Sunday night?',
        translation: 'O restaurante esteve aberto até tarde na noite de domingo?',
        response: 'No, it closed at eight o\'clock.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: 'Com “The restaurant” (it), usamos “Was”.'
      },
      {
        question: '___ cleaned the office kitchen after lunch?',
        translation: 'Quem limpou a cozinha do escritório depois do almoço?',
        response: 'The intern cleaned it.',
        answers: ['Who did clean', 'Who cleaned', 'Who was clean', 'Who were cleaned'],
        correct: 1,
        fact: 'Usamos “Who cleaned” sem incluir a partícula “did”.'
      },
      {
        question: '___ you send the monthly report before leaving?',
        translation: 'Você enviou o relatório mensal antes de sair?',
        response: 'Yes, I emailed it to the manager.',
        answers: ['Did', 'Were', 'Was', 'Have'],
        correct: 0,
        fact: 'O verbo de ação “send” requer o auxiliar “Did” para formar a pergunta no passado.'
      },

      // 81 a 100
      {
        question: '___ the roads slippery after the rainstorm?',
        translation: 'As estradas estavam escorregadias depois da tempestade de chuva?',
        response: 'Yes, drivers had to be very careful.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“The roads” está no plural (they), necessitando de “Were”.'
      },
      {
        question: '___ recommended this doctor to you?',
        translation: 'Quem te recomendou este médico?',
        response: 'My neighbor recommended him.',
        answers: ['Who did recommend', 'Who recommended', 'Who was recommend', 'Who were recommended'],
        correct: 1,
        fact: 'Sem o uso de “did”, pois “Who” é quem faz a recomendação (“Who recommended...”).'
      },
      {
        question: 'What ___ you learn in your history class today?',
        translation: 'O que você aprendeu na sua aula de história hoje?',
        response: 'We learned about ancient Rome.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Usa-se “What did you learn” para perguntar sobre o aprendizado no passado.'
      },
      {
        question: '___ the hotel room clean when you checked in?',
        translation: 'O quarto do hotel estava limpo quando você fez o check-in?',
        response: 'Yes, it was spotless.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“The hotel room” (it) combina com o verbo no passado “Was”.'
      },
      {
        question: '___ designed the company’s new logo?',
        translation: 'Quem projetou o novo logotipo da empresa?',
        response: 'A graphic designer from Paris designed it.',
        answers: ['Who did design', 'Who designed', 'Who was design', 'Who were designed'],
        correct: 1,
        fact: 'Pergunta de sujeito: usamos o verbo principal diretamente no passado (“Who designed...”).'
      },
      {
        question: 'Why ___ you choose this specific career path?',
        translation: 'Por que você escolheu esta carreira específica?',
        response: 'Because I always wanted to help people.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'A estrutura no passado simples com o verbo “choose” é “Why did you choose...”.'
      },
      {
        question: '___ your shoes wet after walking in the grass?',
        translation: 'Seus sapatos ficaram molhados depois de andar na grama?',
        response: 'Yes, my socks got wet too.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“Your shoes” é plural (they), combinando com “Were”.'
      },
      {
        question: '___ translated this book into English?',
        translation: 'Quem traduziu este livro para o inglês?',
        response: 'A professional translator translated it.',
        answers: ['Who did translate', 'Who translated', 'Who was translate', 'Who were translated'],
        correct: 1,
        fact: 'Estrutura direta de pergunta no passado: “Who translated...”.'
      },
      {
        question: '___ you remember to lock the front door?',
        translation: 'Você se lembrou de trancar a porta da frente?',
        response: 'Yes, I locked it twice.',
        answers: ['Did', 'Were', 'Was', 'Have'],
        correct: 0,
        fact: 'Perguntas com o verbo “remember” usam o auxiliar no passado “Did”.'
      },
      {
        question: '___ the coffee shop open early this morning?',
        translation: 'A cafeteria estava aberta cedo esta manhã?',
        response: 'Yes, it opened at six o’clock.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“The coffee shop” (it) concorda com a forma singular “Was”.'
      },
      {
        question: '___ scored the winning goal in the final match?',
        translation: 'Quem marcou o gol da vitória na partida final?',
        response: 'The team captain scored it.',
        answers: ['Who did score', 'Who scored', 'Who was score', 'Who were scored'],
        correct: 1,
        fact: 'Para o sujeito que marcou o gol, usa-se “Who scored” diretamente.'
      },
      {
        question: 'Where ___ you spend your winter holidays last year?',
        translation: 'Onde você passou suas férias de inverno no ano passado?',
        response: 'I spent them in a cabin in the mountains.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Usamos “did” para formar a pergunta no passado com o verbo base “spend”.'
      },
      {
        question: '___ the movie seats comfortable during the long show?',
        translation: 'Os assentos do cinema estavam confortáveis durante a longa exibição?',
        response: 'Yes, they were very spacious.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“The movie seats” está no plural (they), exigindo a forma “Were”.'
      },
      {
        question: '___ paid for the lunch bill at the restaurant?',
        translation: 'Quem pagou a conta do almoço no restaurante?',
        response: 'My boss paid for the whole lunch.',
        answers: ['Who did pay', 'Who paid', 'Who was pay', 'Who were paid'],
        correct: 1,
        fact: 'Em “Who paid”, o pronome “Who” é o próprio sujeito que realizou o pagamento.'
      },
      {
        question: 'Why ___ you leave the party before midnight?',
        translation: 'Por que você saiu da festa antes da meia-noite?',
        response: 'Because I had to wake up early today.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'A estrutura de pergunta com “why” e verbo no passado é “Why did you leave...”.'
      },
      {
        question: '___ the museum guide helpful during your tour?',
        translation: 'O guia do museu foi prestativo durante a sua visita?',
        response: 'Yes, he answered all of our questions.',
        answers: ['Did', 'Was', 'Were', 'Is'],
        correct: 1,
        fact: '“The museum guide” (he/she) combina com “Was”.'
      },
      {
        question: '___ discovered the error in the financial report?',
        translation: 'Quem descobriu o erro no relatório financeiro?',
        response: 'The auditor discovered it during the review.',
        answers: ['Who did discover', 'Who discovered', 'Who was discover', 'Who were discovered'],
        correct: 1,
        fact: 'Pergunta de sujeito direto no passado: “Who discovered...”.'
      },
      {
        question: 'How many books ___ you borrow from the library?',
        translation: 'Quantos livros você pegou emprestados na biblioteca?',
        response: 'I borrowed three books.',
        answers: ['did', 'were', 'was', 'have'],
        correct: 0,
        fact: 'Usa-se o auxiliar “did” com o verbo base “borrow” para perguntas de quantidade no passado.'
      },
      {
        question: '___ your friends surprised by the announcement?',
        translation: 'Seus amigos ficaram surpresos com o anúncio?',
        response: 'Yes, nobody was expecting it.',
        answers: ['Was', 'Did', 'Were', 'Are'],
        correct: 2,
        fact: '“Your friends” é plural (they), por isso usamos “Were”.'
      },
      {
        question: '___ repaired the air conditioner in the main office?',
        translation: 'Quem consertou o ar-condicionado no escritório principal?',
        response: 'A technician repaired it yesterday.',
        answers: ['Who did repair', 'Who repaired', 'Who was repair', 'Who were repaired'],
        correct: 1,
        fact: 'Usamos “Who repaired” sem incluir o verbo auxiliar “did”.'
      },
      {
        question: '___ you find your lost wallet in the end?',
        translation: 'Você encontrou sua carteira perdida no final das contas?',
        response: 'Yes, it was under the driver\'s seat.',
        answers: ['Did', 'Were', 'Was', 'Have'],
        correct: 0,
        fact: 'Para perguntas com o verbo de ação “find” no Simple Past, utilizamos “Did”.'
      }
    ]
}