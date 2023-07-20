import { createPinia } from "pinia";
import { App } from "vue";
import { useModalStore } from "./modal";
import { useFormReceitasStore } from "./form-receitas";
import { useInputCurrencyStore } from "./input-currency";

export const pinia = createPinia();

const modalStore = {
    install: (app: App) => {
        app.provide("modalStore", useModalStore());
    }
};

const formReceitasStore = {
    install: (app: App) => {
        app.provide("formReceitasStore", useFormReceitasStore());
    }
};

const inputCurrencyStore = {
    install: (app: App) => {
        app.provide("inputCurrencyStore", useInputCurrencyStore());
    }
};

export function setupPinia(app: App<Element>) {
    app.use(modalStore);
    app.use(formReceitasStore);
    app.use(inputCurrencyStore);

    app.use(pinia);
}
