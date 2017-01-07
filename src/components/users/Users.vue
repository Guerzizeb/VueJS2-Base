<template>
  <div id="users">
    <div class="panel panel-default">
      <div class="panel-heading"><i class="fa fa-list"></i> Users List</div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>Name</th><th>Email</th><th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <router-link :to="{name: 'edit-user', params: { id: user.id }}"><i class="fa fa-edit"></i> Edit</router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import {apiDomain, getHeader} from './../../config'
  export default {
    data () {
      return {
        users: []
      }
    },
    methods: {
      update (user) {
        this.$router.push('/users/edit/' + user.id)
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
    }
  }
</script>
