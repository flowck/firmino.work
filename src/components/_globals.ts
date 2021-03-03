import { App } from "vue";

const requireComponent = require.context(".", false, /_app-[\w-]+\.vue$/);

export function register(app: App) {
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName);
    const componentName = fileName
      .replace(/^\.\/_/, "")
      .replace(/\.\w+$/, "")
      .split("-")
      .map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1))
      .join("");

    app.component(componentName, componentConfig.default || componentConfig);
  });
}
