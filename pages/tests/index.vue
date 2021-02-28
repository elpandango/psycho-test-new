<template>
  <div class="test-selection-page">
    <h1>Выбор теста</h1>

    <div class="test-container">
      <nuxt-link to="/tests/kettell-test"
                 class="test-link">Тест личности Кеттелла
      </nuxt-link>
      <nuxt-link to="/tests/self-portrait-test"
                 class="test-link">Автопортрет вашей личности (Олдхэм-Моррис)
      </nuxt-link>
      <nuxt-link to="/tests/conflict-behavior"
                 class="test-link">Поведение в конфликтной ситуации
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'index',

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

    &:hover {
      box-shadow: 2px 2px 4px #999, inset 0 0 20px #fff;
    }
  }
</style>
