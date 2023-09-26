<script setup lang="ts">
import { useInputCurrencyStore } from "../../store/input-currency";
defineProps<{ name: string; id: string }>();
const emit = defineEmits();

const InputCurrencyStore = useInputCurrencyStore();

const handleInputChange = (event: Event) => {
    const value = (event.target as HTMLInputElement).value;
    InputCurrencyStore.formatValue(value);
    emit('update:modelValue', InputCurrencyStore.valor);
};
</script>
<template>
    <input  type="number" class="h-10 rounded-lg px-5" :value="InputCurrencyStore.valor" @input="handleInputChange"
        name="valor" id="valor" />
</template>
