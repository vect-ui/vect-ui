<template>
  <div :class="[ns.b('group')]">
    <slot />
  </div>
</template>

<script setup lang="ts" name="VRadioGroup">
  import type { PropType } from 'vue'
  import { provide, reactive, toRefs } from 'vue'
  import { RadioGroupInject } from '../Radio/types'
  import type { RadioLabelType } from '../Radio/types'
  import { useNamespace } from '@vect-ui/utils'

  const ns = useNamespace('radio')

  const props = defineProps({
    modelValue: {
      type: [String, Number, Boolean] as PropType<RadioLabelType>,
      default: ''
    }
  })

  const emit = defineEmits(['update:modelValue'])

  const { modelValue: state } = toRefs(props)

  provide(
    RadioGroupInject,
    reactive({
      state,
      setState: (value: string | number | boolean) => {
        emit('update:modelValue', value)
      }
    })
  )
</script>
