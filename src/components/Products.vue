<template>
  <section class="products__section py-4">
    <div class="container w-[1200px] mx-auto">
      <div class="products__title text-center my-[1rem]" v-if="this.selectedValue === 'Русский'">
        <h1 class="text-[2.3rem] font-[500]">Объявления</h1>
        <p class="mb-[3rem] text-[#8E9297]">Вы можете найти все категории, которые вам нужны от покупателя</p>
      </div>
      <div class="products__title text-center my-[1rem]" v-else>
        <h1 class="text-[2.3rem] font-[500]">E'lonlar</h1>
        <p class="mb-[3rem] text-[#8E9297]">Sizga kerak bo'lgan barcha toifalarni xaridordan topishingiz mumkin</p>
      </div>
      <div class="products__content flex items-center flex-wrap justify-between gap-[.2rem] gap-y-[3rem]"
      >
      <div class="products__card group shadow-xl cursor-pointer h-[470px] bg-white rounded-lg w-[20%] transition-all"
          v-for="item in products">
          <RouterLink :to="`/products/${item.id}`">
            <div class="products__card_header">
                <img :src="`${item.image}`" class="w-full rounded-t-lg" alt="" />
              </div>
              <div class="products__card_body p-4" v-if="this.selectedValue === 'Русский'">
                <span class="bg-[#EAEDF0] p-[.2rem] text-[#63676C] rounded-md"
                  >г. {{ item.region }}</span
                >
                <h2
                  class="my-[.5rem] h-[70px] text-[17px] font-bold text-[#16191D] transition-all group-hover:text-[#388FF3]"
                >
                  {{ item.title_ru }}
                </h2>
                <p class=" transition-all group-hover:text-[#388FF3] my-[.5rem] h-[20px] text-[#8E9297]">{{ item.time }}</p>
                <span class=" transition-all group-hover:text-[#388FF3] text-[1rem] font-bold text-[#8E9297]">{{ item.phone }}</span>
              </div>
              <div class="products__card_body p-4" v-else>
                <span class="bg-[#EAEDF0] p-[.2rem] text-[#63676C] rounded-md"
                  >г. {{ item.region }}</span
                >
                <h2
                  class="my-[.5rem] h-[70px] text-[17px] font-bold text-[#16191D] transition-all group-hover:text-[#388FF3]"
                >
                  {{ item.title_uz }}
                </h2>
                <p class="my-[.5rem] h-[20px]">{{ item.time }}</p>
                <span>{{ item.phone }}</span>
              </div>
              <div class="products__card_footer p-4">
                <p class="text-[24px] font-[700] transition-all group-hover:text-[#388FF3]">
                  {{ item.price }}
                  <span class="uppercase text-[1rem] text-[#388FF3] font-[400]">{{
                    item.priceType
                  }}</span>
                </p>
              </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
<script>

import { RouterLink } from 'vue-router'

export default {
  props: {
    products: {
      type: Array,
      required: true
    },
    selectedValue: {
      type: String,
      required: true
    }
  },
  components: {
    RouterLink
  }
}
</script>
<style lang=""></style>
