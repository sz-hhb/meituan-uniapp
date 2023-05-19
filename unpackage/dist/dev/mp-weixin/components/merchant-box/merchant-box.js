"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "merchant-box",
  props: {
    wxshopList: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const goToDetail = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/detail/detail?openid=" + item.openid
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.wxshopList, (item, k0, i0) => {
          return {
            a: item.logo,
            b: common_vendor.t(item.shop),
            c: common_vendor.t(item.duration),
            d: common_vendor.t(item.delivering),
            e: common_vendor.t(item.physical),
            f: common_vendor.t(item.capita),
            g: common_vendor.t(item.types),
            h: item._id,
            i: common_vendor.o(($event) => goToDetail(item), item._id)
          };
        }),
        b: common_assets._imports_0$3
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/components/merchant-box/merchant-box.vue"]]);
wx.createComponent(Component);
