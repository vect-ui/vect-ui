// 命名前缀
const namespace = 'v'
const statePrefix = 'is-'

// BEM 命名字符拼接函数
const genBemClass = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string
) => {
  // 块
  let cls = `${namespace}-${block}`
  // 块后缀
  if (blockSuffix) {
    cls += `-${blockSuffix}`
  }
  // 元素
  if (element) {
    cls += `__${element}`
  }
  // 修饰器
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

const useNamespace = (block: string) => {
  // 块后缀
  const b = (blockSuffix = '') => genBemClass(namespace, block, blockSuffix, '', '')
  // 元素
  const e = (element?: string) => (element ? genBemClass(namespace, block, '', element, '') : '')
  // 修饰器
  const m = (modifier?: string) => (modifier ? genBemClass(namespace, block, '', '', modifier) : '')
  // 块后缀&&元素
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element ? genBemClass(namespace, block, blockSuffix, element, '') : ''
  // 元素&&修饰器
  const em = (element?: string, modifier?: string) =>
    element && modifier ? genBemClass(namespace, block, '', element, modifier) : ''
  // 后缀&&修饰器
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier ? genBemClass(namespace, block, blockSuffix, '', modifier) : ''
  // 块后缀&&元素&&修饰器
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? genBemClass(namespace, block, blockSuffix, element, modifier)
      : ''
  // 状态
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0] : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is
  }
}

export default useNamespace
