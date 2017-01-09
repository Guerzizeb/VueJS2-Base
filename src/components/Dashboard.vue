<template>
  <div id="about" class="container">
    <div class="page-header">
      <h1><i class="fa fa-dashboard"></i> Dashboard</h1>
    </div>

    <div class="btn-group" role="group">
      <router-link class="btn btn-default" :to="{name: 'users'}"><i class="fa fa-list"></i> Users</router-link>
      <router-link class="btn btn-primary" :to="{name: 'add-user'}"><i class="fa fa-plus"></i> Add a new user</router-link>
    </div>
    <br><br>
    <ul>
      <li v-for="user in users">{{ user.name }}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        users: []
      }
    }
  }
</script>
