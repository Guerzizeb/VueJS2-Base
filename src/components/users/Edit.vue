<template>
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
      <form class="form-horizontal" @submit.prevent="updateUser">

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
            <input type="password" id="password" class="form-control" placeholder="Password" v-model="user.password">
            <span class="help-block" v-show="errors.password" v-for="error in errors.password">{{ error }}</span>
          </div>
        </div>

        <div class="form-group" :class="{'has-error': errors.password || password_confirmation_error}">
          <label for="password_confirmation" class="col-sm-2 control-label">Password Confirmation</label>
          <div class="col-sm-10">
            <input type="password" id="password_confirmation" class="form-control" placeholder="Password" v-model="user.password_confirmation">
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
  import {apiDomain, getHeader} from './../../config'
  import {mapGetters} from 'vuex'
  export default{
    data () {
      return {
        user: {},
        errors: [],
        message: '',
        password_confirmation_error: '',
        cssMessage: ''
      }
    },
    methods: {
      updateUser () {
        this.message = ''
        this.password_confirmation_error = ''
        if (this.user.password === this.user.password_confirmation) {
          this.$http.put(apiDomain + '/users/' + this.user.id, this.user, {headers: getHeader()})
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
    created () {
      let id = this.$route.params.id
      this.$http.get(apiDomain + '/users/' + id, { headers: getHeader() })
        .then(response => {
          this.user = response.data.item
        }, response => {
          console.log('User Edit > error', response)
        })
    },
    computed: {
      ...mapGetters({
        user: 'currentUser'
      })
    }

  }
</script>
