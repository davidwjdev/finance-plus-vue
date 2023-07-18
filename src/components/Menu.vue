<script setup lang="ts">
import ButtonLinkVue from "./ui/ButtonLink.vue";
import { useRoute } from "vue-router";

const route = useRoute();

function isSelected(route: any, link: string): boolean {
    return route.path === link ? true : false;
}
</script>

<template>
    <div class="py-5 bg-purple-700 flex justify-center">
        <div class="container flex justify-center">
            <div class="bg-purple-900 w-fit rounded-lg flex flex-row">
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
                    :name="'Investimentos'"
                    :icon="'angles-up'"
                    :selected="isSelected(route, '/investimentos')"
                    :link="'/investimentos'"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
