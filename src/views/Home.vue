<template>
  <div class="bg-[#F0F3F7] py-[3rem]">
    <Categories :selectedValue=selectedValue :products="products" :categories="categories" />
  </div>
</template>
<script>
import Categories from '../components/Categories.vue'

export default {
  components: { Categories },
  props: {
    products: {
        type: Array,
        required: true
    },
    categories: {
        type: Array,
        required: true
    },
    selectedValue: {
        type: String,
        required: true
    }
  }
}
</script>
<style lang=""></style>
