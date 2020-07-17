import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Dashboard from "./components/Dashboard.vue";
import SignUp from "./components/SignUp.vue";
import Users from "./components/Users.vue";
import Events from "./components/Events.vue";
import Profile from "./components/Profile.vue";
import AddEvent from "./components/AddEvent.vue";

Vue.use(Router);

let router = new Router({
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
      component: Login,
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
      path: "/signup",
      name: "signup",
      component: SignUp,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/user",
      name: "user",
      component: Users
    },
    {
      path: "/events",
      name: "events",
      component: Events
    },
    {
      path: "/viewProfile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/addEvent",
      name: "addEvent",
      component: AddEvent
    }
  ]
});

export default router;
