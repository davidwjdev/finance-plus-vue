<script setup lang="ts">
import { ref } from "vue";

const isVisibleMenu = ref(false);

function toggleMenu(): boolean {
    isVisibleMenu.value = !isVisibleMenu.value;
    return isVisibleMenu.value;
}
</script>

<template>
    <div
        class="fixed lg:bottom-10 md:bottom-10 sm:bottom-28 right-5 flex flex-col items-end"
    >
        <div
            class="bg-purple-500 rounded-lg text-slate-100 text-end font-bold py-3"
            v-if="isVisibleMenu"
        >
            <div class="px-5 py-2">
                <span class="">Receitas</span>
            </div>
            <div class="px-5 py-2">
                <span>Despesas</span>
            </div>
            <div class="px-5 py-2">
                <span>Investimentos</span>
            </div>
        </div>
        <button
            :class="[
                ' rounded-lg px-3 py-2 m-1 font-bold bg-purple-700 text-slate-100 shadow-xl'
            ]"
            @click="toggleMenu"
        >
            <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
    </div>
</template>

<style scoped></style>
