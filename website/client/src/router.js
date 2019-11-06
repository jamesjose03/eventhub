import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Navbar from "./views/Navbar.vue";
import Login from "./components/Login.vue";

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
      path: "/login",
      name: "login",
      component: Login
	},
	{
	  path: "/navbar",
	  name: "navbar",
	  component: () => import("./views/Navbar.vue")
	},
	{
	  path: "/login",
	  name: "login",
	  component: Login
	}
  ]
});


