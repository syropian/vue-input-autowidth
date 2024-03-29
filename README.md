# vue-input-autowidth ![tests](https://github.com/syropian/vue-input-autowidth/workflows/tests/badge.svg?branch=v2)

A Vue.js directive that automatically resizes an input's width to fit its contents.

> 🚦 Looking for Vue 2 support? Check out the [master branch](https://github.com/syropian/vue-input-autowidth).

#### [See demo](https://vue-input-autowidth.netlify.app/)

## Installation

```bash
npm install vue-input-autowidth@next --save
# or...
yarn add vue-input-autowidth@next
```

_or_

Use the UMD build from [Unpkg](https://unpkg.com/vue-input-autowidth), available as `VueInputAutowidth` in the global scope.

```html
<script src="/vendor/vue.js" />
<script src="https://unpkg.com/vue-input-autowidth@next" />
```

## Usage

### Globally

Import and register the directive in your app's entrypoint.

```js
import { createApp } from 'vue'
import App from './App.vue'
import { plugin as VueInputAutowidth } from 'vue-input-autowidth'

createApp(App).use(VueInputAutowidth).mount('#app')
```

### Per-component

```js
<script>
import { directive as VueInputAutowidth } from "vue-input-autowidth"

export default {
  directives: { autowidth: VueInputAutowidth },
  setup() {
    ...
  },
}
</script>
```

...and in your template:

```html
<template>
  <input type="text" placeholder="First Name" v-model="msg" v-autowidth />
</template>
```

You can also pass some options:

```html
<template>
  <input
    type="text"
    placeholder="First Name"
    v-model="msg"
    v-autowidth="{
      minWidth: '75px',
      maxWidth: '75%',
      comfortZone: '1ch',
    }"
  />
</template>
```

## Available Options

| Name                                | Type      | Default Value | Description                                                                                                             |
| ----------------------------------- | --------- | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **maxWidth**                        | `string`  | `undefined`   | Sets the `max-width` CSS property on the element. The value should be a valid CSS size and unit.                        |
| **minWidth**                        | `string`  | `undefined`   | Sets the `min-width` CSS property on the element. The value should be a valid CSS size and unit.                        |
| **comfortZone**                     | `string`  | `0px`         | Uses CSS `calc()` to add the specificied amount to the calculated width. The value should be a valid CSS size and unit. |
| **watchWindowSize**                 | `boolean` | `false`       | When enabled, the directive will listen to the window resize event, and resize the input if needed.                     |
| **windowResizeHandlerDebounceTime** | `number`  | `150`         | The debounce time in milliseconds for the window resize event. Only applies if `watchWindowSize` is `true`.             |
| **disableNonInputWarning**          | `boolean` | `false`       | Disables the console warning if you try and use the directive on a non-input element.                                   |

## License

MIT © [Collin Henderson](https://github.com/syropian)
