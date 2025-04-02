<template>
  <view class="content">
    <view class="i-mdi:home text-20rpx"></view>
    <view><button @click="getList">点击请求数据</button></view>
  </view>
  <view class="p-2">
    <view
      class="my-15rpx border-b-solid b-b-1rpx b-b-color-[#cccccc]"
      v-for="item in list"
      :key="item.id"
    >
      <text class="text-18rpx font-bold">{{ item.title }}</text>
      <view class="mt-4 text-12rpx color-[#9999]">{{ item.body }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import { useRequest } from '@/api'
  const request = useRequest()
  const list = ref<any[]>([])

  const getList = () => {
    uni.showLoading({
      title: '加载中...'
    })

    request!
      .API_DEMO_GET({ a: 1 })
      .then((res: any) => {
        console.log(res)
        list.value = res
        uni.hideLoading()
      })
      .catch(() => {
        uni.hideLoading()
      })
  }
</script>
