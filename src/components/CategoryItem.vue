<script setup>
import { defineProps } from 'vue'
const { item } = defineProps({
  item: Object
})
</script>

<template>
  <div
    class="category__card cursor-pointer flex items-center gap-4 p-4 border w-[30%] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] rounded-lg relative hover:border-blue hover:shadow-blue transition-all hover:text-blue group"
  >
    <div
      class="category__card_header group-hover:shadow-blue p-3 -left-8 absolute shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] rounded-lg bg-[#ffffff]"
    >
      <img :src="`${item.image}`" alt="" />
    </div>
    <div class="category__card_body flex items-center justify-between w-[100%]">
      <div class="category__card_body_title pl-[1.8rem]">
        <h2 class="text-black font-[600] text-[1.3rm]">{{ item.title }}</h2>
        <p class="text-[#8E9297]">{{ item.dates.length }} {{ $t('cat_item') }}</p>
      </div>
      <i class="bx bx-chevron-right text-[1.3rem]"></i>
    </div>
  </div>
</template>
