<script setup lang="ts">
defineProps<{ name: string; icon: string; isIcon: boolean }>();
</script>

<template>
    <button
        :class="[
            ' rounded-lg px-3 py-2 m-1 font-bold flex justify-center items-center max-h-12 max-w-38',
            'bg-purple-600 text-slate-100 '
        ]"
    >
        <div :v-if="isIcon" class="flex justify-center items-center">
            <font-awesome-icon :icon="['fas', icon]" class="m-1" />
        </div>
        <div :v-if="name !== ''">
            <span>{{ name }}</span>
        </div>
    </button>
</template>

<style scoped></style>
