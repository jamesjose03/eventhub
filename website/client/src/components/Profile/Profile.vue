<template>
    <div>
        <SideNav />
        <Navbar />
        <h1>Welcome, {{ JSON.parse(activeUser) }} !</h1>
        <i class="far fa-user-circle e-usericon"></i>
        <i class="fas fa-plus-circle e-addButton"></i>
        <div class="slider">
            <a class="menu-btn">Profile</a>
            <a class="menu-btn">Events</a>
            <a class="menu-btn">Certificates</a>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar/navbar.vue";
import SideNav from "@/components/SideNav/SideNav.vue";
export default {
    data() {
        return {
            activeUser: localStorage.getItem('user')
        }
    },
    components: {
        Navbar,
        SideNav
    }

}
</script>

<style>
.e-usericon {
    font-size: 100px;
}
.e-addButton {
    font-size: 33px;
    margin-left: -1vw;
}
.menu-btn {
    margin: 5vw;
    border: none;
}
.slider {
  background-color: #fff;
  overflow: hidden;
  margin-left: 26vw;
}
.slider a {
  float: left;
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  border-bottom: 3px solid transparent;
}
.slider a:hover {
  border-bottom: 3px solid purple;
}

.slider a.active {
  border-bottom: 3px solid purple;
}
</style>
