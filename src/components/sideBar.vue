<template>
  <!-- The sidebar -->
  <div class="sidebar">
    <a class="active" href="#home">Home</a>
    <a href="#news">New Post</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <div class="content">
    <main-content></main-content>
  </div>
</template>

<script>
import MainContent from "@/components/mainContent";
export default {
  name: "sideBar",
  components: {MainContent}
}
</script>

<style scoped>

</style>