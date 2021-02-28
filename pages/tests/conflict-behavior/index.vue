<template>
  <div class="test-content">


    <div class="result-block mar-b-30"
         v-if="answerIndex <= answersPairsArray.length">
      <div class="text">Вопрос {{answerIndex}} из {{answersPairsArray.length}} ({{calcPercent()}}%)</div>
      <div class="bg-fill-progress"
           :style="{width: calcPercent() + '%'}"></div>
    </div>

    <div class="answers-block"
         v-if="answerIndex <= answersPairsArray.length">
      <h3 class="h3 mar-b-30">С каким из высказываний вы согласны в большей степени?</h3>

      <div class="answers-content"
           v-for="(answer, index) in answersPairsArray"
           :key="index"
           v-if="answer.id === answerIndex">
        <div class="answer" @click="answerClicked(0)">{{answer.answer_a}}</div>
        <div class="answer" @click="answerClicked( 1)">{{answer.answer_b}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import behaviorAnswersPairsArray from '../../../public/data/behaviorTestAnswers'

  export default {
    name: 'index',
    data () {
      return {
        answersPairsArray: behaviorAnswersPairsArray,
        answerIndex: 1,
        externality: 0,
        internality: 0,
        answerChosenArray: [],
        user: 'unknown user',
        testSendSuccess: false,
        ajaxLoading: false
      }
    },
    methods: {
      calcPercent () {
        return Math.floor((this.answerIndex / this.answersPairsArray.length) * 100)
      },
      calcResultPercent (value) {
        return Math.round((value / (this.answersPairsArray.length - 6)) * 100)
      },
      analizeChosenResult (data) {
        const index = this.answerIndex

        if (index === 2) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 3) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 4) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 5) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 6) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 7) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 9) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 10) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 11) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 12) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 13) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 15) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 16) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 17) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 18) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 20) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 21) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 22) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 23) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 25) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 26) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 28) {
          if (data === 'b') {
            this.externality++
          } else {
            this.internality++
          }
        }

        if (index === 29) {
          if (data === 'a') {
            this.externality++
          } else {
            this.internality++
          }
        }
      },
      async answerClicked (variant) {
        const chosenVariant = variant ? 'b' : 'a'
        this.analizeChosenResult(chosenVariant)
        this.answerChosenArray.push({
          id: this.answerIndex,
          variant: chosenVariant,
        })
        this.answerIndex++

      },
      async sendTestData () {
        this.ajaxLoading = true
        // fetch cookie
        const userId = this.$cookies.get('userId')
        // console.log('userId ', userId);

        const dataObj = {
          type: 'rotter',
          userId: userId,
          data: this.answerChosenArray,
          externality: this.calcResultPercent(this.externality),
          internality: this.calcResultPercent(this.internality)
        }

        try {
          const response = await this.$axios.$post('/users/add-test-result', {
            userId,
            type: dataObj.type,
            data: dataObj
          })
          if (response) {
            this.testSendSuccess = true
          }
        } catch (e) {
          console.log(e)
          this.testSendSuccess = false
        }

        this.ajaxLoading = false
      },
    }

  }
</script>

<style scoped lang="scss">
  .btn-primary {
    font-size: 18px;
  }

  .result-block {
    position: relative;
    overflow: hidden;

    .text {
      position: relative;
      z-index: 5;
    }

    .bg-fill-progress {
      position: absolute;
      z-index: 1;
      top: 0;
      bottom: 0;
      left: 0;
      background: #F0FFFF;
      border-right: 1px solid #B5B5B5;
    }
  }

  .answers-content {
    display: flex;
    flex-direction: column;

    .answer {
      width: 100%;
      text-align: left;
      border-radius: 10px;
      background: #F8F8FF;
      cursor: pointer;
      border: 1px solid #B5B5B5;
      padding: 15px 0px 15px 30px;
      font-size: 1em;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      &:active {
        outline: 0;
        padding: 16px 0px 14px 31px;
        background: #E0FFE0;
        box-shadow: 0 0 3px #B5B5B5;
      }
    }
  }

  .results-progress {
    padding: 0 25px;
  }

  .progress-bar {
    display: flex;
    width: 100%;
    height: 28px;
    position: relative;
    border-radius: 3px;
    padding-right: 30px;

    .progress-bg {
      background-color: #f5f5f5;
      height: 100%;
      width: 100%;
    }

    .progress {
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
    }

    .progress-value {
      font-size: 18px;
      margin-left: 10px;
      font-weight: bold;
    }
  }

  .progress-bar.blue {
    .progress {
      background-color: blue;
    }
  }

  .progress-bar.green {
    .progress {
      background-color: green;
    }
  }
</style>
