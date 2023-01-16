import { isArray } from '@vect-ui/utils'
import { useCheckboxModel } from './use-checkbox-model'
import { useCheckboxStatus } from './use-checkbox-status'
import { useCheckboxEvent } from './use-checkbox-event'

import type { ComponentInternalInstance, WritableComputedRef } from 'vue'
import type { CheckboxProps } from '../checkbox'

const setDefaultValue = (props: CheckboxProps, model: WritableComputedRef<unknown>) => {
  function setVal() {
    if (isArray(model.value) && !model.value.includes(props.label)) {
      model.value.push(props.label)
    } else {
      model.value = true
    }
  }
  props.checked && setVal()
}

export const useCheckbox = (props: CheckboxProps, slots: ComponentInternalInstance['slots']) => {
  const { model, isLimitExceeded } = useCheckboxModel(props)
  const { isChecked, isDisabled, checkboxSize, hasOwnLabel } = useCheckboxStatus(props, slots, {
    model
  })
  const { handleChange } = useCheckboxEvent({
    isLimitExceeded
  })

  setDefaultValue(props, model)

  return {
    model,
    isDisabled,
    isChecked,
    checkboxSize,
    hasOwnLabel,
    handleChange
  }
}
