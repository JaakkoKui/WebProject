<template>
<div id="mainContent">

  <div class="input-group">
    <div class="form-outline">
      <input type="search" id="form1" class="form-control" placeholder="Search"/>

    </div>
    <button type="button" class="btn btn-primary">
      <i class="fas fa-search"></i>
    </button>
  </div>
  <post-bar></post-bar>
  <post-bar></post-bar>
  <post-bar></post-bar>
  <post-bar></post-bar>
  <post-bar></post-bar>
  <post-bar></post-bar>
  <post-bar></post-bar>
  <post-bar></post-bar>

</div>
</template>

<script>

export default {
  name: "mainContent",
  components: {postBar}

}
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import postBar from "@/components/postBar";
</script>

<style scoped>

</style>