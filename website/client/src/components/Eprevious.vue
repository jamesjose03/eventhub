<template>
  <div class="e-upcoming">
    <h1 class="e-upcoming-heading">Previous Events</h1>
    <p>Events that you have attended.</p>
    <div class="page">
      <div class="timeline">
        <div class="timeline__group">
          <span class="timeline__year">2019</span>
          <div class="timeline__box">
            <div class="timeline__date">
              <span class="timeline__day">2</span>
              <span class="timeline__month">Feb</span>
            </div>
            <div class="timeline__post">
              <div class="timeline__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam, est.
                </p>
              </div>
            </div>
          </div>
          <div class="timeline__box">
            <div class="timeline__date">
              <span class="timeline__day">1</span>
              <span class="timeline__month">Sept</span>
            </div>
            <div class="timeline__post">
              <div class="timeline__content">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Velit, tempore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline__group">
          <span class="timeline__year">2020</span>
          <div class="timeline__box">
            <div class="timeline__date">
              <span class="timeline__day">14</span>
              <span class="timeline__month">Jul</span>
            </div>
            <div class="timeline__post">
              <div class="timeline__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit, eaque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline__group">
          <span class="timeline__year">2021</span>
          <div class="timeline__box">
            <div class="timeline__date">
              <span class="timeline__day">28</span>
              <span class="timeline__month">Aug</span>
            </div>
            <div class="timeline__post">
              <div class="timeline__content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, aut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src = "../assets/previousevent.svg" class="schedule-prev-svg"/>
  </div>
</template>

<style>
.e-upcoming-heading {
  font-family: "Staatliches", cursive;
}

.schedule-prev-svg {
  height: 225px;
  margin-left: 72vw;
  margin-top: -100vw;
}

.timeline {
  --uiTimelineMainColor: var(--timelineMainColor, #222);
  --uiTimelineSecondaryColor: var(--timelineSecondaryColor, #fff);

  position: relative;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-top: -10vw;
}

.timeline:before {
  content: "";
  width: 4px;
  height: 100%;
  background-color: var(--uiTimelineMainColor);

  position: absolute;
  top: 0;
}

.timeline__group {
  position: relative;
}

.timeline__group:not(:first-of-type) {
  margin-top: 4rem;
}

.timeline__year {
  padding: 0.5rem 1.5rem;
  color: var(--uiTimelineSecondaryColor);
  background-color: var(--uiTimelineMainColor);

  position: absolute;
  left: 0;
  top: 0;
}

.timeline__box {
  position: relative;
}

.timeline__box:not(:last-of-type) {
  margin-bottom: 30px;
}

.timeline__box:before {
  content: "";
  width: 100%;
  height: 2px;
  background-color: var(--uiTimelineMainColor);

  position: absolute;
  left: 0;
  z-index: -1;
}

.timeline__date {
  min-width: 65px;
  position: absolute;
  left: 0;

  box-sizing: border-box;
  padding: 0.5rem 1.5rem;
  text-align: center;

  background-color: var(--uiTimelineMainColor);
  color: var(--uiTimelineSecondaryColor);
}

.timeline__day {
  font-size: 2rem;
  font-weight: 700;
  display: block;
}

.timeline__month {
  display: block;
  font-size: 0.8em;
  text-transform: uppercase;
}

.timeline__post {
  padding: 1.5rem 2rem;
  border-radius: 2px;
  border-left: 3px solid var(--uiTimelineMainColor);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 1px 2px 0 rgba(0, 0, 0, 0.24);
  background-color: var(--uiTimelineSecondaryColor);
  margin-left: 2vw;
}

@media screen and (min-width: 641px) {
  .timeline:before {
    left: 30px;
  }

  .timeline__group {
    padding-top: 55px;
  }

  .timeline__box {
    padding-left: 80px;
  }

  .timeline__box:before {
    top: 50%;
    transform: translateY(-50%);
  }

  .timeline__date {
    top: 50%;
    margin-top: -27px;
  }
}

@media screen and (max-width: 640px) {
  .timeline:before {
    left: 0;
  }

  .timeline__group {
    padding-top: 40px;
  }

  .timeline__box {
    padding-left: 20px;
    padding-top: 70px;
  }

  .timeline__box:before {
    top: 90px;
  }

  .timeline__date {
    top: 0;
  }
}

.timeline {
  --timelineMainColor: #660066;
  font-size: 16px;
}

/*
=====
DEMO
=====
*/

p {
  margin-top: 0;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

p:last-child {
  margin-bottom: 0;
}

.page {
  max-width: 800px;
  padding: 10rem 2rem 3rem;
  margin-left: auto;
  margin-right: auto;
  order: 1;
}
</style>
