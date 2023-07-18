<script setup lang="ts">
defineProps<{ name: string, icon: string, selected: boolean, link: string }>()
</script>

<template>
    <button :class="[
        ' rounded-lg px-3 py-2 m-1 font-bold',
        selected ? 'bg-purple-600 text-slate-100 ' : 'bg-purple-900 text-slate-100'
    ]">
        <font-awesome-icon :icon="['fas', icon]" />
        <span class="ml-2" v-if="selected">
            {{ name }}
        </span>
    </button>
</template>

<style scoped></style>
