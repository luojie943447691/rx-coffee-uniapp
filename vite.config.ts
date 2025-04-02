import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'
// import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  // 使用动态 import 的方式导入 unocss 包，unocss 从 0.59 开始，只有导出 esm 包了
  const { default: UnoCSS } = await import('unocss/vite')

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      uni(),
      UnoCSS(),
      AutoImport({
        imports: [
          'vue',
          'uni-app',
          'pinia',
          {
            '@/api': ['useRequest']
          }
        ],
        dts: true
      })
    ]
  }
})
