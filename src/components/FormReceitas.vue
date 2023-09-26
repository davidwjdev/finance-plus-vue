<script setup lang="ts">
import { ref } from "vue";
import { useReceitasStore } from "../store/receitas";
import ButtonVue from "./ui/Button.vue";
import InputCurrency from "./ui/InputCurrency.vue";

const data = ref("");
const descricao = ref("");
const valor = ref("");
const tags = ref([]);

const receitasStore = useReceitasStore();

let isFormValid = ref(true);
let isDataValid = ref(true);
let isDescricaoValid = ref(true);
let isValorValid = ref(true);
let isTagsValid = ref(true);

const handleSubmit = () => {
    isDataValid = !!data.value;
    isDescricaoValid = !!descricao.value;
    isValorValid = !!valor.value;
    isTagsValid = tags.value.length > 0;
    if (!isDataValid || !isDescricaoValid || !isValorValid || !isTagsValid) {
        isFormValid.value = false;
        return;
    }
    let splitString = tags.value.split(/[\s,]+/);
    let toString = JSON.stringify(splitString);
    const dados = {
        data: data.value,
        descricao: descricao.value,
        valor: valor.value,
        tags: toString
    };
    receitasStore.insertData(dados);
    receitasStore.fetchData();
};

const resetData = () => {
    isDataValid = true;
};
const resetDescricao = () => {
    isDescricaoValid = true;
};
const resetValor = () => {
    isValorValid = true;
};
const resetTags = () => {
    isTagsValid = true;
};
</script>

<template>
    <div class="bg-gray-500 text-slate-900 p-5 flex flex-col justify-center">
        <div class="flex flex-col mb-3">
            <label class="font-bold mb-1" for="data">Data:</label>
            <input
                v-model="data"
                name="data"
                id="data"
                class="h-10 rounded-lg px-5"
                :class="{
                    'border-red-600 border-solid border-2 shadow':
                        !isFormValid && !isDataValid
                }"
                @focus="resetData"
                type="date"
            />
            <span
                class="text-red-800 font-extrabold mt-1 text-center"
                v-if="!isFormValid && !isDataValid"
                >O campo não pode estar vazio.</span
            >
        </div>
        <div class="flex flex-col mb-3">
            <label class="font-bold mb-1" for="descricao">Descrição:</label>
            <input
                v-model="descricao"
                name="descricao"
                id="descricao"
                class="h-10 rounded-lg px-5"
                type="text"
                :class="{
                    'border-red-600 border-solid border-2 shadow':
                        !isFormValid && !isDescricaoValid
                }"
                @focus="resetDescricao"
            />
            <span
                class="text-red-800 font-extrabold mt-1 text-center"
                v-if="!isFormValid && !isDescricaoValid"
                >O campo não pode estar vazio.</span
            >
        </div>
        <div class="flex flex-col mb-3">
            <label class="font-bold mb-1" for="valor">Valor:</label>
            <InputCurrency
                v-model="valor"
                name="valor"
                id="valor"
                :class="{
                    'border-red-600 border-solid border-2 shadow':
                        !isFormValid && !isValorValid
                }"
                @focus="resetValor"
            />
            <span
                class="text-red-800 font-extrabold mt-1 text-center"
                v-if="!isFormValid && !isValorValid"
                >O campo não pode estar vazio.</span
            >
        </div>
        <div class="flex flex-col mb-3">
            <label class="font-bold mb-1" for="tags">Tags:</label>
            <input
                v-model="tags"
                name="tags"
                id="tags"
                class="h-10 rounded-lg px-5"
                type="text"
                :class="{
                    'border-red-600 border-solid border-2 shadow':
                        !isFormValid && !isTagsValid
                }"
                @focus="resetTags"
            />
            <span
                class="text-red-800 font-extrabold mt-1 text-center"
                v-if="!isFormValid && !isTagsValid"
                >O campo não pode estar vazio.</span
            >
        </div>
        <div class="flex justify-end">
            <ButtonVue
                class=""
                :name="'Salvar'"
                :isIcon="true"
                :icon="'floppy-disk'"
                @click="handleSubmit"
            ></ButtonVue>
        </div>
    </div>
</template>

<style scoped></style>
