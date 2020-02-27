# vue-input-autowidth [![Actions Status](https://github.com/syropian/vue-input-autowidth/workflows/Tests/badge.svg)](https://github.com/syropian/vue-input-autowidth/actions)

> A Vue.js directive for adjusting a text input's width to fit its content.

![](http://d.pr/i/lfmNKs+)

**[Demo](https://syropian.github.io/vue-input-autowidth/)**

### Install

```bash
$ yarn add vue-input-autowidth
```

or

```bash
$ npm install --save vue-input-autowidth
```

It's also available on Unpkg: https://unpkg.com/vue-input-autowidth

### Usage

```js
import VueInputAutowidth from 'vue-input-autowidth'

Vue.use(VueInputAutowidth)

// and in your template...
<input
  type="text"
  v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
  v-model="name"
  placeholder="Watch me change size with my content!"
/>
```

### Options

#### maxWidth

Type: `String`
Default: `'none'`

The maximum width the input field will grow to.

#### minWidth

Type: `String`
Default: `'none'`

The minimum width the input field will shrink to.

#### comfortZone

Type: `Number`
Default: `0`

The additional space in pixels to add to the far side of the input's content.

### Development

```bash
# To run the example
$ npm run example

# To run the tests
$ npm test

# To publish the dist file
$ npm run build
```

### License

MIT © [Collin Henderson](https://github.com/syropian)
