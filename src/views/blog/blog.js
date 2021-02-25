import Vue from "vue";
import App from "./blog.vue";

Vue.config.productionTip = false;

import "../presetVue"

new Vue({
  render: h => h(App)
}).$mount("#app");
