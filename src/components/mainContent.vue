<template>
  <div id="mainContent">
    <div class="input-group">
      <div class="form-outline">
        <input v-model="searchWord" type="search" id="form1" class="form-control" placeholder="Search"/>
      </div>
    </div>
      <div class="noPosts" v-if="posts.length < 1"><h3>No posts yet. You can start by creating a post!</h3></div>
    <div v-for="post in searchedPosts" v-bind:key="post.id">
      <post-bar :post="post" @updatePosts="updatePosts"></post-bar>
    </div>
  </div>
</template>

<script>

export default {
  name: "mainContent",
  components: {postBar},
  data() {
    return {
      posts: [],
      searchWord: "",
    }
  },
  created() {
    fetch("http://localhost:8081/api/posts").then(data => data.json()).then((d) => {
      this.posts = d;
      console.log(d);
    })
  },
  computed: {
    searchedPosts() {
      return this.posts.filter(x =>
          x.content.toLowerCase().includes(this.searchWord.toLowerCase()) ||
          x.title.toLowerCase().includes(this.searchWord.toLowerCase()) ||
          this.searchWord === ""
      );
    },
  },
    methods: {
      updatePosts(newPosts) {
          this.posts = newPosts;
      }
    }
}
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import postBar from "@/components/postBar";
</script>

<style scoped>

#mainContent {
  background: lightgrey;
  width: auto;
  min-height: 85.3%;
  height: auto;
}

.noPosts {
    margin-left: 20px;
}

</style>