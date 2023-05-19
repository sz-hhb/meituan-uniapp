import uniRequest from "./index"

export function getPreferData() {
	return uniRequest.get("/forshop/getprefer")
}

export function getWxshop() {
	return uniRequest.get("/forshop/wxshop")
}

export function comprehensiveSort(params) {
	return uniRequest.post("/forshop/starting", {
		...params
	})
}

export function multipleFilter(params) {
	return uniRequest.post("/forshop/multiple", {
		...params
	})
}