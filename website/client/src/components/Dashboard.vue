<template v-if="display">
  <div>
    <Navbar />
    <Button v-bind:status="false" />
    Welcome {{ JSON.parse(username) }}
    <SideNav />
    <DashboardArea />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import DashboardArea from "@/components/DashboardArea.vue";
import SideNav from "@/components/SideNav.vue";
import Button from "@/components/Button.vue";

export default {
  data() {
    return {
      uid: "",
      ok: false,
      username: localStorage.getItem("user"),
      display: false,
      c: "",
      v: false
    };
  },
  methods: {
    getUserID() {
      let url = "http://localhost:9000/users/getUserID/" + this.username;
      //TO DO
      this.$http.get()
    },
    checkSignedIn() {
      if (
        localStorage.getItem("user") != null ||
        localStorage.getItem("user") != undefined
      ) {
        this.display = true;
      } else {
        window.location.href = "http://localhost:8080/login";
      }
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("email");
      localStorage.removeItem("jwt");
      localStorage.removeItem("category");
      window.location.href = "http://localhost:8080/";
    },
    
  },
  beforeMount() {
    this.checkSignedIn();
  },
  components: {
    Navbar,
    Button,
    DashboardArea,
    SideNav
  }
};
</script>

<style scoped>
.e-logout-btn {
  overflow: auto;
}
</style>
