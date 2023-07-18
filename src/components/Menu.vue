<script setup lang="ts">
import ButtonVue from './Button.vue'
</script>

<template>
    <div>

        <div class=" py-5 bg-purple-700 flex justify-center">
            <div class="bg-purple-900 w-fit rounded-lg flex flex-row">
                <ButtonVue :name="'Home'" :icon="'house'" :selected="true" />
                <ButtonVue :name="'Home'" :icon="'house'" :selected="false" />
                <ButtonVue :name="'Home'" :icon="'house'" :selected="false" />

            </div>
        </div>
    </div>
</template>

<style scoped></style>
