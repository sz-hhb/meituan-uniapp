import {
	defineStore
} from "pinia"
import {
	searchContent
} from "@/service/search.js"

export const useSearchStore = defineStore("search", {
	state: () => {
		return {
			searchContentList: [],
			isShowNoDataTip: false
		}
	},
	actions: {
		async searchContent(payload) {
			const res = await searchContent(payload)
			if (res === "没有商品数据") {
				this.isShowNoDataTip = true
				this.searchContentList = []
			} else {
				this.searchContentList = res
			}
		}
	}
})