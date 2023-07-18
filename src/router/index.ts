import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "../views/Home.vue";
import DespesasVue from "../views/Despesas.Vue";
import ReceitasVue from "../views/Receitas.Vue";
import InvestimentosVue from "../views/Investimentos.vue";

const routes = [
    {
        path: "/",
        component: HomeVue
    },
    {
        path: "/despesas",
        component: DespesasVue
    },
    {
        path: "/receitas",
        component: ReceitasVue
    },
    {
        path: "/investimentos",
        component: InvestimentosVue
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
