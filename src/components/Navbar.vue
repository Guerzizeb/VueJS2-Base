<template>
  <nav class="nav">
    <div class="nav-left">
      <router-link :to="{name: 'home'}" class="nav-item is-brand" >
        <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo">
      </router-link>
    </div>

    <div class="nav-center">

      <a class="nav-item" target="_blank" href="https://www.github.com/guerzizeb">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
      </a>

      <a class="nav-item" target="_blank" href="https://www.twitter.com/guerzizeb">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
      </a>
    </div>

    <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

    <div class="nav-right nav-menu">
      <router-link :to="{name: 'home'}" class="nav-item is-tab">Home</router-link>
      <router-link :to="{name: 'about'}" class="nav-item is-tab">About</router-link>

      <span class="nav-item" v-if="userStore.authUser == null || userStore.authUser.access_token === null">
          <router-link :to="{name: 'login'}" class="button">
              <span class="icon">
              <i class="fa fa-lock"></i>
            </span>
            <span>Login</span>
          </router-link>

          <router-link :to="{name: 'register'}" class="button is-primary">
            <span class="icon">
              <i class="fa fa-edit"></i>
            </span>
            <span>Register</span>
          </router-link>
        </span>
        <span class="nav-item" v-else>
          <a class="button is-danger" href="#" @click.prevent="logout">
            <span class="icon">
              <i class="fa fa-lock"></i>
            </span>
            <span>Logout</span>
          </a>
        </span>
    </div>
  </nav>
</template>

<script>
  import {mapState} from 'vuex'

  export default{
    methods: {
      logout () {
        window.localStorage.removeItem('authUser')
        this.$store.dispatch('clearAuthUser')
        this.$router.push('/')
      }
    },

    computed: {
      ...mapState({
        userStore: state => state.userStore
      })
    }
  }
</script>
