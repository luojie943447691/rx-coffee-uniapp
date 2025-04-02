import { createSSRApp } from 'vue'
import App from './App.vue'
export function bootstrap() {
  const app = createSSRApp(App)
  return {
    app
  }
}
