<template>
  <div class="text-gray-600 dark:text-gray-300 block md:px-4 transition hover:text-primary">
    <Link :href="link" >{{ text }}</Link>
  </div>
</template>


<script setup>
import {Link} from "@inertiajs/vue3";

const props = defineProps({
  text: String,
  link: String,
})
</script>