import { useNamespace } from '@vect-ui/utils'
import type { PropType } from 'vue'
import { computed, defineComponent, toRefs } from 'vue'
import type { ISvgIconProps } from './types'

export default defineComponent({
  name: 'VIcon',
  props: {
    iconConfig: {
      type: Object as PropType<ISvgIconProps>,
      default: () => ({})
    },
    icon: {
      type: Function as PropType<(props: ISvgIconProps) => string>,
      default: () => ({})
    },
    className: {
      type: String || (Array as PropType<string[]>),
      default: () => ''
    },
    size: {
      type: Number,
      requied: false
    }
  },
  setup(props, { slots }) {
    const ns = useNamespace('icon')
    const { icon, className, iconConfig } = toRefs(props)
    const cmpClass = computed(() => [ns.b(), className.value].flat())
    const config = computed(() =>
      Object.assign({}, iconConfig.value, props.size ? { size: props.size } : {})
    )
    return () => (
      <i class={cmpClass.value} v-html={icon.value(config.value)}>
        {slots.default?.()}
      </i>
    )
  }
})
