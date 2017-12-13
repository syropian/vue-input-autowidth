import VueInputAutoWidth from "./vue-input-autowidth";

function install(Vue, globalOptions) {
  Vue.directive("autowidth", VueInputAutoWidth);
}

export { default as VueInputAutoWidth } from "./vue-input-autowidth";
export default install;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}
