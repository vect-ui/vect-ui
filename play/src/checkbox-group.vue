<script setup lang="ts">
  import { computed, reactive, ref } from 'vue'

  const checked = ref(['A', 'C', 'Selected and disabled'])
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
    <!-- <div>
      {{ checked }}
      <VCheckboxGroup v-model="checked">
        <VCheckbox label="A" />
        <VCheckbox :label="{ b: 1 }">BBB</VCheckbox>
        <VCheckbox label="C" />
        <VCheckbox label="Selected and disabled" disabled>Selected and disabled</VCheckbox>
      </VCheckboxGroup>
    </div> -->

    <!-- max & min -->
    <div>
      <VCheckboxGroup v-model="checked" :min="1" :max="3">
        <VCheckbox label="A" />
        <VCheckbox :label="{ b: 1 }">BBB</VCheckbox>
        <VCheckbox label="C" />
        <VCheckbox label="Selected and disabled">Selected and disabled</VCheckbox>
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
