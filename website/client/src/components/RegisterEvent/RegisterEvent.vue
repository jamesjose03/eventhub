<template>
    <div>
        <Navbar/>
        <Button/>
        <img src="../../assets/addEvent.svg" alt="Add Event SVG" class="svg-1">
        <div class="regev-container">
        <h1>Register for {{EventName}}</h1>
        <p>Fill this form to get your event registered.</p>
        <div class="regev-form">
            <form action="POST">
                <input type="text" name ="Event Name" id="regev-name" placeholder="Event Name" v-model="name" disabled/>
                <input type="text" name = "Student" id="regev-student" placeholder="Student Name" v-model="student" />
                <input type="text" name = "Email" id="regev-email" placeholder="Email" v-model="email"/>
                <input type="text" name = "Phone" id="regev-phone" placeholder="Phone" v-model="phone" />
                <button type="submit" class="regev-btn">Submit</button>
            </form>
        </div>
        </div>
        <img src="../../assets/newEvent.svg" alt="Add Event SVG 2" class="svg-2">
    </div>
</template>

<script>
import Navbar from  '../Navbar/navbar.vue'
import Button from '../Button/Button.vue'
export default {
    data() {
        return {
            name: this.EventName,
            student: "",
            email: "",
            phone: ""
        }
    },
    props: ['EventName'],
    components: {
        Navbar,
        Button
    },
    methods: {
    },
}
</script>

<style scoped>
.svg-1 {
    height: 200px;
    margin-right: 75vw;
    margin-top: 4vw;
}
.svg-2 {
    height: 200px;
    margin-left: 75vw;
    margin-top: -30vw;
}
.regev-container {
    margin-top: -12vw;
}
.regev-form {
    width: 45vw;
    margin-left: 28vw;
    background-color: #fff;
}
form>input{
    background-color: #fff;
}
.regev-btn {
  border: none;
  font-family: "Roboto", sans-serif;
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 128px;
  text-decoration: none;
  position: fixed;
  z-index: 100;
  margin-top: 5vw;
  margin-left: -4vw;
}

.regev-btn:hover {
  background-color: #efbbff !important;
}
</style>
