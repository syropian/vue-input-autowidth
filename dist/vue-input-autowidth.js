!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueInputAutowidth=t()}(this,function(){"use strict";function e(e,t){if(null==e)throw new TypeError("Cannot convert first argument to object");for(var n=Object(e),o=1;o<arguments.length;o++){var i=arguments[o];if(null!=i)for(var r=Object.keys(Object(i)),d=0,a=r.length;d<a;d++){var l=r[d],u=Object.getOwnPropertyDescriptor(i,l);void 0!==u&&u.enumerable&&(n[l]=i[l])}}return n}({assign:e,polyfill:function(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:e})}}).polyfill();var o=function(e,t){var n=document.querySelector(".vue-input-autowidth-mirror-"+e.dataset.uuid),o=Object.assign({},{maxWidth:"none",minWidth:"none",comfortZone:0},t.value);e.style.maxWidth=o.maxWidth,e.style.minWidth=o.minWidth;var i=e.value;for(i||(i=e.placeholder||"");n.childNodes.length;)n.removeChild(n.childNodes[0]);n.appendChild(document.createTextNode(i));var r=n.scrollWidth+o.comfortZone+2;r!=e.scrollWidth&&(e.style.width=r+"px")},t={bind:function(e){if("INPUT"!==e.tagName.toLocaleUpperCase())throw new Error("v-input-autowidth can only be used on input elements.");e.dataset.uuid=Math.random().toString(36).slice(-5),e.style.boxSizing="content-box"},inserted:function(e,t){var n=window.getComputedStyle(e);e.mirror=document.createElement("span"),Object.assign(e.mirror.style,{position:"absolute",top:"0",left:"0",visibility:"hidden",height:"0",overflow:"scroll",whiteSpace:"pre",fontSize:n.fontSize,fontFamily:n.fontFamily,fontWeight:n.fontWeight,fontStyle:n.fontStyle,letterSpacing:n.letterSpacing,textTransform:n.textTransform}),e.mirror.classList.add("vue-input-autowidth-mirror-"+e.dataset.uuid),e.mirror.setAttribute("aria-hidden","true"),document.body.appendChild(e.mirror),o(e,t)},componentUpdated:function(e,t){o(e,t)},unbind:function(e){document.body.removeChild(e.mirror)}},n=function(e){e.directive("autowidth",t)};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(n),t.install=n,t});