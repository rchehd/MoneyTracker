<template>
  <div class="flex gap-8 p-8">
    <div class="flex-1">
      <div class="m-2">
        <img class="rounded-lg shadow-lg shadow-indigo-500/50" :src="img">
      </div>
    </div>
    <div class="flex-1 flex flex-col justify-center gap-4">
      <h2>{{ title }}</h2>
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