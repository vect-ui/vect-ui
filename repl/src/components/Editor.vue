<template>
  <Codemirror
    v-model="code"
    :style="{ height: '100%', width: '100%' }"
    :extensions="extensions"
    :indent-with-tab="true"
    :tab-size="2"
  />
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { html } from '@codemirror/lang-html'
  import { Codemirror } from 'vue-codemirror'
  import customTheme from '../constants/customTheme'
  import { debounce } from '../utils/index'

  const extensions = [html(), customTheme]

  const props = defineProps({
    modelValue: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const code = computed({
    get() {
      return props.modelValue
    },
    set: debounce((val: any) => {
      emit('update:modelValue', val)
    }, 500)
  })
</script>

<style lang="less" scoped>
  :global(.ͼ1.cm-editor.cm-focused) {
    outline: none;
  }
</style>
