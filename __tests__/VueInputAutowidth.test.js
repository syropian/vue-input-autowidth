import { shallowMount } from "@vue/test-utils";
import VueInputAutowidth from "../src";

describe("vue-input-autowidth", () => {
  it("mounts", () => {
    const TextInput = {
      template: `<input type="text" v-model="text" v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}" />`,
      directives: {
        autowidth: VueInputAutowidth
      },
      data() {
        return {
          text: "Hello World"
        };
      }
    };
    const wrapper = shallowMount(TextInput);

    expect(wrapper.find("input[type=text]").element.value).toBe("Hello World");
  });
});
