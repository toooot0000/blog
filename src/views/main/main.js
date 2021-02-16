import Vue from 'vue'
import App from './main.vue'

Vue.config.productionTip = false

import "../presetVue"
// import Util from '@assets/js/util.js'
// Vue.prototype.$isDev = Util.isDev

new Vue({
  render: h => h(App)
}).$mount('#app')
