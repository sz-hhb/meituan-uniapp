"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "https://meituan.thexxdd.cn/api";
class uniRequest {
  request(options) {
    return new Promise((resolve, reject) => {
      common_vendor.index.request({
        url: BASE_URL + options.url,
        method: options.method,
        timeout: 1e4,
        data: options.data,
        success: (res) => {
          resolve(res.data);
        },
        fail: (err) => {
          common_vendor.index.showModal({
            icon: "none",
            title: err,
            duration: 3e3
          });
          reject(err);
        }
      });
    });
  }
  get(url, params) {
    return this.request({
      url,
      data: params,
      method: "GET"
    });
  }
  post(url, data) {
    return this.request({
      url,
      data,
      method: "POST"
    });
  }
}
const uniRequest$1 = new uniRequest();
exports.uniRequest = uniRequest$1;
