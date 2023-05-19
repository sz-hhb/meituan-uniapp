"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  __name: "introduce",
  props: {
    shopInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$5,
        b: common_vendor.t(__props.shopInfo.address),
        c: common_assets._imports_1$3,
        d: common_assets._imports_2$1,
        e: common_vendor.t(__props.shopInfo.times),
        f: common_assets._imports_3
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/detail/components/introduce.vue"]]);
wx.createComponent(Component);
