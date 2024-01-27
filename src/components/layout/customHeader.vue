<script setup>
import { data } from '../../data/fake'
import { onMounted } from 'vue'
let boolean = false
const selectData = [
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

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      this.$refs.navbarRef.classList.add('custom_fixed')
    } else {
      this.$refs.navbarRef.classList.remove('custom_fixed')
    }
  })
})
</script>

<template>
  <header class="border-b-2 bg-[#FFFFFFEB]" ref="navbarRef">
    <div class="container w-[1200px] mx-auto">
      <div class="navbar py-5 flex items-center justify-between relative">
        <div class="navbar__select flex items-center gap-10">
          <div class="navbar__select_content">
            <div
              class="language_show flex items-center gap-2 relative cursor-pointer"
              @click="handleToggle"
            >
              <div class="w-[110px] flex items-center gap-3">
                <img :src="selectedImage" alt="" />
                <p :class="{ 'text-blue': boolean }">{{ selectedValue }}</p>
              </div>
              <i v-if="!boolean" class="bx bx-chevron-up text-[20px]"></i>
              <i v-else class="bx bx-chevron-down text-blue text-[20px]"></i>
            </div>
            <div
              v-if="boolean"
              class="transition-all delay-100 duration-300 absolute left-0 shadow-2xl rounded-xl px-4 bg-white"
            >
              <div class="language_content" v-for="item in selectData" :key="item.id">
                <div
                  class="language_item flex items-center gap-3 mb-2 cursor-pointer hover:text-blue transition-all"
                  @click="setValue(item.title)"
                >
                  <img :src="item.image" :alt="item.title" />
                  <p>{{ item.title }}</p>
                </div>
              </div>
            </div>
          </div>
          <p class="flex items-center gap-3">
            <a
              href="tel:+998 71 200 70 07"
              class="text-[1.2rem] hover:text-blue flex items-center gap-4 transition-all delay-100 duration-300"
            >
              <i class="bx bx-phone"></i>
              +998 71 200 70 07
            </a>
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
          <button
            class="flex items-center gap-3 p-2 bg-[#EAEDF0] rounded-lg hover:bg-[#2c6094] hover:text-white transition-all"
          >
            {{ $t('enter') }}
            <i class="bx bx-log-in"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
