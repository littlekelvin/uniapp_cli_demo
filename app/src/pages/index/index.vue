<template>
  <view class="content">
    <view class="uni-list">
      <view
        class="uni-list-cell"
        hover-class="uni-list-cell-hover"
        v-for="(item, index) in news"
        :key="index"
        @click="openInfo"
        :data-newsid="item.post_id"
      >
        <view class="uni-media-list">
          <image class="uni-media-list-logo" :src="item.author_avatar"></image>
          <view class="uni-media-list-body">
            <view class="uni-media-list-text-top">{{ item.title }}</view>
            <view class="uni-media-list-text-bottom uni-ellipsis">{{ item.created_at }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import _ from 'lodash'
  import { getNewsList } from '@/api/news.api'

  export default {
    data() {
      return {
        news: []
      }
    },
    async onLoad() {
      const res = await getNewsList()
      this.news = res
    },
    methods: {
      openInfo(e) {
        const str = '@bing'
        const re = _.replace(str, '@', '%')
        console.log(str)
        console.log(re)
        if (process.env.NODE_ENV === 'development') {
          console.log('dev')
        }
        if (process.env.NODE_ENV === 'production') {
          console.log('prod')
        }
        uni.navigateTo({
          url: '../info/info?newsId=' + e.currentTarget.dataset.newsid
        })
      }
    }
  }
</script>

<style lang="scss">
  .uni-media-list-body {
    height: auto;
  }
  .uni-media-list-text-top {
    line-height: 40rpx;
  }
</style>
