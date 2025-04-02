import App from './App.vue'
export function bootstrap() {
  const app = createApp(App)
  return {
    app
  }
}
