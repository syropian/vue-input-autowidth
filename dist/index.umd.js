(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.VueInputAutowidth = factory());
}(this, function () { 'use strict';

  /**
   * Code refactored from Mozilla Developer Network:
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
   */

  function assign(target, firstSource) {
    if (target === undefined || target === null) {
      throw new TypeError('Cannot convert first argument to object');
    }

    var to = Object(target);
    for (var i = 1; i < arguments.length; i++) {
      var nextSource = arguments[i];
      if (nextSource === undefined || nextSource === null) {
        continue;
      }

      var keysArray = Object.keys(Object(nextSource));
      for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
        var nextKey = keysArray[nextIndex];
        var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
        if (desc !== undefined && desc.enumerable) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
    return to;
  }

  function polyfill() {
    if (!Object.assign) {
      Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: assign
      });
    }
  }

  var es6ObjectAssign = {
    assign: assign,
    polyfill: polyfill
  };

  es6ObjectAssign.polyfill();

  function checkWidth (el, binding) {
    var mirror = document.querySelector(".vue-input-autowidth-mirror-".concat(el.dataset.uuid));
    var defaults = {
      maxWidth: "none",
      minWidth: "none",
      comfortZone: 0
    };
    var options = Object.assign({}, defaults, binding.value);
    el.style.maxWidth = options.maxWidth;
    el.style.minWidth = options.minWidth;
    var val = el.value;

    if (!val) {
      val = el.placeholder || "";
    }

    while (mirror.childNodes.length) {
      mirror.removeChild(mirror.childNodes[0]);
    }

    mirror.appendChild(document.createTextNode(val));
    var newWidth = mirror.scrollWidth + options.comfortZone + 2;

    if (newWidth != el.scrollWidth) {
      el.style.width = "".concat(newWidth, "px");
    }
  }

  var directive = {
    bind: function bind(el) {
      if (el.tagName.toLocaleUpperCase() !== "INPUT") {
        throw new Error("v-input-autowidth can only be used on input elements.");
      }

      el.dataset.uuid = Math.random().toString(36).slice(-5);
      el.style.boxSizing = "content-box";
    },
    inserted: function inserted(el, binding) {
      var styles = window.getComputedStyle(el);
      el.mirror = document.createElement("span");
      Object.assign(el.mirror.style, {
        position: "absolute",
        top: "0",
        left: "0",
        visibility: "hidden",
        height: "0",
        overflow: "hidden",
        whiteSpace: "pre",
        fontSize: styles.fontSize,
        fontFamily: styles.fontFamily,
        fontWeight: styles.fontWeight,
        fontStyle: styles.fontStyle,
        letterSpacing: styles.letterSpacing,
        textTransform: styles.textTransform
      });
      el.mirror.classList.add("vue-input-autowidth-mirror-".concat(el.dataset.uuid));
      el.mirror.setAttribute("aria-hidden", "true");
      document.body.appendChild(el.mirror);
      checkWidth(el, binding);
    },
    componentUpdated: function componentUpdated(el, binding) {
      checkWidth(el, binding);
    },
    unbind: function unbind(el) {
      document.body.removeChild(el.mirror);
    }
  };

  var install = function install(Vue) {
    Vue.directive("autowidth", directive);
  };

  if (typeof window !== "undefined" && window.Vue) {
    window.Vue.use(install);
  }

  directive.install = install;

  return directive;

}));
