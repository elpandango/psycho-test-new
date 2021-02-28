const axios = require('axios');

// function sendHttpRequest(method, url, data) {
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(data)
//   }).then(response => {
//     return response.json();
//   });
// }

module.exports = class User {
  constructor(name, age, sex, education) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.education = education;
  }

  static async addTestResult(id, testName, testData) {
    console.log('addTestResult ', id, testName, testData);
    // const response = await axios.put(`https://psycho-tests.firebaseio.com/data/${id}/tests/${testName}.json`, testData);
  }

  // static async getUserTestResults(id) {
  //   const users = await this.fetchAllUsers();
  //   const user = users.find(user => user.id === id);
  //   return await this.calculateTestsSumms(user);
  // }

  async addNewUser() {
    // const response = await $http.post('https://psycho-tests.firebaseio.com/data.json', {user: this});
    // const response = await sendHttpRequest('POST', 'https://psycho-tests.firebaseio.com/data.json', {user: this});
    const response = await axios.post('https://psycho-tests.firebaseio.com/data.json', {user: this});
    console.log('response data ', response.data);
    return response.data;
  }

  // static async getAdminData({email, password}) {
  //   const users = await this.fetchAllUsers('full');
  //   const admin = users.find(user => user.data.user.name === 'Admin');
  //   return admin.data.user.email === email && admin.data.user.password === +password;
  // }

  // static async fetchAllUsers(mode = 'short') {
  //   const response = await axios.get('https://psycho-tests.firebaseio.com/data.json');
  //   let counter = 0;
  //   let allUsers = [];
  //
  //   for (const key in response.data) {
  //     counter++;
  //     if (mode === 'full') {
  //       if (response
  //         && response.data
  //         && response.data[key]
  //         && response.data[key].user
  //         && response.data[key].user.name)
  //         allUsers.push({
  //           index: counter,
  //           id: key,
  //           data: response.data[key]
  //         })
  //     } else {
  //       if (response
  //         && response.data
  //         && response.data[key]
  //         && response.data[key].user
  //         && response.data[key].user.name
  //         && response.data[key].user.name !== 'Admin')
  //         allUsers.push({
  //           index: counter,
  //           id: key,
  //           data: response.data[key]
  //         })
  //     }
  //
  //   }
  //   return allUsers;
  // }
};
