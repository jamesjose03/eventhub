<template>
    <div>
        <div class="container-profile">
            <div class="profile-content">
            <span>Name: {{name}}</span>
            <br>
            <span>Email: {{email}}</span>
            <br>
            <span>Phone: {{phone}}</span>
            <br>
            <span>College: {{college}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            email: "",
            phone: "", 
            college: ""
        }
    },
    methods: {
        getBasicProfile() {
            let url = "http://localhost:9000/users/getBasicProfile/"+ this.$cookies.get("id");
            this.$http.get(url)
            .then(response => {
                if(response.data.status == "Success") {
                    this.name = response.data.p.name;
                    this.email = response.data.p.email;
                    this.phone = response.data.p.phone;
                    this.college = response.data.p.college;
                }
            })
        }
    },
    beforeMount() {
        this.getBasicProfile();
    }
}
</script>



<style scoped>
.container-profile {
    height: 210px;
    width: 750px;
    margin-left: 25vw;
    border: 10px solid;
}
.profile-content {
    padding: 10px 40vw 11px 12px;
}
span {
    display: block ruby;
}
</style>
