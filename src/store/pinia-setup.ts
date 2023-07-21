import { createPinia } from "pinia";
import { App } from "vue";
import { useModalStore } from "./modal";
import { useReceitasStore } from "./receitas";
import { useInputCurrencyStore } from "./input-currency";

export const pinia = createPinia();

const modalStore = {
    install: (app: App) => {
        app.provide("modalStore", useModalStore());
    }
};

const receitasStore = {
    install: (app: App) => {
        app.provide("receitasStore", useReceitasStore());
    }
};

const inputCurrencyStore = {
    install: (app: App) => {
        app.provide("inputCurrencyStore", useInputCurrencyStore());
    }
};

export function setupPinia(app: App<Element>) {
    app.use(modalStore);
    app.use(receitasStore);
    app.use(inputCurrencyStore);

    app.use(pinia);
}
