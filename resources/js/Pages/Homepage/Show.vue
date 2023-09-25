<template>
  <Banner />
  <div>
    <WideBlock v-for="block in blocks" :key="block.id" :title="block.title" :text="block.text" :img="block.img" :class="{'flex-row-reverse': reverseBlock(block.id)}"/>
  </div>
  <div class="mt-10">
    <div class="flex flex-col justify-center">
      <div class="text-center">
        <h2>Features our users love</h2>
      </div>
      <div class="grid grid-cols-3">
        <FeatureItem v-for="block in featureBlocks" :key="block.id" :title="block.title" :text="block.text" :img="block.img" />
      </div>
    </div>
  </div>

  <HowWorksBlock :title="howWorks.title" :text="howWorks.text">
    <FeatureItem v-for="item in howWorks.items" :key="item.id" :title="item.title" :text="item.text" :img="item.img"/>
  </HowWorksBlock>

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
</template>

<script setup>

import Banner from "@/Components/Banner.vue";
import FeatureItem from "@/Components/FeatureItem.vue";
import HowWorksBlock from "@/Components/Blocks/HowWorksBlock.vue";
import WideBlock from "@/Components/Blocks/WideBlock.vue";

const blocks = [
  {
    id: 0,
    title: 'Money Doesn’t Have To Be Messy',
    text: 'Stop wondering where all your hard-earned dollars go. The YNAB Method for money management will help you grow your savings, and you’ll love how you spend your money.',
    img: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 1,
    title: 'Simple money tracker',
    text: 'It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.',
    img: 'https://moneylover.me/img/details/Transaction@4x.png',
  },
  {
    id: 2,
    title: 'Painless budgeting',
    text: 'It takes seconds to record daily transactions. Put them into clear and visualized categories such as Expense: Food, Shopping or Income: Salary, Gift.',
    img: 'https://moneylover.me/img/details/budget@4x.png',
  },
  {
    id: 3,
    title: 'The whole picture in one place',
    text: 'One report to give a clear view on your spending patterns. Understand where your money comes and goes with easy-to-read graphs.',
    img: 'https://moneylover.me/img/details/REPORT@4x.png',
  }
]

const reverseBlock = (number) => {
  return number % 2 != 0;
}


const featureBlocks = [
  {
    id: 0,
    title: 'Multiple devices',
    text: 'Safely synchronize across devices with Bank standard security.',
    img: 'https://moneylover.me/img/features/1.svg',
  },
  {
    id: 1,
    title: 'Multiple devices',
    text: 'Safely synchronize across devices with Bank standard security.',
    img: 'https://moneylover.me/img/features/1.svg',
  },
  {
    id: 2,
    title: 'Multiple devices',
    text: 'Safely synchronize across devices with Bank standard security.',
    img: 'https://moneylover.me/img/features/1.svg',
  },{
    id: 3,
    title: 'Multiple devices',
    text: 'Safely synchronize across devices with Bank standard security.',
    img: 'https://moneylover.me/img/features/1.svg',
  },
  {
    id: 4,
    title: 'Multiple devices',
    text: 'Safely synchronize across devices with Bank standard security.',
    img: 'https://moneylover.me/img/features/1.svg',
  },{
    id: 5,
    title: 'Multiple devices',
    text: 'Safely synchronize across devices with Bank standard security.',
    img: 'https://moneylover.me/img/features/1.svg',
  },

]

const howWorks = {
  title: 'How YNAB Works',
  text: 'Simplify your spending decisions without sacrificing the finer things in life, like fancy coffee drinks with hard-to-pronounce names.',
  items: [
    {
      id: 0,
      title: 'Multiple devices',
      text: 'Safely synchronize across devices with Bank standard security.',
      img: 'https://www-assets.youneedabudget.com/wp-content/uploads/2022/12/07195838/icon_home_phone-01.svg',
    },
    {
      id: 1,
      title: 'Multiple devices',
      text: 'Safely synchronize across devices with Bank standard security.',
      img: 'https://www-assets.youneedabudget.com/wp-content/uploads/2022/12/07195835/icon_home_budget-01.svg',
    },
    {
      id: 2,
      title: 'Multiple devices',
      text: 'Safely synchronize across devices with Bank standard security.',
      img: 'https://www-assets.youneedabudget.com/wp-content/uploads/2022/12/07195837/icon_home_emoji-01.svg',
    },
  ]
}

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