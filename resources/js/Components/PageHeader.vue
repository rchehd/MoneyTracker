<template>
  <header id="header" class="w-full mb-4 sticky top-0 z-10 translate-y-full-2" :class="{'translate-y-full': hideHeader}">
    <div class="container mx-auto">
      <nav class="p-4 grid grid-cols-3 gap-4">
        <div>
          <div class="logo text-black font-black text-3xl">
            <Link>MoneyTracker</Link>
          </div>
        </div>
        <div class="flex items-center justify-center gap-4">
          <div class="text-gray-600 dark:text-gray-300 block md:px-4 transition hover:text-primary">
            <Link :href="link" >About us</Link>
          </div>
        </div>
        <div class="flex justify-end gap-4">
          <div class="text-gray-600 dark:text-gray-300 block md:px-4 transition hover:text-primary">
            <Link :href="link" >Sign in</Link>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import {Link} from "@inertiajs/vue3";
</script>