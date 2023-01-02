<script setup lang="ts">
  import { ref } from 'vue'
  const active = ref(0)

  const next = () => {
    active.value = (active.value + 1) % 4
  }
</script>

<template>
  <div class="play-container">
    <VSteps :active="active" finish-status="success">
      <VStep title="Step 1" description="some description some description some description" />
      <VStep title="Step 2" description="some description" />
      <VStep title="Step 3" description="some description" />
    </VSteps>
    <button @click="next">Next</button>
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
