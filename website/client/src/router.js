import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Navbar from "./views/Navbar.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue"
import SignUp from "./components/SignUp.vue"

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
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp
  }
  ]
});


