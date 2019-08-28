import VueInputAutoWidth from "./vue-input-autowidth";

const install = function(Vue) {
  Vue.directive("autowidth", VueInputAutoWidth);
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}

VueInputAutoWidth.install = install;

export default VueInputAutoWidth;
