import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/index'
import store from './store'
import VueSweetAlert from 'vue-sweetalert'

Vue.use(VueResource)
Vue.use(VueSweetAlert)

import App from './components/App'

new Vue({
  components: { App },
  router,
  store
}).$mount('#main')
