<template>
  <div class="panel panel-primary" id="add-user">
    <div class="panel-heading">
      <i class="fa fa-plus"></i> Add a new user
    </div>
    <div class="panel-body">
      <div class="alert alert-danger" v-show="message">
        {{ message }}
      </div>

      <form class="form-horizontal" @submit.prevent="save">
        <div class="form-group">
          <label for="name" class="col-sm-2 control-label">Name</label>
          <div class="col-sm-10">
            <input class="form-control" id="name" type="text" placeholder="Your name" v-model="user.name">
          </div>
        </div>
        <div class="form-group">
          <label for="email" class="col-sm-2 control-label">Email</label>
          <div class="col-sm-10">
            <input type="text" id="email" class="form-control" placeholder="Email" v-model="user.email">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        user: {name: '', email: '', password: ''},
        message: ''
      }
    }
  }
</script>
