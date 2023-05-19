"use strict";
const common_vendor = require("../common/vendor.js");
const service_search = require("../service/search.js");
const useSearchStore = common_vendor.defineStore("search", {
  state: () => {
    return {
      searchContentList: [],
      isShowNoDataTip: false
    };
  },
  actions: {
    async searchContent(payload) {
      const res = await service_search.searchContent(payload);
      if (res === "没有商品数据") {
        this.isShowNoDataTip = true;
        this.searchContentList = [];
      } else {
        this.searchContentList = res;
      }
    }
  }
});
exports.useSearchStore = useSearchStore;
