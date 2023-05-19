<template>
	<view class="ordering-content">
		<view class="type-menu">
			<scroll-view class="type-menu-scroll-view" scroll-y="true">
				<view v-for="(item, index) in menuList" :key="index" class="menu-item">
					{{item.name}}
				</view>
			</scroll-view>
		</view>
		<view class="food-content">
			<scroll-view class="food-content-scroll-view" scroll-y="true">
				<view class="title">盖浇饭</view>
				<view v-for="item in wxshopDetailInfo" :key="item._id" class="food-item">
					<image class="image" :src="item.objdis.image"></image>
					<view class="food-info">
						<view class="food-name">{{item.objdis.input}}</view>
						<view class="desc">
							<text v-for="(tag,index) in item.objdis.tags" :key="index" class="text">{{tag}}</text>
						</view>
						<view class="sale">月售0</view>
						<view class="total">
							<view class="new-price">￥{{item.objdis.Discount}}</view>
							<view class="total-right">
								<view class="old-price">￥{{item.objdis.Price}}</view>
								<view class="action">
									<view class="decrement" @click="decrement(item)">-</view>
									<view class="total">
										<text>{{item.count}}</text>
									</view>
									<view class="increment" @click="increment(item)">+</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="cart-content">
			<view class="cart-total">
				<view class="cart-img">
					<image class="image" src="@/static/images/detail/cart_empty.png" mode=""></image>
					<view v-if="badgeValue" class="badge">{{badgeValue}}</view>
				</view>
				<view class="fee">
					<text class="price">￥{{totalVal}}</text>
					<text class="distribution">另需配送费{{shopInfo.physical}}元</text>
				</view>
			</view>
			<view class="cart-count" @click="confirm">
				<text v-if="totalVal < shopInfo.delivering" class="delivering">{{shopInfo.delivering}}元起送</text>
				<text v-else class="count">去结算</text>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref,
		computed
	} from "vue"

	const emits = defineEmits(["increment-count", "decrement-count"])
	const props = defineProps({
		wxshopDetailInfo: {
			type: Array,
			default: () => ([])
		},
		shopInfo: {
			type: Object,
			default: () => ({})
		}
	})

	const menuList = ref([{
		name: "盖浇饭"
	}, {
		name: "小吃"
	}, {
		name: "鸡鸭"
	}, {
		name: "小炒"
	}])
	const totalVal = computed(() => {
		if (!Object.keys(props.wxshopDetailInfo).length) return
		let total = 0
		props.wxshopDetailInfo.forEach((item) => {
			total += item.count * item.objdis.Discount
		})
		return total.toFixed(1)
	})
	const badgeValue = computed(() => {
		if (!Object.keys(props.wxshopDetailInfo).length) return 0
		return props.wxshopDetailInfo.filter((item) => {
			return item.count !== 0
		}).length
	})
	const selectedWxshopDetailInfo = ref([])

	const increment = (item) => {
		emits("increment-count", item._id)

	}

	const decrement = (item) => {
		emits("decrement-count", item._id)
	}

	const confirm = () => {
		selectedWxshopDetailInfo.value = props.wxshopDetailInfo.filter((item) => {
			return item.count !== 0
		})
		console.log(selectedWxshopDetailInfo.value)
	}
</script>

<style lang="scss">
	.ordering-content {
		display: flex;
		// height: calc(100% - 228rpx);

		.type-menu {
			width: 150rpx;
			padding-bottom: 120rpx;
			background-color: #fbfbfa;

			.type-menu-scroll-view {
				height: 100%;
			}

			.menu-item {
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				color: #a8a8a7;
			}
		}

		.food-content {
			flex: 1;
			padding-bottom: 120rpx;

			.title {
				height: 80rpx;
				line-height: 80rpx;
				font-size: 26rpx;
			}

			.food-content-scroll-view {
				height: 100%;

				.food-item {
					display: flex;
					margin-bottom: 10rpx;

					.image {
						width: 200rpx;
						height: 200rpx;
						border-radius: 20rpx;
						margin-right: 10rpx;
					}

					.food-info {
						display: flex;
						flex-direction: column;
						flex: 1;

						.food-name {
							color: #333;
							font-size: 36rpx;
							font-weight: 700;
						}

						.desc {
							display: flex;
							align-items: center;
							gap: 10rpx;
							margin: 10rpx 0;

							.text {
								padding: 0 10rpx;
								font-size: 24rpx;
								border-radius: 10rpx;
								color: #888887;
								background-color: #f1f1f0;
							}
						}

						.sale {
							font-size: 24rpx;
							color: #888887;
							margin-bottom: 10rpx;
						}

						.total {
							display: flex;
							align-items: center;
							justify-content: space-between;

							.new-price {
								color: #e67e6a;
								margin-right: 40rpx;
							}

							.total-right {
								display: flex;
								align-items: center;
							}

							.old-price {
								margin-right: 20rpx;
								color: #a0a09f;
								font-size: 24rpx;
								text-decoration: line-through;
							}

							.action {
								display: flex;
								align-items: center;
								margin-right: 20rpx;

								.total {
									display: flex;
									justify-content: center;
									width: 100rpx;
								}

								.decrement,
								.increment {
									width: 48rpx;
									height: 48rpx;
									border-radius: 50%;
									text-align: center;
									box-sizing: border-box;
								}

								.decrement {
									color: #dddddc;
									border: 1px solid #d2d2d1;
								}

								.increment {
									background-color: #fecf5d;
								}
							}
						}
					}
				}
			}
		}

		.cart-content {
			position: fixed;
			bottom: 0;
			left: 50%;
			display: flex;
			justify-content: space-between;
			transform: translate(-50%);
			width: 95%;
			height: 120rpx;
			border-radius: 40rpx;
			background-color: #000;

			.cart-total {
				display: flex;
				height: 100%;
				margin-left: 50rpx;

				.cart-img {
					position: relative;

					.badge {
						position: absolute;
						top: 0;
						left: 70rpx;
						width: 50rpx;
						height: 50rpx;
						line-height: 50rpx;
						border-radius: 50%;
						color: #fff;
						text-align: center;
						background-color: #ff0000;
					}
				}

				.image {
					width: 100rpx;
					height: 100%;
					margin-right: 30rpx;
				}

				.fee {
					display: flex;
					flex-direction: column;
					margin-top: 10rpx;

					.price {
						margin-bottom: 10rpx;
						color: #fff;
					}

					.distribution {
						color: #575757;
						font-size: 26rpx;
					}
				}
			}

			.cart-count {
				width: 160rpx;
				line-height: 120rpx;
				text-align: center;
				border-top-right-radius: 40rpx;
				border-bottom-right-radius: 40rpx;

				.delivering {
					color: #575757;
				}

				.count {
					display: inline-block;
					width: 100%;
					height: 100%;
					border-top-right-radius: 40rpx;
					border-bottom-right-radius: 40rpx;
					background-color: #feca00;
				}
			}
		}
	}
</style>