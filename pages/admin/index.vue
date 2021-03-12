<template>
  <div class="content admin-page">

    <h1 class="section-title">Админ панель</h1>
    <hr>

    <template v-if="loaded">
      <div class="text-block mar-b-40"
           v-for="item in userDataObject"
           v-if="item.user.name !== 'Admin' && item.tests">

        <h2>Данные пользователя:</h2>
        <br>
        <div>Имя: {{item.user.name}}</div>
        <div>Возраст: {{item.user.age}}</div>
        <div>Пол: {{item.user.sex}}</div>
        <div class="highlighted"
             v-if="item.user.email">email: {{item.user.email}}
        </div>

        <br>

        <div class="test-item"
             v-if="item.testResults"
             v-for="testItem in item.testResults">

          <template v-if="testItem.name === 'conflict-behavior'">
            <h3>Тест на конфликтность</h3>
            <div v-for="testResult in testItem.value">
              {{testResult.name}}: {{testResult.value}}
            </div>
          </template>

          <template v-else-if="testItem.name === 'kettel-test'">
            <h3>Тест личности Кеттела</h3>
            <br>

            <div class="grid-container">
              <div v-for="testResult in testItem.value"
                   class="grid-item">
                <table>
                  <thead v-if="showTableHead(testResult.id)">
                  <tr>
                    <th class="w35"></th>
                    <th class="w25">A</th>
                    <th class="w25">B</th>
                    <th class="w25">C</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td class="w35 no-border bold">{{testResult.id}}</td>
                    <td class="w25"
                        :class="[{selected: testResult.variant === 'a'}]">{{testResult.variant === 'a' ? 'X' : ''}}
                    </td>
                    <td class="w25"
                        :class="[{selected: testResult.variant === 'b'}]">{{testResult.variant === 'b' ? 'X' : ''}}
                    </td>
                    <td class="w25"
                        :class="[{selected: testResult.variant === 'c'}]">{{testResult.variant === 'c' ? 'X' : ''}}
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>


          </template>

          <template v-else>
            <h3>Тест личности Олдхэма-Мориса</h3>
            <div v-for="(testResult, idx) in testItem.value">
              {{testResult.keyName}} ({{idx}}): {{testResult.score}}
            </div>
          </template>
          <br>
          <br>
        </div>

        <hr>

      </div>

    </template>
    <template v-else>
      <div class="preloader-container">
        <div class="lds-dual-ring"></div>
      </div>
    </template>
  </div>
</template>

<script>
  import UtilityClass from '../../utils/UtilityClass'

  export default {
    name: 'index',
    head: {
      title: 'Админ-панель тестовых опросов'
    },
    data () {
      return {
        userDataObject: [],
        loaded: false
      }
    },
    methods: {
      showTableHead (id) {
        return id === 1 || id === 26 || id === 51 || id === 76 || id === 101 || id === 126 || id === 151 || id === 176
      },
      async checkAuth () {
        this.$axios.$get('/api/users/login')
          .then(result => {
            console.log('checkAuth ', result)
          })
          .catch(e => {
            this.$router.push({ path: '/login' })
          })
      },
      async fetchAllTests () {
        const result = await this.$axios.$get('/api/users/fetch-all-tests')
        this.userDataObject = { ...result.data }
        for (const key in this.userDataObject) {
          if (this.userDataObject[key].tests) {
            const tests = this.userDataObject[key].tests
            this.userDataObject[key].testResults = []

            for (const itemKey in tests) {
              this.userDataObject[key].testResults.push({
                name: itemKey,
                value: await this.getTestResults(itemKey, tests[itemKey])
              })
            }
          }
        }
      },
      async getTestResults (testName, testData) {
        return await UtilityClass.getTestResults(null, testName, testData)
      }
    },
    async mounted () {
      this.loaded = false
      await this.checkAuth()
      await this.fetchAllTests()
      this.loaded = true
    },
  }
</script>

<style src="./styles.scss" scoped lang="scss"></style>
