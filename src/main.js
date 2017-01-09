import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/index'
import VueSweetAlert from 'vue-sweetalert'
import store from './store'

Vue.use(VueResource)
Vue.use(VueSweetAlert)

import App from './components/App'

new Vue({
  components: { App },
  router,
  store
}).$mount('#main')
