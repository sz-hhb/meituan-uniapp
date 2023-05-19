<template>
	<view class="prefer-content">
		<view class="prefer-title">为你优选</view>
	</view>
	<scroll-view class="prefer-scroll-view" scroll-x="true" :scroll-with-animation="true">
		<template v-for="item in preferList" :key="item._id">
			<view class="prefer-view">
				<view class="prefer-detail">
					<image class="image" :src="item.image" mode=""></image>
					<text class="name text">{{item.title}}</text>
					<text class="desc text">{{item.lable}}</text>
				</view>
			</view>
		</template>
	</scroll-view>
</template>

<script setup>
	import {
		useHomeStore
	} from "@/stores/home.js"
	import {
		storeToRefs
	} from "pinia"

	const homeStore = useHomeStore()
	const {
		preferList
	} = storeToRefs(homeStore)
</script>

<style lang="scss">
	.prefer-content {
		margin: 30rpx 0;

		.prefer-title {
			height: 50rpx;
			line-height: 50rpx;
			margin-bottom: 20rpx;
			font-size: 36rpx
		}
	}

	.prefer-scroll-view {
		width: 100%;
		height: 300rpx;
		white-space: nowrap;

		.prefer-view {
			display: inline-block;
			padding-right: 20rpx;

			.prefer-detail {
				display: flex;
				flex-direction: column;
			}

			.image {
				width: 300rpx;
				height: 200rpx;
				border-radius: 8rpx;
			}

			.text {
				height: 45rpx;
				line-height: 45rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.name {
				font-size: 30rpx
			}

			.desc {
				font-size: 28rpx;
				color: #9c9c9c;
			}
		}
	}
</style>