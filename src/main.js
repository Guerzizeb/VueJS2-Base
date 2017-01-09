import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/index'
import VueSweetAlert from 'vue-sweetalert'
import store from './store'

Vue.use(VueResource)
Vue.use(VueSweetAlert)

import App from './components/App'

Vue.http.interceptors.push((request, next) => {
  let authUser = JSON.parse(window.localStorage.getItem('authUser'))
  if (authUser) {
    request.headers.set('Authorization', 'Bearer ' + authUser.access_token)
    request.headers.set('Accept', 'application/json')
  }
  next()
})

new Vue({
  components: { App },
  router,
  store
}).$mount('#main')
