<template>
    <div class="sidebar">
        <a v-bind:class="{active: getActive(0)}" class="topMarg" href="/">Home</a>
        <a v-bind:class="{active: getActive(1)}" href="/newpost">New Post</a>
        <a v-bind:class="{active: getActive(2)}" href="/about">About</a>
    </div>
</template>

<script>
export default {
    name: "sideBar",
    props: ["activeIndex"],
    methods: {
        getActive(index) {
            console.log(index);
            return index == this.activeIndex;
        }
    }
}
</script>

<style scoped>
.sidebar {
    padding-top: 60px;
    width: 15%;
    background: rgb(15, 154, 220);
    background: linear-gradient(90deg, rgba(15, 154, 220, 0.7799092839273174) 0%, rgba(134, 194, 230, 1) 100%);
    position: fixed;
    height: 100vh;
    border: solid 1px black;
}

.sidebar a {
    display: block;
    color: black;
    padding: 16px;
    text-decoration: none;
}

.sidebar a.active {
    background: rgb(0, 58, 86);
    background: linear-gradient(90deg, rgba(0, 58, 86, 0.7799092839273174) 0%, rgba(18, 150, 230, 1) 100%);
    color: white;
}

.sidebar a:hover {
    background: rgb(0, 88, 129);
    background: linear-gradient(90deg, rgba(0, 88, 129, 0.7799092839273174) 0%, rgba(72, 172, 232, 1) 100%);
    color: white;
}

.sidebar a:hover:not(.active) {
    background-color: lightblue;
    color: black;
}

@media screen and (max-width: 700px) {
    .sidebar {
        padding: 0px;
        width: 100%;
        height: auto;
        position: relative;
    }

    .sidebar a {
        float: none;
    }

    div.content {
        margin-left: 0;
    }

}

@media screen and (max-width: 400px) {
    .sidebar a {
        text-align: center;
        float: none;
    }
}

</style>