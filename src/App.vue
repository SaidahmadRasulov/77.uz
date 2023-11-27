<script setup>
import { RouterView } from 'vue-router'
import customHeader from './components/customHeader.vue'
import products from './data/products.json'
</script>

<template>
  <customHeader />
  <RouterView />
</template>

<script>
export default {
  data() {
    return {
      products: products.data
    }
  },
  components: {
    RouterView
  },
  mounted() {
    console.log(this.products)
  }
}
</script>

<style></style>
