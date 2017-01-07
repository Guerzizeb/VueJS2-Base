<template>
  <div id="about">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            About
          </h1>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, ex, doloremque. Dolore minima illum magnam quisquam, mollitia, consequuntur dignissimos reiciendis soluta vel quidem fuga voluptatem nemo numquam, veniam molestiae quod.</p>
        <button @click="postData" class="button">Test Post Event</button>
      </div>
    </section>
  </div>
</template>

<script>
  import {apiDomain, getHeader} from './../config'

  export default {
    methods: {
      postData () {
        this.$http.post(apiDomain + '/user', {headers: getHeader()})
          .then(response => {
            console.log('Data is here', response)
          })
      }
    }
  }
</script>