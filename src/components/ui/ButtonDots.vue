<script setup lang="ts">
import { ref } from "vue";
import MenuDropDownVue from "./MenuDropDown.vue";
const isVisibleMenu = ref(false);

function toggleMenu(): boolean {
    isVisibleMenu.value = !isVisibleMenu.value;
    return isVisibleMenu.value;
}
</script>

<template>
    <div class="flex flex-col ">
        <button
            :class="[' rounded-lg  h-[3em] w-[3em] text-slate-300 text-end']"
            @click="toggleMenu()"
        >
            <div class="">
                <font-awesome-icon :icon="['fas', 'ellipsis']" />
            </div>
        </button>
        <div class="" v-if="isVisibleMenu">
            <MenuDropDownVue> </MenuDropDownVue>
        </div>
    </div>
</template>

<style scoped></style>
