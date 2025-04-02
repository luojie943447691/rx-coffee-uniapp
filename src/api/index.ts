/**
 * 模块化方式处理 默认处理 modules文件夹下的所有ts文件 内容以export default导出的文件
 * @param { 模块内容集合 } moduleContext
 * @returns modules集合
 */
type ModuleContext = Record<string, { default: Record<string, any> }>

const modulesHandle = (moduleContext: ModuleContext = {} as ModuleContext) => {
  if (!Object.keys(moduleContext).length) return
  const modules: Record<string, any> = {}
  Object.keys(moduleContext).forEach((v) => {
    for (const key in moduleContext[v].default) {
      modules[key] = moduleContext[v].default[key]
    }
  })
  return modules
}

const apis = modulesHandle(
  import.meta.glob('./modules/**/*.ts', { eager: true }) as unknown as ModuleContext
)
export const useRequest = () => apis
