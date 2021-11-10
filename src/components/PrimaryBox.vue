<template>
  <div class="flex items-center">
    <div :class="'rounded-md w-12 h-12 flex items-center justify-center mr-3'" :style="{'background-color': logoBg}">
      <img :src="logo ? logo : require('../assets/img/customer-1.svg')" alt="tobacco-img"/>
    </div>
    <div class="text-panel flex-col justify-center">
      <p class="text-sm mb-1"><span class="text-boxGrey font-normal mr-1">{{firstText}}</span><span class="text-labelColor font-bold">{{secondText}}</span></p>
      <p class="text-sm"><span class="text-btnBlue font-bold">{{thirdText}}</span><span class="mx-1 font-normal text-labelColor">{{fourthText}}</span><span v-if="fifthText" class="yellow-text text-yellowColor font-normal">{{fifthText}}</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    logoBg: String,
    logo: String,
    firstText: String,
    secondText: String,
    thirdText: String,
    fourthText: String,
    fifthText: String,
    fifthTextColor: String
  },
  name: 'PrimaryBox'
})
</script>
