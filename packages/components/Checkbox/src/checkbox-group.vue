<template>
  <div>
    <slot />
  </div>
</template>

<script lang="ts" setup name="VCheckboxGroup">
  import { computed, provide, toRef, toRefs } from 'vue'
  import { UPDATE_MODEL_EVENT } from '@vect-ui/constants'
  import { checkboxGroupContextKey, checkboxGroupEmits, checkboxGroupProps } from './checkbox-group'
  import { pick } from 'lodash-es'

  import type { CheckboxGroupValueType } from './checkbox-group'

  const props = defineProps(checkboxGroupProps)
  const emit = defineEmits(checkboxGroupEmits)

  const changeEvent = (value: CheckboxGroupValueType) => {
    emit(UPDATE_MODEL_EVENT, value)
  }

  const modelValue = computed({
    get() {
      return props.modelValue
    },
    set(val: CheckboxGroupValueType) {
      changeEvent(val)
    }
  })

  provide(checkboxGroupContextKey, {
    modelValue,
    changeEvent,
    ...pick(toRefs(props), ['min', 'max', 'disabled', 'size'])
  })
</script>
