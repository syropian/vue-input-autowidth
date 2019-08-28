import Vue from "vue";
import App from "./App.vue";
import VueInputAutowidth from "../src";

Vue.use(VueInputAutowidth);

new Vue({
  el: "#app",
  render: h => h(App)
});
