export type StrokeLinejoin = 'miter' | 'round' | 'bevel'
export type StrokeLinecap = 'butt' | 'round' | 'square'
export interface ISvgIconProps {
  id: string
  size: number | string
  strokeWidth: number
  strokeLinecap: StrokeLinecap
  strokeLinejoin: StrokeLinejoin
  colors: string[]
}
