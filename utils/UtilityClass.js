function sendHttpRequest (method, url, data) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(data)
  }).then(response => {
    return response.json()
  })
}

function conflictBehaviorCalc (dataArray) {

  const dataFields = {
    russianItemName: ['Соперничество', 'Сотрудничество', 'Компромисс', 'Избегание', 'Приспособление'],
    testItemName: ['rivalry', 'cooperation', 'compromise', 'avoidance', 'adaptation'],
  }

  let obj = {
    rivalry: 0,
    cooperation: 0,
    compromise: 0,
    avoidance: 0,
    adaptation: 0,
  }

  for (const key in dataArray) {
    let item = dataArray[key]

    if (item.id === 1) {
      if (item.variant === 'a') {
        obj.avoidance++
      }
      if (item.variant === 'b') {
        obj.adaptation++
      }
    }
    if (item.id === 2) {
      if (item.variant === 'a') {
        obj.compromise++
      }
      if (item.variant === 'b') {
        obj.cooperation++
      }
    }
    if (item.id === 3) {
      if (item.variant === 'a') {
        obj.rivalry++
      }
      if (item.variant === 'b') {
        obj.adaptation++
      }
    }
    if (item.id === 4) {
      if (item.variant === 'a') {
        obj.compromise++
      }
      if (item.variant === 'b') {
        obj.adaptation++
      }
    }
    if (item.id === 5) {
      if (item.variant === 'a') {
        obj.cooperation++
      }
      if (item.variant === 'b') {
        obj.avoidance++
      }
    }
    if (item.id === 6) {
      if (item.variant === 'a') {
        obj.avoidance++
      }
      if (item.variant === 'b') {
        obj.rivalry++
      }
    }
    if (item.id === 7) {
      if (item.variant === 'a') {
        obj.avoidance++
      }
      if (item.variant === 'b') {
        obj.compromise++
      }
    }
    if (item.id === 8) {
      if (item.variant === 'a') {
        obj.rivalry++
      }
      if (item.variant === 'b') {
        obj.cooperation++
      }
    }
    if (item.id === 9) {
      if (item.variant === 'a') {
        obj.avoidance++
      }
      if (item.variant === 'b') {
        obj.rivalry++
      }
    }
    if (item.id === 10) {
      if (item.variant === 'a') {
        obj.rivalry++
      }
      if (item.variant === 'b') {
        obj.compromise++
      }
    }
    if (item.id === 11) {
      if (item.variant === 'a') {
        obj.cooperation++
      }
      if (item.variant === 'b') {
        obj.adaptation++
      }
    }
    if (item.id === 12) {
      if (item.variant === 'a') {
        obj.avoidance++
      }
      if (item.variant === 'b') {
        obj.compromise++
      }
    }
    if (item.id === 13) {
      if (item.variant === 'a') {
        obj.compromise++
      }
      if (item.variant === 'b') {
        obj.rivalry++
      }
    }
    if (item.id === 14) {
      if (item.variant === 'a') {
        obj.cooperation++
      }
      if (item.variant === 'b') {
        obj.rivalry++
      }
    }
    if (item.id === 15) {
      if (item.variant === 'a') {
        obj.adaptation++
      }
      if (item.variant === 'b') {
        obj.avoidance++
      }
    }
    if (item.id === 16) {
      if (item.variant === 'a') {
        obj.adaptation++
      }
      if (item.variant === 'b') {
        obj.rivalry++
      }
    }
    if (item.id === 17) {
      if (item.variant === 'a') {
        obj.rivalry++
      }
      if (item.variant === 'b') {
        obj.avoidance++
      }
    }
    if (item.id === 18) {
      if (item.variant === 'a') {
        obj.adaptation++
      }
      if (item.variant === 'b') {
        obj.compromise++
      }
    }
    if (item.id === 19) {
      if (item.variant === 'a') {
        obj.cooperation++
      }
      if (item.variant === 'b') {
        obj.avoidance++
      }
    }
    if (item.id === 20) {
      if (item.variant === 'a') {
        obj.cooperation++
      }
      if (item.variant === 'b') {
        obj.compromise++
      }
    }
    if (item.id === 21) {
      if (item.variant === 'a') {
        obj.adaptation++
      }
      if (item.variant === 'b') {
        obj.cooperation++
      }
    }
    if (item.id === 22) {
      if (item.variant === 'a') {
        obj.compromise++
      }
      if (item.variant === 'b') {
        obj.rivalry++
      }
    }
    if (item.id === 23) {
      if (item.variant === 'a') {
        obj.cooperation++
      }
      if (item.variant === 'b') {
        obj.avoidance++
      }
    }
    if (item.id === 24) {
      if (item.variant === 'a') {
        obj.adaptation++
      }
      if (item.variant === 'b') {
        obj.compromise++
      }
    }
    if (item.id === 25) {
      if (item.variant === 'a') {
        obj.rivalry++
      }
      if (item.variant === 'b') {
        obj.adaptation++
      }
    }
    if (item.id === 26) {
      if (item.variant === 'a') {
        obj.compromise++
      }
      if (item.variant === 'b') {
        obj.cooperation++
      }
    }
    if (item.id === 27) {
      if (item.variant === 'a') {
        obj.avoidance++
      }
      if (item.variant === 'b') {
        obj.adaptation++
      }
    }
    if (item.id === 28) {
      if (item.variant === 'a') {
        obj.rivalry++
      }
      if (item.variant === 'b') {
        obj.cooperation++
      }
    }
    if (item.id === 29) {
      if (item.variant === 'a') {
        obj.compromise++
      }
      if (item.variant === 'b') {
        obj.avoidance++
      }
    }
    if (item.id === 30) {
      if (item.variant === 'a') {
        obj.adaptation++
      }
      if (item.variant === 'b') {
        obj.cooperation++
      }
    }
  }

  return dataFields.testItemName.map((item, index) => {
    return {
      name: dataFields.russianItemName[index],
      value: obj[item]
    }
  })
}

function kettelCalc () {

}

function selfPortraitCalc (dataArray) {

  let obj = {
    A: {
      keyName: 'Бдительный',
      score: 0
    },
    B: {
      keyName: 'Отшельник',
      score: 0
    },
    C: {
      keyName: 'Идиосинкразический',
      score: 0
    },
    D: {
      keyName: 'Авантюрный',
      score: 0
    },
    E: {
      keyName: 'Деятельный',
      score: 0
    },
    F: {
      keyName: 'Драматический',
      score: 0
    },
    G: {
      keyName: 'Самоуверенный',
      score: 0
    },
    H: {
      keyName: 'Чувствительный',
      score: 0
    },
    I: {
      keyName: 'Преданный',
      score: 0
    },
    J: {
      keyName: 'Добросовестный',
      score: 0
    },
    K: {
      keyName: 'Праздный',
      score: 0
    },
    L: {
      keyName: 'Агрессивный',
      score: 0
    },
    M: {
      keyName: 'Самопожертвование',
      score: 0
    },
    N: {
      keyName: 'Серьёзный',
      score: 0
    },
  }

  for (const key in dataArray) {
    let score = 0
    if (dataArray[key].variant === 'a') {
      score = 2
    } else if (dataArray[key].variant === 'b') {
      score = 1
    } else {
      score = 0
    }

    switch (dataArray[key].id) {
      case(53):
      case(56):
        obj.A.score += score
        obj.C.score += score
        break

      case(55):
        obj.B.score += score
        obj.C.score += score
        break

      // case(53):
      case(54):
      // case(56):
      case(57):
      case(79):
      case(80):
      case(84):
        obj.A.score += score
        break

      // case(55):
      case(58):
      case(59):
      case(60):
      case(63):
      case(93):
      case(94):
      case(95):
        obj.B.score += score
        break

      case(12):
      case(16):
      // case(53):
      // case(55):
      // case(56):
      case(88):
      case(96):
      case(97):
        obj.C.score += score
        break

      case(19):
      case(51):
      case(81):
      case(83):
      case(102):
      case(103):
      case(104):
      case(105):
      case(106):
        obj.D.score += score
        break

      case(8):
      case(9):
      case(45):
      case(49):
      case(50):
      case(85):
      case(89):
      case(100):
      case(101):
      case(107):
        obj.E.score += score
        break

      case(15):
      case(46):
      case(47):
      case(48):
      case(52):
      case(86):
      case(87):
        obj.F.score += score
        break

      case(10):
      case(13):
      case(14):
      case(17):
      case(18):
      case(20):
      case(24):
      case(78):
        obj.G.score += score
        break

      case(61):
      case(62):
      case(64):
      case(65):
      case(66):
      case(91):
      case(92):
        obj.H.score += score
        break

      case(22):
      case(38):
      case(39):
      case(40):
      case(41):
      case(42):
      case(43):
      case(44):
        obj.I.score += score
        break

      case(1):
      case(2):
      case(3):
      case(4):
      case(21):
      case(23):
      case(99):
        obj.J.score += score
        break

      case(5):
      case(30):
      case(32):
      case(67):
      case(68):
      case(69):
      case(70):
        obj.K.score += score
        break

      case(11):
      case(31):
      case(73):
      case(74):
      case(75):
      case(76):
      case(77):
      case(82):
        obj.L.score += score
        break

      case(6):
      case(7):
      case(29):
      case(33):
      case(34):
      case(35):
      case(36):
      case(37):
        obj.M.score += score
        break

      case(25):
      case(26):
      case(27):
      case(28):
      case(71):
      case(90):
      case(98):
        obj.N.score += score
        break
    }
  }

  return obj
}

export default class UtilityClass {
  constructor () {
  }

  static async getCurrentTestProgress (method, url, requestData) {
    const { data } = await sendHttpRequest(method, url, requestData)
    let answerIndex = 1
    let answerChosenArray = []

    if (data && data.length > 0) {
      answerIndex = data.length + 1
    }

    answerChosenArray = [...data]
    return {
      answerIndex,
      answerChosenArray
    }
  }

  static async getTestResults (url, testName, testData) {
    let data = testData
    if (url) {
      let response = await sendHttpRequest('get', url)
      data = { ...response.data }
    }

    let result

    if (testName === 'conflict-behavior') {
      result = conflictBehaviorCalc(data)
    } else if (testName === 'self-portrait') {
      result = selfPortraitCalc(data)
      console.log(result)
    } else {

    }

    return result
  }

}
