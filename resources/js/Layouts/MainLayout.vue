<template>
  <PageHeader :class="{'translate-y-full': hideHeader}" />
  <main class="container mx-auto w-full">
    <HeroSection />
    <Success v-if="flashSuccess" />
    <slot />
  </main>
  <PageFooter
      :main-menu-items="mainFooterMenuItems"
      :additional-menu-items="additionalFooterMenuItems"
      :description="'©2023 Lampo Licensing, LLC. All rights reserved.'"
  />
</template>

<script setup>
import {usePage } from '@inertiajs/vue3'
import {computed} from 'vue'
import { windowScrollPosition } from "@/Composables/windowScrollPosition.js"
import PageHeader from "@/Components/PageHeader.vue";
import HeroSection from "@/Components/HeroSection.vue";
import Success from "@/Components/Flash/Success.vue";
import PageFooter from "@/Components/PageFooter.vue";



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

const scrollPosition = windowScrollPosition()

const hideHeader = computed(
    () => scrollPosition.scrollPosition.value > 120,
)

const mainFooterMenuItems = [
  {
    id: 0,
    name: 'About us',
  },
  {
    id: 1,
    name: 'About us',
  },
  {
    id: 2,
    name: 'About us',
  },
  {
    id: 3,
    name: 'Bla bla',
  },
  {
    id: 4,
    name: 'About us',
  },
]

const additionalFooterMenuItems = [
  {
    id: 0,
    name: 'About us',
  },
  {
    id: 1,
    name: 'About us',
  },
  {
    id: 2,
    name: 'Bla bla',
  },
]


</script>
