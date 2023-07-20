import { defineStore } from "pinia";

export const useInputCurrencyStore = defineStore("inputCurrencyStore", {
    state: () => ({
        valor: ""
    }),
    actions: {
        formatValue(value: string): string {
            const regex = /[^0-9]/gim;
            const result = value.replace(regex, "");
            if (result) {
                const virgula = result.slice(0, -2) + "." + result.slice(-2);
                this.valor = virgula;
            }
            return this.valor;
        }
    }
});
