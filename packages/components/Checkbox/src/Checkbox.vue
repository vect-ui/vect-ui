<template>
  <label :class="compCls">
    <span :class="ns.e('input')">
      <input
        v-model="model"
        type="checkbox"
        :class="ns.e('original')"
        :disabled="isDisabled"
        @change="handleChange"
      />
      <span :class="innerCls" />
    </span>
    <span v-if="hasOwnLabel" :class="labelCls">
      <slot />
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts" setup name="VCheckbox">
  import { computed, useSlots } from 'vue'
  import { useNamespace } from '@vect-ui/utils'
  import { useCheckbox } from './composables/use-checkbox'
  import { checkboxEmits, checkboxProps } from './checkbox'

  const props = defineProps(checkboxProps)
  defineEmits(checkboxEmits)
  const slots = useSlots()

  const ns = useNamespace('checkbox')
  const { hasOwnLabel, model, checkboxSize, isDisabled, isChecked, handleChange } = useCheckbox(
    props,
    slots
  )

  const compCls = computed(() => [ns.b(), ns.m(checkboxSize.value)])
  const innerCls = computed(() => [
    ns.e('inner'),
    ns.is('checked', isChecked.value),
    ns.is('indeterminate', props.indeterminate),
    ns.is('disabled', isDisabled.value)
  ])
  const labelCls = computed(() => [
    ns.e('label'),
    ns.is('checked', isChecked.value),
    ns.is('indeterminate', props.indeterminate),
    ns.is('disabled', isDisabled.value)
  ])
</script>
