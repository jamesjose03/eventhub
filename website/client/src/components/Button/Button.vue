<template>
  <div>
    <router-link :to="{ name: 'login' }" v-if="status">
      <button class="nav-link e-btn-1">Login</button>
    </router-link>
    <div v-else>
      <popper
        trigger="clickToOpen"
        :options="{
          placement: 'bottom',
          modifiers: { offset: { offset: '0,10px' } }
        }">
    <div class="popper">
      <router-link to="dashboard">
        <button class="e-btns">Dashboard</button>
      </router-link>
      <br>
      <button class="e-btns" @click="logout()">Logout</button>
    </div>
    <button slot="reference" class = "e-btn">
       <div class="profileImg">
    <i class="far fa-user-circle fa-3x e-usericon"></i>
        </div>
    </button>
      </popper>
    </div>
  </div>
</template>
<script>
import Popper from 'vue-popperjs';
import 'vue-popperjs/dist/vue-popper.css';
export default {
  props: ['status'],
  data() {
    return {
      status: this.status
    };
  },
  components: {
    'popper': Popper
  },
  methods: {
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
};
</script>
<style scoped>
.popper {
  width: 130px;
  height: 50px;
  margin-left: -1vw;
}
.e-btn {
  border: none;
  font-family: "Roboto", sans-serif;
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 128px;
  text-decoration: none;
  position: fixed;
  margin-top: -3.4vw;
  margin-left: 40vw;
  z-index: 100;
  font-size: 50px;
  height: 44px;
}
.e-btns {
  font-family: "Roboto", sans-serif;
  background-color: #660066 !important;
  width: 128px;
  text-decoration: none;
  color: #fff;
}
.e-btn:hover {
  background-color: #efbbff !important;
}
.e-btn-1 {
  border: none;
  font-family: "Roboto", sans-serif;
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 128px;
  text-decoration: none;
  position: fixed;
  margin-top: -3.1vw;
  margin-left: 89vw;
  z-index: 100;
  font-size: 20px;
  height: 44px;
}
.e-btn-1:hover {
  background-color: #efbbff !important;
}
.e-usericon {
    font-size: 40px;
}
.profileImg {
  margin-top: -1vw;
}
</style>
