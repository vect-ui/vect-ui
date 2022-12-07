<p align="center">
  <img height="160px" src="https://af92jz-vectui.oss.lafyun.com/logo.svg">
  <h2 align="center" style="font-weight: 600">Vect UI</h2>
</p>

<p align="center">
  an UI library based on Vue3 + TS
</p>

## 安装 Install

use `pnpm`

```shell
pnpm add vect-ui
```

use `npm`

```shell
npm install vect-ui
```

use `yarn`

```shell
yarn add vect-ui
```

## 快速开始 Quick Start

Introduce the following code into the entry file.

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VectUI from 'vect-ui'
import 'vect-ui/css'

createApp(App).use(VectUI).mount('#app')
```

## 共建 Develop Guide:

#### 提交 Commit:

pnpm commit or npm run commit or yarn commit

#### 调试 Debug:

pnpm run dev:play -> 引入相关组件。
