"use strict";
const common_vendor = require("../common/vendor.js");
const service_home = require("../service/home.js");
const useHomeStore = common_vendor.defineStore("home", {
  state: () => {
    return {
      preferList: [],
      wxshopList: []
    };
  },
  actions: {
    async fetchPreferData() {
      const res = await service_home.getPreferData();
      this.preferList = res;
    },
    async fetchWxshopData() {
      const res = await service_home.getWxshop();
      this.wxshopList = res;
    },
    async comprehensiveSortAction(payload) {
      const res = await service_home.comprehensiveSort(payload);
      this.wxshopList = res;
    },
    async multipleFilterAction(payload) {
      const res = await service_home.multipleFilter(payload);
      if (res === "没有商品数据") {
        this.wxshopList = [];
      } else {
        this.wxshopList = res;
      }
    }
  }
});
exports.useHomeStore = useHomeStore;
