const state = {
  list: [],
  currentUser: {}
}

const mutations = {
  SET_LIST (state, list) {
    state.list = list
  },

  UPDATE_USER (state, user) {
    let updatedUser = state.list.find(u => u.id === user.id)
    console.log('user', user)
    console.log('updated user', updatedUser)
    console.log(state.list)
    updatedUser.name = user.name
    updatedUser.email = user.email
  },

  ADD_USER (state, user) {
    state.list.push(user)
  },

  DELETE_USER (state, user) {
    let index = state.list.indexOf(user)
    state.list.splice(index, 1)
  },

  SET_CURRENT_USER (state, user) {
    state.currentUser = user
  }
}

const getters = {
  users: state => state.list,
  currentUser: state => state.currentUser
}

const actions = {
  setList: ({commit}, list) => {
    commit('SET_LIST', list)
  },

  updateUser: ({commit}, user) => {
    commit('UPDATE_USER', user)
  },

  addUser: ({commit}, user) => {
    commit('ADD_USER', user)
  },

  deleteUser: ({commit}, user) => {
    commit('DELETE_USER', user)
  },

  setCurrentUser: ({commit}, user) => {
    commit('SET_CURRENT_USER', user)
  }
}

export default {
  state, getters, actions, mutations
}
