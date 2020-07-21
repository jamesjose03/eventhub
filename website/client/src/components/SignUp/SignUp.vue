<template>
  <div>
    <Navbar />
    <div v-if="loading">
      <Spinner />
    </div>
    <div class="e-signup-page" v-else>
      <div class=" card container">
        <h1 class="e-lhead">Sign Up as Student</h1>
        <p>Welcome! Sign Up to create an account & explore our platform.</p>
        <form method="POST">
          <!--<div class="group">
        <select name="category" id="category">
            <option value="student">Student</option>
            <option value="organizer">Organizer</option>
            <option value="college">College</option>
        </select>
        <label class="e-category-label">Category</label>
        </div>-->
          <div class="group">
            <input type="email" v-model="email" /><span class="highlight"></span
            ><span class="bar"></span>
            <label>Email</label>
          </div>
          <div class="group">
            <input type="text" v-model="phone" /><span class="highlight"></span
            ><span class="bar"></span>
            <label>Phone</label>
          </div>
          <div class="group">
            <input type="password" v-model="password" /><span
              class="highlight"
            ></span
            ><span class="bar"></span>
            <label>Password</label>
          </div>
          <div class="group">
            <input type="password" v-model="password2" /><span
              class="highlight"
            ></span
            ><span class="bar"></span>
            <label>Confirm Password</label>
          </div>
          <input
            type="submit"
            value="Sign Up"
            class="button e-btn-1"
            @click="handleSubmit"
          />
        </form>

        <br />
        <div class="group">
            <p>Are you a college representative? <a href="#"> Click Here</a></p>
        </div>
        <div class="group">
            <p>Have an account? Login<a href="#"> here</a></p>
        </div>
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
      phone: "",
      email: "",
      password: "",
      password2: "",
      category: "Student",
      loading: false
    };
  },
  methods: {
    handleSubmit(e) {
      this.loading = true;
      e.preventDefault();
      if (this.password == this.password2 && this.password.length > 0) {
        let url = "http://localhost:9000/users/register";
        this.$http
          .post(url, {
            phone: this.phone,
            email: this.email,
            password: this.password,
            category: this.category
          })
          .then(response => {
            this.$cookies.set("id", response.data.id);
            localStorage.setItem("e", this.email);
            window.location.href = location.protocol + '//' + location.host + '/login';
          })
          .catch(error => {
            Vue.$toast.open({
                message: 'Network Error! Pls try again later.',
                type: 'error',
                position: 'bottom-left'
              });
          })
          .finally(() => {
            this.loading = false;
          })
      } else {
        this.password = "";
        this.password2 = "";
        Vue.$toast.open({
                message: 'Passwords do not match!',
                type: 'error',
                position: 'bottom-left'
              });
      }
    }
  },
  components: {
    Navbar,
    Spinner
  }
};
</script>
<style scoped>
.e-signup-fields {
  align-content: center;
  align-items: center;
  width: 25vw;
  display: inline-block;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
}
.container {
  background-color: white;
  margin-top: 20vw;
  border-radius: 40px;
  box-shadow: black;
  height: 35vw;
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

.e-signup-page {
  font-family: "Merriweather", serif;
  background-color: #d4418e;
  background-image: linear-gradient(315deg, #d4418e 0%, #0652c5 74%);
  position: fixed;
  margin-top: -14vw;
  height: 100vw;
  width: 100vw;
}
.e-lhead {
  margin-top: 1vw;
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
.e-category-label {
  margin-top: 1vw;
}

form {
  width: 380px;
  margin: 1em auto;
}

.group {
  position: relative;
  margin-bottom: 22px;
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
