<template v-if="display">
  <div>
    <Navbar />
    <Button v-bind:status="false" />
    Welcome !
    <SideNav />
    <DashboardArea />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/navbar.vue";
import DashboardArea from "@/components/Dashboard/DashboardArea.vue";
import SideNav from "@/components/SideNav/SideNav.vue";
import Button from "@/components/Button/Button.vue";

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
    logout() {
      let url = "http://localhost:9000/users/logout/" + this.$cookies.get("id");
      this.$http.get(url)
      .then(response => {
        if(response.data.success == true) {
          this.$cookies.remove("id");
          this.$cookies.remove("cat");
           window.location.href = location.protocol + '//'+ location.host + '/'; 
        }
        else {
          alert("Cannot Log out! Please try again.");
           window.location.href = location.protocol + '//'+ location.host + '/dashboard';
        }
      })
    },
    
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
