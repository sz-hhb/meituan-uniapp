<template>
	<view class="search-page">
		<view class="location">
			<image class="image" src="@/static/images/home/location.png"></image>
			<text class="text">阿里巴巴淘宝城</text>
			<image class="image" src="@/static/images/home/right_arrow.png"></image>
		</view>
		<view class="search-cont">
			<image class="image" src="@/static/images/home/search.png"></image>
			<input class="search-input" type="text" placeholder="搜索" disabled @click="hanldeSearchInputClick">
		</view>
		<view class="swiper-content">
			<swiper class="swiper" :indicator-dots="true" :autoplay="false" :duration="1000" :interval="2000">
				<swiper-item v-for="(item, index) in swiperData" :key="index" class="swiper-item">
					<view v-for="(subItem, index) in item" :key="index" class="item">
						<image class="image" :src="subItem.img"></image>
						<text>{{subItem.title}}</text>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"

	const swiperData = ref([
		[{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			},
			{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			},
			{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			},
			{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			},
			{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}
		],
		[{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			},
			{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			},
			{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			},
			{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			},
			{
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}, {
				img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
				title: "美食"
			}
		]
	])

	const hanldeSearchInputClick = () => {
		uni.navigateTo({
			url: "/pages/search/search"
		})
	}
</script>

<style lang="scss">
	.search-page {
		.location {
			display: flex;
			align-items: center;
			gap: 20rpx;

			.image {
				width: 35rpx;
				height: 35rpx;
			}

			.text {
				color: #111;
				font-size: 32rpx;
				font-weight: 700;
			}
		}

		.search-cont {
			position: relative;
			margin: 20rpx 0;

			.image {
				position: absolute;
				width: 35rpx;
				height: 35rpx;
				top: 50%;
				left: 10rpx;
				transform: translateY(-50%);
			}

			.search-input {
				height: 70rpx;
				padding-left: 60rpx;
				border-radius: 10rpx;
				background-color: #eff3f4;
			}
		}

		.swiper {
			height: 400rpx;

			.swiper-item {
				display: flex;
				flex-wrap: wrap;

				.item {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 20%;

					.image {
						width: 100rpx;
						height: 100rpx;
					}
				}
			}
		}
	}
</style>