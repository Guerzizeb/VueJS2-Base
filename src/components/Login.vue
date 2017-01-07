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
  import { apiDomain, getHeader } from './../config'
  import { authEmail, authPassword } from './../env'
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
          email: this.email,
          password: this.password
        }

        this.$http.post(apiDomain + '/login', data)
          .then(response => {
            console.log('user ', response)
            const authUser = {}
            authUser.access_token = response.data.token
            window.localStorage.setItem('authUser', JSON.stringify(authUser))

            this.$http.get(apiDomain + '/user', {headers: getHeader()})
              .then(response => {
                authUser.name = response.data.name
                authUser.email = response.data.email
                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                this.$store.dispatch('setAuthUser', authUser)
                this.$router.push({name: 'dashboard'})
              })
          }, error => {
            console.log(error)
          })
      }
    }
  }
</script>