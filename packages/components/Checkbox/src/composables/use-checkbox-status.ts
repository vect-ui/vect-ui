import { useDisabed, useSize } from '@vect-ui/hooks'
import { isBoolean } from '@vect-ui/utils'
import type { ComponentInternalInstance } from 'vue'
import { computed } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from './use-checkbox-model'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const isDisabled = useDisabed()
  const isChecked = computed(() => {
    const val = model.value
    if (isBoolean(val)) {
      return val
    } else {
      return !!val
    }
  })
  const hasOwnLabel = computed(() => !!(slots.default || props.label))

  const checkboxSize = useSize()

  return {
    isDisabled,
    isChecked,
    checkboxSize,
    hasOwnLabel
  }
}
