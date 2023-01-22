import { computed, defineComponent, nextTick, onMounted, ref, shallowRef, watch } from 'vue'
import { useNamespace } from '@vect-ui/utils'
import VIcon from '../Icon'
import { CloseOne, PreviewCloseOne, PreviewOpen } from '@vect-ui/icons'
type TargetElement = HTMLInputElement | HTMLTextAreaElement

export default defineComponent({
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: false
    },
    allowClear: {
      type: Boolean,
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      requied: false,
      default: ''
    },
    password: {
      type: Boolean,
      required: false,
      default: false
    },
    showCount: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: [
    'focus',
    'blur',
    'input',
    'clear',
    'change',
    'update:modelValue',
    'mouseenter',
    'mouseleave'
  ],
  setup(props, { emit, attrs, slots }) {
    const iconConfig = { fill: '#d9d9d9', size: 14 }

    const ns = useNamespace('input')

    const focused = ref<boolean>(false)
    const hovering = ref<boolean>(false)
    const isPasswordVisble = ref<boolean>(false)
    const input = shallowRef<HTMLInputElement>()

    const _ref = computed(() => input.value)
    const cmpClass = computed(() => [
      ns.b(),
      ns.is('disabled', props.disabled),
      {
        [ns.b('group')]: slots.prepend || slots.append,
        [ns.bm('group', 'append')]: slots.append,
        [ns.bm('group', 'prepend')]: slots.prepend
      }
    ])
    const inputModelValue = computed(() => String(props.modelValue))
    const modelValueLength = computed(() => Array.from(inputModelValue.value).length)

    const showSuffix = computed(
      () => showClearIcon.value || slots.suffix || props.showCount || props.password
    )
    const showClearIcon = computed(() => props.allowClear && inputModelValue.value)
    const showPasswordIcon = computed(() => props.password && inputModelValue.value)
    const showCount = computed(() => props.showCount && !!attrs.maxlength)

    const setNativeInputValue = () => {
      const input = _ref.value
      if (!input || input.value === inputModelValue.value) return
      input.value = inputModelValue.value
    }

    const handleInput = async (event: Event) => {
      const { value } = event.target as TargetElement
      emit('update:modelValue', value)
      emit('input', value)
      await nextTick()
      setNativeInputValue()
    }

    const handleFocus = () => {
      focused.value = true
    }
    const handleBlur = () => {
      focused.value = false
    }
    const handleChange = (event: Event) => {
      emit('change', (event.target as TargetElement).value)
    }

    const handleMouseLeave = (evt: MouseEvent) => {
      hovering.value = false
      emit('mouseleave', evt)
    }

    const handleMouseEnter = (evt: MouseEvent) => {
      hovering.value = true
      emit('mouseenter', evt)
    }

    const handleClear = () => {
      emit('update:modelValue', '')
      emit('change', '')
      emit('clear')
      emit('input', '')
    }

    const handlePasswordVisble = () => {
      isPasswordVisble.value = !isPasswordVisble.value
    }
    watch(inputModelValue, () => {
      setNativeInputValue()
    })

    onMounted(() => {
      setNativeInputValue()
    })

    return () => (
      <div class={cmpClass.value} onMouseenter={handleMouseEnter} onMouseleave={handleMouseLeave}>
        {slots.prepend && <div class={ns.e('prepend')}>{slots.prepend()}</div>}
        <div class={ns.e('wrapper')}>
          {slots.prefix && <div class={ns.e('prefix')}>{slots.prefix()}</div>}
          <input
            ref={input}
            disabled={props.disabled}
            type={props.password ? (isPasswordVisble.value ? 'text' : 'password') : 'text'}
            placeholder={props.placeholder}
            class={ns.e('inner')}
            onInput={handleInput}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...attrs}
          ></input>
          {showSuffix.value && (
            <div class={ns.e('suffix')}>
              {showClearIcon.value && (
                <VIcon icon={CloseOne} iconConfig={iconConfig} onClick={handleClear}></VIcon>
              )}
              {showPasswordIcon.value && (
                <VIcon
                  iconConfig={iconConfig}
                  icon={isPasswordVisble.value ? PreviewCloseOne : PreviewOpen}
                  onClick={handlePasswordVisble}
                ></VIcon>
              )}
              {showCount.value && (
                <span class={ns.e('count')}>
                  {`${modelValueLength.value} / ${attrs.maxlength} `}
                </span>
              )}
              {slots.suffix && slots.suffix()}
            </div>
          )}
        </div>
        {slots.append && <div class={ns.e('append')}>{slots.append()}</div>}
      </div>
    )
  }
})
