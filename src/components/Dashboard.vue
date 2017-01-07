<template>
  <div id="dashboard">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Dashboard
          </h1>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, ex, doloremque. Dolore minima illum magnam quisquam, mollitia, consequuntur dignissimos reiciendis soluta vel quidem fuga voluptatem nemo numquam, veniam molestiae quod.</p>
        <button @click="postData" class="button">Test Post Event</button>
        <p>Message : {{ message }}</p>
        <ul>
          <li v-for="user in users">{{ user.name }} {{ user.email }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import {apiDomain, getHeader} from './../config'
  export default {
    data () {
      return {
        users: [],
        message: ''
      }
    },
    mounted () {
      this.$http.get(apiDomain + '/users', {headers: getHeader()})
          .then(response => {
            this.users = response.data.users
            this.message = response.data.message
          }, error => {
            console.log('Dashboard > error', error)
          })
    },
    methods: {
      postData () {
        this.$http.get(apiDomain + '/users', {headers: getHeader()})
          .then(response => {
            this.users = response.data.users
            this.message = response.data.message
          }, error => {
            console.log('Dashboard > error', error)
          })
      }
    }
  }
</script>
