export default function(el, binding) {
  const mirror = document.querySelector(".vue-input-autosize-mirror");
  const defaults = { maxWidth: "none", minWidth: "none", comfortZone: 0 };
  const options = Object.assign({}, defaults, binding.value);

  el.style.maxWidth = options.maxWidth;
  el.style.minWidth = options.minWidth;

  let val = el.value;
  if (!val) val = el.placeholder || "";
  mirror.innerHTML = val
    .replace(/&/g, "&amp;")
    .replace(/\s/g, "&nbsp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  let newWidth = mirror.getBoundingClientRect().width + options.comfortZone;

  if (newWidth != el.getBoundingClientRect().width) {
    el.style.width = `${newWidth}px`;
  }
}
