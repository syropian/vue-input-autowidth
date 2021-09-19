import { createApp } from "vue";
import App from "./App.vue";
import { plugin as VueInputAutowidth } from "../../src/";
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import "highlight.js/styles/atom-one-dark.css";
import "./app.css";

createApp(App).use(VueInputAutowidth).use(hljsVuePlugin).mount("#app");
