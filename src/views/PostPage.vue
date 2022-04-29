<template>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <div class="content">
        <h2>{{ this.post.title }}</h2>
        <p>{{ this.post.content }}</p>
        <hr>
        <h2>Leave a comment: </h2>
        <textarea v-model="comment"></textarea>
        <button type="button" class="btn btn-primary" @click="postComment">Post comment</button>
        <hr>
        <h2>Comments</h2>
        <div v-for="comment in this.post.comments" v-bind:key="comment.id">
            <p>{{comment.content}}</p>
            <span>likes: {{comment.likes}}
                dislikes: {{comment.dislikes}}</span>
        </div>
    </div>

</template>

<script>
import NavBar from "@/components/navBar";
import SideBar from "@/components/sideBar";

export default {
    name: "PostPage",
    components: {SideBar, NavBar},
    data() {
        return {
            post: {},
            comment: ""
        }
    },
    created() {
        fetch("http://localhost:8081/api/posts/" + this.$route.params.id).then(res => res.json()).then(data => {
            this.post = data;
            console.log(this.post);
        });
    },
    methods: {
        postComment() {
            console.log("postComment")
            fetch('http://localhost:8081/api/posts/' + this.$route.params.id + "/comment", {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({comment: this.comment}),
            }).then(res => res.json()).then(data => {
                this.post = data;
                this.comment = "";
                console.log(this.post);
            })
        }
    }
}
</script>

<style scoped>
textarea {
    width: 100%;
}
</style>