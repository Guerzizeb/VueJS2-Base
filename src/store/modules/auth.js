const state = {
  authUser: null
}

const mutations = {
  'SET_AUTH_USER' (state, userObj) {
    state.authUser = userObj
  },

  'CLEAR_AUTH_USER' (state) {
    state.authUser = null
  }
}

const actions = {
  setAuthUser: ({commit}, userObj) => {
    commit('SET_AUTH_USER', userObj)
  },

  clearAuthUser: ({commit}) => {
    commit('CLEAR_AUTH_USER')
  }
}

const getters = {
  authUser: state => state.authUser
}

export default {
  state, getters, actions, mutations
}
