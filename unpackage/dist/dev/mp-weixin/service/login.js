"use strict";
const common_vendor = require("../common/vendor.js");
const service_index = require("./index.js");
function wxLogin() {
  return new Promise((resolve, reject) => {
    common_vendor.index.login({
      provider: "weixin",
      success: function(loginRes) {
        resolve(loginRes.code);
      }
    });
  });
}
function userWxLogin(params) {
  return service_index.uniRequest.post("/login", {
    ...params
  });
}
exports.userWxLogin = userWxLogin;
exports.wxLogin = wxLogin;
