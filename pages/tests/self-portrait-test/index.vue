<template>
  <div class="test-content"
       v-if="loaded">
    <div class="result-block mar-b-30"
         v-if="answerIndex <= answersPairsArray.length">
      <div class="text">Вопрос {{answerIndex}} из {{answersPairsArray.length}} ({{calcPercent()}}%)</div>
      <div class="bg-fill-progress"
           :style="{width: calcPercent() + '%'}"></div>
    </div>

    <div v-if="answerIndex <= answersPairsArray.length"
         class="answers-block mar-b-30">

      <div class="answers-content"
           v-for="(answer, index) in answersPairsArray"
           :key="index"
           v-if="answer.id === answerIndex">

        <h3 class="h3 mar-b-30">{{answer.question}}</h3>

        <div class="answer"
             @click="answerClicked(0)">
          <template v-if="user && user.sex && user.sex === 'Мужской'">Да, я согласен</template>
          <template v-else>Да, я согласна</template>
        </div>
        <div class="answer"
             @click="answerClicked( 1)">
          <template v-if="user && user.sex && user.sex === 'Мужской'">Может быть, я согласен</template>
          <template v-else>Может быть, я согласна</template>
        </div>
        <div class="answer"
             @click="answerClicked( 2)">
          <template v-if="user && user.sex && user.sex === 'Мужской'">Нет, я не согласен</template>
          <template v-else>Нет, я не согласна</template>
        </div>
      </div>
    </div>
    <div v-else>
      <nuxt-link to="/tests"
                 class="test-link">Вернуться к выбору тестов
      </nuxt-link>
    </div>

  </div>
</template>

<script>
  import selfPortraitAnswersPairsArray from '../../../public/data/selfPortraitTestAnswers'
  import UtilityClass from '../../../utils/UtilityClass'

  export default {
    name: 'index',
    head: {
      title: 'Психологические тесты. Поведение в конфликтной ситуации, TKI (Томас-Килманн)'
    },
    data () {
      return {
        answersPairsArray: selfPortraitAnswersPairsArray,
        answerIndex: 1,
        answerChosenArray: [],
        user: 'unknown user',
        testSendSuccess: false,
        ajaxLoading: false,
        loaded: false
      }
    },
    async mounted () {
      const user = this.$cookies.get('user')
      if (!user) {
        this.$router.push({ path: '/' })
      }
      const url = `/api/users/fetch-current-test-progress?user=${user.userId}&testName=self-portrait`
      const { answerIndex, answerChosenArray } = await UtilityClass.getCurrentTestProgress('get', url)
      this.answerIndex = answerIndex
      this.answerChosenArray = [...answerChosenArray]
      this.loaded = true
    },
    methods: {
      calcPercent () {
        return Math.floor((this.answerIndex / this.answersPairsArray.length) * 100)
      },
      calcResultPercent (value) {
        return Math.round((value / (this.answersPairsArray.length - 6)) * 100)
      },
      async answerClicked (variant) {
        let chosenVariant
        switch (variant) {
          case 0: {
            chosenVariant = 'a'
            break
          }
          case 1: {
            chosenVariant = 'b'
            break
          }
          case 2: {
            chosenVariant = 'c'
            break
          }
          default: {
            chosenVariant = 'a'
            break
          }
        }

        this.answerChosenArray.push({
          id: this.answerIndex,
          variant: chosenVariant,
          testLength: this.answersPairsArray.length
        })

        this.answerIndex++
        await this.sendTestData()
      },
      async sendTestData () {
        let response
        const user = this.$cookies.get('user')
        if (!user) {
          this.$router.push({ path: '/' })
        }
        try {
          response = await this.$axios.$post('/api/users/add-test-result', {
            type: 'self-portrait',
            userId: user.userId,
            data: this.answerChosenArray
          })

        } catch (e) {
          console.log(e)
        }
        console.log('sendTestData response: ', response)
      },
    },

  }
</script>

<style scoped lang="scss" src="./styles.scss"></style>
