<script setup lang="ts">
  import { DislikeTwo } from '@vect-ui/icons'

  const iconConfig = {
    size: 20,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    theme: 'two-tone' as const,
    fill: ['blue', 'red']
  }
</script>

<template>
  <div class="play-container">
    <VIcon :icon-config="iconConfig" :icon="DislikeTwo" />
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
      .play-container {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
