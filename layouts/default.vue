<template>
  <div class="default-layout">
    <div id="wrapper">
      <div class="site-content">
        <div class="content">
          <nuxt/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      const user = this.$cookies.get('user');
      this.$store.dispatch('SET_USER', user)
    }
  }
</script>

<style>
  .default-layout {
    margin: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    justify-content: space-between;
  }

  #wrapper {
    position: relative;
    z-index: 20;
  }

  @media only screen and (max-width: 420px) {
    #wrapper {
      background-color: #fff;
    }
  }
</style>
