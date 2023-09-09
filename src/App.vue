<script setup lang="ts">
import MenuVue from "./components/Menu.vue";
</script>

<template>
    <div
        class="flex lg:flex-col md:flex-col sm:flex-col bg-gray-700 text-slate-300 min-h-screen"
    >
        <MenuVue
            class="lg:sticky lg:top-0 md:sticky md:top-0 sm:fixed sm:bottom-0 sm:w-full"
        />
        <router-view class="pt-10"></router-view>
    </div>
</template>

<style scoped></style>
