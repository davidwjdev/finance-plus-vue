import { defineStore } from "pinia";

export const useModalStore = defineStore("modalStore", {
    state: () => ({
        isOpenModal: false
    }),
    actions: {
        toggleModal() {
            this.isOpenModal = !this.isOpenModal;
        }
    }
});
