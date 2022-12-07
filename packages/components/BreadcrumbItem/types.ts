import type { InjectionKey } from 'vue'

export interface IBreadcrumbKeyInject {
  separator: string | (() => string)
}

export const BreadcrumbKeyInject = Symbol('v-breadcrumb') as InjectionKey<IBreadcrumbKeyInject>
