<template>
  <div :class="[ns.b()]">
    <slot />
  </div>
</template>

<script setup lang="ts" name="VBreadcrumb">
  import { useNamespace } from '@vect-ui/utils'
  import { provide, reactive, toRefs } from 'vue'
  import { BreadcrumbKeyInject } from '../BreadcrumbItem/types'

  const props = withDefaults(
    defineProps<{
      separator: string | (() => string)
    }>(),
    {
      separator: '/'
    }
  )
  const ns = useNamespace('breadcrumb')

  provide(
    BreadcrumbKeyInject,
    reactive({
      ...toRefs(props)
    })
  )
</script>
