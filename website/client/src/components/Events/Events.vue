<template>
  <div>
    <Navbar />
    <div v-if="loading">
      <Spinner />
    </div>
    <div v-else>
    <div class="group e-search-box">
      <input
        type="text"
        v-model="search"
        placeholder="Search for events here..."
        id = "search"
      />
      <span class="highlight"></span><span class="bar"></span>
      </div>
      <label>Search</label>
      <button class = "refresh-text" @click="getAllEvents()">Refresh <i class="fas fa-sync"></i></button>
      <div v-if="nr == 1">
      <div class="row">
      <div v-for="e in events" v-bind:key="e.eventID">
          <h1>{{e.eventName}}</h1>
      </div>
      </div>
      </div>
      <div v-else-if="nr>1">
        <div v-for="columns in rowCount" :key="events.eventID">
        <div class="row">
          <div class="col" v-for="column in numberOfColumns" :key="events.eventID">
            <div v-if="events.length >= layoutCount(columns, column)">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{events[ind].eventName}}</h5>
                  <p class="card-text">{{events[ind].date}}</p>
                  <button class="btn btn-primary" @click="registerBtnClick($event)" :value=ind>Register</button>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div v-else>
        <h3>No events announced yet!</h3>
      </div>
      </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/navbar.vue";
import Spinner from '@/components/Spinner/Spinner.vue';
export default {
  data() {
    return {
      events: [],
      search: "",
      totalEvents: 0,
      nr: 0,
      ind: 0,
      data: [1,2,3,4,5,6], //sample data
      numberOfColumns: 3,
      loading: false
    }
  },
  methods: {
    getAllEvents() {
        let url = "http://localhost:9000/events/fetchEvents";
        this.loading = true;
        this.$http.get(url)
        .then(response => {
          this.events = response.data;
          this.totalEvents = this.events.length;
          this.nr = Math.ceil(this.totalEvents/3);
          })
        .finally(() => (this.loading = false))
    },
    layoutCount: function (rows, columns) {
      let n = (rows - 1) * this.numberOfColumns + columns;
      if(n<=this.totalEvents) {
        this.ind = n-1;
        return (rows - 1) * this.numberOfColumns + columns
      }
      else {
      return (rows - 1) * this.numberOfColumns + columns
      }    
    },
    registerBtnClick(e) {
      const i = e.target.value;
      this.$router.push({name: "registerEvent", params: {EventName: this.events[i].eventName, EventID: this.events[i].eventID}});
    }
  },
  computed: {
    rowCount: function () {
      return Math.floor(((this.events.length - 1) / this.numberOfColumns)) + 1
    }
  },
  components: {
    Navbar,
    Spinner
  },
  beforeMount() {
    this.getAllEvents();
  }
};
</script>
<style scoped>
.card {
  margin: 10px;
}
.card-body {
  flex: 1 1 auto;
  padding: 5.25rem;
}
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

.e-card-deck {
  width: 400px;
  height: 500px;
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
