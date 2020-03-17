<template v-if="display">
    <div>
        <Navbar />
        <input type="submit" value="Logout" @click="logout()"/>
        Welcome {{ JSON.parse(username) }}
       <!-- <SideNav />
        <UserIcon />
        <DashboardArea /> -->
    </div>
</template>

<script>
import Navbar from "@/components/navbar.vue"
import UserIcon from "@/components/UserIcon.vue"
import DashboardArea from "@/components/DashboardArea.vue"
import SideNav from "@/components/SideNav.vue"
import Vue from "vue";

export default {
    data() {
        return {
            ok: false,
            username: localStorage.getItem('user'),
            display: false
        }
    },
    methods: {
        checkSignedIn() {
            if(localStorage.getItem('user')!= null || localStorage.getItem('user')!= undefined) {
                this.view = true
            }
            else {
                window.location.href = 'http://localhost:8080/'
            }
        },
        logout() {
            localStorage.removeItem('user')
            localStorage.removeItem('jwt')
            window.location.href = 'http://localhost:8080/'
        }   
    },
    beforeMount() {
        this.checkSignedIn()
    },
    components:
    {
        Navbar,
        UserIcon,
        DashboardArea,
        SideNav
    }
}
</script>

<style scoped>
.e-btn{
    display: none;
}
</style>

