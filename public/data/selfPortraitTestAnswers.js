const selfPortraitAnswersPairsArray = [
  {
    question: 'Я провожу за работой больше времени, чем мои коллеги, поскольку люблю, чтобы все было сделано правильно и хорошо.',
    id: 1
  },
  {
    question: 'Я очень организованная личность. Я люблю следовать расписанию и составлять списки дел, которые следовало бы выполнить. Иногда у меня оказывается столько списков, что я не знаю, что с ними делать..',
    id: 2
  },
  {
    question: 'Иногда меня называют «трудоголиком». Действительно, я работаю очень напряженно, даже когда есть деньги и все счета оплачены. Думаю, если бы я захотел, то мог бы расслабиться и немного отдохнуть.',
    id: 3
  },
  {
    question: 'Я люблю свои ежедневные дела и обязанности. Я становлюсь упрямым, если кто-то пытается заставить меня изменить им.',
    id: 4
  },
  {
    question: 'Я ненавижу рутину, я не очень обязательный человек, поэтому откладываю все дела на потом или вообще не занимаюсь ими.',
    id: 5
  },
  {
    question: 'Когда бы я не добивался успеха, всякий раз обнаруживаю, что не получаю от этого удовольствия, к тому же в другой сфере жизни все начинает разлаживаться.',
    id: 6
  },
  {
    question: 'У меня множество способностей, но они не дают мне преимуществ. Если я делаю что-то хорошо, то могу помочь другим, но не могу заставить свои способности работать на себя.',
    id: 7
  },
  {
    question: 'Я прекрасно лажу с собой. Я знаю, какую работу хочу выполнять, каких друзей иметь и вообще, что для меня важно.',
    id: 8
  },
  {
    question: 'Я чувствую себя, как пустая раковина. Я могу ощущать полную бессмысленность существования.',
    id: 9
  },
  {
    question: 'Я обожаю мечтать. Представляю себя богатым, могущественным и знаменитым. Под шумные аплодисменты получающим Нобелевскую премию, обожествляемым за талант и красоту толпой фанов.',
    id: 10
  },
  {
    question: 'Хотя я и не уверен, что это хорошо, меня привлекает насилие, оружие и боевые искусства. Я люблю фильмы, в которых много действия.',
    id: 11
  },
  {
    question: 'Считают, что я говорю довольно странно, говорю вещи, которые слишком глубоки для людей, или не объясняю, что я имею в виду.',
    id: 12
  },
  {
    question: 'Меня называют надменным, ну что ж…',
    id: 13
  },
  {
    question: 'Я люблю, когда мной восхищаются, а когда игнорируют, пытаюсь выуживать комплименты словно рыбу',
    id: 14
  },
  {
    question: 'Внешность очень важна для меня, я трачу много времени, удостоверяясь в том, что выгляжу привлекательно.',
    id: 15
  },
  {
    question: 'Иногда люди считают меня эксцентричным, потому что я одеваюсь по-своему и кажусь им немного «не от мира сего». Действительно, я живу в собственном маленьком мирке.',
    id: 16
  },
  {
    question: 'Хотя я думаю, что понимаю людей, они всегда говорят, что у меня нет ни малейшего понятия о том, что они чувствуют.',
    id: 17
  },
  {
    question: 'Если приходится стоять в очереди или сидеть в переполненном ресторане, я обычно пытаюсь пролезть вперед и быть обслуженным немедленно, или, по крайней мере, я считаю, что так должно быть.',
    id: 18
  },
  {
    question: 'Я никогда не ощущаю вины за то, что сделал.',
    id: 19
  },
  {
    question: 'Все люди, с которыми я сотрудничаю, и все организации, к которым я принадлежу, являются влиятельными и важными.',
    id: 20
  },
  {
    question: 'Возможно, некоторые считают меня зажатым и косным, но я свято верю, что для аморального или неэтичного поведения извинений не существует.',
    id: 21
  },
  {
    question: 'Прежде чем принять решение, я предпочитаю выслушать добрый совет, даже если это касается будничных проблем.',
    id: 22
  },
  {
    question: 'Я просто не могу выбрасывать старые вещи, даже если они бесполезны и бессмысленны для меня.',
    id: 23
  },
  {
    question: 'Может быть, я и преувеличиваю важность своей персоны, но, честно говоря, думаю, что достоин всяческих похвал.',
    id: 24
  },
  {
    question: 'Я суровый судья самому себе.',
    id: 25
  },
  {
    question: 'Я бы не назвал себя легкомысленным, для меня все имеет значение и вес. Большую часть времени я абсолютно серьезен.',
    id: 26
  },
  {
    question: 'Иногда мне кажется, что вина, это мое второе имя. Я даже не всегда уверен, что знаю повод, из-за которого чувствую себя виноватым.',
    id: 27
  },
  {
    question: 'Я не очень-то верю в себя, иногда я чувствую себя просто никчемным.',
    id: 28
  },
  {
    question: 'Я не боюсь рассказывать другим о своих проблемах, но чувствую себя очень неудобно, если мне помогают решать их.',
    id: 29
  },
  {
    question: 'Люди могут думать, что я слишком много говорю о своих неудачах, но они не понимают, насколько всё действительно плохо для меня.',
    id: 30
  },
  {
    question: 'Иногда я замечаю, что смеюсь над неудачами других, хотя не очень горжусь такой реакцией. Возможно, мне просто хочется сказать: «Вот я бы на вашем месте…»',
    id: 31
  },
  {
    question: 'Мне трудно находиться среди тех, кто богаче меня, так как часто завидую их счастливой звезде.',
    id: 32
  },
  {
    question: 'Иногда мне трудно расслабиться и отдохнуть. Когда появляется возможность доставить себе удовольствие, по разным причинам мне трудно воспользоваться ею.',
    id: 33
  },
  {
    question: 'Когда дело касается взаимоотношений с окружающими, мне кажется, что я свой самый злейший враг. Я вечно связываюсь с теми, что унижает и разочаровывает меня. Не могу поверить, что я настолько не разбираюсь в людях. Должно быть, просто наивен.',
    id: 34
  },
  {
    question: 'Со мною трудно долго находиться рядом, потому что мои требования к людям чрезмерны. И все-таки я расстраиваюсь, когда люди сходят с ума от моего поведения.',
    id: 35
  },
  {
    question: 'Если кто-то заботится обо мне или слишком нежно ко мне относится, для меня это не интересно. Мне становится даже скучно, если в моих отношениях с окружающими отсутствует вызов.',
    id: 36
  },
  {
    question: 'Кажется, я иногда слишком много делаю для других.',
    id: 37
  },
  {
    question: 'Обычно я оставляю серьезные решения другим важным людям.',
    id: 38
  },
  {
    question: 'Я не слишком самостоятелен, я больше последователь, чем лидер, но могу быть преданным игроком в команде.',
    id: 39
  },
  {
    question: 'Мне нравится соглашаться с другими людьми. Если я не согласен, то обычно оставляю свое мнение при себе.',
    id: 40
  },
  {
    question: 'Я лезу из кожи вон, делая все для других, чтобы понравиться им. Иногда в пылу я могу даже доставить неприятности.',
    id: 41
  },
  {
    question: 'Мне гораздо лучше находиться в среде общения, потому что я чувствую себя совершенно беспомощным в одиночестве.',
    id: 42
  },
  {
    question: 'Когда общение прекращается, я начинаю паниковать и немедленно начинаю искать другое.',
    id: 43
  },
  {
    question: 'Вероятно, я слишком волнуюсь, что не могу позаботиться о себе, если потеряю важного в своей жизни человека.',
    id: 44
  },
  {
    question: 'Порой я просто теряю рассудок, когда представляю, что люди могут покинуть меня. Я принимаюсь звонить и требовать, чтобы меня разуверили в этих подозрениях, что, должно быть, здорово им докучает.',
    id: 45
  },
  {
    question: 'Я люблю быть в центре внимания, это восхитительно. Я гораздо лучше чувствую себя в центре событий, чем на обочине.',
    id: 46
  },
  {
    question: 'Мне нравится флиртовать, и я хочу, чтобы люди считали меня привлекательным.',
    id: 47
  },
  {
    question: 'Меня считают очень занимательным. Я умею живо и красочно рассказывать о том, что произошло, хотя и не всегда придерживаюсь фактов.',
    id: 48
  },
  {
    question: 'Я довольно легко поддаюсь внушению. Мне приходится быть всегда настороже, чтобы не попасть под влияние других.',
    id: 49
  },
  {
    question: 'Слишком часто я предаю больше значения взаимоотношениям, чем они того стоят. Это причиняет мне душевную боль.',
    id: 50
  },
  {
    question: 'Как правило, мои взаимоотношения очень интенсивны, чувства, которые я испытываю к человеку, бросаются из одной крайности в другую. Иногда я преклоняюсь перед ним, а иногда просто не переношу его присутствия.',
    id: 51
  },
  {
    question: 'Для меня зависть – это жизненный фактор. Я завидую – мне завидуют.',
    id: 52
  },
  {
    question: 'Я не очень доверяю людям, хотя мне бы хотелось. Просто не могу не волноваться, что они используют меня, если я не буду проявлять осторожность.',
    id: 53
  },
  {
    question: 'Иногда мне кажется, что мои друзья или коллеги не так уж преданны, как мне бы хотелось.',
    id: 54
  },
  {
    question: 'У меня нет близких друзей, кроме, разве что, некоторых членов семьи.',
    id: 55
  },
  {
    question: 'Я ревнивец. Я всегда волнуюсь, верен ли мне мой партнер.',
    id: 56
  },
  {
    question: 'Я довольно скрытная личность и держу всегда все в себе, так как никогда не знаешь, кто может использовать эту информацию в своих целях.',
    id: 57
  },
  {
    question: 'Вообще-то я одиночка. Мне не очень-то нравится, если вокруг люди, даже моя семья.',
    id: 58
  },
  {
    question: 'Если есть выбор, я предпочитаю все делать сам.',
    id: 59
  },
  {
    question: 'Я не испытываю сильного желания заняться с кем-нибудь сексом.',
    id: 60
  },
  {
    question: 'Для меня трудно быть самим собой в близких отношениях. Я боюсь показаться смешным и поэтому отступаю.',
    id: 61
  },
  {
    question: 'Я стесняюсь в кругу новых людей.',
    id: 62
  },
  {
    question: 'Я часто нахожу общество невыносимым, даже если это общество людей, которых я хорошо знаю. Не могу преодолеть чувство, что другие смотрят на меня, оценивают и не всегда лестно.',
    id: 63
  },
  {
    question: 'Обычно я не связываюсь с людьми, пока не удостоверюсь, что нравлюсь им.',
    id: 64
  },
  {
    question: 'Мне более удобно заниматься работой, которая не вовлекает в себя много людей. Я беспокоюсь, что коллеги станут критиковать меня.',
    id: 65
  },
  {
    question: 'В обществе я чувствую себя уверенно. Я разговариваю спокойно, без страха сказать какую-нибудь глупость или обнаружить пробел в знаниях.',
    id: 66
  },
  {
    question: 'Люди не понимают или не одобряют меня.',
    id: 67
  },
  {
    question: 'Я могу быть довольно критичным по отношению к своему боссу или вышестоящему начальству. Может быть я не представляю, каково это находиться в их шкуре, но, мне кажется, я мог бы работать лучше.',
    id: 68
  },
  {
    question: 'Когда меня просят сделать то, что я не хочу делать, я становлюсь несносным, могу спорить, дуться или ворчать.',
    id: 69
  },
  {
    question: 'Если ко мне придираются, становлюсь невыносимым, упрямым, но позже чувствую вину и пытаюсь ее загладить.',
    id: 70
  },
  {
    question: 'Лучше бы я не относился к другим так критично, я всегда нахожу в них недостатки.',
    id: 71
  },
  {
    question: 'Некоторые люди говорят, что я чересчур самостоятелен, но лучше я сделаю работу сам, чем позволю другим сделать ее неправильно. Я рискну показаться слишком «деловым», если это сможет заставить людей выполнить работу так, как нужно.\n',
    id: 72
  },
  {
    question: 'Думаю, что строгая дисциплина очень важна. Хотя я не приверженец физических наказаний, верю в правильность пословицы: «Пожалеешь розгу – испортишь ребенка».',
    id: 73
  },
  {
    question: 'Члены моей семьи часто жалуются, что я ущемляю их свободу и независимость. Полагаю, я действительно довольно строг.',
    id: 74
  },
  {
    question: 'Люди говорят, что я унижаю их перед другими. Они не должны быть такими чувствительными – слова не могут обидеть. А если они действительно считают меня слишком критичным, пусть отвечают тем же.',
    id: 75
  },
  {
    question: 'Думаю, что могу быть страшным, некоторые люди говорят, что выполняют мои указания потому, что боятся меня.',
    id: 76
  },
  {
    question: 'Я предпочитаю доминировать в отношениях с окружающими. В результате я могу показаться жестоким или плохим, не осознавая этого.',
    id: 77
  },
  {
    question: 'Я верю, что в некоторых отдельных ситуациях приходится перешагивать через других, чтобы добраться до нужного места.',
    id: 78
  },
  {
    question: 'Я вижу, что некоторые люди делают мне мелкие пакости, достают или даже оскорбляют меня лишь для того, чтобы вывести из себя.',
    id: 79
  },
  {
    question: 'Если кто-то поступил по отношению ко мне плохо, я долго держу на него зуб.',
    id: 80
  },
  {
    question: 'Я не обязательно говорю только правду.',
    id: 81
  },
  {
    question: 'Иногда я люблю присочинить или исказить факты, только чтобы посмотреть на реакцию людей, это всего лишь шутки, нет причин злиться.',
    id: 82
  },
  {
    question: 'Иногда мне говорят, что я ищу предлог к ссоре. Правда, я готов спорить или драться с любым, кто не на моей стороне.',
    id: 83
  },
  {
    question: 'Я остро чувствую критику, даже если она завуалирована, и никому не спускаю ее с рук.',
    id: 84
  },
  {
    question: 'У меня ужасный характер, но ничего не могу поделать.',
    id: 85
  },
  {
    question: 'Люди говорят, что иногда не понимают, воспринимать ли мои чувства серьезно или нет.',
    id: 86
  },
  {
    question: 'Я выражаю свои чувства пылко и театрально.',
    id: 87
  },
  {
    question: 'У меня особое проявление эмоций. Например, что-то печальное может показаться смешным, и я рассмеюсь.',
    id: 88
  },
  {
    question: 'Мое настроение – чувствительный прибор. Мелочи могут выбить меня из колеи. За несколько часов я могу испытать широкий спектр эмоций, от счастья до печали и раздражения. Но плохое настроение никогда не затягивается.\n',
    id: 89
  },
  {
    question: 'Я много размышляю и беспокоюсь.',
    id: 90
  },
  {
    question: 'Я бы не хотел так сильно переживать по поводу того, что думает обо мне общество.',
    id: 91
  },
  {
    question: 'Ненавижу риск и нетрадиционные решения, так как боюсь оказаться в дураках.',
    id: 92
  },
  {
    question: 'На свете не так уж много вещей, которые я люблю делать.',
    id: 93
  },
  {
    question: 'Меня можно назвать человеком с каменным лицом, потому что я вообще не очень эмоционален.',
    id: 94
  },
  {
    question: 'Я не показываю своей реакции ни на критику, ни на комплименты.',
    id: 95
  },
  {
    question: 'Я думаю, что настроен на иную, чем остальные, волну. Иногда я замечаю странные вещи, и они мне кажутся реальными, хотя я не могу доказать этого. Например, выход из собственного тела или присутствие рядом человека, который давно уже умер.\n',
    id: 96
  },
  {
    question: 'Меня привлекает магия и НЛО. Я обладаю подобием «шестого чувства», иногда знаю, что должно произойти задолго до того, как это случится.',
    id: 97
  },
  {
    question: 'Я вижу стакан наполовину пустым, а не наполовину полным.',
    id: 98
  },
  {
    question: 'Я не могу легко тратить деньги, хотя некоторые обвиняют меня в скупости. Я предпочитаю оставлять что-нибудь на черный день.',
    id: 99
  },
  {
    question: 'Мне нравится действовать импульсивно и по вдохновению, например, я могу напиться, если есть настроение, или позволить себе хорошо поесть. Возможно, иногда я вожу машину слишком быстро или делаю бессмысленные покупки. Так жить гораздо интереснее, хотя порою можно и обжечься.',
    id: 100
  },
  {
    question: 'Я могу быть очень театральным в печали. Я иногда угрожаю убить себя, но вряд ли это сделаю на самом деле.',
    id: 101
  },
  {
    question: 'Я заинтересован андеграундным стилем жизни, когда можно беспрепятственно ломать устоявшиеся правила.',
    id: 102
  },
  {
    question: 'Я просто не способен долго работать или волноваться, оплачены ли мои счета, поэтому многие люди считают меня безответственным.',
    id: 103
  },
  {
    question: 'Я не принадлежу к типу людей, которые осторожничают. Я могу рискнуть ехать на повышенной скорости или немного выпивши, но я всегда знаю, что делаю.',
    id: 104
  },
  {
    question: 'Я люблю все делать спонтанно, не планируя заранее.',
    id: 105
  },
  {
    question: 'В детстве я был трудным ребенком и вечно попадал в неприятности. Я прогуливал уроки, убегал из дома, дрался, врал, воровал и спекулировал.',
    id: 106
  },
  {
    question: 'Под влиянием стресса я становлюсь подозрительным без причины или нарочно все порчу, а после притворяюсь, что ничего не случилось.',
    id: 107
  },

]

export default selfPortraitAnswersPairsArray