import { computed, inject, toRaw } from 'vue'
import { useDisabed, useSize } from '@vect-ui/hooks'
import { isArray, isBoolean, isObject } from '@vect-ui/utils'
import { checkboxGroupContextKey } from '../checkbox-group'
import { isEqual, isUndefined } from 'lodash-es'

import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from './use-checkbox-model'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isChecked = computed(() => {
    const val = model.value
    if (isBoolean(val)) {
      return val
    } else if (isArray(val)) {
      return isObject(props.label)
        ? val.map(toRaw).some(o => isEqual(o, props.label))
        : val.map(toRaw).includes(props.label)
    } else {
      return !!val
    }
  })
  const hasOwnLabel = computed(() => !!(slots.default || props.label))

  const isLimitDisabled = computed(() => {
    const min = checkboxGroup?.min?.value
    const max = checkboxGroup?.max?.value

    // 如果当前 checkbox 为 true，且已经达到最大值，禁用
    // 如果当前 checkbox 为 false，且已经达到最小值，禁用
    return (
      (!isUndefined(min) && model.value.length <= min && isChecked.value) ||
      (!isUndefined(max) && model.value.length >= max && !isChecked.value)
    )
  })

  const isDisabled = useDisabed(
    computed(() => checkboxGroup?.disabled.value || isLimitDisabled.value)
  )

  const checkboxSize = useSize(computed(() => checkboxGroup?.size?.value))

  return {
    isDisabled,
    isChecked,
    checkboxSize,
    hasOwnLabel
  }
}
