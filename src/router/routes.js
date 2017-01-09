import Home from './../components/Home'
import About from './../components/About'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Dashboard from './../components/Dashboard'

import Users from './../components/users/Users'
import AddUser from './../components/users/Add-Inline'
import EditUser from './../components/users/Edit-Inline'

export default [
  {path: '/', component: Home, name: 'home'},
  {path: '/about', component: About, name: 'about'},
  {path: '/login', component: Login, name: 'login'},
  {path: '/register', component: Register, name: 'register'},
  {path: '/admin',
    component: Dashboard,
    name: 'dashboard',
    meta: {requiresAuth: true},
    children: [
      {path: 'users', name: 'users', component: Users, meta: {requiresAuth: true}},
      {path: 'users/add', name: 'user-add', component: AddUser, meta: {requiresAuth: true}},
      {path: 'users/edit/:id', name: 'user-edit', component: EditUser, meta: {requiresAuth: true}}
    ]
  }
]
