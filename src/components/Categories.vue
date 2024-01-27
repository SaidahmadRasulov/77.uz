<template>
  <section class="category__section py-[1rem] bg-white mt-[2rem]">
    <div class="container w-[1200px] mx-auto">
      <div
        class="w-[50%] mx-auto top-[-3rem] relative category__search"
        v-if="this.selectedValue === 'Русский'"
      >
        <i class="bx bx-search absolute left-3 top-5 text-[1.2rem] text-[#D5D8DB]"></i>
        <input
          v-model="searchModel"
          type="search"
          id="search"
          class="border-2 rounded-[8px] outline-none w-full px-[2.5rem] py-[1rem]"
          placeholder="Чего вы ищите?"
          autocomplete="off"
        />
        <button
          class="py-[10px] px-[22px] rounded-[5px] top-[12%] absolute right-[.5rem] bg-[#16191D] text-white z-[2] hover:bg-white hover:border-2 hover:border-[black] hover:text-black"
        >
          {{ $t("search") }}
        </button>
      </div>
      <div class="category__title text-center">
        <h1 class="text-[2rem] font-[700] mb-[.5rem]">{{ $t('cat_title') }}</h1>
        <p class="text-[#8E9297]">Вы можете найти все категории, которые вам нужны от покупателя</p>
      </div>
      <div class="category__content flex flex-wrap justify-between gap-4 my-[3rem]">
        <div
          class="category__card cursor-pointer flex items-center gap-4 p-4 border w-[30%] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] rounded-lg relative hover:border-blue hover:shadow-blue transition-all hover:text-blue group"
          v-for="item in categories"
          :key="item"
        >
          <div
            class="category__card_header group-hover:shadow-blue p-3 -left-8 absolute shadow-[0px_0px_5px_0px_rgba(0,0,0,0.3)] rounded-lg bg-[#ffffff]"
          >
            <img :src="`${item.image}`" alt="" />
          </div>
          <div
            class="category__card_body flex items-center justify-between w-[100%]">
            <div class="category__card_body_title pl-[1.8rem]">
              <h2 class="text-black font-[600] text-[1.3rm]">{{ $t(item.title) }}</h2>
              <p class="text-[#8E9297]">{{ item.dates.length }} объявлений</p>
            </div>
            <i class="bx bx-chevron-right text-[1.3rem]"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      searchModel: ''
    }
  },
}
</script>
<style lang=""></style>
