<template>
  <div :class="[ns.b()]" :style="style">
    <!-- icon & line -->
    <div :class="[ns.e('head'), ns.is(currentState)]">
      <div :class="ns.e('line')">
        <i :class="ns.e('line-inner')" :style="lineStyle" />
      </div>
      <div :class="[ns.e('icon'), ns.is(icon || $slots.icon ? 'icon' : 'text')]">
        <slot name="icon">
          <div v-if="icon" :class="ns.e('icon-inner')">
            <component :is="icon" />
          </div>
          <v-icon
            v-else-if="currentState === 'success'"
            :class="[ns.e('icon-inner'), ns.is('status')]"
            :icon="CheckSmall"
          />
          <v-icon
            v-else-if="currentState === 'error'"
            :class="ns.e('icon-inner')"
            :icon="CloseSmall"
          />
          <div v-else :class="ns.e('icon-inner')">{{ index + 1 }}</div>
        </slot>
      </div>
    </div>

    <!-- title & description -->
    <div :class="[ns.e('main'), ns.is(currentState, true)]">
      <div :class="[ns.e('title')]">
        <slot name="title"> {{ title }}</slot>
      </div>
      <div :class="ns.e('description')">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="VStep">
  import { useNamespace } from '@vect-ui/utils'
  import type { CSSProperties, Component, PropType } from 'vue'
  import { computed, inject, onMounted, reactive, ref, watch } from 'vue'
  import { VIcon } from '../Icon'
  import { CheckSmall, CloseSmall } from '@vect-ui/icons'

  import type { IStepsInject } from './types'
  import { StepsInject } from './types'

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    icon: {
      type: [String, Object, Function] as PropType<string | Component>
    },
    status: {
      type: String as PropType<'' | 'wait' | 'process' | 'finish' | 'error' | 'success'>,
      default: ''
    }
  })

  const ns = useNamespace('step')
  const index = ref(-1)
  const parent = inject(StepsInject) as IStepsInject
  const internalStatus = ref('')
  const lineStyle = ref({})

  const currentState = computed(() => {
    return props.status || internalStatus.value
  })

  const calcProgress = (status: string) => {
    const style: CSSProperties = {}
    let step = 0
    if (status === parent.props.processStatus) {
      step = 0
    } else if (status === 'wait') {
      step = 0
    }
    style.borderWidth = step ? '1px' : 0
    style[parent.props.direction === 'vertical' ? 'height' : 'width'] = `${step}%`
    lineStyle.value = style
  }

  const stepsCount = computed(() => parent.steps.value.length)

  const style = computed(() => {
    const style: CSSProperties = {
      flexBasis: `${100 / stepsCount.value}%`
    }
    return style
  })

  const setIndex = (val: number) => {
    index.value = val
  }

  const updateStatus = (activeIndex: number) => {
    if (activeIndex > index.value) {
      internalStatus.value = parent.props.finishStatus
    } else if (activeIndex === index.value) {
      internalStatus.value = parent.props.processStatus
    } else {
      internalStatus.value = 'wait'
    }
    const prevChild = parent.steps.value[index.value - 1]
    if (prevChild) calcProgress(internalStatus.value)
  }

  onMounted(() => {
    watch(
      [
        () => parent.props.active,
        () => parent.props.processStatus,
        () => parent.props.finishStatus
      ],
      ([active]) => {
        updateStatus(active)
      },
      { immediate: true }
    )
  })

  const stepState = reactive({
    setIndex
  })

  parent.steps.value = [...parent.steps.value, stepState]
</script>
