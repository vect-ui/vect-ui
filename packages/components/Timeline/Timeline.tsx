import { useNamespace } from '@vect-ui/utils'
import { filterEmpty } from '@vect-ui/utils/element'
import type { PropType, VNode } from 'vue'
import { cloneVNode, defineComponent } from 'vue'
import type { ITimelinePosition } from './types'

export default defineComponent({
  props: {
    contentPosition: {
      type: String as PropType<ITimelinePosition>,
      requied: false,
      default: ''
    }
  },
  setup(props, { slots }) {
    const ns = useNamespace('timeline')
    const leftPosClass = ns.bm('item', 'left')
    const rightPosClass = ns.bm('item', 'right')
    const slotsChildren = filterEmpty(slots.default ? slots.default() : [])

    const getPositionCls = (ele: VNode, idx: number) => {
      const eleProps = ele.props || {}
      if (props.contentPosition === 'alternate') {
        if (eleProps.contentPosition === 'right') return rightPosClass
        if (eleProps.contentPosition === 'left') return leftPosClass
        return idx % 2 === 0 ? leftPosClass : rightPosClass
      }
      if (props.contentPosition === 'left') return leftPosClass
      if (props.contentPosition === 'right') return rightPosClass
      if (eleProps.contentPosition === 'right') return rightPosClass
      return ''
    }

    const children = slotsChildren.map((ele: VNode, idx: number) => {
      return cloneVNode(ele, {
        class: getPositionCls(ele, idx)
      })
    })

    return () => <ul class={ns.b()}>{children} </ul>
  }
})
