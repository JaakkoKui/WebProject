<template>
  <nav-bar></nav-bar>
  <side-bar></side-bar>
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
.text{
  font-family: "Agency FB", Serif, "Comic Sans MS";
  text-align: center;
  margin-top: 10%;


}
</style>