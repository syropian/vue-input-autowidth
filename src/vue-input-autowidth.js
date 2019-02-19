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
  },
  inserted: function(el, binding) {
    el.mirror = document.createElement("span");
    el.mirror.classList.add(`vue-input-autowidth-mirror-${el.dataset.uuid}`);
    let styles = window.getComputedStyle(el);
    Object.assign(el.mirror.style, {
      position: "absolute",
      top: "-9999px",
      left: "-9999px",
      width: "auto",
      whiteSpace: "pre",
      opacity: 0,
      border: styles.getPropertyValue("border"),
      fontSize: styles.getPropertyValue("font-size"),
      fontFamily: styles.getPropertyValue("font-family"),
      fontWeight: styles.getPropertyValue("font-weight"),
      fontStyle: styles.getPropertyValue("font-style"),
      fontFeatureSettings: styles.getPropertyValue("font-feature-settings"),
      fontKerning: styles.getPropertyValue("font-kerning"),
      fontStretch: styles.getPropertyValue("font-stretch"),
      fontVariant: styles.getPropertyValue("font-variant"),
      fontVariantCaps: styles.getPropertyValue("font-variant-caps"),
      fontVariantLigatures: styles.getPropertyValue("font-variant-ligatures"),
      fontVariantNumeric: styles.getPropertyValue("font-variant-numeric"),
      letterSpacing: styles.getPropertyValue("letter-spacing"),
      padding: styles.getPropertyValue("padding"),
      textTransform: styles.getPropertyValue("text-transform"),
      ariaHidden: true
    });
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
