import "./assets/main.css";

import { PiniaVuePlugin, createPinia } from "pinia";

import App from "./App.vue";
import Vue from "vue";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  pinia,
  render: (h) => h(App),
}).$mount("#app");
