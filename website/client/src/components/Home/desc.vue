<template>
  <div class="e-desc">
    <h1 class="e-title-main">Welcome to EventHub!</h1>
    <h4>Hosting events your way....</h4>
    <span>What we offer:</span>
    <div class="row">
      <div class="col-sm-6">
        <div class="card e-card">
          <div class="card-body e-body">
            <i class="fas fa-user-check fa-3x"></i>
            <h5 class="card-title">Live Attendance Monitor</h5>
            <p class="card-text">
              With EventHub, the Event Host can monitor attendance live through
              our platform.
            </p>
            <button class="btn e-km">Know More</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card e-card">
          <div class="card-body e-body">
            <i class="fas fa-calendar-check fa-3x"></i>
            <h5 class="card-title">Easy & Simple Event Hosting</h5>
            <p class="card-text">Simple interface for participants & hosts.</p>
            <button class="btn e-host">Host your event</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <div class="card e-card">
          <div class="card-body e-body">
            <i class="fas fa-coins fa-3x"></i>
            <h5 class="card-title">Easy & Secure Payment</h5>
            <p class="card-text">
              Event Payment can be handled securely through secure Payment
              Gateway.
            </p>
            <button class="btn e-km">Know More</button>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card e-card">
          <div class="card-body e-body">
            <i class="fas fa-certificate fa-3x"></i>
            <h5 class="card-title">Cerificate Generation with Unique ID</h5>
            <p class="card-text">
              Generate Certificates and send soft copies to participants.
            </p>
            <button class="btn e-host">Handle Certificates</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.e-title-main {
  font-family: "Staatliches", cursive;
}
.e-km {
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 128px;
}
.e-km:hover {
  background-color: #efbbff !important;
}
.e-host {
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 175px;
}
.e-host:hover {
  background-color: #efbbff !important;
}
.e-card {
  transition: 0.7s;
  opacity: 0.8;
}
.e-card:hover > .e-body {
  color: white;
  opacity: 1;
  background: -moz-linear-gradient(-45deg, #e2a9e5 15%, #2b94e5 100%);
  background: -webkit-linear-gradient(-45deg, #e2a9e5 15%, #2b94e5 100%);
  background: linear-gradient(135deg, #e2a9e5 15%, #2b94e5 100%);
}
</style>
