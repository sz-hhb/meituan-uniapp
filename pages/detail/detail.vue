<template>
	<view class="detail-content">
		<merchant-info :shop-info="shopInfo"></merchant-info>
		<tabs @change-tab-index="changeTabIndex"></tabs>
		<ordering v-if="currentContentIndex === 0" :wxshop-detail-info="wxshopDetailInfo" :shop-info="shopInfo"
			@increment-count="incrementCount" @decrement-count="decrementCount">
		</ordering>
		<comment v-else-if="currentContentIndex === 1" :message-discuss-list="messageDiscussList"
			@handle-filter-click="handleFilterClick"></comment>
		<introduce v-else-if="currentContentIndex === 2" :shop-info="shopInfo"></introduce>
	</view>
</template>

<script setup>
	import MerchantInfo from "./components/merchant-intro.vue"
	import Tabs from "./components/tabs.vue"
	import ordering from "./components/ordering.vue"
	import comment from "./components/comment.vue"
	import introduce from "./components/introduce.vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		ref,
		computed
	} from "vue"
	import {
		useDetailStore
	} from "@/stores/detail.js"
	import {
		storeToRefs
	} from "pinia"

	const detailStore = useDetailStore()

	const {
		shopInfo,
		wxshopDetailInfo,
		messageDiscussList
	} = storeToRefs(detailStore)

	const openid = ref("")

	onLoad((option) => {
		openid.value = option.openid
		fetchShopInfoData(option.openid)
		fetchWxshopDetailInfoData(option.openid)
		// fetchMessageDiscussData(option.openid)
	})

	const handleFilterClick = (item) => {
		if (item === "全部") {
			fetchMessageDiscussData(openid.value)
		} else {
			fetchMessageDiscussData(openid.value, item)
		}
	}

	const incrementCount = (id) => {
		const index = wxshopDetailInfo.value.findIndex((item) => item._id === id)
		wxshopDetailInfo.value[index].count++
	}

	const decrementCount = (id) => {
		const index = wxshopDetailInfo.value.findIndex((item) => item._id === id)
		if (wxshopDetailInfo.value[index].count > 0) {
			wxshopDetailInfo.value[index].count--
		}
	}

	const currentContentIndex = ref(0)

	const changeTabIndex = (index) => {
		currentContentIndex.value = index
		if (currentContentIndex.value === 1) {
			fetchMessageDiscussData(openid.value)
		}
	}

	const fetchShopInfoData = (openid) => {
		detailStore.fetchShopInfo({
			openid
		})
	}

	const fetchWxshopDetailInfoData = (openid) => {
		detailStore.fetchWxshopDetailInfo({
			openid
		})
	}

	const fetchMessageDiscussData = (merchantid, classmessage) => {
		detailStore.fetchMessageDiscuss({
			merchantid,
			classmessage
		})
	}
</script>

<style lang="scss">
	.detail-content {
		height: 100%;
		overflow: auto;
	}
</style>