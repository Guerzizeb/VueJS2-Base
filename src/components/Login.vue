<template>
  <div id="login">
    <section class="hero is-danger">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Login
          </h1>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <label class="label">Name</label>
            <p class="control">
              <input class="input" type="email" placeholder="Your email" v-model="email">
            </p>
            <label class="label">Username</label>
            <p class="control has-icon has-icon-right">
              <input class="input" type="password" placeholder="Your password" v-model="password">
            </p>
            <p class="control">
              <button class="button is-primary" @click="login">Login</button>
            </p>
            <pre>
              {{ message }}
            </pre>
      </div>
    </section>
  </div>
</template>

<script>
  import { apiDomain, getHeader } from './../config.js'
  import { clientId, clientSecret, authEmail, authPassword } from './../env.js'
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
        const data = {
          grant_type: 'password',
          client_id: clientId,
          client_secret: clientSecret,
          username: this.email,
          password: this.password,
          scope: ''
        }

        this.$http.post(apiDomain + '/oauth/token', data)
          .then(response => {
            if (response.status === 200) {
              const authUser = {}
              authUser.access_token = response.data.access_token
              authUser.refresh_token = response.data.refresh_token
              window.localStorage.setItem('authUser', JSON.stringify(authUser))
              this.$http.get(apiDomain + '/api/user', {headers: getHeader()})
                .then(response => {
                  authUser.name = response.data.name
                  authUser.email = response.data.email
                  window.localStorage.setItem('authUser', JSON.stringify(authUser))
                  this.$store.dispatch('setAuthUser', authUser)
                  this.$router.push({name: 'dashboard'})
                })
            }
          }, response => {
            this.message = response.body.error
          })
      }
    }
  }
</script>