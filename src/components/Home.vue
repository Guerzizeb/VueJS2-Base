<template>
  <div class="container">

    <div class="jumbotron">
      <h1><i class="fa fa-book"></i> Welcome</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut fugit id illum, natus officiis quisquam! Ad assumenda cum dignissimos ducimus earum, error ex maxime nulla, quos sunt tenetur voluptatibus.</p>

      <p v-if="authUser">
        <router-link class="btn btn-info btn-lg" :to="{name: 'dashboard'}" role="button">
          <i class="fa fa-dashboard"></i> Go to dashboard
        </router-link>
      </p>
      <p v-else>
        <router-link class="btn btn-primary btn-lg" :to="{name: 'login'}" role="button">
          <i class="fa fa-lock"></i> Login
        </router-link> OR
        <router-link class="btn btn-info btn-lg" :to="{name: 'register'}" role="button">
          <i class="fa fa-edit"></i> Create an account
        </router-link>
      </p>
    </div>
    <ul>
      <li v-for="user in users">{{ user.name }}</li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem blanditiis culpa ipsa sit? A beatae corporis culpa dolor impedit minima minus nesciunt officia quae quibusdam, repellat sequi tempore, veritatis!
    </p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return { users: [] }
    },
    computed: {
      ...mapGetters([
        'authUser', 'users'
      ])
    }
  }
</script>
