<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './Navbar'
  import {apiDomain} from './../config'

  export default {
    components: {
      Navbar
    },
    data () {
      return {
        authUser: {}
      }
    },

    created () {
      console.log('Main App Component created!')
      let userObj = JSON.parse(window.localStorage.getItem('authUser'))
      if (userObj) {
        /*
        Refresh token
        */
        console.log('Main App Component > Refreshing token')
        this.$http.get(apiDomain + '/refresh-token', {headers: {Authorization: userObj.access_token}})
          .then(response => {
            let token = response.headers.get('Authorization')
            userObj.access_token = token.replace('Bearer ', '')
            window.localStorage.setItem('authUser', JSON.stringify(userObj))
            this.$store.dispatch('setAuthUser', userObj)
          }, response => {
            console.error(response)
          })
      } else {
        console.log('App > storage not contain token')
      }
    }
  }
</script>
