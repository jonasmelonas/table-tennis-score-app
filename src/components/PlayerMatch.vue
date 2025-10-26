<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const player1 = computed(() => String(route.query.p1 ?? 'Player 1'))
const player2 = computed(() => String(route.query.p2 ?? 'Player 2'))

const firstServe = ref("")

const player1Score = ref(0)
const player2Score = ref(0)

function givePoint(player: string) {
    if(firstServe.value == "") {
        firstServe.value = player
    } else {
        if((player == "player1"))
            player1Score.value++;
        else
            player2Score.value++;
    }
}

</script>


<template>
    <div class="w-full h-full flex flex-col items-center relative">
        <div
          v-if="!firstServe"
          class="absolute inset-0 flex items-center justify-center bg-black/20"
          role="status"
          aria-live="polite"
        >
            <div class="bg-white w-2/3 px-4 py-2 rounded-lg text-lg font-medium">
                Who goes first?
            </div>
        </div>

        <div class="text-center w-full h-1/2 border-b-4 bg-blue-200 flex flex-col" @click.stop="givePoint('player1')">
            <div class="pt-4">
                <div class="text-xl text-gray-600">Player 1</div>
                <div class="text-2xl font-bold">{{ player1 }}</div>
            </div>

            <!-- this fills the remaining space and centers the score -->
            <div class="flex-1 flex items-center justify-center">
                <button v-if="!firstServe" @click.stop="givePoint('player1') "
                    class="z-10 text-2xl w-2/4 bg-blue-400 rounded-xl p-4 border-2 border-blue-600 shadow-md shadow-gray-500">
                    Goes first
                </button>
                <div v-else class="text-6xl">{{ player1Score }}</div>
            </div>
        </div>

        <div class="text-center w-full h-1/2 pt-4 bg-red-200 flex flex-col" @click.stop="givePoint('player2')">
            <div class="pt-4">
              <div class="text-xl text-gray-600">Player 2</div>
              <div class="text-2xl font-bold">{{ player2 }}</div>
            </div>

            <!-- this fills the remaining space and centers the score -->
            <div class="flex-1 flex items-center justify-center">
                <button v-if="!firstServe" @click.stop="givePoint('player2') "
                    class="z-10 text-2xl w-2/4 bg-red-400 rounded-xl p-4 border-2 border-red-600 shadow-md shadow-gray-500">
                    Goes first
                </button>
                <div v-else class="text-6xl">{{ player2Score }}</div>
            </div>
        </div>

        <!-- match UI here -->
  </div>
</template>


<style scoped>

</style>