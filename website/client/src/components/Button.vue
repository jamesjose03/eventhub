<template>
  <div>
    <router-link :to="{ name: 'login' }" v-if="status">
      <button class="nav-link e-btn">Login</button>
    </router-link>
    <button @click="this.logout()" class="nav-link e-btn" v-else>Logout</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: true
    };
  },
  methods: {
    checkLogin() {
      if (localStorage.getItem("user") != null) {
        this.status = false;
      } else {
        this.status = true;
      }
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");
      localStorage.removeItem("category");
      window.location.href = "http://localhost:8080/";
    }
  },
  beforeMount() {
    this.checkLogin();
  }
};
</script>
<style>
.e-btn {
  border: none;
  font-family: "Roboto", sans-serif;
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 128px;
  text-decoration: none;
  position: fixed;
  margin-top: -3.1vw;
  margin-left: 85vw;
  z-index: 100;
}

.e-btn:hover {
  background-color: #efbbff !important;
}
</style>
