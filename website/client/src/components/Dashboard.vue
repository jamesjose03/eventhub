<template>
    <div>
        <Navbar />
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
export default {
    data() {
        return {
            ok: false,
            username: localStorage.getItem('user')
        }
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

