<template>
  <div id="e-carousel" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner e-carousel-body">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../../assets/1.jpg" alt="First slide" />
        <div class="carousel-caption d-none d-md-block">
          <h5>Welcome to EventHub!</h5>
        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../../assets/2.jpg" alt="Second slide" />
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../../assets/3.jpg" alt="Third slide" />
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#e-carousel"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#e-carousel"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<style>
.e-carousel-body {
  height: 35vw;
}
#e-carousel {
  margin-top: -0.25vw;
}
</style>
