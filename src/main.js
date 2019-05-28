import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from './store';
import "./registerServiceWorker";
import firebase from "firebase"

var firebaseConfig = {
  apiKey: "AIzaSyDdzEEqw3efYkfg0OapZPVTAbEVtEsly98",
  authDomain: "livetheolympics.firebaseapp.com",
  databaseURL: "https://livetheolympics.firebaseio.com",
  projectId: "livetheolympics",
  storageBucket: "livetheolympics.appspot.com",
  messagingSenderId: "157730914443",
  appId: "1:157730914443:web:41457f6994ddf7a1"
};
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")