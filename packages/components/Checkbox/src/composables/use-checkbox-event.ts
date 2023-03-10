import { CHANGE_EVENT } from '@vect-ui/constants'
import { getCurrentInstance } from 'vue'

import type { CheckboxModel } from './use-checkbox-model'

export const useCheckboxEvent = ({ isLimitExceeded }: Pick<CheckboxModel, 'isLimitExceeded'>) => {
  const { emit } = getCurrentInstance()!

  const handleChange = (e: Event) => {
    if (isLimitExceeded.value) return

    const target = e.target as HTMLInputElement
    emit(CHANGE_EVENT, target.checked)
  }

  return { handleChange }
}
