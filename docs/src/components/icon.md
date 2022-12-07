---
title: Icon
---

# Icon 图标

## 介绍
组件库的图标 `svg`  出自第三方 `IconPark` 的 `svg` 库

使用前需要进行安装 `npm/yarn/pnpm`
```shell
use npm 
npm install @vect-ui/icons

use yarn
yarn add @vect-ui/icons

use pnpm
pnpm install @vect-ui/icons
```

## 基本使用
`script` 中引入icons包，并且将其作为 `icon` props传入
<Repl initCode='
<template>
  <v-icon :icon="Config"/>
</template>
<script setup lang="ts">
import { Config } from "@vect-ui/icons"
</script>
'/>

## 图标大小
使用 `size` 配置 `Icon` 的大小，亦可使用 `iconConfig` 的 `size` 属性配置
<Repl initCode='
<template>
  <v-icon :icon="Config" :size="30" />
</template>
<script setup lang="ts">
import { Config } from "@vect-ui/icons"
</script>
'/>

## 图标配置
使用 `iconConfig` 配置 `icon` 的样式
<Repl initCode='
<template>
  <v-icon :icon="Config" :icon-config="iconConfig" />
</template>
<script setup lang="ts">
import { Config } from "@vect-ui/icons"
const iconConfig = {
  size: 30,
  strokeWidth: 3,
  strokeLinejoin: "round"
}
</script>
'/>

## 属性
| 参数           | 说明                      | 类型                            | 可选值 |
| ------------- | --------------------------| ----------------------------- | ------|
| `icon`        | 配置 `icon` 的图标          | (p?: ISvgIconProps) => string | -     |
| `iconConfig`  | 配置 `icon` 的样式          | ISvgIconProps                 | -     |
| `size`        | 配置 `Icon` 的大小          | Number                        | -     |

