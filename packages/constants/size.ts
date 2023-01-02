export const componentSizes = ['', 'default', 'small', 'large'] as const

export type ComponentSize = typeof componentSizes[number]

export const componentSizeMap = {
  small: 24,
  default: 32,
  large: 40
}
