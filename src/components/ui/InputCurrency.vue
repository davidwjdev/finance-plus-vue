<script setup lang="ts">
import { useInputCurrencyStore } from "../../store/input-currency";

const InputCurrencyStore = useInputCurrencyStore();

const handleInputChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    InputCurrencyStore.formatValue(value);
};
</script>
<template>
    <input
        type="number"
        class="h-10 rounded-lg px-5"
        :value="InputCurrencyStore.valor"
        @input="handleInputChange"
    />
</template>
