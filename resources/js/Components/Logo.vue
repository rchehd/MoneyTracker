<template>
  <div class="logo text-black font-black text-3xl">
    <Link>{{ logo_text }}</Link>
  </div>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";

defineProps({
  logo_text: String,
})
</script>