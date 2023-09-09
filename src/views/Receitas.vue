<script setup lang="ts">
import ButtonVue from "../components/ui/Button.vue";
import ButtonDotsVue from "../components/ui/ButtonDots.vue";

import ModalVue from "../components/ui/Modal.vue";
import { useReceitasStore } from "../store/receitas";
import { useModalStore } from "../store/modal";
const modalStore = useModalStore();
const receitasStore = useReceitasStore();

const fetchData = () => {
    receitasStore.fetchData();
};
fetchData();
</script>

<template>
    <teleport to="body">
        <ModalVue :name="'Inserir'" v-if="modalStore.isOpenModal" />
    </teleport>

    <div class="m-10 flex flex-col justify-center items-center">
        <div class="flex flex-row justify-between items-center container">
            <ButtonVue
                :name="''"
                :icon="'angle-left'"
                :isIcon="true"
                @click="receitasStore.previousPage()"
            />
            <span class="font-bold">
                {{ receitasStore.monthPage + "/" + receitasStore.yearPage }}
            </span>
            <ButtonVue
                :name="''"
                :icon="'angle-right'"
                :isIcon="true"
                @click="receitasStore.nextPage()"
            />
        </div>
        <div class="mb-20">
            <div v-if="receitasStore.dataPage.length <= 0">
                <div class="flex flex-col m-10">
                    <span class="text-center p-5">
                        Não foram encontrados registros!
                    </span>
                </div>
            </div>
            <div else v-for="(item, key) in receitasStore.dataPage">
                <div
                    class="flex flex-col bg-slate-900 m-5 pt-1 px-10 pb-10 rounded shadow-lg shadow-zinc-950 w-[300px]"
                    :key="key"
                >
                    <div class="flex justify-end font-bold">
                        <ButtonDotsVue></ButtonDotsVue>
                    </div>
                    <div class="flex justify-end mb-3">
                        <span>{{ receitasStore.formatDate(item.data) }}</span>
                    </div>
                    <div class="text-xl">
                        <span class="">{{ item.descricao }}</span>
                    </div>
                    <div class="text-2xl mb-5 font-bold">
                        <span>{{ "R$ " + item.valor.toString() }}</span>
                    </div>

                    <div class="flex flex-wrap mt-1">
                        <div v-for="(tag, keytag) in item.tags">
                            <div
                                class="me-1 px-3 py-1 rounded-full border-2 border-solid border-slate-300 select-none"
                                :key="keytag"
                            >
                                {{ tag }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="bg-gray-700 text-slate-300">
        <div class="flex justify-center sm:m-1 md:m-10">
            <div class="mx-5 p-5 text-slate-100">
                <div class="flex justify-between items-center mb-3">
                    <ButtonVue
                        :name="''"
                        :icon="'angle-left'"
                        :isIcon="true"
                        @click="receitasStore.previousPage()"
                    />
                    <span class="font-bold">
                        {{
                            receitasStore.monthPage +
                            "/" +
                            receitasStore.yearPage
                        }}
                    </span>
                    <ButtonVue
                        :name="''"
                        :icon="'angle-right'"
                        :isIcon="true"
                        @click="receitasStore.nextPage()"
                    />
                </div>
                <div class="w-100">
                    <div v-if="receitasStore.dataPage.length <= 0">
                        <div class="flex flex-col rounded-lg p-5 m-1">
                            <span class="text-center p-5">
                                Não foram encontrados registros!
                            </span>
                        </div>
                    </div>
                    <div
                        class="w-100"
                        else
                        v-for="(item, key) in receitasStore.dataPage"
                    >
                        <div
                            class="flex flex-col rounded-lg p-10 m-1"
                            :key="key"
                        >
                            <div class="flex justify-between font-bold">
                                <span>{{
                                    receitasStore.formatDate(item.data)
                                }}</span>
                                <span>{{ "R$ " + item.valor.toString() }}</span>
                            </div>
                            <div class="">
                                <span class="">{{ item.descricao }}</span>
                            </div>
                            <div class="flex flex-row mt-1">
                                <div v-for="(tag, keytag) in item.tags">
                                    <div
                                        class="me-1 py-2 px-5 rounded-lg font-bold bg-green-800 bg-gradient-to-tr"
                                        :key="keytag"
                                    >
                                        {{ tag }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<style scoped></style>
