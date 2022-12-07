<template>
  <label
    :class="[
      ns.b(),
      ns.is('disabled', disabled),
      ns.is('checked', isChecked),
      isRadioBtn && ns.b('button')
    ]"
  >
    <input v-model="model" hidden type="radio" />
    <span v-if="!isRadioBtn" :class="ns.e('icon')" />
    <span :class="ns.e('label')">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts" name="VRadio">
  import { computed, inject } from 'vue'
  import { RadioGroupInject } from './types'
  import type { IRadioGroupInject, RadioLabelType } from './types'
  import type { PropType, WritableComputedRef } from 'vue'
  import { useNamespace } from '@vect-ui/utils'

  const parent = inject(RadioGroupInject) as IRadioGroupInject

  const isGroup = computed(() => !!parent)

  const props = defineProps({
    modelValue: {
      type: [String, Number, Boolean] as PropType<RadioLabelType>,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String as PropType<'radio' | 'button'>,
      default: 'radio'
    }
  })

  const ns = useNamespace('radio')

  const emit = defineEmits(['update:modelValue'])

  const model: WritableComputedRef<RadioLabelType> = computed({
    get() {
      return isGroup.value ? parent.state : props.modelValue
    },
    set() {
      if (isGroup.value) {
        parent.setState(props.label)
        return
      }
      emit('update:modelValue', props.label)
    }
  })

  const isChecked = computed(() => model.value === props.label)

  const isRadioBtn = computed(() => props.type === 'button')
</script>
