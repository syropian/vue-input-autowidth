<template>
  <div class="px-8 my-32 md:px-0">
    <div class="flex items-center justify-between w-full mx-auto mt-8 max-w-prose">
      <h1 class="text-4xl font-bold">
        <span class="relative inline-block top-1">↔️</span>
        <span class="inline-block ml-2">vue-input-autowidth</span>
      </h1>
      <nav class="flex items-center">
        <a
          href="https://github.com/syropian/vue-input-autowidth"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block transition-colors hover:text-purple-500"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="css-i6dzq1"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </a>
      </nav>
    </div>
    <div class="w-full mx-auto mt-8 max-w-prose">
      <input v-model="msg" v-autowidth type="text" class="input" placeholder="Watch me change size with my content!" />
    </div>
    <div class="w-full mx-auto mt-8 prose max-w-prose">
      <h2>Install</h2>
      <highlightjs language="bash" :code="installCode" />

      <h2>Add The Plugin</h2>
      <h3>Globally</h3>
      <highlightjs language="javascript" :code="addGlobalCode" />
      <h3>Per-component</h3>
      <highlightjs language="javascript" :code="perComponentCode" />
      <h3>Add the directive to a text input</h3>
      <highlightjs language="xml" :code="useDirectiveCode" />

      <h3>Configure</h3>
      <p>You can pass various options to the directive</p>
      <highlightjs language="xml" :code="showOptionsCode" />
      <input
        v-model="msg"
        v-autowidth="{
          minWidth: '75px',
          maxWidth: '75%',
          comfortZone: '1ch',
        }"
        type="text"
        class="input"
        placeholder="An example with custom options"
      />

      <footer>
        <p class="text-gray-500">&copy; {{ new Date().getFullYear() }} Collin Henderson</p>
      </footer>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const msg = ref('')

    const installCode = ref(`$ npm install vue-input-autowidth@next --save
# or...
$ yarn add vue-input-autowidth@next`)
    const addGlobalCode = ref(`import { createApp } from 'vue'
import App from './App.vue'
import { plugin as VueInputAutowidth } from 'vue-input-autowidth'

createApp(App).use(VueInputAutowidth).mount("#app")
`)
    const perComponentCode = `import { directive as VueInputAutowidth } from 'vue-input-autowidth'

export default {
  directives: { autowidth: VueInputAutowidth },
  setup() {
    ...
  },
}`
    const useDirectiveCode = `<input
  type="text"
  placeholder="Watch me change size with my content!"
  v-model="msg"
  v-autowidth
/>`

    const showOptionsCode = ref(`<input
  type="text"
  placeholder="Watch me change size with my content!"
  v-model="msg"
  v-autowidth="{
    minWidth: '75px',
    maxWidth: '75%',
    comfortZone: '1ch',
  }"
/>`)
    return {
      msg,
      installCode,
      addGlobalCode,
      perComponentCode,
      useDirectiveCode,
      showOptionsCode,
    }
  },
})
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.input {
  @apply transition-colors min-w-0 px-3 py-2 rounded-md text-lg focus:outline-none border-2 border-gray-300 focus:border-purple-500;
}
</style>
