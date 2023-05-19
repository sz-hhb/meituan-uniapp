import {
	defineStore
} from "pinia"
import {
	getDishes,
	getShopInfo,
	getMessageDicuss
} from "@/service/detail.js"

export const useDetailStore = defineStore("detail", {
	state: () => {
		return {
			wxshopDetailInfo: [],
			shopInfo: {},
			messageDiscussList: []
		}
	},
	actions: {
		async fetchWxshopDetailInfo(payload) {
			const res = await getDishes(payload)
			this.wxshopDetailInfo = res.map((item) => {
				return {
					...item,
					count: 0
				}
			})
		},
		async fetchShopInfo(payload) {
			const res = await getShopInfo(payload)
			this.shopInfo = res[0]
		},
		async fetchMessageDiscuss(payload) {
			const res = await getMessageDicuss(payload)
			this.messageDiscussList = res
		}
	}
})