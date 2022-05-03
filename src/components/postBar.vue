<template>
    <div id="postBar">
        <button id="deleteB" class="floatRight" aria-label='delete item' @click="deletePost" type='button'>X</button>
        <h1 @click="openPost">{{ post.title }}</h1>
        <p>{{ shortPost }}</p>
        <div class="floatRight">
            <button @click="likePost" class="like">👍
            </button>
            <button @click="dislikePost" class="dislike">👎
            </button>
        </div>
    </div>
</template>

<script>

export default {
    name: "postBar",
    props: ["post"],
    computed: {
        shortPost() {
            return this.post.content.substr(0, 50) + "..."
        }
    },
    methods: {
        openPost() {
            this.$router.push("/post/" + this.post.id);
        },
        likePost() {
            fetch("http://localhost:8081/api/posts/" + this.post.id + "/like", {
                method: 'POST', // or 'PUT'
            });
        },
        dislikePost() {
            fetch("http://localhost:8081/api/posts/" + this.post.id + "/dislike", {
                method: 'POST', // or 'PUT'
            });
        },
        deletePost() {
            fetch("http://localhost:8081/api/posts/" + this.post.id, {
                method: 'DELETE', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(res => res.json()).then((data) => {
                this.$emit('updatePosts', data);
            });
        }
    }
}
</script>

<style scoped>

#deleteB {
    background-color: lightblue;
    border: 1px solid darkgrey;
    border-radius: 5px;
    box-shadow: darkgray 1px 2px 3px;
}

button.like {
    width: 30px;
    height: 30px;
    margin: 0 auto;
    border-radius: 50%;
    color: rgba(0, 150, 136, 1);
    box-shadow: lightseagreen 1px 2px 3px;
    background-color: rgba(38, 166, 154, 0.3);
    border-color: rgba(0, 150, 136, 1);
    border-width: 1px;
    font-size: 15px;
}

button.dislike {
    width: 30px;
    height: 30px;
    margin: auto 5px auto 5px;
    box-shadow: lightcoral 1px 2px 3px;
    border-radius: 50%;
    color: rgba(255, 82, 82, 1);
    background-color: rgba(255, 138, 128, 0.3);
    border-color: rgba(255, 82, 82, 1);
    border-width: 1px;
    font-size: 15px;
}

#postBar {
    margin: auto 20px 20px 20px;
    padding: 20px 20px 40px 20px;
    border: solid 1px grey;
    border-radius: 20px;
    box-shadow: lightslategray 1px 2px 3px;
}
</style>