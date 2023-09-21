<template>
  <header @scroll="hideHeader" id="header" class="w-full mb-4 sticky top-0 z-10 translate-y-full-2" :class="{'translate-y-full': hideHeader}">
    <div class="container mx-auto">
      <nav class="p-4 grid grid-cols-3 gap-4">
        <div>
          <Logo :logo_text="'MoneyTracker'" />
        </div>
        <div class="flex items-center justify-center gap-4">
          <NavItem :text="'About us'" />
        </div>
        <div class="flex justify-end gap-4">
          <NavItem :text="'Sign in'" />
        </div>
      </nav>
    </div>
  </header>
  <main class="container mx-auto w-full">

    <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 z-0">
      <div class="blur-[106px] h-56 bg-gradient-to-br from-purple-800 to-purple-400 dark:from-blue-700"></div>
      <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
    </div>


    <div v-if="flashSuccess" class="success">
      {{ flashSuccess }}
    </div>
    <div class="mx-auto max-w-2xl py-16 sm:py-10 lg:py-20">
      <div class="w-full text-center">
        <h1>Simple way to manage personal finances</h1>
        <p>Manage your finances like a pro with our interactive diagrams and impressive visualizations. Keep your budget under control and save like never before.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link class="btn-primary">Create you free account</Link>
        </div>

      </div>
<!--      <div class="w-1/2">-->
<!--        <img class="opacity-50" src="https://static7.depositphotos.com/1228953/719/i/450/depositphotos_7194283-stock-photo-reduction.jpg" />-->
<!--      </div>-->
    </div>
    <div>
      <div class="flex gap-8 p-8">
        <div class="flex-1">
          <div class="m-2">
            <img class="rounded-lg shadow-lg shadow-indigo-500/50" src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2">
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-center gap-4">
          <h2>Money Doesn’t Have To Be Messy</h2>
          <p>Stop wondering where all your hard-earned dollars go. The YNAB Method for money management will help you grow your savings, and you’ll love how you spend your money.</p>
        </div>
      </div>
      <div class="flex gap-8 p-8">
        <div class="flex-1 flex flex-col justify-center gap-4">
          <h2>Simple money tracker</h2>
          <p>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
        </div>
        <div class="flex-1">
          <div class="m-2">
            <img class="rounded-lg shadow-lg shadow-indigo-500/50" src="https://moneylover.me/img/details/Transaction@4x.png">
          </div>
        </div>
      </div>
      <div class="flex gap-8 p-8">
        <div class="flex-1">
          <div class="m-2">
            <img class="rounded-lg shadow-lg shadow-indigo-500/50" src="https://moneylover.me/img/details/budget@4x.png">
          </div>
        </div>
        <div class="flex-1 flex flex-col justify-center gap-4">
          <h2>Painless budgeting</h2>
          <p>It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.</p>
        </div>
      </div>
      <div class="flex gap-8 p-8">
        <div class="flex-1 flex flex-col justify-center gap-4">
          <h2>The whole picture in one place</h2>
          <p>One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.</p>
        </div>
        <div class="flex-1">
          <div class="m-2">
            <img class="rounded-lg shadow-lg shadow-indigo-500/50" src="https://moneylover.me/img/details/REPORT@4x.png">
          </div>
        </div>
      </div>
    </div>
    <div class="mt-10">
      <div class="flex flex-col justify-center">
        <div class="text-center">
          <h2>Features our users love</h2>
        </div>
        <div class="grid grid-cols-3">
          <div class="featured-block">
            <div class="p-8 flex justify-center">
              <img src="https://moneylover.me/img/features/1.svg">
            </div>
            <h3>Multiple devices</h3>
            <div class="px-10 text-center">
              <p>Safely synchronize across devices with Bank standard security.</p>
            </div>
          </div>
          <div class="featured-block">
            <div class="p-8 flex justify-center">
              <img src="https://moneylover.me/img/features/1.svg">
            </div>
            <h3>Multiple devices</h3>
            <div class="px-10 text-center">
              <p>Safely synchronize across devices with Bank standard security.</p>
            </div>          </div>
          <div class="featured-block">
            <div class="p-8 flex justify-center">
              <img src="https://moneylover.me/img/features/1.svg">
            </div>
            <h3>Multiple devices</h3>
            <div class="px-10 text-center">
              <p>Safely synchronize across devices with Bank standard security.</p>
            </div>

          </div>
          <div class="featured-block">
            <div class="p-8 flex justify-center">
              <img src="https://moneylover.me/img/features/1.svg">
            </div>
            <h3>Multiple devices</h3>
            <div class="px-10 text-center">
              <p>Safely synchronize across devices with Bank standard security.</p>
            </div>          </div>
          <div class="featured-block">
            <div class="p-8 flex justify-center">
              <img src="https://moneylover.me/img/features/1.svg">
            </div>
            <h3>Multiple devices</h3>
            <div class="p-5 text-center">
              <p>Safely synchronize across devices with Bank standard security.</p>
            </div>          </div>
          <div class="featured-block">
            <div class="p-8 flex justify-center">
              <img src="https://moneylover.me/img/features/1.svg">
            </div>
            <h3>Multiple devices</h3>
            <div class="px-10 text-center">
              <p>Safely synchronize across devices with Bank standard security.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="my-10 border rounded-2xl bg-indigo-100 p-5">
      <div class="flex flex-col">
        <div class="text-center">
          <h2>How YNAB Works</h2>
          <p>Simplify your spending decisions without sacrificing the finer things in life, like fancy coffee drinks with hard-to-pronounce names..</p>
        </div>
        <div class="grid grid-cols-3">
          <div class="featured-block">
            <div class="p-8 flex justify-center">
              <img src="https://www-assets.youneedabudget.com/wp-content/uploads/2022/12/07195838/icon_home_phone-01.svg">
            </div>
            <h3>Multiple devices</h3>
            <div class="px-10 text-center">
              <p>Safely synchronize across devices with Bank standard security.</p>
            </div>
          </div>
          <div class="featured-block">
            <div class="p-8 flex justify-center">
              <img src="https://www-assets.youneedabudget.com/wp-content/uploads/2022/12/07195835/icon_home_budget-01.svg">
            </div>
            <h3>Multiple devices</h3>
            <div class="px-10 text-center">
              <p>Safely synchronize across devices with Bank standard security.</p>
            </div>
          </div>
          <div class="featured-block">
            <div class="p-8 flex justify-center">
              <img src="https://www-assets.youneedabudget.com/wp-content/uploads/2022/12/07195837/icon_home_emoji-01.svg">
            </div>
            <h3>Multiple devices</h3>
            <div class="px-10 text-center">
              <p>Safely synchronize across devices with Bank standard security.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="my-10 border rounded-2xl bg-sky-200 p-5 flex justify-center">
      <div class="flex flex-row w-9/12">
        <div class="flex-1 flex flex-col justify-start my-auto">
          <h3>Take your finances to the next levels!</h3>
          <p>Don't hesitate, money matters</p>
        </div>
        <div class="flex-1 flex justify-end">
          <img class="w-1/2" src="https://moneylover.me/img/MOCKUP@4x.png" alt="">
        </div>
      </div>
    </div>
<!--    <slot />-->
  </main>
  <footer class="footer_area bg-gray-700 relative z-10">
    <div class="p-5">
      <div class="p-4 grid grid-cols-3">
        <div>
          <Logo :logo_text="'MoneyTracker'" class="text-white" />
        </div>
        <div class="flex justify-center items-center gap-1">
          <NavItem :text="'About us'" class="text-white text-xs p-0"/>
          <NavItem :text="'About us'" class="text-white text-xs"/>
          <NavItem :text="'About us'" class="text-white text-xs"/>
          <NavItem :text="'About us'" class="text-white text-xs"/>
          <NavItem :text="'About us'" class="text-white text-xs"/>
        </div>
        <div class="flex justify-end items-center gap-1">
          <NavItem :text="'Facebook'" class="text-white" />
          <NavItem :text="'Facebook'" class="text-white" />
          <NavItem :text="'Facebook'" class="text-white" />
        </div>
      </div>

    </div>

  </footer>
</template>

<script setup>
import {Link, usePage } from '@inertiajs/vue3'
import {computed, handleError, onMounted, ref, watch} from 'vue'
import NavItem from "@/Component/UI/NavItem.vue";
import Logo from "@/Component/Logo.vue";
import { windowScrollPosition } from "@/Composables/windowScrollPosition.js"


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




</script>
