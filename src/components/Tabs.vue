<template>
  <div class="tabs">
    <div v-if="searchPlaceholder" class="flex justify-end py-5">
      <label for="search-box" class="flex text-sm border border-gray-200 rounded-md overflow-hidden pr-3 cursor-pointer">
        <input id="search-box" class="py-2 px-3 ml-auto border-0 outline-none" type="text" :placeholder="searchPlaceholder">
        <img src="../assets/img/search.svg" alt="search-icon"/>
      </label>
    </div>
    <div class="flex border-b">
      <div
        class="tab flex items-center border-0 justify-center cursor-pointer mr-10 pb-3"
        :class="active === tab ? 'border-b-2 border-btnBlue text-btnBlue' : ''"
        v-for="(tab, index) in tabsNames"
        :key="index"
        @click="changeTab(tab)"
      >
        {{tab}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Tabs',
  props: {
    tabsNames: {
      type: Array as PropType<Array<string>>,
      required: true
    },
    searchPlaceholder: String
  },
  data: function () {
    return {
      active: this.tabsNames && this.tabsNames.length > 0 ? this.tabsNames[0] as string : ''
    }
  },
  emits: ['changed'],
  methods: {
    changeTab: function (tab: string) {
      this.active = tab
      this.$emit('changed', tab)
    }
  }
})
</script>
