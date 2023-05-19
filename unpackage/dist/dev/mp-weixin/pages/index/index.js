"use strict";
const common_vendor = require("../../common/vendor.js");
const stores_home = require("../../stores/home.js");
require("../../service/home.js");
require("../../service/index.js");
if (!Math) {
  (Search + Preference + Title + Delicacy + Takeout)();
}
const Search = () => "./components/search.js";
const Preference = () => "./components/preference.js";
const Title = () => "./components/title.js";
const Delicacy = () => "./components/delicacy.js";
const Takeout = () => "./components/takeout.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const homeStore = stores_home.useHomeStore();
    const getPreferData = () => {
      homeStore.fetchPreferData();
    };
    const getWxshopData = () => {
      homeStore.fetchWxshopData();
    };
    common_vendor.onLoad(() => {
      getPreferData();
      getWxshopData();
    });
    const show = common_vendor.ref(false);
    const changePageOverflow = (val) => {
      show.value = val;
    };
    return (_ctx, _cache) => {
      return {
        a: "overflow:" + (show.value ? "hidden" : "visible"),
        b: common_vendor.o(changePageOverflow)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
