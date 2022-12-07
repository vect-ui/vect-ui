import type { InjectionKey, Ref } from 'vue'

export type Direction = 'horizontal' | 'vertical'

export interface IStepProps {
  active: number
  direction: Direction
  finishStatus: 'wait' | 'process' | 'finish' | 'error' | 'success'
  processStatus: 'wait' | 'process' | 'finish' | 'error' | 'success'
}

export interface IStepState {
  setIndex: (index: number) => void
}

export interface IStepsInject {
  props: IStepProps
  steps: Ref<IStepState[]>
}

export const StepsInject = Symbol('v-steps') as InjectionKey<IStepsInject>
