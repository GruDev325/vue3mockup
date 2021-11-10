<template>
  <div>
    <input type="submit" :value="value" :class="'button w-full cursor-pointer flex justify-center border rounded-md text-base font-semibold'"
    :style="{'background-color': background, 'color': fontColor, 'padding': padding + 'px'}" :disabled="disabled"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    value: String,
    padding: String,
    background: String,
    fontColor: String,
    disabled: Boolean
  },
  name: 'Button'
})
</script>
