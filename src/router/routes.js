import Home from './../components/Home'
import About from './../components/About'
import Login from './../components/Login'
import Register from './../components/Register'
import Dashboard from './../components/Dashboard'

export default [
  {path: '/home', component: Home, name: 'home'},
  {path: '/about', component: About, name: 'about'},
  {path: '/login', component: Login, name: 'login'},
  {path: '/register', component: Register, name: 'register'},
  {path: '/dashboard', component: Dashboard, name: 'dashboard', meta: {requiresAuth: true}}
]
