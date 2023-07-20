import moment from "moment";
import { defineStore } from "pinia";

export const useFormReceitasStore = defineStore("formReceitasStore", {
    state: () => ({
        data: {
            data: moment(),
            nome: "",
            valor: "",
            tags: ""
        }
    }),
    actions: {
        clearForm() {}
    }
});
