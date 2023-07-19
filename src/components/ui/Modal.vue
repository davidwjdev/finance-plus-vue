<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<template>
    <div
        class="absolute top-0 w-screen h-screen bg-transparent backdrop-blur-sm flex justify-center items-center"
    >
        <div
            class="bg-purple-600 w-2/3 rounded-lg shadow-black shadow-2xl border-purple-500 border-solid border-2"
        >
            <div
                class="m-5 text-slate-50 font-bold text-center drop-shadow-2xl text-2xl"
            >
                {{ name }}
            </div>
            <div
                class="bg-slate-200 text-purple-950 p-5 flex flex-col justify-center"
            >
                <input class="h-10 rounded-lg px-5" type="text" />
            </div>
            <div class="p-5 text-slate-100"></div>
        </div>
    </div>
</template>

<style scoped></style>
