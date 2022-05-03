<template>
    <side-bar></side-bar>
    <nav-bar></nav-bar>

    <div class="content marginLeft">
        <div class="postContent">
            <h2>{{ this.post.title }}</h2>
            <p>{{ this.post.content }}</p>
            <p>Likes: {{ this.post.likes }}</p>
            <p>Dislikes: {{ this.post.dislikes }}</p>
            <hr>
            <h2>Leave a comment: </h2>
            <textarea v-model="comment"></textarea>
            <button type="button" class="btn btn-primary btnMarginRight" @click="postComment">Post comment</button>
            <hr>
            <h2>Comments</h2>
            <div class="commentBox" v-for="comment in this.post.comments" v-bind:key="comment.id">
                <p>{{ comment.content }}</p>
                <span>likes: {{ comment.likes }}
                dislikes: {{ comment.dislikes }}</span>
                <span class="floatRight">
                    <button @click="likeComment(comment.id)" class="like">👍</button>
                    <button @click="dislikeComment(comment.id)" class="dislike">👎</button>
                </span>
            </div>
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
        });
    },
    methods: {
        postComment() {
            console.log("postComment")
            if (this.comment === "") {
                alert("You need to fill all fields")
                return;
            }
            fetch('http://localhost:8081/api/posts/' + this.$route.params.id + "/comment", {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({comment: this.comment}),
            }).then(res => res.json()).then(data => {
                this.post = data;
                this.comment = "";
            })
        },
        likeComment(id) {
            fetch('http://localhost:8081/api/posts/comment/' + id +  '/like', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({comment: this.comment}),
            }).then(res => res.json()).then(data => {
                this.post.comments.find(comment => comment.id == id).likes = data.likes;
            })
        },
        dislikeComment(id) {
            fetch('http://localhost:8081/api/posts/comment/' + id +  '/dislike', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({comment: this.comment}),
            }).then(res => res.json()).then(data => {
                this.post.comments.find(comment => comment.id == id).dislikes = data.dislikes;
            })
        }
    }
}
</script>

<style scoped>
textarea {
    width: 100%;
}

.commentBox {
    margin: 2.5% 2.5% 2.5% 2.5%;
    padding: 8px 8px 8px 8px;
    border: dotted 1px black;
    border-radius: 5px;
}

.marginLeft {
    padding: 3% 3%;
    margin-left: 500px;
}

@media screen and (max-width: 700px) {
    .postContent {
        width: 100%;
        float: right;
    }
}
</style>