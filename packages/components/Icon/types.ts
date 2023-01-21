// 拐点类型
export type StrokeLinejoin = 'miter' | 'round' | 'bevel'
// 端点类型
export type StrokeLinecap = 'butt' | 'round' | 'square'
// 图标主题
export type Theme = 'outline' | 'filled' | 'two-tone' | 'multi-color'
export interface ISvgIconProps {
  size?: number | string
  strokeWidth?: number
  strokeLinecap?: StrokeLinecap
  strokeLinejoin?: StrokeLinejoin
  theme?: Theme
  fill?: string | string[]
}
