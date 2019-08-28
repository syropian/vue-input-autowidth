import "es6-object-assign/auto";
import checkWidth from "./check-width";

export default {
  bind: function(el) {
    if (el.tagName.toLocaleUpperCase() !== "INPUT") {
      throw new Error("v-input-autowidth can only be used on input elements.");
    }
    el.dataset.uuid = Math.random()
      .toString(36)
      .slice(-5);
    el.style.boxSizing = "content-box";
  },
  inserted: function(el, binding) {
    const styles = window.getComputedStyle(el);

    el.mirror = document.createElement("span");

    Object.assign(el.mirror.style, {
      position: "absolute",
      top: "0",
      left: "0",
      visibility: "hidden",
      height: "0",
      overflow: "scroll",
      whiteSpace: "pre",
      fontSize: styles.fontSize,
      fontFamily: styles.fontFamily,
      fontWeight: styles.fontWeight,
      fontStyle: styles.fontStyle,
      letterSpacing: styles.letterSpacing,
      textTransform: styles.textTransform
    });

    el.mirror.classList.add(`vue-input-autowidth-mirror-${el.dataset.uuid}`);
    el.mirror.setAttribute("aria-hidden", "true");

    document.body.appendChild(el.mirror);

    checkWidth(el, binding);
  },
  componentUpdated: function(el, binding) {
    checkWidth(el, binding);
  },
  unbind: function(el) {
    document.body.removeChild(el.mirror);
  }
};
