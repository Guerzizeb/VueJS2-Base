<template>
  <form @submit.prevent="updateUser">
    <div class="panel panel-default" id="edit-user">
      <div class="panel-heading">
        <i class="fa fa-edit"></i> User edit
      </div>
      <div class="panel-body">
        <div :class="cssMessage" v-show="message">
          {{ message }}
        </div>
        <p>
          Please fill the form bellow:
        </p>

        <div class="form-group" :class="{'has-error': errors.name}">
          <input class="form-control" id="name" type="text" placeholder="Your name" v-model="user.name" required>
          <span class="help-block" v-show="errors.name" v-for="error in errors.name">{{ error }}</span>
        </div>

        <div class="form-group" :class="{'has-error': errors.email}">
          <input class="form-control" id="email" type="email" placeholder="Your email" v-model="user.email" required>
          <span class="help-block" v-show="errors.email" v-for="error in errors.email">{{ error }}</span>
        </div>

        <div class="form-group" :class="{'has-error': errors.password}" v-if="showPasswordField">
          <input type="password" id="password" class="form-control" placeholder="Password" v-model="user.password">
          <span class="help-block" v-show="errors.password" v-for="error in errors.password">{{ error }}</span>
        </div>

        <div class="form-group" :class="{'has-error': errors.password || password_confirmation_error}" v-if="showPasswordField">
          <input type="password" id="password_confirmation" class="form-control" placeholder="Password" v-model="user.password_confirmation">
          <span class="help-block" v-show="password_confirmation_error">{{ password_confirmation_error }}</span>
        </div>

      </div>

      <div class="panel-footer">
        <button type="submit" class="btn btn-primary">Register</button>
        <a href="#" @click.prevent="showPasswordField = true" v-if="!showPasswordField">Reset password</a>
      </div>
    </div>
  </form>
</template>

<script>
  import {apiDomain} from './../../config'
  export default{
    data () {
      return {
        user: {},
        errors: [],
        message: '',
        password_confirmation_error: '',
        cssMessage: '',
        showPasswordField: false
      }
    },
    methods: {
      updateUser () {
        this.message = ''
        this.password_confirmation_error = ''
        if (this.user.password === this.user.password_confirmation) {
          this.$http.put(apiDomain + '/users/' + this.user.id, this.user)
            .then(response => {
              this.errors = []
              this.cssMessage = 'alert alert-success'
              this.message = 'User updated successfully'
              this.user.password = ''
              this.user.password_confirmation = ''
              this.$swal(this.message)
              this.$store.dispatch('updateUser', this.user)
            }, response => {
              this.cssMessage = 'alert alert-danger'
              this.message = response.data.message
              this.errors = response.data.form_validations
            })
        } else {
          this.cssMessage = 'alert alert-danger'
          this.password_confirmation_error = 'Please check password confirmation!'
        }
      }
    },
    mounted () {
      let id = this.$route.params.id
      this.$http.get(apiDomain + '/users/' + id)
        .then(response => {
          this.user = response.data.item
        }, response => {
          console.log('User Edit > error', response)
        })
    }
  }
</script>
