<template v-if="display">
  <div>
    <Navbar />
    <Button @click.native="logout" />
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
      ok: false,
      username: localStorage.getItem("user"),
      display: false,
      c: "",
      v: false
    };
  },
  methods: {
    checkSignedIn() {
      if (
        localStorage.getItem("user") != null ||
        localStorage.getItem("user") != undefined
      ) {
        this.view = true;
      } else {
        window.location.href = "http://localhost:8080/";
      }
    },
    logout() {
      localStorage.removeItem("user");
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
