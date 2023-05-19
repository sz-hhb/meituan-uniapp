<template>
	<view class="comment-content">
		<view class="comment-filter">
			<text class="item" :class="{active: currentTab === '全部'}" @click="handleFilterClick('全部')">全部</text>
			<view v-for="(item, index) in filterList" :key="index" class="item" :class="{active: currentTab === item}"
				@click="handleFilterClick(item)">
				<text>{{item}}</text>
			</view>
		</view>
		<view class="comment-list">
			<view v-for="item in messageDiscussList" :key="item._id" class="comment-box">
				<view class="comment-user">
					<view class="user">
						<image class="image" :src="item.messagedata.avatarUrl"></image>
						<text class="user-name">{{item.messagedata.nickName}}</text>
					</view>
					<text class="comment-time">{{item.messagedata.time}}</text>
				</view>
				<view class="comment-detail">
					<text>{{item.messagedata.usermess}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed,
		watch
	} from "vue"

	const props = defineProps({
		messageDiscussList: {
			type: Array,
			default: () => ([])
		}
	})

	const emits = defineEmits(["handle-filter-click"])

	let messageList = []
	const filterList = ref([])

	watch(() => props.messageDiscussList, (newVal) => {
		newVal.forEach((item) => {
			if (item.classmessage !== "") {
				messageList.push(item.classmessage)
			}
		})
		filterList.value = Array.from(new Set(messageList))
	})

	const currentTab = ref("全部")
	const handleFilterClick = (item) => {
		currentTab.value = item
		emits("handle-filter-click", item)
	}
</script>

<style lang="scss">
	.comment-content {
		padding: 0 20rpx;

		.comment-filter {
			display: flex;
			flex-wrap: wrap;
			margin-bottom: 40rpx;

			.item {
				height: 60rpx;
				line-height: 36rpx;
				margin-right: 10rpx;
				padding: 10rpx 10rpx;
				border: 1px solid #adadad;
				margin-top: 15rpx;
				border-radius: 5rpx;
				color: #333;
				font-weight: 700;
				font-size: 26rpx;
				box-sizing: border-box;
			}

			.active {
				border: 1px solid #fbd001;
				background-color: #fbd001;
			}
		}

		.comment-list {
			.comment-box {
				margin-bottom: 10rpx;
			}

			.comment-user {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.user {
					display: flex;
					align-items: center;

					.user-name {
						color: #7d7b7b;
					}
				}

				.comment-time {
					color: #7d7b7b;
					font-size: 24rpx;
				}

				.image {
					width: 50rpx;
					height: 50rpx;
					margin-right: 20rpx;
				}
			}

			.comment-detail {
				margin-top: 10rpx;
				font-size: 28rpx;
			}
		}
	}
</style>