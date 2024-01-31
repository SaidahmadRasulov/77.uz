<template>
  <div class="bg-[#F0F3F7] py-[3rem]">
    <Categories />
    <Products />
  </div>
</template>
<script>
import Categories from '../components/Categories.vue'
import Products from '../components/Products.vue';

export default {
  components: { Categories, Products },
}
</script>
<style lang=""></style>
