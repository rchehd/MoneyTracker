<template>
  <IndigoBox>
    <div class="text-center">
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <div class="grid grid-cols-3">
        <slot />
      </div>
    </div>
  </IndigoBox>
</template>

<script setup>

import IndigoBox from "@/Components/UI/IndigoBox.vue";
import FeatureItem from "@/Components/FeatureItem.vue";

defineProps({
  title: String,
  text: String,
})
</script>