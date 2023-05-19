"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "comment",
  props: {
    messageDiscussList: {
      type: Array,
      default: () => []
    }
  },
  emits: ["handle-filter-click"],
  setup(__props, { emit: emits }) {
    const props = __props;
    let messageList = [];
    const filterList = common_vendor.ref([]);
    common_vendor.watch(() => props.messageDiscussList, (newVal) => {
      newVal.forEach((item) => {
        if (item.classmessage !== "") {
          messageList.push(item.classmessage);
        }
      });
      filterList.value = Array.from(new Set(messageList));
    });
    const currentTab = common_vendor.ref("全部");
    const handleFilterClick = (item) => {
      currentTab.value = item;
      emits("handle-filter-click", item);
    };
    return (_ctx, _cache) => {
      return {
        a: currentTab.value === "全部" ? 1 : "",
        b: common_vendor.o(($event) => handleFilterClick("全部")),
        c: common_vendor.f(filterList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: currentTab.value === item ? 1 : "",
            d: common_vendor.o(($event) => handleFilterClick(item), index)
          };
        }),
        d: common_vendor.f(__props.messageDiscussList, (item, k0, i0) => {
          return {
            a: item.messagedata.avatarUrl,
            b: common_vendor.t(item.messagedata.nickName),
            c: common_vendor.t(item.messagedata.time),
            d: common_vendor.t(item.messagedata.usermess),
            e: item._id
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/detail/components/comment.vue"]]);
wx.createComponent(Component);
