<script setup lang="ts">
import ButtonVue from "../components/ui/Button.vue";
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
    <ModalVue :name="'Inserir'" v-if="modalStore.isOpenModal" />
    <div class="h-100 mb-32">
        <div class="p-10 bg-purple-700 flex justify-center">
            <div class="text-center container">
                <h1 class="font-bold font text-2xl text-slate-100">Receitas</h1>
            </div>
        </div>
        <div class="flex justify-center">
            <div
                class="text-purple-950 container p-5 flex lg:flex-row lg:justify-between md:flex-row md:justify-between sm:flex-col-reverse"
            >
                <div class="m-2 flex justify-end">
                    <ButtonVue
                        :name="'Adicionar'"
                        :icon="'plus'"
                        :isIcon="true"
                        @click="modalStore.toggleModal()"
                    />
                </div>
            </div>
        </div>

        <div class="flex justify-center">
            <div
                class="mx-5 p-5 bg-purple-950 rounded-lg text-slate-100 container xl:w-1/2 lg:w-1/2"
            >
                <div class="flex justify-between items-center mb-3">
                    <ButtonVue :name="''" :icon="'angle-left'" :isIcon="true" />
                    <span class="font-bold">Mes:</span>
                    <ButtonVue
                        :name="''"
                        :icon="'angle-right'"
                        :isIcon="true"
                    />
                </div>
                <div class="w-100">
                    <div class="">
                        <div v-for="(item, key) in receitasStore.data">
                            <div
                                class="flex flex-col rounded-lg p-5 m-1 odd:bg-purple-900 even:bg-purple-400"
                                :key="key"
                            >
                                <div class="flex justify-between font-bold">
                                    <span>{{ item.data }}</span>
                                    <span>{{ item.valor }}</span>
                                </div>
                                <div class="">
                                    <span class="">{{ item.descricao }}</span>
                                </div>
                                <div class="flex flex-row mt-1">
                                    <div v-for="(tag, keytag) in item.tags">
                                        <div
                                            class="me-1 p-1 rounded-lg font-bold bg-green-800 bg-gradient-to-tr"
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
        </div>
    </div>
</template>

<style scoped></style>
../store/receitas
