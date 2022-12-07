import type { CompilerOptions, SFCDescriptor } from 'vue/compiler-sfc'
import { compileScript, compileTemplate, parse, rewriteDefault } from 'vue/compiler-sfc'
import type { Ref } from 'vue'
import { ref, watchEffect } from 'vue'
import hashId from 'hash-sum'
import { transform } from 'sucrase'

// 文件名
const fileName = 'App.vue'
// 文件id
const id = hashId(fileName)
// 全局变量名
const COMP_IDENTIFIER = `__sfc__`

// 默认代码
const defaultCode = `
<script setup>
  import { ref } from 'vue'
  const msg = ref('Hello World!')
</script>

<template>
  {{msg}}
</template>
`.trim()

export class ReplFactory {
  // 源代码
  code: Ref<string>
  // 编译后的代码
  compiledCode: Ref<string>
  constructor(initCode: string) {
    let init
    // 如果没传入初始代码，编译默认代码
    if (!initCode) init = defaultCode
    else init = initCode
    this.code = ref(init)
    this.compiledCode = ref('')
  }
  init() {
    const transform = (src: string) => {
      const importRE = /import {(.*)} from "(.*)"/

      return src
        .replace(importRE, (_, $1, $2) => {
          return `const {${$1}} = ${$2}`
        })
        .replaceAll('as', ':')
    }
    watchEffect(async () => {
      this.compiledCode.value = transform(await this.compilerFile(this.code.value))
    })
  }
  // 编译typescript
  async transformTS(src: string) {
    return transform(src, {
      transforms: ['typescript']
    }).code
  }
  // 编译文件
  async compilerFile(code: string): Promise<string> {
    let clientCode = ''

    // 转换成descriptor
    const { descriptor } = parse(code)

    // 如果有script标签
    if (descriptor.scriptSetup) {
      const clientScriptResult = await this.doCompileScript(descriptor)
      if (!clientScriptResult) {
        return ''
      }
      clientCode += clientScriptResult
      clientCode +=
        `\n${COMP_IDENTIFIER}.__file = "${fileName}"` + `\nwindow.__sfc__=${COMP_IDENTIFIER}`
      // 如果有template标签
    } else if (descriptor.template) {
      const clientTemplateResult = await this.doCompileTemplate(descriptor)
      if (!clientTemplateResult) {
        return ''
      }
      clientCode += clientTemplateResult
    }

    return clientCode
  }
  // 编译script
  async doCompileScript(descriptor: SFCDescriptor) {
    const expressionPlugins: CompilerOptions['expressionPlugins'] = ['typescript']
    const compiledScript = compileScript(descriptor, {
      inlineTemplate: true,
      id,
      templateOptions: {
        compilerOptions: {
          expressionPlugins
        }
      }
    })
    let code = ''
    code += `\n${rewriteDefault(compiledScript.content, COMP_IDENTIFIER, expressionPlugins)}`

    if ((descriptor.script || descriptor.scriptSetup)!.lang === 'ts') {
      code = await this.transformTS(code)
    }

    return code
  }
  // 编译模板
  async doCompileTemplate(descriptor: SFCDescriptor) {
    const templateResult = compileTemplate({
      source: descriptor.template!.content,
      filename: fileName,
      id,
      isProd: false,
      compilerOptions: {
        expressionPlugins: ['typescript']
      }
    })

    let code =
      `\n${templateResult.code.replace(/\nexport (function|const) render/, `$1 render`)}` +
      `\nwindow.${COMP_IDENTIFIER}={ render }`

    if ((descriptor.script || descriptor.scriptSetup)?.lang === 'ts') {
      code = await this.transformTS(code)
    }
    return code
  }
}
