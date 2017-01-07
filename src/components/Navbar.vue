<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link :to="{name: 'home'}" class="navbar-brand" >
          <i class="fa fa-book"></i> ContactManager
        </router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><router-link :to="{name: 'about'}">About</router-link></li>
        </ul>

        <ul class="nav navbar-nav navbar-right" v-if="userStore.authUser == null || userStore.authUser.access_token === null">
          <li><router-link :to="{name: 'login'}" ><i class="fa fa-lock"></i> Login</router-link></li>
          <li><router-link :to="{name: 'register'}"><i class="fa fa-edit"></i> Register</router-link></li>
        </ul>

        <ul class="nav navbar-nav navbar-right" v-else>
          <li><router-link :to="{name: 'dashboard'}"><i class="fa fa-dashboard"></i> Dashboard</router-link></li>
          <li><a href="#" @click.prevent="logout">Logout ({{ userStore.authUser.name }})</a></li>
        </ul>

      </div>
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
