<template>
	<page-meta :page-style="'overflow:'+(show ? 'hidden' : 'visible')"></page-meta>
	<view class="home-page">
		<search></search>
		<preference></preference>
		<title></title>
		<delicacy @change-page-overflow="changePageOverflow"></delicacy>
		<takeout></takeout>
	</view>
</template>

<script setup>
	import Search from "./components/search.vue"
	import Preference from "./components/preference.vue"
	import Title from "./components/title.vue"
	import Delicacy from "./components/delicacy.vue"
	import Takeout from "./components/takeout.vue"
	import {
		ref
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		useHomeStore
	} from "@/stores/home.js"

	const homeStore = useHomeStore()

	const getPreferData = () => {
		homeStore.fetchPreferData()
	}

	const getWxshopData = () => {
		homeStore.fetchWxshopData()
	}

	onLoad(() => {
		getPreferData()
		getWxshopData()
	})

	const show = ref(false)

	const changePageOverflow = (val) => {
		show.value = val
	}
</script>

<style lang="scss">
	.home-page {
		padding: 0 15rpx;
	}
</style>