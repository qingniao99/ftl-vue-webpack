import Vue from 'vue'
import App from './App'
import router from '../../router'

Vue.config.productionTip = false

new Vue({
  el: '#body',
  router,
  components: { App },
  template: '<App/>'
})
