"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "tabs",
  emits: ["change-tab-index"],
  setup(__props, { emit: emits }) {
    const currentIndex = common_vendor.ref(0);
    const tabList = common_vendor.ref([
      {
        name: "点菜"
      },
      {
        name: "评价"
      },
      {
        name: "商家"
      }
    ]);
    const handleTabItemClick = (index) => {
      if (currentIndex.value !== index) {
        currentIndex.value = index;
        emits("change-tab-index", index);
      }
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(tabList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index,
            c: currentIndex.value === index ? 1 : "",
            d: common_vendor.o(($event) => handleTabItemClick(index), index)
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/detail/components/tabs.vue"]]);
wx.createComponent(Component);
