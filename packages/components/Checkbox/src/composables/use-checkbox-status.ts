import { computed, inject, toRaw } from 'vue'
import { useDisabed, useSize } from '@vect-ui/hooks'
import { isArray, isBoolean, isObject } from '@vect-ui/utils'
import { checkboxGroupContextKey } from '../checkbox-group'
import { isEqual } from 'lodash-es'

import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from './use-checkbox-model'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isDisabled = useDisabed(computed(() => checkboxGroup?.disabled.value))
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

  const checkboxSize = useSize(computed(() => checkboxGroup?.size?.value))

  return {
    isDisabled,
    isChecked,
    checkboxSize,
    hasOwnLabel
  }
}
