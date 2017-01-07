<template>
  <div id="register">
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Register
          </h1>
        </div>
      </div>
    </section>
    
    <section>
      <div class="container">
        
        <label class="label">Name</label>
        <p class="control">
          <input class="input" type="text" placeholder="Your name" v-model="user.name">
        </p>
        
        <label class="label">Email</label>
        <p class="control">
          <input class="input" type="email" placeholder="Your email" v-model="user.email">
        </p>
        
        <label class="label">Password</label>
        <p class="control has-icon has-icon-right">
          <input class="input" type="password" placeholder="Your password" v-model="user.password">
        </p>
        
        <label class="label">Password Confirmation</label>
        <p class="control has-icon has-icon-right">
          <input class="input" type="password" placeholder="Repear password" v-model="user.passwordConfirmation">
        </p>

        <p class="control">
          <button class="button is-primary" @click="register">Register</button>
        </p>
        
        <p id="error">
          {{ message }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import {apiDomain} from './../config'
export default {
  data () {
    return {
      user: {name: 'Karim Rouabah', email: 'karim@dim24.dz', password: '123456', passwordConfirmation: '123456'},
      message: ''
    }
  },
  methods: {
    register () {
      if (this.user.password === this.user.passwordConfirmation) {
        this.$http.post(apiDomain + '/register', this.user)
          .then(response => {
            this.message = response.data.message
          }, error => {
            this.message = error.data.message
          })
      } else {
        this.message = 'Please check password confirmation!'
      }
    }
  }
}
</script>

<style>
  #error {
    font-color: red;
  }
</style>