<script setup lang="ts">
import ButtonLinkVue from "./ui/ButtonLink.vue";
import { useRoute } from "vue-router";

const route = useRoute();

function isSelected(route: any, link: string): boolean {
    return route.path === link ? true : false;
}
</script>

<template>
    <div
        class="py-5 bg-slate-900 flex justify-center shadow-zinc-950 shadow-lg"
    >
        <div class="container flex justify-center">
            <div
                class="bg-slate-700 rounded-lg flex flex-row shadow-zinc-950 shadow-inner"
            >
                <ButtonLinkVue
                    :name="'Home'"
                    :icon="'house'"
                    :selected="isSelected(route, '/')"
                    :link="'/'"
                />
                <ButtonLinkVue
                    :name="'Receitas'"
                    :icon="'arrow-up'"
                    :selected="isSelected(route, '/receitas')"
                    :link="'/receitas'"
                />
                <ButtonLinkVue
                    :name="'Despesas'"
                    :icon="'arrow-down'"
                    :selected="isSelected(route, '/despesas')"
                    :link="'/despesas'"
                />
                <ButtonLinkVue
                    :name="'Invest'"
                    :icon="'angles-up'"
                    :selected="isSelected(route, '/investimentos')"
                    :link="'/investimentos'"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
