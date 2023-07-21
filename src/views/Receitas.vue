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
                <div class="m-2">
                    <h2 class="font-bold">Últimas Receitas:</h2>
                </div>
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
                        <div class="font-bold grid grid-cols-6">
                            <div class="col-span-1">Dia</div>
                            <div class="col-span-3">Descrição</div>
                            <div class="col-span-2">Valor</div>
                        </div>
                        <div v-for="item in receitasStore.data">
                            <div class="grid grid-cols-6">
                                <div class="col-span-1">
                                    <span>{{ item.dia }}</span>
                                </div>
                                <div class="col-span-3">
                                    <span>{{ item.descricao }}</span>
                                </div>
                                <div class="col-span-2">
                                    <span>{{ item.valor }}</span>
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
