import Vue from "vue/dist/vue.js";
import VueInputAutowidthInstall, { VueInputAutoWidth } from "../src";

Vue.use(VueInputAutowidthInstall);
Vue.config.productionTip = false;

describe("VueInputAutowidth directive", () => {
  beforeEach(function() {
    document.body.innerHTML = `<div id="app"></div>`;
  });

  it("should render correct contents", async () => {
    const vm = new Vue({
      template: `<input type="text" v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" v-model="name" placeholder="Guardian" />`,
      data: { name: "Cayde-6" }
    }).$mount("#app");
    expect(vm.$el.placeholder).to.equal("Guardian");
    expect(vm.name).to.equal("Cayde-6");
  });

  it("should change widths when its content is updated", (done) => {
    const vm = new Vue({
      template: `<input type="text" v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" v-model="name" placeholder="Guardian" />`,
      data: { name: "Cayde-6" }
    }).$mount("#app");
    const originalWidth = vm.$el.getBoundingClientRect().width;
    vm.name = "Lord Saladin";
    Vue.nextTick(() => {
      const newWidth = vm.$el.getBoundingClientRect().width;
      expect(newWidth).to.be.above(originalWidth);
      done();
    });
  });

  it("should render correct contents with local provided directive", () => {
    const vm = new Vue({
      template: `<input type="text" v-my-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" v-model="name" placeholder="Guardian" />`,
      directives: { MyAutowidth: VueInputAutoWidth },
      data: { name: "Cayde-6" }
    }).$mount("#app");
    expect(vm.$el.placeholder).to.equal("Guardian");
    expect(vm.name).to.equal("Cayde-6");
  });
});

