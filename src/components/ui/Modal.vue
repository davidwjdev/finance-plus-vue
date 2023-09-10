<script setup lang="ts">
import FormReceitasVue from "../FormReceitas.vue";
import ButtonVue from "./Button.vue";
import { useModalStore } from "../../store/modal";
defineProps<{ name: string }>();
const modalStore = useModalStore();
</script>

<template>
    <div
        class="top-0 w-screen h-screen bg-transparent backdrop-blur-sm backdrop-brightness-50 flex justify-center items-center fixed inset-0 overflow-hidden z-50"
    >
        <div
            class="bg-gray-700 xl:w-3/12 lg:w-2/5 md:w-2/3 sm:w-11/12 rounded shadow-black shadow-2xl border-gray-500 border-solid border-2"
        >
            <div
                class="m-3  text-slate-50 font-bold flex flex-row items-center justify-between"
            >
                <span class="text-2xl">{{ name }}</span>
                <div class="">
                    <ButtonVue
                        :name="''"
                        :isIcon="true"
                        :icon="'xmark'"
                        @click="modalStore.toggleModal()"
                    ></ButtonVue>
                </div>
            </div>
            <FormReceitasVue />
            <div class="p-5 text-slate-100"></div>
        </div>
    </div>
</template>

<style scoped></style>
