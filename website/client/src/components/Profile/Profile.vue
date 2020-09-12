<template>
    <div>
        <Navbar />
        <h1>Welcome, {{ activeUser }} !</h1>
        <i class="far fa-user-circle e-usericon"></i>
        <i class="fas fa-plus-circle e-addButton"></i>
        <br>
        <input type="text" class="bio-text effect-11" v-model="bio" @keyup.enter="updateBio()"/>
        <div class="slider">
            <a class="menu-btn">Profile</a>
            <a class="menu-btn">Events</a>
            <a class="menu-btn">Certificates</a>
        </div>
        <keep-alive>
             <component :is='component' />
        </keep-alive>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar/navbar.vue";
import SideNav from "@/components/SideNav/SideNav.vue";
import ProfileSection from "@/components/Profile/ProfileSection.vue"
export default {
    data() {
        return {
            activeUser: "",
            component: "ProfileSection",
            bio: "Student"
        }
    },
    methods: {
        fetchBio() {
            let url = "http://localhost:9000/users/getBasicProfile/" + this.$cookies.get("id");
            this.$http.get(url)
            .then(response => {
                if(response.data.status == "Success") {
                    this.bio = response.data.p.bio;
                    this.activeUser = response.data.p.name;
                }
            })
        },
        updateBio() {
            let url = "http://localhost:9000/users/updateBio/" + this.$cookies.get("id");
            this.$http.post(url, {
                bio: this.bio
            })
            .then(response => {
                location.reload();
            })
        }
    },
    components: {
        Navbar,
        SideNav,
        ProfileSection
    },
    beforeMount() {
        this.fetchBio();
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
  cursor: pointer;
}

.slider a.active {
  border-bottom: 3px solid purple;
}
.bio-text {
    border: 0;
    text-align: center;
    font-size: 30px;
}
.bio-text:focus {
    border-bottom: 1px solid;
}
.bio-text:hover {
    border-bottom: 1px solid;
}
</style>
