<template>
  <PageArticle>
    <h4 slot="title">Directions</h4>
    <div slot="content">
      <section>
        <h4>Access to National Institute of Technology, Kisarazu College</h4>
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.28914757243!2d139.95362816691087!3d35.38361118912944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60180b537b92839f%3A0x3addffdb5c4dd3b1!2z5pyo5pu05rSl5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1508809905720" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
        <p>National Institute of Technology, Kisarazu College</p>
        <p>2-11-1, Kiyomidaihigashi, Kisarazu, Chiba 292-0041 JAPAN</p>
        <p>TEL：0438-30-4000</p>
      </section>
      <section>
        <h4>BY BUS from Kisarazu Station</h4>
        <p>Take the bus for “Kiyomidai Danchi” at West Exit # 2 or East Exit #6 to “Kisarazu-KOSEN” for 15 minutes and walk southward.</p>
        <p>Access To Kisarazu Station</p>
        <p>Take the Express train from Tokyo Station 55-minute ride</p>
        <p>Take the Rapid train from Tokyo Station for 1 hour and 25 minutes</p>

        <div class="mdl-tabs mdl-js-tabs">
          <div class="mdl-tabs__tab-bar">
            <a href="#to-kosen" class="mdl-tabs__tab is-active">To kosen</a>
            <a href="#to-station" class="mdl-tabs__tab">To station</a>
          </div>

          <div class="mdl-tabs__panel bustable is-active" id="to-kosen">
            <table class="mdl-data-table mdl-js-data-table">
              <thead>
                <tr>
                  <th class="mdl-data-table__cell--non-numeric">Hour</th>
                  <th class="mdl-data-table__cell--non-numeric">Minute</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(minutes, hour) in busTable.weekDay.toKosen">
                  <td class="mdl-data-table__cell--non-numeric">{{ hour }}</td>
                  <td class="mdl-data-table__cell--non-numeric">
                    <span v-for="minute in minutes">{{ minute }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="legends">
              <p class="mdl-typography--text-center legend">W : West Exit #2 bus stop<a href="https://goo.gl/maps/zDVh5atBNCA2" target="_blank" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"><i class="material-icons">map</i></a></p>
              <p class="mdl-typography--text-center legend">E : East Exit #6 bus stop<a href="https://goo.gl/maps/VR7snYdFeXn" target="_blank" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"><i class="material-icons">map</i></a></p>
            </div>

          </div>

          <div class="mdl-tabs__panel bustable is-active" id="to-station">
            <table class="mdl-data-table mdl-js-data-table">
              <thead>
                <tr>
                  <th class="mdl-data-table__cell--non-numeric">Hour</th>
                  <th class="mdl-data-table__cell--non-numeric">Minute</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(minutes, hour) in busTable.weekDay.toStation">
                  <td class="mdl-data-table__cell--non-numeric">{{ hour }}</td>
                  <td class="mdl-data-table__cell--non-numeric">
                    <span v-for="minute in minutes">{{ minute }}</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="legends">
              <p class="mdl-typography--text-center legend">F : Kosen-mae bus stop<a href="https://goo.gl/maps/UuRryaKETA12" target="_blank" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"><i class="material-icons">map</i></a></p>
              <p class="mdl-typography--text-center legend">B : Kosen-ura bus stop<a href="https://goo.gl/maps/MZw4PwK3LwN2" target="_blank" class="mdl-button mdl-js-button mdl-button--icon mdl-button--colored"><i class="material-icons">map</i></a></p>
            </div>
          </div>

        </div>
      </section>
      <section>
        <h4>BY CAR</h4>
        <p>Take Tateyama Expressway and exit at Kisarazu North IC</p>
      </section>
      <section>
        <h4>BY RAPID SERVICE BUS</h4>
        <p>approx. 60-minute ride from Yokohama Station to Kisarazu Station</p>
        <p>approx. 40-minute ride from Haneda Airport to Kisarazu Station</p>
        <p>approx. 60-minute ride from Tokyo Station Yaesu Exit to Kisarazu Station</p>
      </section>
    </div>
  </PageArticle>
</template>

<style scoped>
.map {
  position: relative;
  padding-bottom: 60%;
  height: 0;
  overflow: hidden;
  margin-bottom: 10px;
}

.map iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.bustable {
  width: 100%;
  margin-top: 1rem;
  overflow-x: scroll;
}

.bustable table {
  width: 100%;
  height: 200px;
}

.bustable span {
  display: inline-block;
  margin: 0 auto;
  width: 40px;
}

.legend {
  margin: 0;
}

.legends {
  margin-top: 1rem;
}

@media all and (max-width: 320px) {
  .mdl-tabs__tab {
    padding: 0 12px;
  }
}
</style>

<script>
export default {
  head: {
    title: 'Directions'
  },
  mounted () {
    document.querySelector('.mdl-tabs__tab.is-active').click()
  },
  data () {
    return {
      busTable: {
        weekDay: {
          toKosen: {
            6: ['25W', '30E', '45W'],
            7: ['05W', '15E', '30W', '51W'],
            8: ['00E', '08W', '20W', '25W', '37W'],
            9: ['05W', '30W', '45E'],
            10: ['25E', '30W'],
            11: ['10W', '20E', '50E'],
            12: ['08W', '25W'],
            13: ['00E', '05W', '25W', '45E'],
            14: ['05W', '25W', '48E'],
            15: ['10W', '35E', '45E'],
            16: ['01W', '25W', '46E'],
            17: ['00W', '27W', '35E', '45E'],
            18: ['00W', '20E', '25W', '52E'],
            19: ['15W', '40E'],
            20: ['15W', '30E'],
            21: ['00W', '50E'],
            22: ['30E']
          },
          toStation: {
            6: ['06B', '42F', '53B'],
            7: ['02F', '25F', '38B', '52F'],
            8: ['17F', '23B', '30F', '42F', '47F'],
            9: ['09F', '29F', '51F'],
            10: ['07F', '49F', '58B'],
            11: ['29F', '41B'],
            12: ['07F', '29F', '47F'],
            13: ['29F', '47F'],
            14: ['07F', '27F', '47F'],
            15: ['07F', '29F', '58B'],
            16: ['07F', '29F', '47F'],
            17: ['04F', '22F', '49F'],
            18: ['00B', '07F', '23F', '47F'],
            19: ['08F', '34F'],
            20: ['01B', '37F', '54B'],
            21: ['22F'],
            22: ['13B']
          }
        }
      }
    }
  }
}
</script>
