import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router/index'

Vue.use(VueResource)

new Vue({
  router,
  template: `
  <div>
    <nav class="nav">
      <div class="nav-left">
        <a class="nav-item is-brand" href="#">
          <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo">
        </a>
      </div>
  
      <div class="nav-center">
        
        <a class="nav-item" href="#">
          <span class="icon">
            <i class="fa fa-github"></i>
          </span>
        </a>

        <a class="nav-item" href="#">
          <span class="icon">
            <i class="fa fa-twitter"></i>
          </span>
        </a>
      </div>

      <span class="nav-toggle">
        <span></span>
        <span></span>
        <span></span>
      </span>

      <div class="nav-right nav-menu">
        <router-link to="/home" class="nav-item is-tab">Home</router-link>
        <router-link to="/about" class="nav-item is-tab">About</router-link>
  
        <span class="nav-item">
          <router-link to="/login" class="button">
              <span class="icon">
              <i class="fa fa-lock"></i>
            </span>
            <span>Login</span>
          </router-link>

          <router-link to="/register" class="button is-primary">
            <span class="icon">
              <i class="fa fa-edit"></i>
            </span>
            <span>Register</span>
          </router-link>
        </span>

      </div>
    </nav>

    <router-view></router-view>

    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="http://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/jgthms/bulma">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
  `
}).$mount('#app')
