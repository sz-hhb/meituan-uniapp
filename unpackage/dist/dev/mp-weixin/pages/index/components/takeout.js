"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_home = require("../../../stores/home.js");
require("../../../service/home.js");
require("../../../service/index.js");
if (!Array) {
  const _easycom_merchant_box2 = common_vendor.resolveComponent("merchant-box");
  _easycom_merchant_box2();
}
const _easycom_merchant_box = () => "../../../components/merchant-box/merchant-box.js";
if (!Math) {
  _easycom_merchant_box();
}
const _sfc_main = {
  __name: "takeout",
  setup(__props) {
    const homeStore = stores_home.useHomeStore();
    const {
      wxshopList
    } = common_vendor.storeToRefs(homeStore);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(wxshopList).length
      }, common_vendor.unref(wxshopList).length ? {
        b: common_vendor.p({
          ["wxshop-list"]: common_vendor.unref(wxshopList)
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/index/components/takeout.vue"]]);
wx.createComponent(Component);
