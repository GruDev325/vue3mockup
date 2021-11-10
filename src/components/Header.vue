<template>
  <div class="sticky top-0 flex justify-between px-5 py-4 border border-solid border-gray-200 bg-white">
    <div class="mr-1.5 flex items-center">
      <img alt="Vue logo" src="../assets/img/logo.png" />
      <img class="ml-5" alt="Vue folder" src="../assets/img/folder.svg" />
      <span class="ml-3 text-lg font-bold text-labelColor">Projects</span>
    </div>
    <div class="mr-1.5 flex items-center">
      <img class="mr-4" alt="Vue bell" src="../assets/img/bell.svg" />
      <img class="mr-4" alt="Vue Rectangle" src="../assets/img/Rectangle.svg" />
      <img class="mr-4" alt="Vue customer" src="../assets/img/customer.svg" />
      <img class="mr-4" alt="Vue Vector" src="../assets/img/Vector.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: function () {
    return {
      value: this.btnValue
    }
  },
  name: 'Button'
})
</script>
