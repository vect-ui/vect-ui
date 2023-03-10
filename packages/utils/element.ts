import type { VNode } from 'vue'
import { Comment, Fragment, Text } from 'vue'

export function isEmptyElement(c: VNode) {
  return (
    c &&
    (c.type === Comment ||
      (c.type === Fragment && c.children?.length === 0) ||
      (c.type === Text && (c.children as string).trim() === ''))
  )
}

export function filterEmpty(children: VNode[] = []) {
  const res: VNode[] = []
  children.forEach(child => {
    if (Array.isArray(child)) {
      res.push(...child)
    } else if (child?.type === Fragment) {
      res.push(...filterEmpty(child.children as VNode[]))
    } else {
      res.push(child)
    }
  })
  return res.filter(c => !isEmptyElement(c))
}
