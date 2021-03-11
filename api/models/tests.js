const axios = require('axios')

module.exports = class Test {
  constructor () {
  }

  static async addTestResult (testName, userId, testData) {
    console.log('addTestResult ', testName, userId, testData)
    const response = await axios.put(`https://psycho-tests.firebaseio.com/data/${userId}/tests/${testName}.json`, testData)
    return response.data
  }

  static async fetchAllTests () {
    const response = await axios.get(`https://psycho-tests.firebaseio.com/data.json`)
    return response.data ?? []
  }
  static async fetchAllUserTests (userId) {
    const response = await axios.get(`https://psycho-tests.firebaseio.com/data/${userId}/tests.json`)
    return response.data ?? []
  }

  static async fetchCurrentTestProgress (userId, testName) {
    const response = await axios.get(`https://psycho-tests.firebaseio.com/data/${userId}/tests/${testName}.json`)
    return response.data ?? []
  }

}
