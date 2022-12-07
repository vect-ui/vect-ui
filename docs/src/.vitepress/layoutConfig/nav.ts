import { version } from '../../../../packages/vect-ui/package.json'

/**
 * 顶部导航栏菜单
 */
export const nav = [
  {
    text: '指南',
    activeMatch: '^/guide/',
    link: '/guide/installation'
  },
  {
    text: '组件',
    activeMatch: '^/components/',
    link: '/components/button'
  },
  {
    text: version,
    link: 'https://www.npmjs.com/package/vect-ui'
  }
]
