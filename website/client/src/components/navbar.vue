<template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light e-nav">
    <router-link :to="{name: 'home'}">
    <a class="navbar-brand e-title">EventHub</a>
    </router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse e-nav-item" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
  
      </li>
    </ul>
    
  </div>
</nav>
    </div>
</template>

<script>

export default {
  data() {
    return {
      ok: true
    }
  },
  
}
</script>

<style>
.e-title{
  font-family: 'Staatliches', cursive;
  color: white !important;
}
.e-nav {
    top: 0;
    position: fixed;
    z-index: 100;
    width: 100vw;
    background-color:#660066 !important;
}
.e-nav-item {
    margin-left: 82vw;
}
.e-btn{
  border: none;
  font-family: 'Roboto', sans-serif;
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 128px;
  text-decoration: none;
  position: fixed;
  margin-top: -0.5vw;
}

.e-btn:hover{
  background-color: #efbbff !important;
}
</style>
