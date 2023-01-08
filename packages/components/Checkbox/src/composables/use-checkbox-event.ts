import { CHANGE_EVENT } from '@vect-ui/constants'
import { getCurrentInstance } from 'vue'

export const useCheckboxEvent = () => {
  const { emit } = getCurrentInstance()!

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    emit(CHANGE_EVENT, target.checked)
  }

  return { handleChange }
}
