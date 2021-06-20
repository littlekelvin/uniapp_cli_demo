<template>
	<view id="content">
		<view class="title">{{post.title}} kelvin deploy test1</view>
		<view class="details">
			<rich-text :nodes="richNodes"></rich-text>
		</view>
	</view>
</template>

<script>
	import parseHtml from '@/common/html-parser.js'
	export default {
		data() {
			return {
				post: {},
				richNodes: []
			}
		},
		onLoad(e) {
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsId,
				method: 'GET',
				success: res => {
					this.post = res.data
					this.richNodes = parseHtml(this.post.content)
				}
			})
		},
		methods: {
			
		}
	}
</script>

<style>

#content{padding:10upx 2%; width: 96%; flex-wrap:wrap;}
.title{line-height:2em; font-weight:700; font-size:38upx;}
.art-content{line-height:2em;}
</style>
