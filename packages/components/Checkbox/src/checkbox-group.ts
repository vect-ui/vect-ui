import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@vect-ui/constants'
import { useSizeProp } from '@vect-ui/hooks'
import { isArray } from '@vect-ui/utils'

import type { ExtractPropTypes, InjectionKey, PropType, ToRefs, WritableComputedRef } from 'vue'
import type { CheckboxValueType } from './checkbox'

type CheckboxGroupContext = {
  modelValue: WritableComputedRef<any>
  changeEvent: (...args: any[]) => void
} & ToRefs<Pick<CheckboxGroupProps, 'disabled' | 'size' | 'min' | 'max'>>
export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContextKey')

export type CheckboxGroupValueType = Exclude<CheckboxValueType, boolean>[]

export const checkboxGroupProps = {
  /**
   * @description binding value
   */
  modelValue: {
    type: Array as PropType<CheckboxGroupValueType>,
    default: () => []
  },
  /**
   * @description whether the nestint checkboxes is disabled
   */
  disabled: Boolean,
  /**
   * @description size of the Checkbox
   */
  size: useSizeProp,
  /**
   * @description minimum number of checkbox checked
   */
  min: Number,
  /**
   * @description maximum number of checkbox checked
   */
  max: Number
}

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxGroupValueType) => isArray(val),
  [CHANGE_EVENT]: (val: CheckboxGroupValueType) => isArray(val)
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>
export type CheckboxGroupEmits = typeof checkboxGroupEmits
