import { useNamespace } from '@vect-ui/utils'
import type { PropType } from 'vue'
import { computed, defineComponent } from 'vue'
import type { ITimelinePosition } from '../Timeline/types'

export default defineComponent({
  props: {
    color: {
      type: String,
      required: false
    },
    contentPosition: {
      type: String as PropType<ITimelinePosition>,
      requied: false,
      default: ''
    }
  },
  setup(props, { slots }) {
    const ns = useNamespace('timeline')
    const dotClass = computed(() => [
      ns.be('item', 'dot'),
      slots.dot ? ns.bem('item', 'dot', 'custom') : ns.bem('item', 'dot', 'default')
    ])
    const renderDot = () => (
      <div
        class={dotClass.value}
        style={props.color && { color: props.color, borderColor: props.color }}
      >
        {slots.dot && slots.dot()}
      </div>
    )
    return () => (
      <li class={ns.b('item')}>
        <div class={ns.be('item', 'tail')} />
        {renderDot()}
        <div class={ns.be('item', 'content')}>{slots.default && slots.default()}</div>
      </li>
    )
  }
})
