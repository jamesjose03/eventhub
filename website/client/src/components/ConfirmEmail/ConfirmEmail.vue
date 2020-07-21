<template>
    <div>
       <div v-if="loading">
            <Spinner />
        </div>
  <div class="e-login-page" v-else>
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
          class="button e-btn-1"
          @click="handleSubmit"
        />
      </form> 
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
        handleSubmit() {
            this.loading = true;
            let url = this.$serverURLI + "/users/confirmEmail";
            this.$http.post({
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
}
</script>