<template>
  <div class="panel panel-info" id="add-user">

    <div class="panel-heading">Add a new user</div>

    <div class="panel-body">

      <div :class="cssMessage" role="alert" v-show="message">
        {{ message }}
      </div>

      <p>
        Please fill the form
      </p>

      <form class="form-horizontal" @submit.prevent="register">

        <div class="form-group" :class="{'has-error': errors.name}">
          <label for="name" class="col-sm-2 control-label">Name</label>
          <div class="col-sm-10">
            <input class="form-control" id="name" type="text" placeholder="Your name" v-model="user.name" required>
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

        <div class="form-group" :class="{'has-error': errors.password || password_confirmation_error}">
          <label for="password_confirmation" class="col-sm-2 control-label">Password Confirmation</label>
          <div class="col-sm-10">
            <input type="password" id="password_confirmation" class="form-control" placeholder="Password" v-model="user.password_confirmation" required>
            <span class="help-block" v-show="password_confirmation_error">{{ password_confirmation_error }}</span>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </div>

      </form>

    </div>

  </div>
</template>

<script>
  import {apiDomain} from './../../config'
  export default{
    data () {
      return {
        user: {name: '', email: '', password: '', password_confirmation: ''},
        errors: [],
        message: '',
        password_confirmation_error: '',
        cssMessage: ''
      }
    },

    methods: {
      register () {
        this.message = ''
        this.password_confirmation_error = ''
        if (this.user.password === this.user.password_confirmation) {
          this.$http.post(apiDomain + '/register', this.user)
            .then(response => {
              this.errors = []
              this.message = 'User created successfully'
              this.cssMessage = 'alert alert-success'
              this.user.name = ''
              this.user.email = ''
              this.user.password = ''
              this.user.password_confirmation = ''
              this.$swal('User created successfully!')
              this.$store.dispatch('addUser', response.data.item)
            }, response => {
              this.cssMessage = 'alert alert-danger'
              this.message = response.data.message
              this.errors = response.data.item.form_validations
            })
        } else {
          this.cssMessage = 'alert alert-danger'
          this.password_confirmation_error = 'Please check password confirmation!'
        }
      }
    }
  }
</script>
