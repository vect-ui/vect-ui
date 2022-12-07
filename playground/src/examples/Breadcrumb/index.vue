<template>
  <v-breadcrumb :separator="Like">
    <v-breadcrumb-item> item1 </v-breadcrumb-item>
    <v-breadcrumb-item
      :to="{
        path: '/hai-jie'
      }"
    >
      item2
    </v-breadcrumb-item>
    <v-breadcrumb-item
      :to="{
        path: '/hai'
      }"
    >
      item3
    </v-breadcrumb-item>
  </v-breadcrumb>
</template>

<script setup lang="ts">
  import { Like } from '@vect-ui/icons'
</script>
