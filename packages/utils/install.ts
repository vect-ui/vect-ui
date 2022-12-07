import type { App, Plugin } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export const withInstall = <T, E extends Record<string, any>>(comp: T, extra?: E) => {
  ;(comp as SFCWithInstall<T>).install = function (app: App) {
    for (const c of [comp, ...Object.values(extra ?? {})]) {
      app.component(c.name, c)
    }
  }

  if (extra) {
    for (const [k, v] of Object.entries(extra)) {
      ;(comp as any)[k] = v
    }
  }

  return comp as SFCWithInstall<T> & E
}
