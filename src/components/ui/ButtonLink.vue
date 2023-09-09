<script setup lang="ts">
defineProps<{ name: string; icon: string; selected: boolean; link: string }>();
</script>

<template>
    <router-link :to="link">
        <button
            :class="[
                ' rounded-lg px-3 py-2 m-1 font-bold hover:bg-slate-400  min-h-[3em] min-w-[3em]',
                selected ? 'bg-slate-500 text-slate-100 ' : ' text-slate-100'
            ]"
        >
            <font-awesome-icon :icon="['fas', icon]" />
            <span class="ml-2" v-if="selected">
                {{ name }}
            </span>
        </button>
    </router-link>
</template>

<style scoped></style>
