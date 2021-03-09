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
      <h3 class="h3 mar-b-30">С каким из высказываний вы согласны в большей степени?</h3>

      <div class="answers-content"
           v-for="(answer, index) in answersPairsArray"
           :key="index"
           v-if="answer.id === answerIndex">
        <div class="answer"
             @click="answerClicked(0)">{{answer.answer_a}}
        </div>
        <div class="answer"
             @click="answerClicked( 1)">{{answer.answer_b}}
        </div>
      </div>
    </div>

    <div class="result-block alert-danger mar-b-30">
      Внимание! Результаты и интерпретации, полученные без участия специалистов, не следует воспринимать слишком
      серьезно.
      Диагностическую ценность имеют только исследования, проведенные профессиональным психологом.
    </div>

    <div class="result-block">
      <Accordion>
        <div slot="header">
          <h3 class="h3">Содержательная интерпретация</h3>
        </div>
        <div class="text-block mar-b-20">
          <p>
            Количество баллов, набранных по каждой шкале, дает представление о выраженности тенденции к проявлению
            соответствующих форм поведения в конфликтных ситуациях. Доминирующим считается тип (типы) набравшие
            максимальное количество баллов.

            • Соперничество заключается в навязывании другой стороне предпочтительного для себя решения. Соперничество
            оправдано в случаях: явной конструктивности предлагаемого решения; выгодности результата для всей группы,
            организации, а не для отдельной личности или микрогруппы; важности исхода борьбы для проводящего данную
            стратегию; отсутствии времени на уговоры оппонента.

            Соперничество целесообразно в экстремальных и принципиальных ситуациях, при дефиците времени и высокой
            вероятности опасных последствий.

            • Сотрудничество считается наиболее эффективной стратегией поведения в конфликте. Оно предполагает
            направленность оппонентов на конструктивное обсуждение проблемы, рассмотрение другой стороны не как
            противника, а как союзника в поиске решения.

            Сотрудничество эффективно в ситуациях: сильной взаимозависимости оппонентов; склонности обоих игнорировать
            различие во власти; важности решения для обеих сторон; непредубежденности участников. Сочетание стратегий
            определяет, каким способом разрешится противоречие, лежащее в основе конфликта.

            • Компромисс состоит в желании оппонентов завершить конфликт частичными уступками. Он характеризуется
            отказом от части ранее выдвигавшихся требований, готовностью признать претензии другой стороны частично
            обоснованными, готовностью простить.

            Компромисс эффективен в случаях: понимания оппонентом, что он и соперник обладают равными возможностями;
            наличия взаимоисключающих интересов; удовлетворения временным решением; угрозы потерять все. Сегодня
            компромисс – наиболее часто используемая стратегия завершения конфликтов.

            • Уход от решения проблемы, или избегание, является попыткой уйти из конфликта при минимуме затрат.
            Отличается от аналогичной стратегии поведения в ходе конфликта тем, что оппонент переходит к ней после
            неудачных попыток реализовать свои интересы с помощью активных стратегий. Собственно, разговор идет не о
            разрешении, а о затухании конфликта. Уход может быть вполне конструктивной реакцией на затянувшийся
            конфликт.

            Избегание применяется при отсутствии сил и времени для решения противоречия, стремлении выиграть время,
            наличии трудностей в определении линии своего поведения, нежелании решать проблему вообще.

            • Приспособление, или уступка, рассматривается как вынужденный или добровольный отказ от борьбы и сдача
            своих позиций. Принять такую стратегию оппонента вынуждают разные мотивы: осознание своей неправоты,
            необходимость сохранения хороших отношений с оппонентом, сильная зависимость от него; незначительность
            проблемы. Кроме того, к такому выходу из конфликта приводит значительный ущерб, полученный в ходе борьбы,
            угроза еще более серьезных негативных последствий, отсутствие шансов на другой исход, давление третьей
            стороны. В некоторых ситуациях с помощью уступки реализуется принцип «Три Д»: Дай Дорогу Дураку.

            Кеннетт Томас полагал, что при избегании конфликта ни одна из сторон не достигнет успеха. При таких формах
            поведения как конкуренция, приспособление и компромисс или один участник оказывается в выигрыше, а другой
            проигрывает, либо проигрывают оба, так как идут на компромиссные уступки. И только в ситуации сотрудничества
            обе стороны оказываются в выигрыше.

            Другие специалисты убеждены, что оптимальной стратегией в конфликте считается такая, когда применяются все
            пять тактик поведения, и каждая из них имеет значение в интервале от 5 до 7 баллов. Если ваш результат
            отличен от оптимального, то одни тактики выражены слабо – имеют значения ниже 5 баллов, другие – сильно
            выраженные – выше 7 баллов.


            Иногда приводятся формулы для прогнозирования исхода конфликтной ситуации:

            А = Соперничество + Сотрудничество + 1/2 Компромисса,

            Б = Приспособление + Уклонение + 1/2 Компромисса.

            Если А > Б, шанс выиграть конфликтную ситуацию есть у вас, если Б > А, шанс выиграть конфликт есть у вашего
            оппонента.

            Ваш результат: А = 15, Б = 15: равное положение.
          </p>
        </div>
      </Accordion>
    </div>

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import behaviorAnswersPairsArray from '../../../public/data/behaviorTestAnswers'
  import Accordion from '~/components/Accordion/Accordion'
  import UtilityClass from '../../../utils/UtilityClass'

  export default {
    name: 'index',
    components: {
      Accordion,
    },
    data () {
      return {
        answersPairsArray: behaviorAnswersPairsArray,
        answerIndex: 1,
        answerChosenArray: [],
        user: 'unknown user',
        testSendSuccess: false,
        ajaxLoading: false,
        loaded: false
      }
    },
    async mounted () {
      const url = `/api/users/fetch-current-test-progress?user=${this.getUser.userId}&testName=conflict-behavior`
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
        // console.log('user ', user);

        let response
        try {
          response = await this.$http.$post('/api/users/add-test-result', {
            type: 'conflict-behavior',
            userId: user.userId,
            data: this.answerChosenArray
          })

        } catch (e) {
          console.log(e)
        }

        console.log('sendTestData response: ', response)
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
