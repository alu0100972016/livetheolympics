import Vue from "vue";
import Router from "vue-router";
import News from "./views/News.vue";
import Games from "./views/Games.vue";
import Sports from "./views/Sports.vue";
import Athletes from "./views/Athletes.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "news",
      component: News
    },
    {
      path: "/games",
      name: "games",
      component: Games
    },
    {
      path: "/sports",
      name: "sports",
      component: Sports
    },
    {
      path: "/athletes/:sport",
      name: "athletes",
      component: Athletes
    },
    {
      path: "/*",
      name: "news",
      component: News
    }
  ]
});
