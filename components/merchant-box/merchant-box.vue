<template>
	<view class="merchant-box">
		<view v-for="item in wxshopList" :key="item._id" class="item" @click="goToDetail(item)">
			<image class="food-image" :src="item.logo" mode=""></image>
			<view class="info">
				<view class="name">{{item.shop}}</view>
				<view class="sale">
					<view class="sales-volume fs26">月售200</view>
					<view class="time fs26">约{{item.duration}}分钟</view>
				</view>
				<view class="price">
					<view class="start-delivery fs26">起送￥{{item.delivering}}</view>
					<view class="distribution fs26">配送￥{{item.physical}}</view>
					<view class="people-average fs26">人均￥{{item.capita}}</view>
				</view>
				<view class="desc">
					<image class="image" src="@/static/images/home/gift.png" mode=""></image>
					<view class="suisine fs26">{{item.types}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	const props = defineProps({
		wxshopList: {
			type: Object,
			default: () => ({})
		}
	})

	const goToDetail = (item) => {
		uni.navigateTo({
			url: "/pages/detail/detail?openid=" + item.openid
		})
	}
</script>

<style lang="scss">
	.merchant-box {
		.item {
			display: flex;
			height: 220rpx;
			border-bottom: 1px solid #e8e8e8;
			margin-bottom: 10rpx;
		}

		.food-image {
			width: 240rpx;
			height: 100%;
			margin-right: 10rpx;
		}

		.info {
			flex: 1;

			.name {
				color: #333;
				font-size: 36rpx;
				font-weight: 700;
			}

			.fs26 {
				font-size: 26rpx;
				color: #999;
			}

			.sale {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 20rpx 0;
			}

			.price {
				display: flex;
				align-items: center;
				gap: 40rpx;
				margin: 20rpx 0;
			}

			.desc {
				display: flex;
				align-items: center;
				gap: 10rpx;
				margin: 20rpx 0;

				.image {
					width: 40rpx;
					height: 40rpx;
				}
			}
		}
	}
</style>