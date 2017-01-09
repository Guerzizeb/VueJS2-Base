import Vue from 'vue'
import Vuex from 'vuex'
/*
 import * as actions from './actions'
 import * as mutations from './mutations'
 */
import auth from './modules/auth'
import users from './modules/users'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth, users
  },
  strict: debug
})
