<template>
	<view class="delicacy-content">
		<view class="label">
			<view class="sort" @click="handleSortClick">
				<text class="text">{{sortText}}</text>
				<image class="image" src="@/static/images/home/sort.png" mode=""></image>
			</view>
			<text class="text">销量高</text>
			<text class="text">速度快</text>
			<text class="text">津贴联盟</text>
		</view>
		<view class="filter" @click="handleFilterClick">
			<text class="text">筛选</text>
			<image class="image" src="@/static/images/home/filter.png" mode=""></image>
		</view>
	</view>
	<uni-popup class="sort-popup" ref="sortPopupRef" type="top" background-color="#fff" @change="handlePopupChange">
		<view v-for="(item, index) in sortList" :key="index" class="sort-item" @click="handleSortSelect(item)">
			<text class="text" :class="{'active-class': sortText === item.name}">{{item.name}}</text>
		</view>
	</uni-popup>
	<uni-popup class="filter-popup" ref="filterPopupRef" type="top" background-color="#fff" @change="handlePopupChange">
		<view class="popup-content">
			<view class="item">
				<view v-for="(item, index) in screenData" :key="index" class="shop-best">
					<view class="title">{{item.title}}</view>
					<view class="checkbox">
						<uni-data-checkbox class="data-checkbox" mode="tag" multiple v-model="shopCheckboxValue"
							:localdata="item.datas" selectedColor="#fff8e0" selectedTextColor="#d49f46"
							:map="{text: 'name', value: 'sign'}"></uni-data-checkbox>
					</view>
				</view>
			</view>
			<view class="item">
				<view v-for="(item, index) in person" :key="index" class="shop-best">
					<view class="title">{{item.title}}</view>
					<view class="checkbox">
						<uni-data-checkbox class="data-checkbox" mode="tag" v-model="personCheckboxValue" :localdata="item.datas"
							selectedColor="#fff8e0" selectedTextColor="#d49f46"
							:map="{text: 'name', value: 'name'}"></uni-data-checkbox>
					</view>
				</view>
			</view>
			<view class="filter-btn">
				<button class="clear-btn" @click="handleClearFilter">清空</button>
				<button class="finish-btn" :class="{disabled: isFinishBtnEnabled}" @click="handleFinishFilter"
					:disabled="isFinishBtnEnabled">完成</button>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		ref,
		computed
	} from "vue"
	import {
		useHomeStore
	} from "@/stores/home.js"

	const emits = defineEmits(["change-page-overflow"])

	const homeStore = useHomeStore()

	const handlePopupChange = (e) => {
		emits("change-page-overflow", e.show)
	}

	const sortPopupRef = ref(null)
	const sortList = ref([{
			name: "综合排序",
			screen: "_id",
			nums: 1
		},
		{
			name: "起送价最低",
			screen: "delivering",
			nums: 1
		},
		{
			name: "配送费最低",
			screen: "physical",
			nums: 1
		},
		{
			name: "人均高到低",
			screen: "capita",
			nums: -1
		},
		{
			name: "人均低到高",
			screen: "capita",
			nums: 1
		},
	])
	const sortText = ref("综合排序")

	const handleSortSelect = (item) => {
		sortText.value = item.name
		sortPopupRef.value.close()
		homeStore.comprehensiveSortAction({
			screen: item.screen,
			nums: item.nums
		})
	}

	const handleSortClick = () => {
		sortPopupRef.value.open("open")
	}

	const filterPopupRef = ref(false)
	const screenData = ref([{
		title: "商家特色(可多选)",
		datas: [{
				id: 1,
				sign: "duration",
				name: "配送最快"
			}, {
				id: 1,
				sign: "deliver",
				name: "0元起送"
			},
			{
				id: 1,
				sign: "physi",
				name: "免配送费"
			}
		]
	}])
	const person = ref([{
		title: "人均价",
		datas: [{
				name: "20以下",
				per: {
					"$lt": 20
				}
			}, {
				name: "20-40元",
				per: {
					"$lte": 40,
					"$gte": 20
				}
			},
			{
				name: "40元以上",
				per: {
					"$gt": 40
				}
			}
		]
	}])
	const shopCheckboxValue = ref([])
	const personCheckboxValue = ref("")
	const multipleInfo = ref({})
	const isFinishBtnEnabled = computed(() => {
		// 当商家特色多选数组长度为0 和 人均价为空字符串时 按钮不可用
		return !shopCheckboxValue.value.length && !personCheckboxValue.value
	})

	const handleFilterClick = () => {
		filterPopupRef.value.open("open")
	}

	const handleClearFilter = () => {
		multipleInfo.value = {}
		shopCheckboxValue.value = []
		personCheckboxValue.value = ""
		filterPopupRef.value.close()
		homeStore.multipleFilterAction()
	}

	const handleFinishFilter = () => {
		multipleInfo.value = {}
		shopCheckboxValue.value.forEach((item) => {
			multipleInfo.value[item] = item
		})
		person.value[0].datas.forEach((item) => {
			if (item.name === personCheckboxValue.value) {
				multipleInfo.value["capita"] = item.per
			}
		})
		homeStore.multipleFilterAction(multipleInfo.value)
		filterPopupRef.value.close()
	}
</script>

<style lang="scss">
	.delicacy-content {
		position: sticky;
		top: var(--window-top);
		z-index: 98;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 15rpx 0;
		background-color: rgba(238, 238, 238, 0.6);

		.image {
			width: 20rpx;
			height: 20rpx;
		}

		.text {
			color: #707072;
			font-size: 30rpx;
		}

		.label {
			display: flex;
			gap: 20rpx;

			.sort {
				display: flex;
				align-items: center;
				gap: 5rpx;
			}
		}

		.filter {
			display: flex;
			align-items: center;
			gap: 5rpx;
		}
	}

	.sort-popup {
		.sort-item {
			height: 50rpx;
			line-height: 50rpx;
			padding: 10rpx 20rpx;
			border-top: 1px solid #ededed;

			.text {
				color: #000;
			}

			.text.active-class {
				color: #d49f46;
			}
		}
	}

	.filter-popup {
		.popup-content {
			position: relative;
			display: flex;
			flex-direction: column;
			gap: 40rpx;
			height: 700rpx;
			overflow-y: scroll;

			.item {
				padding: 0 30rpx;
			}

			.title {
				margin-bottom: 20rpx;
			}

			.filter-btn {
				position: absolute;
				left: 0;
				bottom: 0;
				display: flex;
				width: 100%;

				.clear-btn,
				.finish-btn {
					flex: 1;
					border-radius: 0;

					&::after {
						border: 0;
						border-radius: 0;
					}
				}

				.finish-btn {
					background-color: #ffd040;
				}

				.disabled {
					background-color: rgba(255, 208, 64, 0.5);
				}
			}
		}
	}
</style>