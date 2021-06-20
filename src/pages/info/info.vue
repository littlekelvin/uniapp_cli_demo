<template>
	<view id="content">
		<view class="title">{{post.title}} kelvin</view>
		<view class="details">
			<rich-text :nodes="post.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				post: {}
			}
		},
		onLoad(e) {
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsId,
				method: 'GET',
				success: res => {
					this.post = res.data
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
