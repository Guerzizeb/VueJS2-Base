import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/index'
import store from './store'

import App from './components/App'

Vue.use(VueResource)

new Vue({
  components: { App },
  router,
  store
}).$mount('#main')
