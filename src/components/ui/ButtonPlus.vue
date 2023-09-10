<script setup lang="ts"></script>

<template>
    <div
        class="fixed lg:bottom-10 md:bottom-10 sm:bottom-28 right-5 flex flex-col items-end"
    >
        <button
            :class="[
                ' rounded-lg px-3 py-2 m-1 font-bold flex justify-center items-center min-h-[3em] min-w-[3em]',
                'bg-slate-600 text-slate-100 hover:bg-slate-400 '
            ]"
        >
            <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
    </div>
</template>

<style scoped></style>
