<script setup></script>
<template>
    <div class="w-[50%] mx-auto top-[-3rem] relative category__search">
        <i class="bx bx-search absolute left-3 top-5 text-[1.2rem] text-[#D5D8DB]"></i>
        <input
          type="search"
          id="search"
          class="border-2 rounded-[8px] outline-none w-full px-[2.5rem] py-[1rem]"
          :placeholder="$t('search_title')"
          autocomplete="off"
          ref="searchModel"
        />
        <button
          class="py-[10px] px-[22px] rounded-[5px] top-[12%] absolute right-[.5rem] bg-[#16191D] text-white z-[2] hover:bg-white hover:border-2 hover:border-[black] hover:text-black"
        >
          {{ $t('search') }}
        </button>
      </div>
</template>