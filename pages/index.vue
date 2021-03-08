<template>
  <div>

    <div class="text-block">
      <p>
        Приветствую!
      </p>
      <p>
        Далее вас ждет 3 теста.
      </p>

      <p>
        Ну а теперь приступим!
      </p>
    </div>


    <form class="user-form"
          @submit.prevent>
      <div class="form-row">
        <div class="column w100p">
          <h3 class="h3 mar-b-10">Имя</h3>
          <div class="input-group">
            <input type="text"
                   class="form-control"
                   placeholder="Введите имя"
                   v-model="user.name">
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="column w100p">
          <h3 class="h3 mar-b-10">Возраст</h3>
          <div class="input-group">
            <input type="number"
                   class="form-control"
                   min="16"
                   v-model="user.age">
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="column w100p">
          <h3 class="h3 mar-b-10">Пол</h3>
          <select v-model="user.sex"
                  class="form-control">
            <option value="Укажите Ваш пол" selected disabled>Укажите Ваш пол</option>
            <option v-for="sex in sexArray"
                    :value="sex">{{sex}}
            </option>
          </select>
        </div>
      </div>

      <div class="form-row mar-b-0">
        <div class="column w100p align-fe">
          <button type="button"
                  :disabled="redirectBtnDisabled"
                  @click="redirectToTests"
                  class="btn btn-primary">Перейти к тестам
          </button>
        </div>
      </div>

    </form>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        sexArray: ['Мужской', 'Женский'],
        user: {
          name: '',
          age: null,
          sex: null,
          userId: null
        }
      }
    },
    // async asyncData ({ $http }) {
    //   const test = await $http.$get('/api/test')
    //   return {
    //     test
    //   }
    // },
    methods: {
      async addNewUser () {
        this.user.userId = await this.$http.$post('/api/users/add-user', { user: this.user }, {
          serverTimeout: 5000
        })

        console.log(this.user)

        this.$cookies.set('user', JSON.stringify(this.user), {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
      },
      async redirectToTests () {
        await this.addNewUser()
        this.$router.push({ path: '/tests/' })
      },
    },
    computed: {
      redirectBtnDisabled () {
        return !(this.user.name !== '' && this.user.name.length > 0 && this.user.age && this.user.sex)
      }
    }
  }
</script>

<style lang="scss">
  .user-form {
    margin: 0 auto;
    max-width: 560px;
  }

  .input-group {
    width: 100%;
    display: flex;

  }

  .input-group .form-control {
    width: 100%;
  }

  .align-fe {
    align-items: flex-end;
  }
</style>
