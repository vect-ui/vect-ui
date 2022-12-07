import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      href: '/images/logo.svg'
    }
  ],
  [
    'meta',
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0,user-scalable=no'
    }
  ],
  [
    'meta',
    {
      name: 'Keywords',
      content:
        '前端,前端开发,组件库,vue3组件库,vue,vuejs,javascript,typescript,vite,css3,css,html,html5,js,ts,scss,sass,fighting-design,fighting,design,setup,eslint,es6,rollup,components,vitepress,vitest,element,element-ui,ui,element-plus,go,golang,web-components,web,jquery,less,eslint,commitlint,cli,types,node,test-utils,happy-dom,husky'
    }
  ]
] as HeadConfig[]
