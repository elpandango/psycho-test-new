<template>
  <div class="test-content"
       v-if="loaded">
    <div class="result-block mar-b-30"
         v-if="answerIndex <= answersPairsArray.length">
      <div class="text">Вопрос {{answerIndex}} из {{answersPairsArray.length}} ({{calcPercent()}}%)</div>
      <div class="bg-fill-progress"
           :style="{width: calcPercent() + '%'}"></div>
    </div>

    <div class="answers-block mar-b-30"
         v-if="answerIndex <= answersPairsArray.length">

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

    <div class="result-block alert-danger mar-b-30">
      Внимание! Результаты и интерпретации, полученные без участия специалистов, не следует воспринимать слишком
      серьезно.
      Диагностическую ценность имеют только исследования, проведенные профессиональным психологом.
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import selfPortraitAnswersPairsArray from '../../../public/data/selfPortraitTestAnswers'
  import Accordion from '~/components/Accordion/Accordion'

  export default {
    name: 'index',
    head: {
      title: 'Психологические тесты. Поведение в конфликтной ситуации, TKI (Томас-Килманн)'
    },
    components: {
      Accordion,
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
      await this.getCurrentTestProgress(this.getUser.userId, 'self-portrait')
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

        console.log(' this.answerIndex: ', this.answerIndex)

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
        // console.log('user ', user);

        let response
        try {
          response = await this.$http.$post('/api/users/add-test-result', {
            type: 'self-portrait',
            userId: user.userId,
            data: this.answerChosenArray
          })

        } catch (e) {
          console.log(e)
        }

        console.log('sendTestData response: ', response)
      },
      async getCurrentTestProgress (userId, testName) {
        const { data } = await this.$http.$get(`/api/users/fetch-current-test-progress?user=${userId}&testName=${testName}`,
          {
            serverTimeout: 5000
          })
        console.log(data)

        if (data && data.length > 0) {
          this.answerIndex = data.length + 1
          console.log('this.answerIndex loaded: ', this.answerIndex)
        }
      },
    },
    computed: {
      ...mapGetters([
        'getUser'
      ])
    }

  }
</script>

<style scoped lang="scss" src="./styles.scss"></style>
