<template>
  <div id="register" class="container">
    <div class="page-header">
      <h1><i class="fa fa-edit"></i> Register a new user</h1>
    </div>
    <add-user></add-user>
  </div>
</template>

<script>
import AddUser from './../users/Add'
export default {
  components: {
    AddUser
  }
}
</script>
