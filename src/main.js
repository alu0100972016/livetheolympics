import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import InfiniteScroll from "v-infinite-scroll";
import "v-infinite-scroll/dist/v-infinite-scroll.css";
import VScrollLock from "v-scroll-lock";

Vue.use(VScrollLock);

Vue.use(InfiniteScroll);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
