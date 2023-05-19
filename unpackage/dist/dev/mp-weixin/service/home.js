"use strict";
const service_index = require("./index.js");
function getPreferData() {
  return service_index.uniRequest.get("/forshop/getprefer");
}
function getWxshop() {
  return service_index.uniRequest.get("/forshop/wxshop");
}
function comprehensiveSort(params) {
  return service_index.uniRequest.post("/forshop/starting", {
    ...params
  });
}
function multipleFilter(params) {
  return service_index.uniRequest.post("/forshop/multiple", {
    ...params
  });
}
exports.comprehensiveSort = comprehensiveSort;
exports.getPreferData = getPreferData;
exports.getWxshop = getWxshop;
exports.multipleFilter = multipleFilter;
