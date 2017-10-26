import Vue from 'vue'
import iweee from '../iweee.config.json'

Vue.mixin({
  data () {
    return {
      iweee: iweee
    }
  }
})
