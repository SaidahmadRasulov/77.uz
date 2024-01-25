<script setup>
import { RouterView } from 'vue-router'
import customHeader from './components/customHeader.vue'
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
  <RouterView
    :products="date"
    :categories="categoryDate"
    :selectedValue="selectedValue"
    :langValue="langValue"
  />

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
      selectData: [
        {
          id: 1,
          title: 'Русский',
          val: 'rus',
          image: '../src/Assets/rusLang.png'
        },
        {
          id: 2,
          title: 'O’zbekcha',
          val: 'uz',
          image: '../src/Assets/uzbLang.png'
        }
      ]
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
