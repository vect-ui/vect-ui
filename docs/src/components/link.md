---
title: Link
---

# Link 链接
文字超链接

## 基本使用
使用 `type` 配置 `Link` 的外观颜色
<Repl initCode='<template>
  <v-link type="default" />
  <v-link type="primary" />
  <v-link type="warning" />
  <v-link type="danger" />
</template>'/>

## 跳转链接
使用 `href` 配置 `Link` 的跳转链接
<Repl initCode='<template>
  <v-link type="primary" href="https://vuejs.org/"/>
</template>'/>

## 打开方式
使用 `target` 配置 `Link` 的链接打开方式，默认 `_blank`
<Repl initCode='<template>
  <v-link type="primary" href="https://vuejs.org/" target="_top"/>
</template>'/>

## 属性
| 参数           | 说明                         | 类型     | 可选值                                         |
| ------------- | --------------------------- | ---------| --------------------------------------------- |
| `type`        | 配置 `Link` 的外观颜色         | String   | default / primary / warning / danger  |
| `href`        | 配置 `Link` 的跳转链接        | String    | -                                             |
| `target`      | 配置 `Link` 的链接打开方式     | String    | _self / _blank / _top / _parent      |

