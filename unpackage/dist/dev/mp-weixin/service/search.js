"use strict";
const service_index = require("./index.js");
function searchContent(params) {
  return service_index.uniRequest.post("/forshop/search", {
    ...params
  });
}
exports.searchContent = searchContent;
