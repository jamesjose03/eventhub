<template>
    <div>
    <div id="mySidenav" class="sidenav">
    <a href="#">Profile</a>
    <a href="#">Events Nearby</a>
    <a href="#">Wishlist</a>
    <a href="#">Certificates</a>
    <button class="e-signout-btn">Sign Out</button>
</div>



    </div>
</template>

<script>
export default {
   
}
</script>

<style>
/* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  width: 250px;
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background: -moz-linear-gradient(-45deg, #e2a9e5 15%, #2b94e5 100%);
  background: -webkit-linear-gradient(-45deg, #e2a9e5 15%,#2b94e5 100%);
  background: linear-gradient(135deg, #e2a9e5 15%,#2b94e5 100%);

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
  color: #000;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

.e-signout-btn{
    background-color: #d896ff !important;
    border-radius: 40px;
    border: none;
    height: 50px;
    width: 130px;
    margin-left: 1.6vw;
    margin-top: 25vw;
}
.e-signout-btn:hover{
    cursor: pointer;
     background-color: #efbbff !important;
}

</style>
