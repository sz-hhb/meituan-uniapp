<template>
	<view class="introduce">
		<view class="location flex">
			<image class="image" src="@/static/images/detail/location.png"></image>
			<text class="text">{{shopInfo.address}}</text>
		</view>
		<view class="file flex">
			<image class="image" src="@/static/images/detail/file.png"></image>
			<text class="text">查看食品安全档案</text>
		</view>
		<view class="time flex">
			<image class="image" src="@/static/images/detail/time.png"></image>
			<text class="text">配送时间:{{shopInfo.times}}</text>
		</view>
		<view class="service flex">
			<image class="image" src="@/static/images/detail/service.png"></image>
			<text class="text">商家服务:到店自取(享优惠)</text>
		</view>
		<button @click="showToast">showToast</button>
		<button @click="showModal">showModal</button>
		<button @click="login">login</button>
	</view>
</template>

<script setup>
	import {
		wxLogin,
		userWxLogin
	} from "@/service/login.js"

	const props = defineProps({
		shopInfo: {
			type: Object,
			default: () => ({})
		}
	})

	const showToast = () => {
		uni.showToast({
			icon: "none",
			title: '标题',
			duration: 2000
		})
	}

	const showModal = () => {
		uni.showModal({
			title: '提示',
			content: '这是一个模态弹窗',
			success: function(res) {
				if (res.confirm) {
					console.log('用户点击确定')
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		})
	}

	const login = async () => {
		const code = await wxLogin()
		const res = await userWxLogin({
			code
		})
		console.log(code)
	}
</script>

<style lang="scss">
	.introduce {
		.flex {
			display: flex;
			align-items: center;
			gap: 20rpx;
			margin-top: 70rpx;
			margin-left: 20rpx;
		}

		.image {
			width: 50rpx;
			height: 50rpx;
		}
	}
</style>