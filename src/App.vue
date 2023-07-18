<script setup lang="ts">
import HomeVue from './views/Home.vue';
import MenuVue from './components/Menu.vue';

</script>

<template>
  <div class="flex lg:flex-col md:flex-col sm:flex-col-reverse">
    <MenuVue class="lg:sticky lg:top-0 md:sticky md:top-0 sm:fixed sm:bottom-0 sm:w-full" />
    <HomeVue />
  </div>
</template>

<style scoped></style>
