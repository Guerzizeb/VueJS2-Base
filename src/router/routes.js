import Home from './../components/Home'
import About from './../components/About'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import Dashboard from './../components/Dashboard'

import Users from './../components/users/Users'
import AddUser from './../components/users/Add'
import EditForm from './../components/users/Edit'

export default [
  {path: '/', component: Home, name: 'home'},
  {path: '/about', component: About, name: 'about'},
  {path: '/login', component: Login, name: 'login'},
  {path: '/register', component: Register, name: 'register'},
  {path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
    children: [
      {path: '/users', name: 'users', component: Users, meta: {requiresAuth: true}},
      {path: '/users/add', name: 'add-user', component: AddUser, meta: {requiresAuth: false}},
      {path: '/users/edit/:id', name: 'edit-user', component: EditForm, meta: {requiresAuth: true}}
    ]
  }
]
