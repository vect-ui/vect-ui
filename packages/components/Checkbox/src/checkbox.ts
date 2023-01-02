import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@vect-ui/constants'
import { useSizeProp } from '@vect-ui/hooks'
import { isBoolean, isNumber, isString } from '@vect-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const checkboxProps = {
  /**
   * @description binding value
   */
  modelValue: {
    type: [Number, String, Boolean],
    default: undefined
  },
  /**
   * @description value of the Checkbox when used inside a `checkbox-group`
   */
  label: {
    type: [String, Boolean, Number, Object]
  },
  /**
   * @description Set indeterminate state, only responsible for style control
   */
  indeterminate: Boolean,
  /**
   * @description if the Checkbox is checked
   */
  checked: Boolean,
  /**
   * @description
   */
  name: {
    type: String,
    default: undefined
  },
  /**
   * @description whether the Checkbox is disabled
   */
  disabled: Boolean,
  /**
   * @description size of the Checkbox
   */
  size: useSizeProp
}

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val: string | number | boolean) =>
    isString(val) || isNumber(val) || isBoolean(val)
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
