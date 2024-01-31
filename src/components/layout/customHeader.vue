<script setup>
import { onMounted, ref } from 'vue'
import Sign from '../widgets/Sign.vue'
import SignForm from '../widgets/SignForm.vue'
const navbarRef = ref()
let formBoolean = false
let language = null
let localObj = {
  id: Date.now(),
  title: null,
  image: null,
  val: null
}
const storedObj = JSON.parse(localStorage.getItem('obj'))
const boolean = ref(false)
const selectData = [
  {
    id: 1,
    title: 'Русский',
    val: 'ru',
    image: '../src/Assets/rusLang.png'
  },
  {
    id: 2,
    title: 'O’zbekcha',
    val: 'uz',
    image: '../src/Assets/uzbLang.png'
  }
]

function handleToggle() {
  boolean.value = !boolean.value
}

function setValue(obj) {
  localObj.title = obj.title
  const selectedItem = selectData.find((item) => item.title === obj.title)
  if (selectedItem) {
    localObj = selectedItem
    localStorage.setItem('obj', JSON.stringify(localObj))
  }
  language = obj.val
  if (language !== null) {
    localStorage.setItem('lang', language)
    window.location.reload()
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbarRef.classList.add('custom_fixed')
    } else {
      navbarRef.classList.remove('custom_fixed')
    }
  })
})
</script>

<template>
  <header class="border-b-2 bg-[#FFFFFFEB]" ref="navbarRef">
    <div class="container w-[1200px] mx-auto">
      <div class="navbar py-5 flex items-center justify-between relative">
        <div class="navbar__select flex items-center gap-10">
          <div class="navbar__select_content relative">
            <div
              class="language_show flex items-center gap-2 relative cursor-pointer"
              @click="handleToggle"
            >
              <div class="w-[110px] flex items-center gap-3">
                <img :src="storedObj.image" alt="" />
                <p :class="{ 'text-blue': boolean }">{{ storedObj.title }}</p>
              </div>
              <i
                class="text-[20px]"
                :class="{ 'bx bx-chevron-up': !boolean, 'bx bx-chevron-down text-blue': boolean }"
              ></i>
            </div>
            <div
              v-if="boolean"
              @click="handleToggle"
              class="transition-all delay-100 duration-300 absolute left-0 shadow-2xl rounded-xl px-4 bg-white"
            >
              <div class="language_content" v-for="item in selectData" :key="item.id">
                <div
                  class="language_item flex items-center gap-3 mb-2 cursor-pointer hover:text-blue transition-all"
                  @click="setValue(item)"
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
            <img src="../../Assets/logo.png" alt="" />
          </RouterLink>
        </div>
        <Sign :formBoolean="formBoolean" />
      </div>
    </div>
  </header>
  <section v-if="formBoolean">
    <SignForm />
  </section>
</template>
