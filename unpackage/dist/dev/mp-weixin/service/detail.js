"use strict";
const service_index = require("./index.js");
function getDishes(params) {
  return service_index.uniRequest.post("/forshop/getdishes", {
    ...params
  });
}
function getShopInfo(params) {
  return service_index.uniRequest.post("/forshop/shop", {
    ...params
  });
}
function getMessageDicuss(params) {
  return service_index.uniRequest.post("/message/discuss", {
    ...params
  });
}
exports.getDishes = getDishes;
exports.getMessageDicuss = getMessageDicuss;
exports.getShopInfo = getShopInfo;
