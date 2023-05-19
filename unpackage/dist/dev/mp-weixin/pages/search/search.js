"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const stores_search = require("../../stores/search.js");
require("../../service/search.js");
require("../../service/index.js");
if (!Array) {
  const _easycom_merchant_box2 = common_vendor.resolveComponent("merchant-box");
  _easycom_merchant_box2();
}
const _easycom_merchant_box = () => "../../components/merchant-box/merchant-box.js";
if (!Math) {
  _easycom_merchant_box();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const searchStore = stores_search.useSearchStore();
    const {
      searchContentList,
      isShowNoDataTip
    } = common_vendor.storeToRefs(searchStore);
    const searchValue = common_vendor.ref("");
    const searchHistoryList = common_vendor.ref([]);
    common_vendor.onLoad(() => {
      if (common_vendor.index.getStorageSync("searchHistoryData")) {
        searchHistoryList.value = JSON.parse(common_vendor.index.getStorageSync("searchHistoryData"));
      }
    });
    const handleSearchInput = (e) => {
      if (!e.detail.value)
        searchStore.searchContentList = [];
    };
    const uniqueArray = (arr, ele) => {
      const index = arr.findIndex((item) => {
        return item === ele;
      });
      if (index !== -1) {
        arr.splice(index, 1);
      }
    };
    const createHistoryRecord = (historyRecord) => {
      searchHistoryList.value = common_vendor.index.getStorageSync("searchHistoryData") || [];
      if (Object.prototype.toString.call(searchHistoryList.value) === "[object Array]") {
        if (searchValue.value)
          searchHistoryList.value.push(historyRecord);
      } else {
        searchHistoryList.value = JSON.parse(searchHistoryList.value);
        uniqueArray(searchHistoryList.value, historyRecord);
        if (searchValue.value)
          searchHistoryList.value.unshift(historyRecord);
      }
      common_vendor.index.setStorageSync("searchHistoryData", JSON.stringify(searchHistoryList.value));
    };
    const handleSearchConfirm = (e) => {
      searchStore.isShowNoDataTip = false;
      searchStore.searchContent({
        searchdata: e.detail.value
      });
      createHistoryRecord(e.detail.value);
    };
    const handleSearchClick = () => {
      searchStore.isShowNoDataTip = false;
      searchStore.searchContent({
        searchdata: searchValue.value
      });
      createHistoryRecord(searchValue.value);
    };
    const handleHistoryItemClick = (item) => {
      searchValue.value = item;
      handleSearchClick();
    };
    const handleClearHistory = () => {
      common_vendor.index.removeStorageSync("searchHistoryData");
      searchHistoryList.value = [];
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(handleSearchConfirm),
        b: common_vendor.o([($event) => searchValue.value = $event.detail.value, handleSearchInput]),
        c: searchValue.value,
        d: common_vendor.o(handleSearchClick),
        e: !searchValue.value
      }, !searchValue.value ? {
        f: common_assets._imports_0,
        g: common_vendor.o(handleClearHistory)
      } : {}, {
        h: !searchValue.value
      }, !searchValue.value ? {
        i: common_vendor.f(searchHistoryList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => handleHistoryItemClick(item), index)
          };
        })
      } : {}, {
        j: common_vendor.unref(searchContentList).length && searchValue.value
      }, common_vendor.unref(searchContentList).length && searchValue.value ? {
        k: common_vendor.p({
          ["wxshop-list"]: common_vendor.unref(searchContentList)
        })
      } : {}, {
        l: common_vendor.unref(isShowNoDataTip)
      }, common_vendor.unref(isShowNoDataTip) ? {
        m: common_assets._imports_1
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
