<template>
  <section id="login">
  <div class="container">
      <div class="page-header">
        <h1><i class="fa fa-lock"></i> Login Form</h1>
      </div>

      <div class="panel panel-primary">
        <div class="panel-heading">Please authenticate your self</div>
        <div class="panel-body">
          <div class="alert alert-danger" role="alert" v-show="message">
            <strong>Error!</strong> {{ message }}
          </div>
          <form class="form-horizontal" @submit.prevent="login">
            <div class="form-group">
              <label for="email" class="col-sm-2 control-label">Email</label>
              <div class="col-sm-10">
                <input class="form-control" id="email" type="email" placeholder="Your email" v-model="email" required>
              </div>
            </div>
            <div class="form-group">
              <label for="password" class="col-sm-2 control-label">Password</label>
              <div class="col-sm-10">
                <input type="password" id="password" class="form-control" placeholder="Password" v-model="password" required>
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
  </section>
</template>

<script>
  import {authEmail, authPassword} from './../../env'
  import {apiDomain} from './../../config'
  export default {
    data () {
      return {
        email: authEmail,
        password: authPassword,
        message: ''
      }
    },

    methods: {

      login () {
        this.$http.post(apiDomain + '/login', {email: this.email, password: this.password})
          .then(response => {
            const authUser = {}
            authUser.access_token = response.data.token
            authUser.name = response.data.user.name
            authUser.email = response.data.user.email
            authUser.role = response.data.user.role
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
            this.$store.dispatch('setAuthUser', authUser)

            if (this.$route.params.redirect_to) {
              this.$router.push({name: this.$route.params.redirect_to.name})
            } else {
              this.$router.push({name: 'dashboard'})
            }
            window.localStorage.setItem('authUser', JSON.stringify(authUser))
          }, response => {
            this.message = response.data.message
          })
      }
    }
  }
</script>