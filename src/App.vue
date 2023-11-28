<script setup>
import { RouterView } from 'vue-router'
import customHeader from './components/customHeader.vue'
import products from './data/products.json'
import categories from './data/categories.json'
</script>

<template>
  <customHeader
    @update="handleUpdate"
    :selectedValue="selectedValue"
    @toggle="handleToggle()"
    @set="handleSet"
    :selectData="selectData"
    :boolean="boolean"
    :selectedImage="selectedImage"
  />
  <RouterView :products="date" :categories="categoryDate" :selectedValue="selectedValue" />
</template>

<script>
export default {
  data() {
    return {
      date: products.data,
      categoryDate: categories.categories,
      selectedValue: 'Русский',
      selectedImage: '../src/Assets/rusLang.png',
      boolean: false,
      selectData: [
        {
          id: 1,
          title: 'Русский',
          image: '../src/Assets/rusLang.png'
        },
        {
          id: 2,
          title: 'O’zbekcha',
          image: '../src/Assets/uzbLang.png'
        }
      ]
    }
  },
  components: {
    RouterView
  },
  mounted() {
    console.log(this.categoryDate)
  },
  watch: {
    selectedValue(newVal) {
      this.handleUpdate(newVal)
      console.log(newVal)
    }
  },
  methods: {
    handleToggle() {
      this.boolean = !this.boolean
    },
    handleSet(value) {
      this.selectedValue = value
      this.boolean = false
      console.log(this.selectedValue)
    },
    handleUpdate(value) {
      const selectedItem = this.selectData.find((item) => item.title === value)
      if (selectedItem) {
        this.selectedImage = selectedItem.image
      }
    }
  }
}
</script>

<style></style>
