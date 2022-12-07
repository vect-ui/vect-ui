import type { ComponentInternalInstance, PropType, SetupContext } from 'vue'
import { computed, defineComponent, getCurrentInstance, inject } from 'vue'
import { BreadcrumbKeyInject } from '../BreadcrumbItem/types'
import type { IBreadcrumbKeyInject } from '../BreadcrumbItem/types'
import { useNamespace } from '@vect-ui/utils'
import type { RouteLocationRaw, Router } from 'vue-router'

export default defineComponent({
  name: 'VBreadcrumbItem',
  props: {
    to: {
      type: Object as PropType<RouteLocationRaw>,
      required: false
    },
    replace: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }: SetupContext) {
    const instance = getCurrentInstance() as ComponentInternalInstance

    const router = instance.appContext.config.globalProperties.$router as Router

    if (!router && props.to) {
      // eslint-disable-next-line no-console
      console.warn('Please install vue-router to use props of "to"')
      return () => <span>{slots.default!()}</span>
    }
    const parent = inject(BreadcrumbKeyInject) as IBreadcrumbKeyInject

    const ns = useNamespace('breadcrumb')

    const isTargetRoute = computed(() => {
      if (!props.to) return false
      if (typeof props.to === 'string') {
        return router.currentRoute.value.path === props.to
      } else if ('path' in props.to) {
        return router.currentRoute.value.path === props.to.path
      } else if ('name' in props.to) {
        return router.currentRoute.value.name === props.to.name
      }
      return false
    })

    const handleClick = () => {
      if (props.to && router) {
        props.replace ? router.replace(props.to) : router.push(props.to)
      }
    }

    return () => (
      <span class={[ns.b('item')]}>
        <span
          class={[
            ns.be('item', 'label'),
            props.to && ns.is('link', true),
            isTargetRoute.value && ns.is('current', true)
          ]}
          onClick={handleClick}
        >
          {slots.default!()}
        </span>
        <span class={[ns.be('item', 'separator')]}>
          {typeof parent.separator === 'string' ? (
            parent.separator
          ) : (
            <t-icon icon={parent.separator}></t-icon>
          )}
        </span>
      </span>
    )
  }
})
