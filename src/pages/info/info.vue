<template>
  <view id="content">
    <view class="title">
      <button type="default" @click="changeLang">switch</button>
    </view>
    <view class="title">{{ post.title }} kelvin deploy test12 {{ $t('index.invite') }}</view>
    <view class="details">
      <rich-text :nodes="richNodes"></rich-text>
    </view>
  </view>
</template>

<script>
  import parseHtml from '@/common/html-parser.js'
  import i18n from '@/i18n'
  export default {
    data() {
      return {
        post: {},
        richNodes: [],
      }
    },
    onLoad(e) {
      uni.request({
        url: 'https://unidemo.dcloud.net.cn/api/news/36kr/' + e.newsId,
        method: 'GET',
        success: (res) => {
          this.post = res.data
          this.richNodes = parseHtml(this.post.content)
        },
      })
    },
    methods: {
      changeLang() {
        if (i18n.locale === 'en-US') {
          i18n.locale = 'zh-CN'
        } else {
          i18n.locale = 'en-US'
        }
      },
    },
  }
</script>

<style>
  #content {
    padding: 10upx 2%;
    width: 96%;
    flex-wrap: wrap;
  }
  .title {
    line-height: 2em;
    font-weight: 700;
    font-size: 38upx;
  }
  .art-content {
    line-height: 2em;
  }
</style>
