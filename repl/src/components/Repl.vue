<template>
  <div class="repl__wrapper">
    <div class="repl-left">
      <Preview />
    </div>
    <div class="repl-right">
      <Editor v-model="replInstance.code.value" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import Editor from './Editor.vue'
  import Preview from './Preview.vue'
  import { ReplFactory } from '../utils/ReplFactory'
  import { REPL_KEY } from '../constants/key'
  import { provide } from 'vue'

  const props = withDefaults(
    defineProps<{
      initCode: string
    }>(),
    {
      initCode: ''
    }
  )
  const replInstance = new ReplFactory(props.initCode)
  replInstance.init()

  provide(REPL_KEY, replInstance)
</script>

<style lang="less" scoped>
  .repl__wrapper {
    display: flex;
    border: rgba(60, 60, 60, 0.12) 1px solid;
    font-size: 10px;
    border-radius: 5px;
    overflow: hidden;
    height: 400px;
  }
  .repl-left {
    width: 50%;
    height: 100%;
  }
  .repl-right {
    width: 50%;
    height: 100%;
  }
</style>
