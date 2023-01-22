<script setup lang="ts">
  import { Like, Pic } from '@vect-ui/icons'
  import { ref } from 'vue'

  const value = ref('1')
</script>

<template>
  <div class="play-container">
    <VInput v-model="value" :allow-clear="true">
      <!-- <template #prepend> prepend </template>
      <template #append> append </template> -->
      <template #prefix><VIcon :icon="Pic" /></template>
      <template #suffix><VIcon :icon="Like" /></template>
    </VInput>
  </div>
</template>

<style lang="less">
  html,
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    #play {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .play-container {
    width: 400px;
  }
</style>
