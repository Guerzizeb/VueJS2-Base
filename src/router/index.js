import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',
  saveScrollPosition: true,
  linkActiveClass: 'is-active',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'login'})
    }
  }
  next()
})

export default router
