<script setup lang="ts">
  import { ref } from 'vue'

  const checked = ref(false)
</script>

<template>
  <div class="play-container">
    <!-- label & checked -->
    <div>
      <VCheckbox v-model="checked" label="Checkbox" />
      <VCheckbox checked>{{ checked }}</VCheckbox>
    </div>
    <!-- disabled -->
    <div>
      <VCheckbox label="Checkbox" disabled />
      <VCheckbox label="Checkbox" checked disabled />
    </div>
    <!-- size & indeterminate -->
    <div>
      <VCheckbox size="small" indeterminate>Checkbox</VCheckbox>
      <VCheckbox disabled indeterminate>Checkbox</VCheckbox>
      <VCheckbox indeterminate checked size="large">Checkbox</VCheckbox>
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
