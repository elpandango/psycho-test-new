<template>
  <div class="test-selection-page"
       v-if="loaded">
    <h1>Выбор теста</h1>

    <div class="test-container">
      <div class="test-item-wrap">
        <nuxt-link to="/tests/kettell-test"
                   tag="button"
                   :class="[{disabled: isDisabled('kettel-test')}]"
                   :disabled="isDisabled('kettel-test')"
                   :title="isDisabled('kettel-test') ? 'Вы уже прошли этот тест!' : 'Пройти Тест личности Кеттелла'"
                   class="test-link">Тест личности Кеттелла
        </nuxt-link>
        <button type="button"
                v-if="false && isDisabled('kettel-test')"
                class="result-btn btn btn-success"
                @click="getTestResults('kettel-test')">Получить результаты теста
        </button>
      </div>

      <div class="test-item-wrap">
        <nuxt-link to="/tests/self-portrait-test"
                   tag="button"
                   :class="[{disabled: isDisabled('self-portrait')}]"
                   :disabled="isDisabled('self-portrait')"
                   :title="isDisabled('self-portrait') ? 'Вы уже прошли этот тест!' : 'Пройти Тест Автопортрет вашей личности (Олдхэм-Моррис)'"
                   class="test-link">Автопортрет вашей личности (Олдхэм-Моррис)
        </nuxt-link>
        <button type="button"
                v-if="false && isDisabled('self-portrait')"
                class="result-btn btn btn-success"
                @click="getTestResults('self-portrait')">Получить результаты теста
        </button>
      </div>

      <div class="test-item-wrap">
        <nuxt-link to="/tests/conflict-behavior"
                   tag="button"
                   :class="[{disabled: isDisabled('conflict-behavior')}]"
                   :disabled="isDisabled('conflict-behavior')"
                   :title="isDisabled('conflict-behavior') ? 'Вы уже прошли этот тест!' : 'Пройти Тест Поведение в конфликтной ситуации'"
                   class="test-link">Поведение в конфликтной ситуации
        </nuxt-link>
        <button type="button"
                v-if="false && isDisabled('conflict-behavior')"
                class="result-btn btn btn-success"
                @click="getTestResults('conflict-behavior')">Получить результаты теста
        </button>
      </div>

    </div>

  </div>
</template>

<script>
  import UtilityClass from '../../utils/UtilityClass'

  export default {
    name: 'index',
    data () {
      return {
        loaded: false,
        testsData: {}
      }
    },
    methods: {
      async detectPassedTests () {
        const user = this.$cookies.get('user')
        if (!user) {
          this.$router.push({ path: '/' })
        }
        const response = await this.$http.$get(`/api/users/fetch-all-user-tests?user=${user.userId}`,
          {
            serverTimeout: 5000
          })
        this.testsData = { ...response.data }
      },
      isDisabled (ref) {
        if (this.testsData[ref]?.length && this.testsData[ref][0]?.testLength) {
          return this.testsData[ref]?.length >= this.testsData[ref][0]?.testLength
        }
        return false
      },
      async getTestResults (testName) {
        const user = this.$cookies.get('user');
        if (!user) {
          this.$router.push({ path: '/' })
        }
        const url = `/api/users/fetch-current-test-progress?user=${user.userId}&testName=${testName}`
        const result = await UtilityClass.getTestResults(url, testName)

        console.log('getTestResults result: ', result)
      }
    },
    async mounted () {
      const user = this.$cookies.get('user')
      if (!user) {
        this.$router.push({ path: '/' })
      }
      await this.detectPassedTests(user)
      this.loaded = true
    },
  }
</script>

<style scoped lang="scss">
  .test-selection-page {
    h1 {
      margin-bottom: 35px;
    }
  }

  .test-container {
    display: flex;
    flex-wrap: wrap;
  }

  .test-item-wrap {
    display: flex;
    align-content: center;
    width: 100%;
    margin-bottom: 20px;
  }

  .result-btn {
    width: 250px;
  }
</style>
