import uniRequest from "./index"

export function getDishes(params) {
	return uniRequest.post("/forshop/getdishes", {
		...params
	})
}

export function getShopInfo(params) {
	return uniRequest.post("/forshop/shop", {
		...params
	})
}

export function getMessageDicuss(params) {
	return uniRequest.post("/message/discuss", {
		...params
	})
}