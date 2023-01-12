import { computed, ref, unref } from 'vue'
import { componentSizes } from '@vect-ui/constants'
import { useProp } from './use-prop'

import type { PropType, Ref } from 'vue'
import type { ComponentSize } from '@vect-ui/constants'

type MaybeRef<T> = T | Ref<T>

export const useSizeProp = {
  type: String as PropType<ComponentSize>,
  value: componentSizes,
  required: false
}

export const useSize = (
  fallback?: MaybeRef<ComponentSize | undefined>,
  ignore: Partial<Record<'prop', boolean>> = {}
) => {
  const emptyRef = ref()

  const size = ignore.prop ? emptyRef : useProp<ComponentSize>('size')
  return computed(() => size.value || unref(fallback))
}

export const useDisabed = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled')
  return computed(() => disabled.value || unref(fallback)) || false
}
