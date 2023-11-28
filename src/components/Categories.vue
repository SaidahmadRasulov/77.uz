<template>
  <section class="category__section">
    <div class="container w-[1200px] mx-auto">
      <div class="category__search"></div>
      <div class="category__title"></div>
      <div class="category__content">
        <div class="category__card" v-for="item in categories">
          <div class="category__card_header">
            <img :src="`${item.image}`" alt="" />
          </div>
          <div class="category__card_body" v-if="this.selectedValue == 'Русский'">
            <h2>{{ item.title_ru }}</h2>
            <p>
              {{ item.dates.length }}
            </p>
          </div>
          <div class="category__card_body" v-else>
            <h2>{{ item.title_uz }}</h2>
            <p>
              {{ item.dates.length }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
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
