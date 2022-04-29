<template>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
</template>

<script>
import navBar from "@/components/navBar";
import sideBar from "@/components/sideBar";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
export default {
    name: "HomePage",
    components: {navBar, sideBar}
}
</script>

<style scoped>

</style>