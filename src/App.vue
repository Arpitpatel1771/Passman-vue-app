<template>
    <div class="main">
        <NavBar/>
        <router-view :posts="posts" ></router-view>
        
        
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
    name: "App",
    components: {
        NavBar,
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        async getData(){
            const response = await fetch("http://localhost:3001/get");
            this.posts = await response.json();
            console.log(this.posts)
        },
        returnData(){
            fetch("http://localhost:3001/get").then((response)=>response.json()).then((data)=>{return data});
        }
    },

    created(){
        this.getData()
    },
};
</script>

<style>
@import url("https://rsms.me/inter/inter.css");
html {
    font-family: "Inter", sans-serif;
}
@supports (font-variation-settings: normal) {
    html {
        font-family: "Inter var", sans-serif;
    }
}
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
#app {
    font-family: "Inter", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.main {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #bdbdbd;
    display: flex;
    flex-direction: column;
    overflow: scroll;
}
</style>
