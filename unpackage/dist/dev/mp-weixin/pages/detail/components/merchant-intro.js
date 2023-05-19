"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "merchant-intro",
  props: {
    shopInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.shopInfo.logo,
        b: common_vendor.t(__props.shopInfo.shop),
        c: common_vendor.t(__props.shopInfo.duration)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/detail/components/merchant-intro.vue"]]);
wx.createComponent(Component);
