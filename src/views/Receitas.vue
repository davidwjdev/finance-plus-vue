<script setup lang="ts">
import ButtonVue from "../components/ui/Button.vue";
import ModalVue from "../components/ui/Modal.vue";
import { useModalStore } from "../store/modal";

const modalStore = useModalStore();
</script>

<template>
    <ModalVue :name="'Inserir'" v-if="modalStore.isOpenModal" />
    <div class="h-100">
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
                class="mx-5 p-5 bg-purple-950 rounded-lg text-slate-100 container"
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
                    <table class="table-auto">
                        <thead class="font-bold">
                            <th>Dia</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>15</td>
                                <td>Teste</td>
                                <td>R$ 15,00</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>tetetetetete</td>
                                <td>R$ 15,00</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>tetetetetete</td>
                                <td>R$ 15,00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
