import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home/Home.vue";
import Login from "./components/Login/Login.vue";
import Dashboard from "./components/Dashboard/Dashboard.vue";
import SignUp from "./components/SignUp/SignUp.vue";
import Events from "./components/Events/Events.vue";
import Profile from "./components/Profile/Profile.vue";
import AddEvent from "./components/AddEvent/AddEvent.vue";

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
        if(Vue.$cookies.get("id") ==  undefined) {
          next();
        }
        else {
          window.location.href = location.protocol + '//' + location.host + '/dashboard';
        }
      }
    },
    {
      path: "/navbar",
      name: "navbar",
      component: () => import("./views/Navbar.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUp,
      beforeEnter(to,from,next) {
        if(Vue.$cookies.get("id") ==  undefined) {
          next();
        }
        else {
          window.location.href = location.protocol + '//' + location.host + '/dashboard';
        }
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter(to,from,next) {
        if(Vue.$cookies.get("id") ==  undefined) {
          window.location.href = location.protocol + '//' + location.host + '/login';
        }
        else {
          next();
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
        if(Vue.$cookies.get("id") ==  undefined) {
          window.location.href = location.protocol + '//' + location.host + '/login';
        }
        else {
          next();
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
