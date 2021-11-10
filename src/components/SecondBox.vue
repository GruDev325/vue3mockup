<template>
  <div class="second-box p-5 border border-gray-200 rounded-lg overflow-hidden">
    <div class="logo-box flex items-center">
      <div class="rounded-md w-12 h-12 flex items-center justify-center bg-greenColor mr-3">
        <img src="../assets/img/tobacco.svg" alt="tobacco-img"/>
      </div>
      <p class="text-panel flex justify-center items-center text-labelColor text-sm font-bold">
        <span class="mr-2">{{titleText}}</span><img src="../assets/img/star.svg" alt="tobacco-img"/>
      </p>
    </div>
     <p class="mt-1 mb-5 text-boxGrey text-sm font-normal">{{logoText}}</p>
     <div class="flex items-center">
       <div class="flex items-center mr-6 text-sm cursor-pointer" @click="$emit('updateFeedback', titleText, 'favorCount')">
         <img src="../assets/img/heart.svg" class="mr-2" alt="heart-img"/>
         <span>{{favorCount}}</span>
       </div>
       <div class="flex items-center mr-6 text-sm cursor-pointer" @click="$emit('updateFeedback', titleText, 'visitedCount')">
         <img src="../assets/img/eye.svg" class="mr-2" alt="eye-img"/>
         <span>{{visitedCount}}</span>
       </div>
       <div class="flex items-center text-sm cursor-pointer" @click="$emit('updateFeedback', titleText, 'userCount')">
         <img src="../assets/img/users.svg" class="mr-2" alt="users-img"/>
         <span>{{userCount}}</span>
       </div>
     </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    titleText: String,
    logoText: String,
    favorCount: Number,
    visitedCount: Number,
    userCount: Number
  },
  name: 'SecondBox'
})
</script>
