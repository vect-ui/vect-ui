import { computed, getCurrentInstance, inject, ref } from 'vue'
import { isArray } from '@vect-ui/utils'
import { UPDATE_MODEL_EVENT } from '@vect-ui/constants'

import { checkboxGroupContextKey } from '../checkbox-group'

import type { CheckboxProps } from '../checkbox'

export const useCheckboxModel = (props: CheckboxProps) => {
  const innerModelValue = ref<unknown>(false)
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => typeof checkboxGroup !== 'undefined')
  const isLimitExceeded = ref(false)

  const { emit } = getCurrentInstance()!

  const model = computed<any>({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? innerModelValue.value
    },
    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup?.max?.value !== undefined && val.length > checkboxGroup?.max.value
        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
        innerModelValue.value = val
      }
    }
  })

  return {
    model,
    isLimitExceeded
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
