// src/store/count.js
export const useCountStore = defineStore(
  'count',
  () => {
    const count = ref(0)
    const increase = () => {
      count.value++
    }
    return {
      count,
      increase
    }
  },
  {
    persist: true // 配置持久化
  }
)
