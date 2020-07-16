<template>
  <div>
  <div v-if="viewctg">
    <div id="mySidenav" class="sidenav">
      <a class="sicon" 
        ><i class="far fa-user e-sidenavicon"></i>Profile</a
      >
      <a href="#"
        ><i class="far fa-calendar-check e-sidenavicon"></i>Events Nearby</a
      >
      <a class="sicon navicon-three" @click="navigateTo(3)"
        ><i class="fas fa-plus e-sidenavicon"></i>Add New Event</a
      >
      <button class="e-signout-btn" @click="logout()">
        <i class="fas fa-sign-out-alt e-sidenavicon"></i>Sign Out
      </button>
      <button class="Circle-3">J</button>
    </div>
  </div>
  <div v-else>
     <div id="mySidenav" class="sidenav">
      <a class="sicon" @click="navigateTo(1)"
        ><i class="far fa-user e-sidenavicon"></i>Profile</a
      >
      <a href="#"
        ><i class="far fa-calendar-check e-sidenavicon"></i>Events Nearby</a
      >
      <a href="#" class="sicon"
        ><i class="far fa-heart e-sidenavicon"></i>Wishlist</a
      >
      <a href="#" class="sicon-1"
        ><i class="fas fa-certificate e-sidenavicon"></i>Certificates</a
      >
      <div>
        <button class="Circle-3 sicon-2">J</button>
      </div>
      <div>
        James Kaviyil Jose
      </div>
      <div>
        Student
      </div>
      <button class="e-signout-btn" @click="logout()">
        <i class="fas fa-sign-out-alt e-sidenavicon"></i>Sign Out
      </button>
    </div>
  </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
export default {
  data() {
    let ctg = '';
    return {
      ctg: localStorage.getItem("category"),
      viewctg: false,
      active: ""
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");
      localStorage.removeItem("category");
      window.location.href = location.protocol + '//'+ location.host + '/';
    },
    checkCategory() {
      this.ctg = this.ctg.slice(1,-1);
      this.viewctg= this.ctg.localeCompare("College") == 0 ? true : false;
      console.log(this.ctg.localeCompare("College"))
      console.log(this.ctg);
      console.log(this.viewctg); 
    },
    navigateTo(n) {
      if(n == 1) {
        window.location.href = location.protocol + '//' + location.host + '/viewProfile'; 
      }
      else if(n == 3) {
        window.location.href = location.protocol + '//' + location.host + '/addEvent';
      }
    }
  },
  beforeMount() {
    this.checkCategory()
  },
  components: {
    Profile
  }
};
</script>

<style>
.sicon {
  margin-right: 5vw;
}
.sicon-2 {
  margin-top: 1vw;
}
.sicon:hover {
  cursor: pointer;
}
.sicon-1 {
  margin-right: 1.9vw;
}
.e-sidenavicon {
  margin-right: 1vw;
}
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 295px;
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background: -moz-linear-gradient(-45deg, #e2a9e5 15%, #2b94e5 100%);
  background: -webkit-linear-gradient(-45deg, #e2a9e5 15%, #2b94e5 100%);
  background: linear-gradient(135deg, #e2a9e5 15%, #2b94e5 100%);

  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
i:hover {
  cursor: pointer;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #000;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

.e-signout-btn {
  background-color: #d896ff !important;
  border-radius: 40px;
  border: none;
  height: 50px;
  width: 130px;
  margin-left: 1.6vw;
  margin-top: 17vw;
}
.e-signout-btn:hover {
  cursor: pointer;
  background-color: #efbbff !important;
}
.navicon-three {
  margin-right: 0vw;
}
.Circle-3 {
    margin-left: auto;
    margin-right: auto;
    width: 70px;
    height: 70px;
    background-color: #DBDBDB;
    border-radius: 50%;
  }
</style>
