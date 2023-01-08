import { UPDATE_MODEL_EVENT } from '@vect-ui/constants'
import { computed, getCurrentInstance, ref } from 'vue'
import type { CheckboxProps } from '../checkbox'

export const useCheckboxModel = (props: CheckboxProps) => {
  const innerModelValue = ref<unknown>(false)
  const { emit } = getCurrentInstance()!

  const model = computed<any>({
    get() {
      return props.modelValue ?? innerModelValue.value
    },
    set(val: unknown) {
      emit(UPDATE_MODEL_EVENT, val)
      innerModelValue.value = val
    }
  })

  return {
    model
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
