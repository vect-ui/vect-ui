import { EditorView } from '@codemirror/view'
import type { Extension } from '@codemirror/state'

const customTheme: Extension = EditorView.theme({
  // 编辑区域 整体样式
  '.cm-content': {
    fontWeight: 500,
    fontFamily: 'Menlo, Monaco, Consolas, "Courier New", monospace',
    backgroundColor: 'rgba(248, 248, 248,.3)'
  },
  // 激活选中 此行背景颜色
  '.cm-activeLine': {
    backgroundColor: 'rgba(66, 184, 131,.1)'
  },
  // 激活选中 行槽背景颜色
  '.cm-activeLineGutter': {
    background: 'rgba(66, 184, 131,.1)'
  },
  //光标颜色
  '.cm-cursor': {
    borderLeftColor: '#515052',
    width: '3px'
  },
  // select选中行的样式
  '.cm-selectionBackground, ::selection': {
    background: 'rgb(215, 212, 240)'
  },
  // select选中内容的样式
  '&.cm-focused .cm-selectionBackground': {
    background: 'rgb(215, 212, 240)'
  },
  // 行槽样式
  '.cm-gutters': {
    background: 'rgba(248, 248, 248,.3)',
    color: '#ddd', //侧边栏文字颜色
    border: 'none'
  },
  // 选中 匹配的其他tag
  '.cm-selectionMatch': {
    backgroundColor: 'transparent'
  },
  // 选中 没用被匹配的其他tag
  '&.cm-focused .cm-nonmatchingBracket': {
    background: 'transparent'
  },
  // html标签颜色
  'span.ͼi': {
    color: '#dd0000'
  },
  // 属性值颜色
  'span.ͼe': {
    color: '#2ba46d'
  }
})

export default customTheme
