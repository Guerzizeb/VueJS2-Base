<template>
  <section id="about">
    <div class="container">
      <div class="page-header">
        <h1><i class="fa fa-dashboard"></i> Dashboard</h1>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="list-group">
            <router-link class="list-group-item" :to="{name: 'users'}"><i class="fa fa-users"></i> Users</router-link>
            <router-link class="list-group-item" :to="{name: 'user-add'}"><i class="fa fa-user"></i> Add a new user</router-link>
          </div>
        </div>

        <div class="col-md-9">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
  }
</script>
