<template>
  <div id="app">
    <h1>Users</h1>
    <Navbar />
    <Button />
    <Carousel />
    <Description />
  </div>
</template>

<script>
import Navbar from "@/components/navbar.vue";
import Button from "@/components/Button.vue";
import Carousel from "@/components/carousel.vue";
import Description from "@/components/desc.vue";
export default {
  components: {
    Navbar,
    Carousel,
    Description,
    Button
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
</style>
