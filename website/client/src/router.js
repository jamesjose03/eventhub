import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Navbar from "./views/Navbar.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
	},
	{
	  path: "/navbar",
	  name: "navbar",
	  component: () => import("./views/Navbar.vue")
	}
  ]
});

