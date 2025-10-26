<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

function choose(mode: string) {
  if (mode === 'single') {
    router.push({ name: 'PlayerSingle' })
  } else {
    router.push('/tournament') // update when route exists
  }
}
</script>

<template>
    <div class="w-full h-full flex flex-col justify-center">
        <h1 class="font-bold">Choose mode</h1>
        <div class="w-full h-1/3  flex flex-col justify-around px-28">
            <button class="
                h-20 
                border-2
                border-blue-800 
                rounded-2xl 
                bg-indigo-400 
                drop-shadow-md 
                drop-shadow-neutral-500"
                @click="choose('single')"
            >
                Single match
            </button>

            <button class="
                h-20 
                border-2
                border-blue-800
                rounded-2xl 
                bg-indigo-400
                drop-shadow-md 
                drop-shadow-neutral-500"
                @click="choose('tournament')"
            >
                Tournament
            </button>
        </div>
    </div>
</template>


<style scoped>

</style>