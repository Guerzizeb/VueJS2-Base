<template>
  <div class="panel panel-primary" id="edit-user">
    <div class="panel-heading">
      <i class="fa fa-edit"></i> User edition
    </div>
    <div class="panel-body">
      <div class="alert alert-danger" v-show="message">
        {{ message }}
      </div>

      <form class="form-horizontal" @submit.prevent="save">
        <div class="form-group">
          <label class="col-sm-2 control-label">Id</label>
          <div class="col-sm-10">
            <p class="form-control-static"><strong>{{ user.id }}</strong></p>
          </div>
        </div>
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
  import { apiDomain, getHeader } from './../../config'
  export default{
    data () {
      return {
        user: {name: '', email: ''},
        message: ''
      }
    },
    methods: {
      save () {
        console.log('save', this.user)
      }
    },
    created () {
      let id = this.$route.params.id
      this.$http.get(apiDomain + '/users/' + id, { headers: getHeader() })
        .then(response => {
          this.user = response.data.item
        }, response => {
          console.log('User Edit > error', response)
        })
    }
  }
</script>
