import type { UserConfig } from 'vitepress'
import { mdPlugin } from './plugins/mdPlugin'
import { head, nav, sidebar } from './layoutConfig'

export const config: UserConfig = {
  title: 'Vect UI',
  description: 'an UI library based on Vue3 + TS',
  lastUpdated: true,
  head,
  themeConfig: {
    nav,
    sidebar,
    lastUpdated: '最后更新时间',
    logo: '/images/logo.svg',
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/haihaixhj/vect-ui'
      }
    ]
  },
  markdown: {
    config: md => mdPlugin(md)
  }
}

export default config
