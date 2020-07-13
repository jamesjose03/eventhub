import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import InputTag from 'vue-input-tag'

Vue.component('input-tag', InputTag)
Vue.prototype.$http = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
