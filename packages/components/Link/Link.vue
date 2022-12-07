<template>
  <a :href="href" :target="target" :class="[ns.b(), ns.m(type)]">
    <slot>{{ type }}</slot>
  </a>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import type { PropType } from 'vue'
  import { useNamespace } from '@vect-ui/utils'

  type LINK_TARGET = '_self' | '_blank' | '_top' | '_parent'
  type LINK_TYPE = 'default' | 'primary' | 'warning' | 'danger'

  export default defineComponent({
    name: 'VLink',
    props: {
      href: {
        type: String,
        default: '/'
      },
      target: {
        type: String as PropType<LINK_TARGET>,
        default: '_blank'
      },
      type: {
        type: String as PropType<LINK_TYPE>,
        default: 'default'
      }
    },
    setup() {
      const ns = useNamespace('link')
      return {
        ns
      }
    }
  })
</script>
