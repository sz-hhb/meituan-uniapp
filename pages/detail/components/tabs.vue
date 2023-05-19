<template>
	<view class="tab-content">
		<view v-for="(item, index) in tabList" :key="index" class="tab-item"
			:class="{'active-class': currentIndex === index}" @click="handleTabItemClick(index)">
			{{item.name}}
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue"

	const emits = defineEmits(["change-tab-index"])

	const currentIndex = ref(0)
	const tabList = ref([{
			name: "点菜"
		},
		{
			name: "评价"
		},
		{
			name: "商家"
		}
	])

	const handleTabItemClick = (index) => {
		if (currentIndex.value !== index) {
			currentIndex.value = index
			emits("change-tab-index", index)
		}
	}
</script>

<style lang="scss">
	.tab-content {
		display: flex;
		padding: 30rpx 0 10rpx 20rpx;
		gap: 60rpx;
		box-sizing: border-box;

		.tab-item {
			padding-bottom: 15rpx;
			color: #a8a9ab;
		}

		.active-class {
			border-bottom: 2px solid #f5d16c;
			color: #333333;
			font-weight: 700;
		}
	}
</style>