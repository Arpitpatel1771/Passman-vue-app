<template>
    <div class="navbar">
        <div class="logo">POSTS</div>
        <div class="filler"></div>
        <ul class="nav-menu">
            <router-link to="/"><li class="nav-item">Home</li></router-link>
            <router-link to="/about"><li class="nav-item">About</li></router-link>
            <router-link to="/add"><li class="nav-item">Add Post</li></router-link>
        </ul>

    </div>
</template>

<script>
</script>

<style scoped>

*{
    /* border: 1px solid red; */
    font-size: 20px;
    box-sizing: border-box;
    color: #263238;
}
.navbar{
    position: sticky;
    top: 0;
    display: flex;
    width: 100%;
    align-items: center;
    padding-left: 50px;

    background-color: #FAFAFA;

    box-shadow: 0px 2px 10px -5px rgba(0, 0, 0, 0.479);
    z-index: 10;
}
.filler{
    flex-grow: 1;
}
.logo{
    height: fit-content;
    font-weight: 900;
    color: #37474F;
}
.nav-menu{
    display: inline-flex;
    list-style: none;
    padding: 0;
    flex-grow: 4;
    justify-content: flex-start;
}
ul > a{
    
    text-decoration: none;
}
.nav-item{
    position: relative;
    margin: 0px 30px 0px 0px;
    padding-bottom: 5px;
    padding-top: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    /* transition: all 0.1s ease-in-out; */

}
.nav-item::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #FF5722;
    /* transition: all 0.1s ease-in-out; */
}
.nav-item:hover{
    color: #FF5722;
}
.nav-item:hover::after{
    width: 100%;
}
</style>