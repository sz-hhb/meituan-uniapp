<template>
	<view class="merchant-intro">
		<view class="merchant-img">
			<image class="image" :src="shopInfo.logo"></image>
		</view>
		<view class="title">
			<view class="name">{{shopInfo.shop}}</view>
			<view class="duration">配送约{{shopInfo.duration}}分钟</view>
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
	.merchant-intro {
		display: flex;
		padding-left: 20rpx;
		gap: 20rpx;
		height: 128rpx;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
		background: linear-gradient(to top, #ffe566 10%, #ffd300 100%);

		.image {
			width: 150rpx;
			height: 120rpx;
		}

		.title {
			display: flex;
			flex-direction: column;
			gap: 20rpx;

			.name {
				margin-top: 10rpx;
				font-weight: 700;
			}

			.duration {
				font-size: 28rpx;
			}
		}
	}
</style>