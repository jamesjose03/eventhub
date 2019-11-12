<template>
    <div>
        <router-link :to="{name: 'login'}">
        <button class = "nav-link e-btn">Login </button>
        </router-link>
    </div>
</template>

<style>
.e-btn{
  border: none;
  font-family: 'Roboto', sans-serif;
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 128px;
  text-decoration: none;
  position: fixed;
  margin-top: -3.1vw;
  margin-left: 85vw;
  z-index: 100;
}

.e-btn:hover{
  background-color: #efbbff !important;
}

</style>
