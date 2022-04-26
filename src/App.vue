<template>
  <nav-bar></nav-bar>
  <post-bar></post-bar>
  <new-post></new-post>

</template>

<script>

import navBar from "@/components/navBar";
import postBar from "@/components/postBar";
import newPost from "@/components/newPost";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
  components: {navBar,postBar,newPost}
}
</script>

<style>
</style>
