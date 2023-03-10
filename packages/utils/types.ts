export { isString, isArray, isFunction, isObject, isDate, isSymbol, isPromise } from '@vue/shared'

export const isBoolean = (val: unknown): val is boolean => typeof val === 'boolean'
export const isNumber = (val: unknown): val is number => typeof val === 'number'

export const isUndefined = (val: unknown): val is undefined => typeof val === 'undefined'
