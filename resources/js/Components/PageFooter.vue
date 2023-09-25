<template>
  <footer class="footer_area bg-gray-700 relative z-10">
    <div class="container mx-auto py-5">
      <div class="p-4 pb-10 flex flex-col justify-center items-center gap-5 xl:grid xl:grid-cols-12  border-b border-b-white">
        <div class="col-span-3">
          <Logo :logo_text="'MoneyTracker'" class="text-white" />
        </div>
        <FooterMenu :menu-items="mainMenuItems" />
        <SocialMenu />
      </div>
      <div class="mt-5 mb-10 flex justify-between">
        <FooterMenu :menu-items="additionalMenuItems" />
        <div>
          <span class="text-white">©2023 Lampo Licensing, LLC. All rights reserved.</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Logo from "@/Components/Logo.vue";
import FooterMenu from "@/Components/Menus/FooterMenu.vue";
import SocialMenu from "@/Components/Menus/SocialMenu.vue";

defineProps({
  mainMenuItems: Array,
  additionalMenuItems: Array,
  description: String,
})
</script>