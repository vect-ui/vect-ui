<script setup lang="ts">
  import { computed, reactive, ref } from 'vue'

  const checked = ref(['A', 'selected and disabled'])
</script>

<template>
  <div class="play-container">
    <!-- disabled & size -->
    <div>
      <VCheckboxGroup disabled size="large">
        <VCheckbox label="A" />
        <VCheckbox label="B" size="small" />
        <VCheckbox label="C" :disabled="false" />
      </VCheckboxGroup>
    </div>

    <!-- v-model -->
    <div>
      <VCheckboxGroup v-model="checked">
        <VCheckbox label="A" />
        <VCheckbox label="B">BBB</VCheckbox>
        <VCheckbox label="C" disabled />
        <VCheckbox label="selected and disabled">selected and disabled</VCheckbox>
      </VCheckboxGroup>
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

        & > div {
          padding: 10px;
          border: 1px dashed lightgreen;
          margin: 8px 0;
        }
      }
    }
  }
</style>
