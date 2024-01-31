<script setup>
import { ref } from 'vue'
import { categories } from '../data/fake'
import CategoryItem from './CategoryItem.vue'
import Search from './widgets/Search.vue'
const searchModel = ref()
</script>

<template>
  <section class="category__section py-[1rem] bg-white mt-[2rem]">
    <div class="container w-[1200px] mx-auto">
      <Search />
      <div class="category__title text-center">
        <h1 class="text-[2rem] font-[700] mb-[.5rem]">{{ $t('cat_title') }}</h1>
        <p class="text-[#8E9297]">{{ $t('cat_subtitle') }}</p>
      </div>
      <div class="category__content flex flex-wrap justify-between gap-4 my-[3rem]">
        <CategoryItem v-for="item in categories" :item="item" />
      </div>
    </div>
  </section>
</template>
