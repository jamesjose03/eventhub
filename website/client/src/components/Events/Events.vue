<template>
  <div>
    <Navbar />
    <div class="group e-search-box">
      <input
        type="email"
        v-model="search"
        placeholder="Search for events here..."
      />
      <span class="highlight"></span><span class="bar"></span>
      </div>
      <label>Search</label>
      <button class = "refresh-text" @click="getAllEvents()">Refresh <i class="fas fa-sync"></i></button>
      <div class="card-deck">
        <div class="card e-card">
          <div class="card-body">
            <h5 class="card-title">Event 1</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              itaque in assumenda?
            </p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/navbar.vue";
export default {
  data() {
    return {
      eventID: [],
      collegeCode: [],
      eventName: [],
      tags: [],
      limit: [],
      deadline: [],
      date: [],
      time: []
    }
  },
  methods: {
    getAllEvents() {
        let url = "http://localhost:9000/events/eventsList";
        this.$http.get(url, {

        })
        .then(response => {
          console.log(response.data.events);
        })
    }
  },
  components: {
    Navbar
  }
};
</script>
<style>
.refresh-text {
  margin-top: 3vw;
  background: none;
  border: none;
}
.card-deck {
  margin-top: 10vw;
}
.e-search-box {
  width: 50vw;
  margin-left: 25vw;
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
