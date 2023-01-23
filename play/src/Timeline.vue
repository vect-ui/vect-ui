<script setup lang="ts">
  import { VTimeline, VTimelineItem } from '@vect-ui/components'
  import { Aiming, Loading } from '@vect-ui/icons'
</script>

<template>
  <div class="play-container">
    <div style="width: 300px">
      <VTimeline>
        <VTimelineItem>
          <div>step1 2015-09-01</div>
          <div>step1 2015-09-01</div>
          <div>step1 2015-09-01</div>
          <div>step1 2015-09-01</div>
          <div>step1 2015-09-01</div>
        </VTimelineItem>
        <VTimelineItem color="red">step2 2015-09-01</VTimelineItem>
        <VTimelineItem
          ><template #dot><VIcon :icon="Aiming" :size="20" /></template>step3
          2015-09-01</VTimelineItem
        >
        <VTimelineItem>step4 2015-09-01</VTimelineItem>
      </VTimeline>
    </div>
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
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
  }
</style>
