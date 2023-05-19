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
	</view>
</template>

<script setup>
	const props = defineProps({
		shopInfo: {
			type: Object,
			default: () => ({})
		}
	})
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