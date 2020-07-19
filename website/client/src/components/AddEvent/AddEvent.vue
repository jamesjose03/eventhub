<template>
    <div>
        <Navbar/>
        <Button/>
        <img src="../../assets/addEvent.svg" alt="Add Event SVG" class="svg-1">
        <div class="addev-container">
        <h1>Add Event</h1>
        <p>Fill this form to get your event registered.</p>
        <div class="addev-form">
            <form action="POST">
                <input type="text" name ="Event Name" id="addev-name" placeholder="Event Name" v-model="name" />
                <input type="text" name = "Date" id="addev-date" placeholder="Date" v-model="date" />
                <input type="text" name = "Time" id="addev-time" placeholder="Time" v-model="time"/>
                <input type="text" name = "Deadline" id="addev-deadline" placeholder="Deadline" v-model="deadline" />
                <input type="text" name = "Limit" id="addev-limit" placeholder="Expected audience count" v-model="count" />
               <input-tag v-model="tags" placeholder="Event tags"></input-tag>
                <button type="submit" class="addev-btn">Submit</button>
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
            name: "",
            date: "",
            time: "",
            deadline: "",
            count: "",
            tags: []
        }
    },
    components: {
        Navbar,
        Button
    },
    methods: {
        addEvent() {
            let url = "http://localhost:9000/events/addEvent";
            this.$http.post(url, {
                collegeCode: 'AJC', //to be made dynamic
                eventName: this.name,
                tags: this.tags,
                limit: this.count,
                deadline: this.deadline,
                date: this.date,
                time: this.time
            })
            .then(response => {
                if(response.data.status == "Success") {
                    Vue.$toast.open({
                        message: 'Event added successfully!',
                        type: 'success',
                        position: 'bottom-left'
                    });
                    window.location.href = location.protocol + "//" + location.host + "/dashboard";
                }
            })
        }
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
    margin-top: -41vw;
}
.addev-container {
    margin-top: -12vw;
}
.addev-form {
    width: 45vw;
    margin-left: 28vw;
    background-color: #fff;
}
form>input{
    background-color: #fff;
}
.addev-btn {
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

.addev-btn:hover {
  background-color: #efbbff !important;
}
</style>
