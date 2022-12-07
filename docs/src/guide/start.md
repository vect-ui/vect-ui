# 开始

## 完整引入

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import App from './App.vue'

import VectUI from 'vect-ui'
import 'vect-ui/css'

createApp(App).use(VectUI).mount('#app')
```
