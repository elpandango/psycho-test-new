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

  const testResult = dataFields.testItemName.map((item, index) => {
    return {
      name: dataFields.russianItemName[index],
      value: obj[item]
    }
  })

  console.log('testResult: ', testResult)

}

function kettelCalc () {

}

function selfPortraitCalc () {

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

  static async getTestResults (url, testName) {
    const { data } = await sendHttpRequest('get', url)
    let result

    if (testName === 'conflict-behavior') {
      result = conflictBehaviorCalc(data)
    }

    return data
  }

}
