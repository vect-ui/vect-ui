declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare namespace JSX {
  interface IntrinsicAttributes {
    class?: any
    style?: any
    [propsName: string]: any
  }
}
