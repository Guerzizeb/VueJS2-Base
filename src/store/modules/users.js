import Vue from 'vue'
import { apiDomain, getHeader } from './../../config'

const state = {
  users: []
}

const mutations = {
  FETCH_USER (state) {
    Vue.http.get(apiDomain + '/users', {headers: getHeader()})
      .then(response => {
        state.users = response.data.items
      }, response => {
        console.log('Users > error', response)
      })
  },

  ADD_USER (state, user) {
    Vue.http.post(apiDomain + '/register', user)
      .then(response => {
        state.users.push(user)
      })
  },

  UPDATE_USER (steta, user) {
    Vue.http.put(apiDomain + '/users/' + this.user.id, this.user, {headers: getHeader()})
      .then(response => {
        let updatedUser = response.data.item
        let u = state.users.find((u) => u.id === user.id)
        u.name = updatedUser.name
        u.email = updatedUser.email
      })
  },

  DELETE_USER (state, user) {
    Vue.http.delete(apiDomain + '/users/' + user.id, {headers: getHeader()})
      .then(response => {
        let index = state.users.indexOf(user)
        state.users.splice(index, 1)
      })
  }
}

export default {
  state, mutations
}
