<template>
    <NavBar />
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
    name: "App",
    components: {
        NavBar,
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

body {
    margin: 0;
}
#app {
    font-family: "Inter", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}
</style>
