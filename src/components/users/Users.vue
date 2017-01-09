<template>
  <div class="panel panel-primary" id="users">
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
        <td><a :href="'mailto:' + user.email">{{ user.email }}</a></td>
        <td>

          <div class="btn-group" role="group">

            <router-link :to="{name: 'edit-user', params: { id: user.id }}" class="btn btn-info btn-xs"><i class="fa fa-edit"></i> Edit</router-link>

            <button @click="deleteUser(user)" class="btn btn-danger btn-xs" v-if="authUser.email !== user.email">
              <i class="fa fa-trash"></i> Delete
            </button>

            <button v-else title="Cannot remove yoursef!" class="btn btn-warning btn-xs">
              <i class="fa fa-exclamation-triangle" ></i>
            </button>

          </div>

        </td>
      </tr>
      </tbody>
    </table>
    {{ message }}
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {apiDomain, getHeader} from './../../config'

  export default {

    data () {
      return {
        users: [],
        message: ''
      }
    },

    methods: {
      deleteUser (user) {
        if (this.userStore.authUser.email !== user.email) {
          this.$http.delete(apiDomain + '/users/' + user.id, {headers: getHeader()})
            .then(response => {
              this.message = response.data.message
              let index = this.users.indexOf(user)
              this.users.splice(index, 1)
              console.log(this.users)
            }, response => {
              console.log(response)
            })
        }
      }
    },

    mounted () {
      this.$http.get(apiDomain + '/users', {headers: getHeader()})
          .then(response => {
            this.users = response.data.items
            this.message = response.data.message
          }, response => {
            console.log('Users > error', response)
          })
    },

    computed: {
      ...mapState({
        authUser: state => state.userStore.authUser
      })
    }
  }
</script>
