<template>
  <div class="content register-page">
    <form class="login-form"
          @submit.prevent>
      <div class="form-row">
        <div class="column w100p">
          <h3 class="h3 mar-b-10">Логин</h3>
          <input type="email"
                 class="form-control"
                 placeholder="Email"
                 v-model="email">
        </div>
      </div>
      <div class="form-row">
        <div class="column w100p">
          <input type="password"
                 class="form-control"
                 placeholder="Password"
                 v-model="password">
        </div>
      </div>

      <div class="form-row"
           v-if="errors">
        <div class="column w100p">
          <div class="alert alert-danger">
            <div v-for="item in errors">
              {{ item.msg }}
            </div>
          </div>
        </div>
      </div>
      <div class="form-row"
           v-if="success">
        <div class="column w100p">
          <div class="alert alert-success">
            <div v-for="item in success">
              {{ item.msg }}
            </div>
          </div>
        </div>
      </div>

      <div class="form-row mar-b-0">
        <div class="column w100p align-fe">
          <button type="button"
                  class="btn btn-primary"
                  @click="onLogin">Логин
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'index',
    head: {
      title: 'Страница логина'
    },
    data () {
      return {
        email: '',
        password: '',
        errors: null,
        success: null,
      }
    },
    methods: {
      async onLogin () {

        let response
        try {
          response = await this.$http.$post('/api/users/login', {
            email: this.email,
            password: this.password,
          })

          this.success = response.success ? { ...response.success } : null
          this.errors = response.errors ? { ...response.errors } : null

          if (this.success && !this.errors) {
            setTimeout(() => {
              this.$router.push({ path: '/admin' })
            }, 500)
          }

        } catch (e) {
          console.log(e)
        }
      }
    },
    async mounted () {
      this.$http.$get('/api/users/login')
        .then(result => {
          this.$router.push({ path: '/admin' })
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
</script>

<style lang="scss">
  .login-form {
    max-width: 640px;
    width: 100%;
  }
</style>
