<template>
  <side-bar active-index="2"></side-bar>
  <nav-bar></nav-bar>
  <div class="content text">
    <h1>Tekijät:</h1>
    <h2>Jetro Karjalainen</h2>
    <h2>Jaakko Kuivasniemi</h2>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import SideBar from "@/components/sideBar";

export default {
  name: "AboutPage",
  components: {SideBar, NavBar},
  data() {
    return {
      post: {},
      comment: ""
    }
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
}

.text {
  font-family: "Agency FB", Serif;
  text-align: center;
  margin-top: 10%;
}
</style>