<template>
  <div id="register" class="container">
    <div class="page-header">
      <h1><i class="fa fa-edit"></i> Register</h1>
    </div>

    <section>
      <form class="form-horizontal" @submit.prevent="register">
        <div class="form-group">
          <label for="name" class="col-sm-2 control-label">Name</label>
          <div class="col-sm-10">
            <input class="form-control" id="name" type="text" placeholder="Your email" v-model="user.name">
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input class="form-control" id="email" type="email" placeholder="Your email" v-model="user.email">
          </div>
        </div>
        <div class="form-group">
          <label for="password" class="col-sm-2 control-label">Password</label>
          <div class="col-sm-10">
            <input type="password" id="password" class="form-control" placeholder="Password" v-model="user.password">
          </div>
        </div>
        <div class="form-group">
          <label for="passwordConfirmation" class="col-sm-2 control-label">Password Confirmation</label>
          <div class="col-sm-10">
            <input type="password" id="passwordConfirmation" class="form-control" placeholder="Password" v-model="user.passwordConfirmation">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
      <p id="error">
        {{ message }}
      </p>
    </section>
  </div>
</template>

<script>
import {apiDomain} from './../../config'
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