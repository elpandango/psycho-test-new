<template>
  <div class="test-selection-page"
       v-if="loaded">
    <h1>Выбор теста</h1>

    <div class="test-container">
      <nuxt-link to="/tests/kettell-test"
                 tag="button"
                 :class="[{disabled: isDisabled('kettel-test')}]"
                 :disabled="isDisabled('kettel-test')"
                 :title="isDisabled('kettel-test') ? 'Вы уже прошли этот тест!' : 'Пройти Тест личности Кеттелла'"
                 class="test-link">Тест личности Кеттелла
      </nuxt-link>
      <nuxt-link to="/tests/self-portrait-test"
                 tag="button"
                 :class="[{disabled: isDisabled('self-portrait')}]"
                 :disabled="isDisabled('self-portrait')"
                 :title="isDisabled('self-portrait') ? 'Вы уже прошли этот тест!' : 'Пройти Тест Автопортрет вашей личности (Олдхэм-Моррис)'"
                 class="test-link">Автопортрет вашей личности (Олдхэм-Моррис)
      </nuxt-link>
      <nuxt-link to="/tests/conflict-behavior"
                 tag="button"
                 :class="[{disabled: isDisabled('conflict-behavior')}]"
                 :disabled="isDisabled('conflict-behavior')"
                 :title="isDisabled('conflict-behavior') ? 'Вы уже прошли этот тест!' : 'Пройти Тест Поведение в конфликтной ситуации'"
                 class="test-link">Поведение в конфликтной ситуации
      </nuxt-link>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'index',
    data () {
      return {
        loaded: false,
        testsData: {}
      }
    },
    methods: {
      async detectPassedTests (user) {
        const response = await this.$http.$get(`/api/users/fetch-all-tests?user=${user.userId}`,
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
      }
    },
    async mounted () {
      // const user = this.$cookies.get('user');
      // console.log(user)
      await this.detectPassedTests(this.getUser)
      this.loaded = true
    },
    computed: {
      ...mapGetters([
        'getUser'
      ])
    }
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

  .test-link {
    padding: 15px 25px;
    width: 100%;
    text-align: left;
    background: #F8F8F8;
    margin-bottom: 20px;
    white-space: normal;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 2px 2px 4px #ccc;
    transition: all .3s;
    color: #292929;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      box-shadow: 2px 2px 4px #999, inset 0 0 20px #fff;
    }
  }

  .test-link:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
</style>
