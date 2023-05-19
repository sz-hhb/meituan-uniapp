"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_detail = require("../../stores/detail.js");
require("../../service/detail.js");
require("../../service/index.js");
if (!Math) {
  (MerchantInfo + Tabs + ordering + comment + introduce)();
}
const MerchantInfo = () => "./components/merchant-intro.js";
const Tabs = () => "./components/tabs.js";
const ordering = () => "./components/ordering.js";
const comment = () => "./components/comment.js";
const introduce = () => "./components/introduce.js";
const _sfc_main = {
  __name: "detail",
  setup(__props) {
    const detailStore = stores_detail.useDetailStore();
    const {
      shopInfo,
      wxshopDetailInfo,
      messageDiscussList
    } = common_vendor.storeToRefs(detailStore);
    const openid = common_vendor.ref("");
    common_vendor.onLoad((option) => {
      openid.value = option.openid;
      fetchShopInfoData(option.openid);
      fetchWxshopDetailInfoData(option.openid);
    });
    const handleFilterClick = (item) => {
      if (item === "全部") {
        fetchMessageDiscussData(openid.value);
      } else {
        fetchMessageDiscussData(openid.value, item);
      }
    };
    const incrementCount = (id) => {
      const index = wxshopDetailInfo.value.findIndex((item) => item._id === id);
      wxshopDetailInfo.value[index].count++;
    };
    const decrementCount = (id) => {
      const index = wxshopDetailInfo.value.findIndex((item) => item._id === id);
      if (wxshopDetailInfo.value[index].count > 0) {
        wxshopDetailInfo.value[index].count--;
      }
    };
    const currentContentIndex = common_vendor.ref(0);
    const changeTabIndex = (index) => {
      currentContentIndex.value = index;
      if (currentContentIndex.value === 1) {
        fetchMessageDiscussData(openid.value);
      }
    };
    const fetchShopInfoData = (openid2) => {
      detailStore.fetchShopInfo({
        openid: openid2
      });
    };
    const fetchWxshopDetailInfoData = (openid2) => {
      detailStore.fetchWxshopDetailInfo({
        openid: openid2
      });
    };
    const fetchMessageDiscussData = (merchantid, classmessage) => {
      detailStore.fetchMessageDiscuss({
        merchantid,
        classmessage
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          ["shop-info"]: common_vendor.unref(shopInfo)
        }),
        b: common_vendor.o(changeTabIndex),
        c: currentContentIndex.value === 0
      }, currentContentIndex.value === 0 ? {
        d: common_vendor.o(incrementCount),
        e: common_vendor.o(decrementCount),
        f: common_vendor.p({
          ["wxshop-detail-info"]: common_vendor.unref(wxshopDetailInfo),
          ["shop-info"]: common_vendor.unref(shopInfo)
        })
      } : currentContentIndex.value === 1 ? {
        h: common_vendor.o(handleFilterClick),
        i: common_vendor.p({
          ["message-discuss-list"]: common_vendor.unref(messageDiscussList)
        })
      } : currentContentIndex.value === 2 ? {
        k: common_vendor.p({
          ["shop-info"]: common_vendor.unref(shopInfo)
        })
      } : {}, {
        g: currentContentIndex.value === 1,
        j: currentContentIndex.value === 2
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
