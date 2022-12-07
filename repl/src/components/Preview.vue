<template>
  <div ref="iframeContainer" class="iframe__wrapper" />
</template>

<script setup lang="ts">
  import { inject, onMounted, ref, watchEffect } from 'vue'
  // @ts-ignore
  import srcdoc from '../constants/srcdoc.html?raw'
  import { REPL_KEY } from '../constants/key'

  let sandbox: HTMLIFrameElement

  const vue = inject('vue')
  const VectUI = inject('VectUI')

  const iframeContainer = ref(null)
  const replInstance = inject(REPL_KEY) as any

  function createIframe() {
    sandbox = document.createElement('iframe')
    sandbox.setAttribute(
      'sandbox',
      [
        'allow-forms',
        'allow-modals',
        'allow-pointer-lock',
        'allow-popups',
        'allow-same-origin',
        'allow-scripts',
        'allow-top-navigation-by-user-activation'
      ].join(' ')
    )

    sandbox.srcdoc = srcdoc
    ;(iframeContainer.value as any).appendChild(sandbox)

    sandbox.addEventListener('load', () => {
      ;(sandbox.contentWindow as any).vue = vue
      ;(sandbox.contentWindow as any).VectUI = VectUI
      watchEffect(updatePreview)
    })
  }

  const updatePreview = () => {
    // 1.销毁之前的app实例和#app节点
    // 2.编译组件，挂在到全局window上
    // 3.从全局window取出组件VNode，挂载到#app节点上
    const scripts = [
      `if (window.__app__) window.__app__.unmount()\n` +
        `document.body.innerHTML = '<div id="app"></div>'`,
      replInstance.compiledCode.value,
      `const _createApp = window.vue.createApp
    const _mount = () => {
      const AppComponent = window.__sfc__
      AppComponent.name = 'Repl'
      const app = window.__app__ = _createApp(AppComponent)
      app.config.unwrapInjectedRef = true
      app.config.errorHandler = e => console.error(e)
      app.use(window.VectUI.default).mount(document.querySelector('#app'))
    }
  _mount()
  `
    ]
    sandbox.contentWindow?.postMessage({
      scripts
    })
  }
  onMounted(createIframe)
</script>

<style lang="less" scoped>
  .iframe__wrapper {
    border-right: rgba(60, 60, 60, 0.12) 1px solid;
    height: 100%;
    width: 100%;
  }
  .iframe__wrapper :deep(iframe) {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #fff;
  }
</style>
