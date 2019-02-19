<template>
  <div class="docs">
    <h1>vue-input-autowidth</h1>
    <div class="container">
      <input
        type="text"
        v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
        v-model="name"
        placeholder="Watch me change size with my content!"
      />
      <pre v-highlightjs="sourceCode"><code class="html"></code></pre>
    </div>
    <div class="container">
      <h2>Installation</h2>
      <pre v-highlightjs><code class="shell">$ yarn add vue-input-autowidth</code></pre>
      <p>or</p>
      <pre v-highlightjs><code class="shell">$ npm install --save vue-input-autowidth</code></pre>
      <p>or grab it from Unpkg: <a href="https://unpkg.com/vue-input-autowidth">https://unpkg.com/vue-input-autowidth</a></p>
      <br>
      <h2>Options</h2>
      <p><strong>maxWidth | String:</strong> Sets the maximum width the input element will stretch to.</p>
      <p><strong>minWidth | String:</strong> Sets the minimum width the input element will shrink to.</p>
      <p><strong>comfortZone | Number:</strong> Additional space in pixels to add to the far side of the input's content.</p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/atom-one-dark.css";

Vue.use(VueHighlightJS);
export default {
  name: "App",
  data() {
    return {
      name: "",
      sourceCode: `<input
  type="text"
  v-autowidth="{maxWidth: '960px', minWidth: '20px', comfortZone: 0}"
  v-model="name"
  placeholder="Watch me change size with my content!"
/>`
    };
  }
};
</script>

<style lang="scss">
$blue: #21d4fd;
$purple: #b721ff;
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,400i,600");
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
body {
  background-color: $blue;
  background-image: linear-gradient(19deg, $blue 0%, $purple 100%);
  color: #132830;
  display: flex;
  justify-content: center;
  font-family: "Fira Sans", sans-serif;
  padding: 50px;
  a {
    color: $blue;
  }
}
.docs {
  width: 100%;
  h1,
  h2 {
    text-align: center;
  }
  h1 {
    color: #fff;
    text-shadow: 0 1px 1px rgba(#000, 0.35);
  }
}
.container {
  background: #fff;
  border-radius: 12px;
  max-width: 960px;
  margin: 25px auto;
  padding: 30px;
  width: 100%;
  input[type="text"] {
    transition: border-color 250ms ease;
    appearance: none;
    border-radius: 6px;
    border: 2px solid #e9ebeb;
    font-size: 24px;
    padding: 0.42em 0.45em;
    &:focus {
      outline: none;
      border-color: $purple;
    }
    &::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: rgba(19, 40, 48, 0.54);
    }
  }
}
</style>
