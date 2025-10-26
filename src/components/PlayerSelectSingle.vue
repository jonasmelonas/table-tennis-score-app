<script setup lang="ts">
import { ref } from 'vue'
import router from '../router';
const player1 = ref('')
const player2 = ref('')

function startMatch() {
    router.push({
        name: 'PlayerMatch',
        query: { p1: player1.value, p2: player2.value }
    })
}
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center items-stretch p-4 gap-4">
    <div>
      <label class="block text-sm font-medium mb-2">Player 1</label>
      <input
        v-model="player1"
        type="text"
        placeholder="name"
        class="w-full px-3 py-3 rounded-lg bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 drop-shadow-md drop-shadow-gray-400"
        aria-label="Player 1 name"
      />
    </div>

    <div>
      <label class="block text-sm font-medium mb-2">Player 2</label>
      <input
        v-model="player2"
        type="text"
        placeholder="name"
        class="w-full px-3 py-3 rounded-lg bg-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 drop-shadow-md drop-shadow-gray-400"
        aria-label="Player 2 name"
      />
    </div>

    <div class="pt-2">
      <button
        class="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium disabled:opacity-50"
        :disabled="!player1 || !player2"
        @click="startMatch"
      >
        Start
      </button>
    </div>
  </div>
</template>

<style scoped>
/* small spacing adjustments for mobile */
</style>