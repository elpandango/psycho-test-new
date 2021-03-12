const axios = require('axios')

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

module.exports = class User {
  constructor (name, age, sex, email) {
    this.name = name
    this.age = age
    this.sex = sex
    this.email = email
  }

  async addNewUser () {
    const response = await axios.post('https://psycho-tests.firebaseio.com/data.json', { user: this })
    // console.log('response data ', response.data)
    return response.data
  }

  static async getAdminData ({ email, password }) {
    const users = await this.fetchAllUsers('full')
    const admin = users.find(user => user.data.user.name === 'Admin')
    return admin.data.user.email === email && admin.data.user.password === +password
  }

  static async fetchAllUsers (mode = 'short') {
    const response = await axios.get('https://psycho-tests.firebaseio.com/data.json')
    let counter = 0
    let allUsers = []

    for (const key in response.data) {
      counter++
      if (mode === 'full') {
        if (response?.data[key] && response.data[key].user?.name) {
          allUsers.push({
            index: counter,
            id: key,
            data: response.data[key]
          })
        }
      } else {
        if (response?.data[key] && response.data[key].user?.name && response.data[key].user.name !== 'Admin') {
          allUsers.push({
            index: counter,
            id: key,
            data: response.data[key]
          })
        }
      }

    }
    return allUsers
  }
}
