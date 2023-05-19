<template>
	<view v-if="wxshopList.length" class="shop-content">
		<merchant-box :wxshop-list="wxshopList"></merchant-box>
	</view>
	<view v-else class="no-data">
		<text>没有更多数据...</text>
	</view>
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
		wxshopList
	} = storeToRefs(homeStore)
</script>

<style lang="scss">
	.shop-content {
		margin-top: 30rpx;
	}

	.no-data {
		text-align: center;
		margin-top: 20rpx;
	}
</style>