---
title: Button
---

# Button 按钮

## 基本使用
使用 `type` 配置 `Button` 的外观颜色
<Repl initCode='<template>
<v-button />
<v-button type="primary"/>
<v-button type="warning"/>
<v-button type="danger"/>
</template>'/>

## 不同尺寸
使用 `size` 配置 `Button` 的尺寸大小
<Repl initCode='<template>
<v-button type="primary" size="small"/>
<v-button type="primary"/>
<v-button type="primary" size="large"/>
</template>'/>

## 圆角按钮
使用 `round` 配置 `Button` 的圆角幅度
<Repl initCode='<template>
<v-button type="primary" round />
</template>'/>

## 圆形按钮
使用 `circle` 配置 `Button` 圆形
<Repl initCode='<template>
<v-button type="primary" circle />
</template>'/>

## 加载中
使用 `loading` 配置 `Button` 加载中
<Repl initCode='<template>
<v-button type="primary" loading />
</template>'/>

## 禁用按钮
使用 `disabled` 配置 `Button` 是否禁用
<Repl initCode='<template>
<v-button type="primary" disabled />
</template>'/>

## 属性
| 参数     | 说明                         | 类型    | 可选值                                 |
| ---------- | ------------------------ | ------- | --------------------------------------|
| `type`     | 配置 `Button` 的外观颜色   | String    | default / primary / warning / danger |
| `size`     | 配置 `Button` 的尺寸大小   | String    | small / medium / large               |
| `round`    | 配置 `Button` 的圆角幅度   | Boolean   | -                                    |
| `circle`   | 配置 `Button` 圆形         | Boolean | -                                      |
| `loading`  | 配置 `Button` 加载中       | Boolean | -                                       |
| `disabled` | 配置 `Button` 是否禁用       | Boolean | -                                     |

## 事件
| 事件名    | 类型            |
| ------   | --------------- |
| `click`  | (e:Event)=>void |