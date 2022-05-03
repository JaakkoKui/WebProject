<template>

    <side-bar></side-bar>
  <nav-bar></nav-bar>
    <div class="content">
        <h2 class="littleMargin">Create a post</h2>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text tinyMarginRight" id="inputGroup-sizing-default">Title</span>
            </div>
            <input v-model="title" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text tinyMarginRight">Text</span>
            </div>
            <textarea v-model="content" class="form-control" aria-label="With textarea"></textarea>
        </div>
        <button @click="addPost" type="button" class="btn btn-primary littleMargin floatRight">Post</button>

    </div>
</template>

<script>
import navBar from "@/components/navBar";
import sideBar from "@/components/sideBar";

export default {
    name: "NewPostPage",
    components: {navBar, sideBar},
    data() {
        return {
            title: "",
            content: ""
        }
    },
    methods: {
        addPost() {
            if(this.title === "" && this.content === "") {
                alert("You need to fill both fields");
                return;
            }
            fetch('http://localhost:8081/api/posts/', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({title: this.title, content: this.content}),
            }).then(res => res.json()).then(() => {
                this.$router.push("/")
            })
        }
    }
}
</script>

<style scoped>

.littleMargin{
margin: 20px 30px 20px 20px
}

.tinyMarginRight{
  margin-right: 5px;
}
</style>