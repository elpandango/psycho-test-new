<template>
  <div class="content admin-page">

    <h1 class="section-title">Админка</h1>

    <template v-if="loaded">
      <div class="text-block mar-b-40">
      123
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
  export default {
    name: 'index',
    head: {
      title: 'Админ-панель тестовых опросов'
    },
    data () {
      return {
        rotterTestResultsArray: [],
        guilfordTestResultsArray: null,
        userTestResults: {},
        loaded: false
      }
    },
    methods: {
      async checkAuth () {
        this.$http.$get('/api/users/login')
          .then(result => {
            console.log('checkAuth ', result)
          })
          .catch(e => {
            this.$router.push({ path: '/login' })
          })
      },
      async fetchAllTests() {
        const result = this.$http.$get('/api/users/fetch-all-tests')
        console.log('fetchAllTests result: ', result)
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
