<template>
  <div>
    <input v-model="msg" v-autowidth type="text" class="input" placeholder="Watch me change size with my content!" />
  </div>

  <div>
    <input v-model="msg" v-autowidth="{ minWidth: '75px', maxWidth: '100px' }" type="text" class="input" />
  </div>

  <div>
    <input
      v-model="msg"
      v-autowidth="{ comfortZone: '10px' }"
      type="text"
      class="input"
      placeholder="Watch me change size with my content!"
    />
  </div>

  <div>
    <input v-autowidth type="text" class="input" placeholder="Watch me change size with my content!" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('')
</script>

<style>
.input {
  @apply transition-colors min-w-0 px-3 py-2 rounded-md text-lg focus:outline-none border-2 border-gray-300 focus:border-purple-500;
}
</style>
