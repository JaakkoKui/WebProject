<template>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
</template>

<script>
import NavBar from "@/components/navBar";
import SideBar from "@/components/sideBar";

export default {
    name: "PostPage",
    components: {SideBar, NavBar}
}
</script>

<style scoped>

</style>