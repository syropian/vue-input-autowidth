import directive from "./vue-input-autowidth";

const install = function(Vue) {
  Vue.directive("autowidth", directive);
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(install);
}

directive.install = install;

export default directive;
