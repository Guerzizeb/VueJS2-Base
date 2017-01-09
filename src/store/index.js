import Vue from 'vue'
import Vuex from 'vuex'
/*
 import * as actions from './actions'
 import * as mutations from './mutations'
 */
import userStore from './modules/auth'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    userStore
  },
  strict: debug
})
