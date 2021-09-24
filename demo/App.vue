<template>
  <div class="px-8 my-32 md:px-0">
    <div class="flex items-center justify-between w-full mx-auto mt-8 max-w-prose">
      <h1 class="flex items-center text-4xl font-bold">
        <Logo class="text-purple-500 w-auto h-8 fill-current relative top-0.5" aria-hidden="true" />
        <span class="inline-block ml-4 text-gray-600">vue-input-autowidth</span>
      </h1>
      <nav class="flex items-center">
        <a
          href="https://github.com/syropian/vue-input-autowidth"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block transition-colors hover:text-purple-500"
          aria-label="GitHub"
        >
          <GitHubIcon class="w-6 h-6 stroke-current" />
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

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Logo from './Logo.vue'
import GitHubIcon from './GitHubIcon.vue'

export default defineComponent({
  components: {
    Logo,
    GitHubIcon,
  },
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
  placeholder="An example with custom options"
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
