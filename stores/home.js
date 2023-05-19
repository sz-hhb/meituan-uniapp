import {
	defineStore
} from "pinia"
import {
	getPreferData,
	getWxshop,
	comprehensiveSort,
	multipleFilter
} from "@/service/home.js"

export const useHomeStore = defineStore("home", {
	state: () => {
		return {
			preferList: [],
			wxshopList: []
		}
	},
	actions: {
		async fetchPreferData() {
			const res = await getPreferData()
			this.preferList = res
		},
		async fetchWxshopData() {
			const res = await getWxshop()
			this.wxshopList = res
		},
		async comprehensiveSortAction(payload) {
			const res = await comprehensiveSort(payload)
			this.wxshopList = res
		},
		async multipleFilterAction(payload) {
			const res = await multipleFilter(payload)
			if (res === "没有商品数据") {
				this.wxshopList = []
			} else {
				this.wxshopList = res
			}
		}
	}
})