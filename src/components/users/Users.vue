<template>
  <div id="users" class="rows">
    <div class="col-md-7">
      <div class="panel panel-primary">
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

                <button @click="updateUser(user)" class="btn btn-info btn-xs"><i class="fa fa-edit"></i> Edit</button>
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
      </div>
    </div>

    <div class="col-md-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  import {apiDomain, getHeader} from './../../config'

  export default {

    data () {
      return {
        users: [],
        authUser: null
      }
    },

    methods: {
      updateUser (user) {
        this.$store.dispatch('setCurrentUser', user)
        this.$route.push({name: 'edit-user'})
      },

      deleteUser (user) {
        if (this.authUser.email !== user.email) {
          this.$http.delete(apiDomain + '/users/' + user.id, {headers: getHeader()})
            .then(response => {
              this.$store.dispatch('deleteUser', user)
              console.log(this.users)
            }, response => {
              console.log(response)
            })
        }
      }
    },

    computed: {

      ...mapState({
        authUser: state => state.auth.authUser
      }),

      ...mapGetters([
        'authUser', 'users'
      ])
    },

    mounted () {
      this.$http.get(apiDomain + '/users', {headers: getHeader()})
        .then(response => {
          this.$store.dispatch('setList', response.data.items)
        })
    }
  }
</script>
