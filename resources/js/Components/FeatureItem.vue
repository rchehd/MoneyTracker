<template>
  <div class="featured-block">
    <div class="p-8 flex justify-center">
      <img :src="img">
    </div>
    <h3>{{ title }}</h3>
    <div class="px-10 text-center">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: String,
  text: String,
  img: String,
})

</script>