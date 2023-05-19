"use strict";
const common_vendor = require("../common/vendor.js");
const service_detail = require("../service/detail.js");
const useDetailStore = common_vendor.defineStore("detail", {
  state: () => {
    return {
      wxshopDetailInfo: [],
      shopInfo: {},
      messageDiscussList: []
    };
  },
  actions: {
    async fetchWxshopDetailInfo(payload) {
      const res = await service_detail.getDishes(payload);
      this.wxshopDetailInfo = res.map((item) => {
        return {
          ...item,
          count: 0
        };
      });
    },
    async fetchShopInfo(payload) {
      const res = await service_detail.getShopInfo(payload);
      this.shopInfo = res[0];
    },
    async fetchMessageDiscuss(payload) {
      const res = await service_detail.getMessageDicuss(payload);
      this.messageDiscussList = res;
    }
  }
});
exports.useDetailStore = useDetailStore;
