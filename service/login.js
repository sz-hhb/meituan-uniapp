import uniRequest from "@/service/index.js"

export function wxLogin() {
	return new Promise((resolve, reject) => {
		uni.login({
			provider: 'weixin',
			success: function(loginRes) {
				resolve(loginRes.code)
			}
		});
	})
}

export function userWxLogin(params) {
	return uniRequest.post("/login", {
		...params
	})
}