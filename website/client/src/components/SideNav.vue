<template>
    <div>
    <div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()"><i class="fas fa-times"></i></a>
    <a href="#">About</a>
    <a href="#">Services</a>
    <a href="#">Clients</a>
    <a href="#">Contact</a>
</div>

<!-- Use any element to open the sidenav -->
<span @click="openNav()"><i class="fas fa-arrow-right"></i></span>

    </div>
</template>

<script>
export default {
    methods: {
        openNav() {
            document.getElementById("mySidenav").style.width = "250px";
        },
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        }
    },
}
</script>

<style>
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #111; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}
i:hover {
cursor: pointer;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  margin-top: 3vw;
  margin-right: -1vw;
}
</style>
