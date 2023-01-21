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
      default: 14
    }
  },
  setup(props, { slots, attrs }) {
    const { icon, className, iconConfig, size } = toRefs(props)

    const cmpClass = computed(() => ['t-icon', className.value].flat())

    return () => (
      <i class={cmpClass.value} {...attrs}>
        <span style={{ fontSize: `${size.value}px` }} v-html={icon.value(iconConfig.value)}></span>
        {slots.default?.()}
      </i>
    )
  }
})
