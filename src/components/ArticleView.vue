<template>
    <div class="wrapper">
        
        <ArticleCard
            v-for="post in posts"
            v-bind:key="post.id"
            :id="post.id"
            :title="post.title"
            :url="post.src"
            :content="post.content"
        />
        
    </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue"

export default {
    name: "ArticleView",
    components: {
        ArticleCard,
    },
    props:{
        posts: Object
    }
}
</script>

<style scoped>

.wrapper {
    position: relative;
    flex-grow: 1;
    background-color: transparent;
    display: flex;
    flex-flow: row wrap;
}
</style>
