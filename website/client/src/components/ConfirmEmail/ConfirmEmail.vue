<template>
    <div>
       <div v-if="loading">
            <Spinner />
        </div>
  <div class="e-confirm-page" v-else>
    <div class=" card container">
      <h1 class="e-lhead">Confirm Email</h1>
      <p> Confirm your email by entering the code sent to your email.</p>
      <form>
        <div class="group">
          <input type="email" v-model="email" disabled/><span class="highlight"></span
          ><span class="bar"></span>
          <label>Email</label>
        </div>
        <div class="group">
          <input type="text" v-model="code" /><span
            class="highlight"
          ></span
          ><span class="bar"></span>
          <label>Code</label>
        </div>
        <input
          type="submit"
          value="Confirm"
          class="button e-btn-1"
          @click="handleSubmit"
        />
      </form> 
    </div>
  </div>
    </div>
</template>

<script>
import Spinner from '@/components/Spinner/Spinner.vue';
import Vue from 'vue';
export default {
    data() {
        return {
            email: localStorage.getItem("e"),
            code: "",
            loading: false
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.loading = true;
            let url = this.$serverURLI + "/users/confirmEmail";
            this.$http.post(url,{
                email: this.email,
                code: this.code
            })
            .then(response => {
                if(response.data.status == "Success") {
                    Vue.$toast.open({
                        message: 'Email verified!',
                        type: 'success',
                        position: 'bottom-left'
                    });
                    window.location.href = location.protocol + '//' + location.host + '/login';
                }
                else {
                    Vue.$toast.open({
                        message: "Error!",
                        type: "error",
                        position: "bottom-left"
                    });
                }
            })
            .catch(error => {
                Vue.$toast.open({
                        message: error,
                        type: "error",
                        position: "bottom-left"
                    });
            })
            .finally(() => this.loading = false);
        }
    },
    components: {
        Spinner
    }
}
</script>

<style scoped>
.e-confirm-page {
  font-family: "Merriweather", serif;
  background-color: #d4418e;
  background-image: linear-gradient(315deg, #d4418e 0%, #0652c5 74%);
  position: fixed;
  margin-top: -14vw;
  height: 100vw;
  width: 100vw;
  z-index: -1;
}

.e-btn-1 {
  border: none;
  font-family: "Roboto", sans-serif;
  background-color: #d896ff !important;
  border-radius: 40px;
  width: 150px;
  text-decoration: none;
  height: 31px;
  padding: 1px;
  display: initial;
  color: #000;
}
.e-btn-1:hover {
  background-color: #efbbff !important;
}
.e-lhead {
  margin-top: 1vw;
}
.container {
  background-color: white;
  margin-top: 25vw;
  border-radius: 40px;
  box-shadow: black;
  height: 27vw;
  width: 45vw;
}
.container:hover {
  transition: all 0.2s ease-out;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  top: -4px;
  border: 1px solid #cccccc;
  background-color: white;
}

.container:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #d896ff !important;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(2);
  transform-origin: 50% 50%;
  transition: transform 0.15s ease-out;
}

.container:hover:before {
  transform: scale(2.55);
}
form {
  width: 380px;
  margin: 1em auto;
}

.group {
  position: relative;
  margin-bottom: 45px;
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
