<script setup>
import { data } from '../data/fake'
import ProductsItem from './ProductsItem.vue'
</script>

<template>
  <section class="products__section py-4">
    <div class="container w-[1200px] mx-auto">
      <div class="products__title text-center my-[1rem]">
        <h1 class="text-[2.3rem] font-[500]">{{ $t('adverb_title') }}</h1>
        <p class="mb-[3rem] text-[#8E9297]">
          {{ $t('adverb_subtitle') }}
        </p>
      </div>
      <div
        class="products__content flex items-center flex-wrap justify-between gap-[.2rem] gap-y-[3rem]"
      >
        <ProductsItem v-for="item in data" :item="item" />
      </div>
    </div>
  </section>
</template>

<script></script>

<style lang=""></style>
