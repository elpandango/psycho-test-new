const behaviorAnswersPairsArray = [
  {
    answer_a: 'а) Иногда я предоставляю другим возможность взять на себя ответственность за решение спорного вопроса.',
    answer_b: 'б) Чем обсуждать то, в чем мы расходимся, я стараюсь обратить внимание на то, в чем согласны мы оба.',
    id: 1
  },
  {
    answer_a: ' а) Я стараюсь найти компромиссное решение. ',
    answer_b: ' б) Я пытаюсь уладить дело с учетом всех интересов другого и моих собственных. ',
    id: 2
  },
  {
    answer_a: ' а) Обычно я настойчиво стремлюсь добиться своего. ',
    answer_b: ' б) Я стараюсь успокоить другого и стремлюсь, главным образом, сохранить наши отношения. ',
    id: 3
  },
  {
    answer_a: ' а) Я стараюсь найти компромиссное решение. ',
    answer_b: ' б) Иногда я жертвую своими собственными интересами ради интересов другого человека. ',
    id: 4
  },
  {
    answer_a: ' а) Улаживая спорную ситуацию, я всё время стараюсь найти поддержку у другого. ',
    answer_b: ' б) Я стараюсь сделать всё, чтобы избежать бесполезной напряженности. ',
    id: 5
  },
  {
    answer_a: ' а) Я стараюсь избежать возникновения неприятностей для себя. ',
    answer_b: ' б) Я стараюсь добиться своего. ',
    id: 6
  },
  {
    answer_a: ' а) Я стараюсь отложить решение сложного вопроса с тем, чтобы со временем решить его окончательно. ',
    answer_b: ' б) Я считаю возможным в чем-то уступить, чтобы добиться чего-то другого. ',
    id: 7
  },
  {
    answer_a: ' а) Обычно я настойчиво стремлюсь добиться своего. ',
    answer_b: ' б) Первым делом я стараюсь ясно определить то, в чем состоят все затронутые интересы и спорные вопросы. ',
    id: 8
  },
  {
    answer_a: ' а) Думаю, что не всегда стоит волноваться из-за каких-то возникающих разногласий. ',
    answer_b: ' б) Я предпринимаю усилия, чтобы добиться своего. ',
    id: 9
  },
  {
    answer_a: ' а) Я твердо стремлюсь достичь своего. ',
    answer_b: ' б) Я пытаюсь найти компромиссное решение. ',
    id: 10
  },
  {
    answer_a: ' а) Первым делом я стараюсь ясно определить то, в чем состоят все затронутые интересы и спорные вопросы. ',
    answer_b: ' б) Я стараюсь успокоить другого и стремлюсь, главным образом, сохранить наши отношения. ',
    id: 11
  },
  {
    answer_a: ' а) Зачастую я избегаю занимать позицию, которая может вызвать споры. ',
    answer_b: ' б) Я даю возможность другому в чем-то остаться при своем мнении, если он также идет навстречу мне. ',
    id: 12
  },
  {
    answer_a: ' а) Я предлагаю среднюю позицию. ',
    answer_b: ' б) Я пытаюсь убедить другого в преимуществах своей позиции. ',
    id: 13
  },
  {
    answer_a: ' а) Я сообщаю другому свою точку зрения и спрашиваю о его взглядах. ',
    answer_b: ' б) Я пытаюсь показать другому логику и преимущество своих взглядов. ',
    id: 14
  },
  {
    answer_a: ' а) Я стараюсь успокоить другого и стремлюсь, главным образом, сохранить наши отношения. ',
    answer_b: ' б) Я стараюсь сделать всё необходимое, чтобы избежать напряженности. ',
    id: 15
  },
  {
    answer_a: ' а) Я стараюсь не задеть чувства другого. ',
    answer_b: ' б) Я пытаюсь убедить другого в преимуществах моей позиции. ',
    id: 16
  },
  {
    answer_a: ' а) Обычно я настойчиво стремлюсь добиться своего. ',
    answer_b: ' б) Я стараюсь сделать всё, чтобы избежать бесполезной напряженности. ',
    id: 17
  },
  {
    answer_a: ' а) Если это сделает другого счастливым, я дам ему возможность настоять на своем. ',
    answer_b: ' б) Я дам возможность другому в чем-то оставаться при своем мнении, если он также идет мне навстречу. ',
    id: 18
  },
  {
    answer_a: ' а) Первым делом я стараюсь ясно определить то, в чем состоят все затронутые интересы и спорные вопросы. ',
    answer_b: ' б) Я стараюсь отложить решение сложного вопроса с тем, чтобы со временем решить его окончательно. ',
    id: 19
  },
  {
    answer_a: ' а) Я пытаюсь немедленно разрешить наши разногласия. ',
    answer_b: ' б) Я стараюсь найти наилучшее сочетание выгод и потерь для нас обоих. ',
    id: 20
  },
  {
    answer_a: ' а) Ведя переговоры, я стараюсь быть внимательным к желаниям другого. ',
    answer_b: ' б) Я всегда склоняюсь к прямому обсуждению проблемы. ',
    id: 21
  },
  {
    answer_a: ' а) Я пытаюсь найти позицию, которая находится посередине между моей и той, которая отстаивается другим. ',
    answer_b: ' б) Я отстаиваю свои желания. ',
    id: 22
  },
  {
    answer_a: ' а) Как правило, я озабочен тем, чтобы удовлетворить желания каждого из нас. ',
    answer_b: ' б) Иногда я предоставляю другим возможность взять на себя ответственность за решение спорного вопроса. ',
    id: 23
  },
  {
    answer_a: ' а) Если позиция другого кажется ему очень важной, я постараюсь пойти навстречу его желаниям. ',
    answer_b: ' б) Я стараюсь убедить другого в необходимости прийти к компромиссу. ',
    id: 24
  },
  {
    answer_a: ' а) Я пытаюсь показать другому логику и преимущество своих взглядов. ',
    answer_b: ' б) Ведя переговоры, я стараюсь быть внимательным к желаниям другого. ',
    id: 25
  },
  {
    answer_a: ' а) Я предлагаю среднюю позицию. ',
    answer_b: ' б) Я почти всегда озабочен тем, чтобы удовлетворить желания каждого. ',
    id: 26
  },
  {
    answer_a: ' а) Зачастую я избегаю занимать позицию, которая может вызвать споры. ',
    answer_b: ' б) Если это сделает другого счастливым, я дам ему возможность настоять на своем. ',
    id: 27
  },
  {
    answer_a: ' а) Обычно я настойчиво стремлюсь добиться своего. ',
    answer_b: ' б) Улаживая спорную ситуацию, я обычно стараюсь найти поддержку у другого. ',
    id: 28
  },
  {
    answer_a: ' а) Я предлагаю среднюю позицию. ',
    answer_b: ' б) Думаю, что не всегда стоит волноваться из-за каких-то возникающих разногласий. ',
    id: 29
  },
  {
    answer_a: ' а) Я стараюсь не задеть чувств другого. ',
    answer_b: ' б) Я всегда занимаю такую позицию, чтобы мы могли совместно с другим заинтересованным человеком добиться успеха. ',
    id: 30
  },
]

export default behaviorAnswersPairsArray
