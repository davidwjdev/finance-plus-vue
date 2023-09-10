<script setup lang="ts">
import ButtonVue from "./ui/Button.vue";
import InputCurrency from "./ui/InputCurrency.vue";
</script>

<template>
    <div class="bg-gray-500 text-slate-900 p-5 flex flex-col justify-center">
        <div class="flex flex-col mb-3">
            <label class="font-bold mb-1" for="data">Data:</label>
            <input
                name="data"
                id="data"
                class="h-10 rounded-lg px-5"
                type="date"
            />
        </div>
        <div class="flex flex-col mb-3">
            <label class="font-bold mb-1" for="nome">Nome:</label>
            <input
                name="nome"
                id="nome"
                class="h-10 rounded-lg px-5"
                type="text"
            />
        </div>
        <div class="flex flex-col mb-3">
            <label class="font-bold mb-1" for="valor">Valor:</label>
            <InputCurrency />
        </div>
        <div class="flex flex-col mb-3">
            <label class="font-bold mb-1" for="tags">Tags:</label>
            <input
                name="tags"
                id="tags"
                class="h-10 rounded-lg px-5"
                type="text"
            />
        </div>
        <div class="flex justify-end">
            <ButtonVue
                class=""
                :name="'Salvar'"
                :isIcon="true"
                :icon="'floppy-disk'"
            ></ButtonVue>
        </div>
    </div>
</template>

<style scoped></style>
