<script setup>
import { RouterView } from 'vue-router'
import CustomHeader from './components/layout/customHeader.vue'
</script>

<template>
  <CustomHeader />
  <RouterView />

</template>

<script>
export default {
  data() {
    return {
      date: [],
      categoryDate: [],
      selectedValue: 'Русский',
      langValue: 'rus',
      selectedImage: '../src/Assets/rusLang.png',
      boolean: false,
      
    }
  },
  components: {
    RouterView
  },
  mounted() {
    this.loadData()
  },
  watch: {
    selectedValue(newVal) {
      this.handleUpdate(newVal)
    }
  },
  methods: {
    handleToggle() {
      this.boolean = !this.boolean
    },
    handleSet(value) {
      this.selectedValue = value
      this.boolean = false
    },
    handleUpdate(value) {
      const selectedItem = this.selectData.find((item) => item.title === value)
      if (selectedItem) {
        this.selectedImage = selectedItem.image
      }
      console.log(value)
    },
    async loadData(lang = this.langValue) {
      try {
        const langData = await import(`./locale/${lang}.json`)
        this.date = await langData.data
        this.categoryDate = await langData.categories
      } catch (error) {
        console.error('Error loading data:', error)
      }
    }
  }
}
</script>

<style></style>
