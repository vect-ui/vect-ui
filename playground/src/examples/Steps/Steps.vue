<template>
  <VSteps :active="active" finish-status="success">
    <VStep title="Step 1" description="some description some description some description" />
    <VStep title="Step 2" description="some description" />
    <VStep title="Step 3" description="some description" />
  </VSteps>
  <button @click="next">Next</button>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { VStep, VSteps } from 'vect-ui'
  const active = ref(0)

  const next = () => {
    active.value = (active.value + 1) % 4
  }
</script>
