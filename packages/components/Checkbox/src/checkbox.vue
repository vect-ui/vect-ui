<template>
  <label :class="compCls">
    <span :class="spanCls">
      <input
        v-model="model"
        :value="label"
        type="checkbox"
        :class="ns.e('original')"
        :disabled="isDisabled"
        @change="handleChange"
      />
      <span :class="ns.e('inner')" />
    </span>
    <span v-if="hasOwnLabel" :class="ns.e('label')">
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
  const spanCls = computed(() => [
    ns.e('input'),
    ns.is('checked', isChecked.value),
    ns.is('indeterminate', props.indeterminate),
    ns.is('disabled', isDisabled.value)
  ])
</script>
