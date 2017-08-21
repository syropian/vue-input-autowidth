import VueInputAutoWidth from "./vue-input-autowidth";

function install(Vue, globalOptions) {
  Vue.directive("autowidth", VueInputAutoWidth);
}

export default install;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}
