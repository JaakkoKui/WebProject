<template>

    <div id="postBar">
        <button class="floatRight" aria-label='delete item' onClick='alert("You deleted the item!")' type='button'>X
        </button>
        <h1>{{ post.title }}</h1>
        <p>{{ shortPost }}</p>
        <div class="floatRight">
            <button class="like">
                <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
            </button>
            <button class="dislike">
                <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
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
    }
}
</script>

<style scoped>

</style>