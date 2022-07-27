<template>
    <div class="card">
        <img :src="url" class="article-img" />
        <div class="shadow"></div>
        <div class="text">
            {{ title }}
        </div>
        <div class="details">{{ content }}</div>
        <div class="link">
            <router-link class="linktext" :to="`article/${id}`">Read More</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "ArticleCard",
    props: {
        id: Number,
        title: String,
        url: String,
        content: String,
    },
};
</script>

<style scoped>
* {
    /* border: 1px solid red; */
    color: #fafafa;
    box-sizing: border-box;
    font-family: "Playfair Display", serif;
}
a{
    text-decoration: none;
}
.card {
    margin: 20px 0px 0px 20px;
    width: 200px;
    height: 300px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.489);
    cursor: pointer;
}
.article-img {
    height: inherit;
    filter: grayscale(0);
    z-index: 0;
    transition: all 0.2s ease-in-out;
}
.shadow {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    box-shadow: inset 0px -150px 50px -50px rgba(0, 0, 0, 0.666);
    transition: all 0.2s ease-in-out;
}
.text {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: transparent;
    padding: 20px;
    display: flex;

    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    z-index: 2;
    transition: all 0.3s ease-in-out;
}
.details {
    position: absolute;
    padding: 20px;
    bottom: -100%;
    left: 0;
    z-index: 2;
    background-color: transparent;
    font-size: 16px;
    font-weight: 400;
    overflow: hidden;

    /* left: 50%;
    transform: translateX(-50%); */

    margin-top: 20px;
    text-align: center;
    transition: all 0.4s ease-in-out;
}
.link {
    position: absolute;
    bottom: -150%;

    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 2;
    background-color: transparent;
    font-size: 12px;

    border: 1px solid #fafafa;
    transition: bottom 0.4s ease-in-out;

    user-select: none;
}
.linktext{
    width: 100%;
    height: 100%;
}
.link:hover  {
    background-color: #fafafa;
}
.link:hover > a {
    color: #000000;
}
.card:hover > .text {
    bottom: 60%;
}
.card:hover > .details {
    bottom: 15%;
}
.card:hover > .shadow {
    box-shadow: inset 0px -300px 100px -50px rgba(0, 0, 0, 0.666);
}
.card:hover > .article-img {
    filter: grayscale(0.3);
}
.card:hover > .link {
    bottom: 6%;
}
</style>
