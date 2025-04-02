export {}

declare module 'vue' {
  type Hooks = App.AppInstance & Page.PageInstance
  interface ComponentCustomOptions extends Hooks {}
  export { createSSRApp } from 'vue/dist/vue.cjs.js'
}
