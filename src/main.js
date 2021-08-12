import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Gstore from "./store";
import "nprogress/nprogress.css";
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";
import FlashMessage from "@smartweb/vue-flash-message";
createApp(App)
  .use(VueChartkick)
  .use(router)
  .use(FlashMessage)
  .provide("Global_Store", Gstore)
  .mount("#app");
