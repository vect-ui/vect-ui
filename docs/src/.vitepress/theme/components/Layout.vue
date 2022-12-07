<template>
  <Layout>
    <template #aside-outline-before><span class="content__header">CONTENTS</span></template>
  </Layout>
</template>

<script lang="ts" setup>
  import * as vue from 'vue'
  import DefaultTheme from 'vitepress/theme'
  import * as VectUI from 'vect-ui'

  const { Layout } = DefaultTheme

  vue.provide('vue', vue)
  vue.provide('VectUI', VectUI)
</script>

<style lang="less" scoped>
  .content__header {
    font-size: 12px;
    color: #606266;
    font-weight: 600;
    text-transform: uppercase;
  }
</style>
