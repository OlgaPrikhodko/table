import "./assets/main.css";

import { PiniaVuePlugin, createPinia } from "pinia";

import App from "./App.vue";
import { Fragment } from "vue-frag";
import Vue from "vue";

Vue.component("Fragment", Fragment);

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  pinia,
  render: (h) => h(App),
}).$mount("#app");
