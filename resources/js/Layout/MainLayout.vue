<template>
  <header class="border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 bg-white w-full mb-4">
    <div class="container mx-auto">
      <nav class="p-4 flex items-center justify-between">
        test
      </nav>
    </div>
  </header>
  <main class="container mx-auto w-full">
    <div v-if="flashSuccess" class="success">
      {{ flashSuccess }}
    </div>
    <slot />
  </main>
</template>

<script setup>
import {Link, usePage } from '@inertiajs/vue3'
import {computed} from 'vue'

// page.props.value.flash.success
const page = usePage()
const flashSuccess = computed(
  () => page.props.flash.success,
)
const user = computed(
  () => page.props.user,
)

const notificationCount = computed(
  () => page.props.user.notificationCount,
)
</script>
