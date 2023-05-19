"use strict";
const common_vendor = require("../../../common/vendor.js");
const stores_home = require("../../../stores/home.js");
require("../../../service/home.js");
require("../../../service/index.js");
const _sfc_main = {
  __name: "preference",
  setup(__props) {
    const homeStore = stores_home.useHomeStore();
    const {
      preferList
    } = common_vendor.storeToRefs(homeStore);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(common_vendor.unref(preferList), (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.lable),
            d: item._id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/index/components/preference.vue"]]);
wx.createComponent(Component);
