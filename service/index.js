const BASE_URL = "https://meituan.thexxdd.cn/api"

class uniRequest {
	request(options) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: BASE_URL + options.url,
				method: options.method,
				timeout: 10000,
				data: options.data,
				success: (res) => {
					resolve(res.data)
				},
				fail: (err) => {
					uni.showModal({
						icon: "none",
						title: err,
						duration: 3000
					})
					reject(err)
				}
			})
		})
	}

	get(url, params) {
		return this.request({
			url,
			data: params,
			method: "GET"
		})
	}

	post(url, data) {
		return this.request({
			url,
			data,
			method: "POST"
		})
	}
}

export default new uniRequest()