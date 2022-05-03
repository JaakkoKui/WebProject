<template>
    <side-bar active-index="0"></side-bar>
    <nav-bar></nav-bar>
    <div class="content">
        <main-content></main-content>
    </div>
</template>

<script>
import navBar from "@/components/navBar";
import sideBar from "@/components/sideBar";
import mainContent from "@/components/mainContent";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default {
    name: "HomePage",
    components: {navBar, sideBar, mainContent}
}
</script>

<style scoped>

</style>