<template>
  <div class="col-span-6 flex justify-center items-center gap-2 xl:gap-1">
    <IndigoLink v-for="item in menuItems" :key="item.id" :text="item.name" class="text-white text-xs p-0"/>
  </div>
</template>

<script setup>
import IndigoLink from "@/Components/Links/IndigoLink.vue";

defineProps({
  menuItems: Array,
})
</script>