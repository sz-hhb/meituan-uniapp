<template>
	<view class="search-page">
		<view class="search-cont">
			<input v-model="searchValue" class="search-input" type="text" confirm-type="search" :focus="true"
				placeholder="请输入关键字" @confirm="handleSearchConfirm" @input="handleSearchInput">
			<text class="search-text" @click="handleSearchClick">搜索</text>
		</view>
		<view v-if="!searchValue" class="search-history">
			<view class="title">搜索历史</view>
			<image class="image" src="@/static/images/home/delete.png" @click="handleClearHistory"></image>
		</view>
		<view v-if="!searchValue" class="search-history-data">
			<view v-for="(item, index) in searchHistoryList" :key="index" class="history-item"
				@click="handleHistoryItemClick(item)">
				{{item}}
			</view>
		</view>
		<view class="search-content">
			<merchant-box v-if="searchContentList.length && searchValue" :wxshop-list="searchContentList"></merchant-box>
			<view v-if="isShowNoDataTip" class="nodata">
				<image src="@/static/images/home/nodata.png" alt="" />
				<text>没有商品数据...</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		ref
	} from "vue"
	import {
		useSearchStore
	} from "@/stores/search.js"
	import {
		storeToRefs
	} from "pinia"

	const searchStore = useSearchStore()
	const {
		searchContentList,
		isShowNoDataTip
	} = storeToRefs(searchStore)
	const searchValue = ref("")
	const searchHistoryList = ref([])

	onLoad(() => {
		if (uni.getStorageSync("searchHistoryData")) {
			searchHistoryList.value = JSON.parse(uni.getStorageSync("searchHistoryData"))
		}
	})

	const handleSearchInput = (e) => {
		if (!e.detail.value) searchStore.searchContentList = []
	}

	const uniqueArray = (arr, ele) => {
		const index = arr.findIndex((item) => {
			return item === ele
		})
		if (index !== -1) {
			arr.splice(index, 1)
		}
	}

	const createHistoryRecord = (historyRecord) => {
		searchHistoryList.value = uni.getStorageSync("searchHistoryData") || []
		if (Object.prototype.toString.call(searchHistoryList.value) === "[object Array]") {
			if (searchValue.value) searchHistoryList.value.push(historyRecord)
		} else {
			searchHistoryList.value = JSON.parse(searchHistoryList.value)
			uniqueArray(searchHistoryList.value, historyRecord)
			if (searchValue.value) searchHistoryList.value.unshift(historyRecord)
		}
		uni.setStorageSync("searchHistoryData", JSON.stringify(searchHistoryList.value))
	}

	const handleSearchConfirm = (e) => {
		searchStore.isShowNoDataTip = false
		searchStore.searchContent({
			searchdata: e.detail.value
		})
		createHistoryRecord(e.detail.value)
	}

	const handleSearchClick = () => {
		searchStore.isShowNoDataTip = false
		searchStore.searchContent({
			searchdata: searchValue.value
		})
		createHistoryRecord(searchValue.value)
	}

	const handleHistoryItemClick = (item) => {
		searchValue.value = item
		handleSearchClick()
	}

	const handleClearHistory = () => {
		uni.removeStorageSync("searchHistoryData")
		searchHistoryList.value = []
	}
</script>

<style lang="scss">
	.search-page {
		.search-cont {
			display: flex;
			align-items: center;
			margin: 20rpx 0;

			.search-input {
				flex: 1;
				height: 70rpx;
				margin-left: 60rpx;
				border-radius: 10rpx;
				border-bottom: 1px solid #eee;
			}

			.search-text {
				margin-right: 40rpx;
			}
		}

		.search-history {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 50rpx 30rpx 20rpx 30rpx;

			.title {
				color: #333;
				font-weight: 700;
			}

			.image {
				width: 40rpx;
				height: 40rpx;
			}
		}

		.search-history-data {
			display: flex;
			flex-wrap: wrap;
			gap: 10rpx;
			margin-left: 30rpx;
			margin-right: 30rpx;

			.history-item {
				padding: 10rpx;
				border-radius: 20rpx;
				background-color: #eee;
			}
		}

		.search-content {
			padding: 0 30rpx;

			.nodata {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 20rpx;
				margin-top: 100rpx;

				image {
					width: 300rpx;
					height: 300rpx;
				}
			}
		}
	}
</style>