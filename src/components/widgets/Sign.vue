<script setup>
let { formBoolean } = defineProps({
  formBoolean: Boolean
})
function showRegistForm() {
  formBoolean = true
  console.log(formBoolean)
}
</script>
<template>
  <div class="navbar__sign">
    <button
      class="flex items-center gap-3 p-2 bg-[#EAEDF0] rounded-lg hover:bg-[#2c6094] hover:text-white transition-all"
      @click="showRegistForm"
    >
      {{ $t('enter') }}
      <i class="bx bx-log-in"></i>
    </button>
  </div>
</template>
