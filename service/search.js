import uniRequest from "./index"

export function searchContent(params) {
	return uniRequest.post("/forshop/search", {
		...params
	})
}