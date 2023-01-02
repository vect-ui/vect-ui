import { computed, getCurrentInstance, ref } from 'vue'
import { UPDATE_MODEL_EVENT } from '@vect-ui/constants'
import type { ComponentInternalInstance, WritableComputedRef } from 'vue'
import type { CheckboxProps } from '../checkbox'
import { useDisabed, useSize } from '@vect-ui/hooks'
import { isArray, isBoolean } from '@vect-ui/utils'

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
  const hasOwnLabel = computed(() => !!(slots.default || props.label))
  const { emit } = getCurrentInstance()!

  const innerModelValue = ref<unknown>(false)
  const model = computed<any>({
    get() {
      return props.modelValue ?? innerModelValue.value
    },
    set(val: unknown) {
      emit(UPDATE_MODEL_EVENT, val)
      innerModelValue.value = val
    }
  })

  const checkboxSize = useSize()
  const isDisabled = useDisabed()
  const isChecked = computed(() => {
    const val = model.value
    if (isBoolean(val)) {
      return val
    } else {
      return !!val
    }
  })

  setDefaultValue(props, model)

  return {
    model,
    isDisabled,
    isChecked,
    checkboxSize,
    hasOwnLabel
  }
}
