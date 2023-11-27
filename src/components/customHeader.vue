<template>
  <header class="border-b-2 bg-[#FFFFFFEB]">
    <div class="container w-[1200px] mx-auto">
      <div class="navbar py-5 flex items-center justify-between relative">
        <div class="navbar__select flex items-center gap-10">
          <div class="navbar__select_content">
            <div class="language_show flex items-center gap-2 relative cursor-pointer" @click="handleToggle()">
              <div class="w-[110px] flex items-center gap-3">
                <img :src="selectedImage" alt="" />
              <p>{{ selectedValue }}</p>
              </div>
              <i v-if="!this.boolean" class="bx bx-chevron-up text-[20px]"></i>
              <i v-else class="bx bx-chevron-down text-[#388FF3] text-[20px]"></i>
            </div>
            <div v-if="this.boolean" class="absolute left-0 shadow-2xl rounded-xl p-4 bg-white">
                <div class="language_content" v-for="item in selectData" :key="item.id">
                    <div class="language_item flex items-center gap-3 mb-4 cursor-pointer" @click="setValue(item.title)">
                      <img :src="item.image" alt="" />
                      <p>{{ item.title }}</p>
                    </div>
                  </div>
            </div>
          </div>
          <p class="flex items-center gap-3">
            <a href="tel:+998 71 200 70 07" class="text-[1.2rem]">
              <i class="bx bx-phone"></i>
            </a>
            +998 71 200 70 07
          </p>
        </div>
        <div
          class="navbar__logo p-4 bg-white shadow-2xl rounded-2xl rounded-t-none absolute translate-x-[-50%] left-[50%] hover:cursor-pointer"
        >
          <RouterLink to="/">
            <img src="../Assets/Logo.png" alt="" />
          </RouterLink>
        </div>
        <div class="navbar__sign">
          <button class="flex items-center gap-3 p-2 bg-[#EAEDF0] rounded-lg hover:bg-[#2c6094] hover:text-white transition-all">
            Войти
            <i class="bx bx-log-in"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
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
  watch: {
    selectedValue(newVal) {
      this.updateSelected(newVal)
    }
  },
  methods: {
    setValue(value) {
      this.selectedValue = value;
      this.boolean = false
    },
    updateSelected(value) {
      const selectedItem = this.selectData.find((item) => item.title === value)
      if (selectedItem) {
        this.selectedImage = selectedItem.image
      }
    },
    handleToggle() {
        this.boolean = !this.boolean;
        console.log(this.boolean)
    }
  }
}
</script>

<style lang=""></style>
