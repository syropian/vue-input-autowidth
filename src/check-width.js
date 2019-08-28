import "es6-object-assign/auto";

export default function(el, binding) {
  const mirror = document.querySelector(
    `.vue-input-autowidth-mirror-${el.dataset.uuid}`
  );
  const defaults = { maxWidth: "none", minWidth: "none", comfortZone: 0 };
  const options = Object.assign({}, defaults, binding.value);

  el.style.maxWidth = options.maxWidth;
  el.style.minWidth = options.minWidth;

  let val = el.value;

  if (!val) {
    val = el.placeholder || "";
  }

  while (mirror.childNodes.length) {
    mirror.removeChild(mirror.childNodes[0]);
  }

  mirror.appendChild(document.createTextNode(val));

  let newWidth = mirror.scrollWidth + options.comfortZone + 2;

  if (newWidth != el.scrollWidth) {
    el.style.width = `${newWidth}px`;
  }
}
