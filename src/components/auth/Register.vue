<template>
  <div id="register" class="container">
    <div class="page-header">
      <h1><i class="fa fa-edit"></i> Register</h1>
    </div>

    <div class="panel panel-primary">
      <div class="panel-heading">Please fill the form</div>
      <div class="panel-body">
        <div class="alert alert-danger" role="alert" v-show="message">
          <strong>Error!</strong> {{ message }}
        </div>
        <form class="form-horizontal" @submit.prevent="register">
          <div class="form-group" :class="{'has-error': errors.name}">
            <label for="name" class="col-sm-2 control-label">Name</label>
            <div class="col-sm-10">
              <input class="form-control" id="name" type="text" placeholder="Your email" v-model="user.name" required>
              <span class="help-block" v-show="errors.name" v-for="error in errors.name">{{ error }}</span>
            </div>
          </div>
          <div class="form-group" :class="{'has-error': errors.email}">
            <label for="email" class="col-sm-2 control-label">Email</label>
            <div class="col-sm-10">
              <input class="form-control" id="email" type="email" placeholder="Your email" v-model="user.email" required>
              <span class="help-block" v-show="errors.email" v-for="error in errors.email">{{ error }}</span>
            </div>
          </div>
          <div class="form-group" :class="{'has-error': errors.password}">
            <label for="password" class="col-sm-2 control-label">Password</label>
            <div class="col-sm-10">
              <input type="password" id="password" class="form-control" placeholder="Password" v-model="user.password" required>
              <span class="help-block" v-show="errors.password" v-for="error in errors.password">{{ error }}</span>
            </div>
          </div>
          <div class="form-group" :class="{'has-error': errors.password || passwordConfirmError}">
            <label for="passwordConfirmation" class="col-sm-2 control-label">Password Confirmation</label>
            <div class="col-sm-10">
              <input type="password" id="passwordConfirmation" class="form-control" placeholder="Password" v-model="user.passwordConfirmation" required>
              <span class="help-block" v-show="passwordConfirmError">{{ passwordConfirmError }}</span>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {apiDomain} from './../../config'
export default {
  data () {
    return {
      user: {name: 'Karim Rouabah', email: 'karim@dim24.dz', password: '123456', passwordConfirmation: '123456'},
      errors: [],
      passwordConfirmError: '',
      message: ''
    }
  },
  methods: {
    register () {
      this.message = ''
      this.passwordConfirmError = ''
      if (this.user.password === this.user.passwordConfirmation) {
        this.$http.post(apiDomain + '/register', this.user)
          .then(response => {
            this.$router.push({name: 'login'})
          }, response => {
            this.message = response.data.item.message
            this.errors = response.data.item.form_validations
          })
      } else {
        this.passwordConfirmError = 'Please check password confirmation!'
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