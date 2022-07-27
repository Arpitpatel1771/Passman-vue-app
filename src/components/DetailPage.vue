<template>
    <div class="wrapper">
        
        <div class="title">
            <img :src="postData.src" alt="No Image for you" class="bkground"/>
            <span class="titletext"> {{ postData.title }}</span>
        </div>
        <div class="article">
            {{ postData.article}}
        </div>
    </div>
</template>

<script>
export default {
    name: "DetailPage",
    data: function () {
        return {
            postData: {},
        };
    },
    props: {
        id: String,
        posts: Object,
    },
    methods: {
        getData() {
            this.posts.forEach((element) => {
                if (element.id == this.id) {
                    this.postData = element;
                }
            });
        },
    },
    created() {
        this.getData();
    },
};
</script>

<style scoped>
*{
    /* border: 1px solid red; */
    box-sizing: border-box;
    font-family: "Playfair Display", serif;
}
.wrapper {
    position: relative;
    width: 80%;
    left: 50%;
    top: 30px;
    transform: translateX(-50%);
    background-color: #fafafa;
}
.title {
    position: relative;
    font-family: 'Inter', sans-serif;
    width: 100%;
    min-height: 300px;
    max-height: 500px;
    font-size: 36px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.bkground{
    width: 100%;
    box-sizing: content-box;
}
.titletext{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.416);
    color: #FAFAFA;
    font-family: 'Inter', sans-serif;
    text-align: center;
}
.article{
    padding: 50px;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-weight: 600;
}
</style>
