<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
const { item } = defineProps({
  item: Object
})
</script>

<template>
  <div
    class="products__card group shadow-xl cursor-pointer h-[470px] bg-white rounded-lg w-[20%] transition-all"
  >
    <RouterLink :to="`/products`">
      <div class="products__card_header">
        <img :src="item.image" class="w-full rounded-t-lg" :alt="item.title" />
      </div>
      <div class="products__card_body p-4">
        <span class="bg-[#EAEDF0] p-[.2rem] text-[#63676C] rounded-md">
          {{ item.region }}
        </span>
        <h2
          class="my-[.5rem] h-[70px] text-[17px] font-bold text-[#16191D] transition-all group-hover:text-blue"
        >
          {{ item.title }}
        </h2>
        <p class="transition-all my-[.5rem] h-[20px] text-[#8E9297]">{{ item.time }}</p>
        <span class="transition-all text-[1rem] font-bold text-[#8E9297]">{{ item.phone }}</span>
      </div>
      <div class="products__card_footer p-4">
        <p class="text-[24px] font-[700] transition-all">
          {{ item.price }}
          <span class="uppercase text-[1rem] text-[#388FF3] font-[400]">{{ item.priceType }}</span>
        </p>
      </div>
    </RouterLink>
  </div>
</template>
