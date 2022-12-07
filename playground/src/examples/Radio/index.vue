<template>
  <v-radio-group v-model="model">
    <v-radio label="1">radio1</v-radio>
    <v-radio label="2">radio2</v-radio>
    <v-radio label="3">radio3</v-radio>
  </v-radio-group>
  <br />
  <v-radio-group v-model="model">
    <v-radio type="button" label="1">button1</v-radio>
    <v-radio type="button" label="2">button2</v-radio>
    <v-radio type="button" label="3">button3</v-radio>
  </v-radio-group>
  <br />
  <v-radio v-model="model" label="1" disabled>radio</v-radio>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  const model = ref('1')
</script>

<style lang="less" scoped></style>
