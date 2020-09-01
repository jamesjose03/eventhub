import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import InputTag from 'vue-input-tag'
import VueCookies from 'vue-cookies'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

//For cookies
Vue.use(VueCookies)

// set default config
Vue.$cookies.config('7d')

//For toast notifications
Vue.use(VueToast);


Vue.component('input-tag', InputTag)
Vue.prototype.$http = Axios;
Vue.prototype.$serverURLI = "http://localhost:9000";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
