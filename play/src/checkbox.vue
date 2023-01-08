<script setup lang="ts">
  import { computed, reactive, ref } from 'vue'

  const checked = ref(false)

  const checkAll = ref(false)
  const group = reactive([
    { label: 'A', checked: false },
    { label: 'b', checked: false }
  ])
  const isIndeterminate = computed(() => {
    const cnt = group.reduce((pre, cur) => pre + Number(cur.checked), 0)
    return 0 < cnt && cnt < group.length
  })
  const handleChangeAll = (val: any) => {
    checkAll.value = val
    group.forEach(e => {
      e.checked = val
    })
  }
  const handleChangeItem = (val: boolean, index: number) => {
    group[index].checked = val
    checkAll.value = group.every(e => e.checked)
  }
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
    <!-- indeterminate control -->
    <div>
      <VCheckbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleChangeAll">
        Checkbox
      </VCheckbox>
      <div>
        <VCheckbox
          v-for="(box, index) in group"
          :key="box.label"
          v-model="box.checked"
          @change="val => handleChangeItem(val as boolean, index)"
        >
          {{ box.label }}
        </VCheckbox>
      </div>
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
