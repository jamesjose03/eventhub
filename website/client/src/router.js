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
      beforeEnter(to,from,next) {
        if(localStorage.getItem("user")!=undefined) {
          window.location.href = location.protocol + '//' + location.host + '/dashboard';
        }
        else {
          next();
        }
      }
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
      beforeEnter(to,from,next) {
        if(localStorage.getItem("user")!=undefined) {
          window.location.href = location.protocol + '//' + location.host + '/dashboard';
        }
        else {
          next();
        }
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter(to,from,next) {
        if(localStorage.getItem("user")!=undefined) {
          next();
        }
        else {
          window.location.href = location.protocol + '//' + location.host + '/login';
        }
      }
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
      beforeEnter(to,from,next) {
        if(localStorage.getItem("user")!=undefined) {
          next();
        }
        else {
          window.location.href = location.protocol + '//' + location.host + '/login';
        }
      }
    },
    {
      path: "/addEvent",
      name: "addEvent",
      component: AddEvent
    }
  ]
});

export default router;
