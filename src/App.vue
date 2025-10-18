<script setup lang="ts">
import { ref } from 'vue';
import ModeSelect from './components/ModeSelect.vue';
import PlayerSelectSingle from './components/PlayerSelectSingle.vue';

const modeSelected = ref("")
console.log(modeSelected)
</script>

<template>
  <div class="app-size bg-gray-300 text-center">
    <ModeSelect v-if="!modeSelected" @select="modeSelected = $event" />
    <PlayerSelectSingle v-else-if="modeSelected == 'single' " />
  </div>
</template>

<style scoped>

.app-size {
  width: 100vw;
  max-width: 480px;
  margin: 0 auto;

  height: 100svh;
  min-height: 100vh;

  padding-top: env(safe-area-inset-top, 0);
  padding-bottom: env(safe-area-inset-bottom, 0);

  box-sizing: border-box;
  overflow: hidden;
}

</style>
