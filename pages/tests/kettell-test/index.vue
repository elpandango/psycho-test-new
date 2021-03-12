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
             @click="answerClicked(0)">{{answer.answer_a}}
        </div>
        <div class="answer"
             @click="answerClicked( 1)">{{answer.answer_b}}
        </div>
        <div class="answer"
             @click="answerClicked( 3)">{{answer.answer_c}}
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
  import kettelAnswersPairsArray from '../../../public/data/kettelTestAnswers'
  import UtilityClass from '../../../utils/UtilityClass'

  export default {
    name: 'index',
    head: {
      title: 'Психологические тесты. Тест Кеттелла'
    },
    data () {
      return {
        answersPairsArray: kettelAnswersPairsArray,
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
      const url = `/api/users/fetch-current-test-progress?user=${user.userId}&testName=kettel-test`
      const { answerIndex, answerChosenArray } = await UtilityClass.getCurrentTestProgress('get', url)
      console.log('answerIndex, answerChosenArray: ', answerIndex, answerChosenArray)

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

        console.log('this.answerChosenArray: ', this.answerChosenArray)
        this.answerIndex++

        await this.sendTestData()
      },
      async sendTestData () {
        const user = this.$cookies.get('user')
        if (!user) {
          this.$router.push({ path: '/' })
        }

        let response
        try {
          response = await this.$axios.$post('/api/users/add-test-result', {
            type: 'kettel-test',
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
