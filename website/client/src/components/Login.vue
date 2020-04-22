<template>
  <div>
    <Navbar />
    <LoginArea />
    <img src = "../assets/login.svg" class="login-svg"/>
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import LoginArea from "@/components/LoginArea.vue";
export default {
  data() {
    return {};
  },
  components: {
    Navbar,
    LoginArea
  }
};
</script>

<style scoped>
.login-svg {
  height: 266px;
  margin-left: 72vw;
  z-index: 2;
}


</style>
