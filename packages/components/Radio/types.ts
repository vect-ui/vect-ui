import type { InjectionKey } from 'vue'

export type RadioLabelType = string | number | boolean

export interface IRadioGroupInject {
  state: RadioLabelType
  setState: (value: RadioLabelType) => void
}

export const RadioGroupInject = Symbol('v-radio') as InjectionKey<IRadioGroupInject>
