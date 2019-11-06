<template >
<div>
<Navbar />
<LoginArea />
</div>
</template>

<script >
import Navbar from "@/components/navbar.vue"
import LoginArea from "@/components/LoginArea.vue"
    export default {
        data() {
            return {

            }
        },
        components: {
            Navbar,
            LoginArea
        }
    } 
</script>

<style scoped >

</style>