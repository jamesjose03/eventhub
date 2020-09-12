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
                <button type="submit" class="regev-btn" @click="registerEvent">Submit</button>
            </form>
        </div>
        </div>
        <img src="../../assets/newEvent.svg" alt="Add Event SVG 2" class="svg-2">
    </div>
</template>

<script>
import Navbar from  '../Navbar/navbar.vue'
import Button from '../Button/Button.vue'
import Vue from 'vue';
import Spinner from '@/components/Spinner/Spinner.vue';

export default {
    data() {
        return {
            name: this.EventName,
            student: "",
            email: "",
            phone: "",
            eventID: this.EventID
        }
    },
    props: ['EventName', 'EventID'],
    components: {
        Navbar,
        Button
    },
    methods: {
        getProfileDetails() {
            let url = "http://localhost:9000/users/getBasicProfile/" + this.$cookies.get("id");
            this.$http.get(url)
            .then(response => {
                if(response.data.status == "Success") {
                    this.student = response.data.p.name;
                    this.email = response.data.p.email;
                    this.phone = response.data.p.phone;
                }
            })
        },
        registerEvent(e) {
            e.preventDefault();
            let url = "http://localhost:9000/events/registerEvent/"+ this.$cookies.get("id");
            this.$http.post(url, {
                eventID: this.eventID,
                eventName: this.name,
                name: this.student,
                email: this.email,
                phone: this.phone
            })
            .then(response => {
                if(response.data.status == "Success") {
                    Vue.$toast.open({
                        message: 'Registered for event successfully!',
                        type: 'success',
                        position: 'bottom-left'
                    });
                    window.location.href = location.protocol + '//'+location.host + '/dashboard';
                }
            })
        },
    },
    beforeMount() {
        this.getProfileDetails()
    }
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
input {
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  -webkit-appearance: none;
  display: block;
  background: #fafafa;
  color: #636363;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #757575;
}

input:focus {
  outline: none;
}

.index {
  visibility: hidden;
}

/* Label */

label {
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: -20px;
  transition: all 0.2s ease;
}

/* active */

input:focus ~ label,
input.used ~ label {
  top: -20px;
  transform: scale(0.75);
  left: -2px;
  /* font-size: 14px; */
  color: #660066;
}

/* Underline */

.bar {
  position: relative;
  display: block;
  width: 100%;
}

.bar:before,
.bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #660066 !important;
  transition: all 0.2s ease;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

/* active */

input:focus ~ .bar:before,
input:focus ~ .bar:after {
  width: 50%;
}

/* Highlight */

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}
/* active */

input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}

/* Animations */

@keyframes inputHighlighter {
  from {
    background: #660066 !important;
  }
  to {
    width: 0;
    background: transparent;
  }
}
</style>
