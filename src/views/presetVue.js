
import Vue from "vue";
import Util from "@assets/js/util.js";
Vue.prototype.$isDev = Util.isDev;
Vue.prototype.$isMobile = Util.isMobile;

export default ()=>{}