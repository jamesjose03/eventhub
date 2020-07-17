<template>
  <div id="app">
    <Navbar />
    <Button v-bind:status="checkStatus()"  />
    <Carousel />
    <Description />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/navbar.vue";
import Button from "@/components/Home/Button.vue";
import Carousel from "@/components/Home/carousel.vue";
import Description from "@/components/Home/desc.vue";
export default {
  components: {
    Navbar,
    Carousel,
    Description,
    Button
  },
  methods: {
    checkStatus() {
      if(localStorage.getItem("user")!=undefined) {
        return false;
      }
      else {
        return true;
      }
    },
     logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("email");
      localStorage.removeItem("jwt");
      localStorage.removeItem("category");
      window.location.href = "http://localhost:8080/";
    }
  }
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.popper {
  width: 130px;
  height: 50px;
  margin-left: -1vw;
}
.e-btns {
  font-family: "Roboto", sans-serif;
  background-color: #660066 !important;
  width: 128px;
  text-decoration: none;
  color: #fff;
}
</style>
