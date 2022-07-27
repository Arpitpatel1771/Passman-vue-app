import { createApp } from 'vue'
// import Vue from "vue"
import {createWebHistory, createRouter} from "vue-router";

import ArticleView from "./components/ArticleView.vue"
import AboutPage from "./components/AboutPage.vue"
import AddPage from "./components/AddPage.vue"
import DetailPage from "./components/DetailPage.vue"

// import NavBar from "./components/NavBar.vue";
import App from "./App.vue"
const routes = [
    { path: '/', component: ArticleView},
    {path: '/about', component: AboutPage},
    {path: '/add', component: AddPage},
    {path: '/article/:id', component: DetailPage, props: true}
]

console.log(App.methods.returnData())
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


createApp(App).use(router).mount('#app')
