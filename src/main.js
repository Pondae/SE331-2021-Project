import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Gstore from "./store";
import "nprogress/nprogress.css";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

createApp(App)
  .use(VueChartkick)
  .use(router)
  .provide("Global_Store", Gstore)
  .mount("#app");
