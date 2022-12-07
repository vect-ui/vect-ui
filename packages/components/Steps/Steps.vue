<template>
  <div :class="[ns.b(), ns.m(direction)]">
    <slot />
  </div>
</template>

<script lang="ts" setup name="VSteps">
  import type { PropType } from 'vue'
  import { provide, ref, watch } from 'vue'
  import { useNamespace } from '@vect-ui/utils'
  import type { Direction, IStepState } from './types'
  import { StepsInject } from './types'

  const ns = useNamespace('steps')

  const props = defineProps({
    active: {
      type: Number,
      default: 0
    },
    direction: {
      type: String as PropType<Direction>,
      default: 'horizontal'
    },
    finishStatus: {
      type: String as PropType<'wait' | 'process' | 'finish' | 'error' | 'success'>,
      default: 'finish'
    },
    processStatus: {
      type: String as PropType<'wait' | 'process' | 'finish' | 'error' | 'success'>,
      default: 'process'
    }
  })

  const emit = defineEmits(['change'])

  const steps = ref<IStepState[]>([])

  watch(
    () => props.active,
    (newVal: number, oldVal: number) => {
      emit('change', newVal, oldVal)
    }
  )

  watch(steps, () => {
    steps.value.forEach((step, index) => {
      step.setIndex(index)
    })
  })

  provide(StepsInject, { props, steps })
</script>
