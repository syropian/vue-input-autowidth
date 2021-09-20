<template>
  <div>
    <input
      type="text"
      class="input"
      placeholder="Watch me change size with my content!"
      v-model="msg"
      v-autowidth
    />
  </div>

  <div>
    <input
      type="text"
      class="input"
      v-model="msg"
      v-autowidth="{ minWidth: '75px', maxWidth: '100px' }"
    />
  </div>

  <div>
    <input
      type="text"
      class="input"
      v-model="msg"
      placeholder="Watch me change size with my content!"
      v-autowidth="{ comfortZone: '10px' }"
    />
  </div>

  <div>
    <input
      type="text"
      class="input"
      placeholder="Watch me change size with my content!"
      v-autowidth
    />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const msg = ref("");
</script>

<style>
.input {
  @apply transition-colors min-w-0 px-3 py-2 rounded-md text-lg focus:outline-none border-2 border-gray-300 focus:border-purple-500;
}
</style>
