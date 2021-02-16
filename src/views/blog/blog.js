import Vue from "vue";
import App from "./blog.vue";

Vue.config.productionTip = false;

import "../presetVue"
// import Util from "@assets/js/util.js";
// Vue.prototype.$isDev = Util.isDev;
// Vue.prototype.$isMobile = Util.isMobile;

new Vue({
  render: h => h(App)
}).$mount("#app");
