<template>
  <div class="success">
    {{ message }}
  </div>
</template>

<script setup>
defineProps({
  message: String,
})
</script>
