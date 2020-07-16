import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import InputTag from 'vue-input-tag'
import VueCookies from 'vue-cookies'

//For cookies
Vue.use(VueCookies)

// set default config
Vue.$cookies.config('7d')


Vue.component('input-tag', InputTag)
Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
