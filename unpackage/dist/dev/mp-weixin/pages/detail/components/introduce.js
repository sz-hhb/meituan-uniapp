"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const service_login = require("../../../service/login.js");
require("../../../service/index.js");
const _sfc_main = {
  __name: "introduce",
  props: {
    shopInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const showToast = () => {
      common_vendor.index.showToast({
        icon: "none",
        title: "标题",
        duration: 2e3
      });
    };
    const showModal = () => {
      common_vendor.index.showModal({
        title: "提示",
        content: "这是一个模态弹窗",
        success: function(res) {
          if (res.confirm) {
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    };
    const login = async () => {
      const code = await service_login.wxLogin();
      await service_login.userWxLogin({
        code
      });
      console.log(code);
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$5,
        b: common_vendor.t(__props.shopInfo.address),
        c: common_assets._imports_1$3,
        d: common_assets._imports_2$1,
        e: common_vendor.t(__props.shopInfo.times),
        f: common_assets._imports_3,
        g: common_vendor.o(showToast),
        h: common_vendor.o(showModal),
        i: common_vendor.o(login)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/detail/components/introduce.vue"]]);
wx.createComponent(Component);
