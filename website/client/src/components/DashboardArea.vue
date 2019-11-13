<template>
    <div class="dashboard-area">
        <span class="welcome-msg"> Welcome User!</span>
        <div class="row">
            <div class="col-sm-6">
            <div class="card e-eventcard e-card left-card">
      <div class="card-body e-body" @click="selectedComponent='eupcoming'">
        <i class="fas fa-user-check fa-3x"></i>
        <h5 class="card-title">Upcoming Events</h5>
        <p class="card-text">Click here for your upcoming events</p>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card e-eventcard e-card" @click="selectedComponent='eprevious'">
      <div class="card-body e-body">
        <i class="fas fa-calendar-check fa-3x"></i>
        <h5 class="card-title">Previous Events</h5>
        <p class="card-text">History of attended events</p>
      </div>
    </div>
  </div>
 
</div>
<component :is="selectedComponent"> </component>
</div>
</template>
<script>
import eupcoming from '@/components/Eupcoming.vue'
import eprevious from '@/components/Eprevious.vue'
import defaulteventview from '@/components/DefaultEventView.vue'
export default {
  data(){
    return{
      selectedComponent: 'defaulteventview'
    }
  },
  components: {
    eupcoming,
    eprevious,
    defaulteventview
  }
}
</script>
<style>
.dashboard-area{
    margin-top: 1vw;
}
.e-eventcard{
    width: 385px;
}
.left-card{
    margin-left: 26vw;
}
</style>
