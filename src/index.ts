import directive from "./directive";
import { App } from "vue";

export { directive };

export const plugin = {
  install: (app: App) => {
    const version = Number(app.version.split(".")[0]);

    if (version < 3) {
      console.warn("This plugin requires Vue 3");
    }

    app.directive("autowidth", directive);
  },
};
