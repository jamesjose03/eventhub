import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";
import InputTag from 'vue-input-tag'
import VueCookies from 'vue-cookies'
import Vuex from 'vuex'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { stat } from "fs";

Vue.use(Vuex)

//For cookies
Vue.use(VueCookies)

// set default config
Vue.$cookies.config('7d')

//For toast notifications
Vue.use(VueToast);


Vue.component('input-tag', InputTag)
Vue.prototype.$http = Axios;
Vue.prototye.$serverURLI = "http://localhost:9000";

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    auth: false,
    id: "",
    category: ""
  },
  mutations: {
    loginMutation(state, {id, category}) {
      state.auth = true
      state.id = id;
      state.category = category
    },
    logoutMutation(state) {
      state.auth = false;
      state.id = "";
      state.category = "";
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store: store
}).$mount("#app");
