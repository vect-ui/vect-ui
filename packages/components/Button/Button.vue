<template>
  <button
    :disabled="disabled"
    :class="[
      ns.b(),
      ns.m(type),
      ns.m(size),
      ns.is('round', round),
      ns.is('circle', circle),
      ns.is('disabled', disabled)
    ]"
    @click="handleClick"
  >
    <template v-if="loading">
      <v-icon :class-name="ns.is('loading', loading)" :icon="LoadingOne" />
    </template>
    <span>
      <slot>{{ type }}</slot>
    </span>
  </button>
</template>

<script lang="ts" name="VButton" setup>
  import { useNamespace } from '@vect-ui/utils'
  import { LoadingOne } from '@vect-ui/icons'
  import { VIcon } from '../Icon'

  type BTN_TYPE = 'default' | 'primary' | 'warning' | 'danger'
  type BTN_SIZE = 'small' | 'medium' | 'large'

  withDefaults(
    defineProps<{
      type: BTN_TYPE
      size: BTN_SIZE
      round: boolean
      circle: boolean
      loading: boolean
      disabled: boolean
    }>(),
    {
      type: 'default',
      size: 'medium',
      round: false,
      circle: false,
      loading: false,
      disabled: false
    }
  )

  const emit = defineEmits(['click'])
  const ns = useNamespace('button')
  const handleClick = (event: Event) => {
    emit('click', event)
  }
</script>
