"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const stores_home = require("../../../stores/home.js");
require("../../../service/home.js");
require("../../../service/index.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  (_easycom_uni_popup2 + _easycom_uni_data_checkbox2)();
}
const _easycom_uni_popup = () => "../../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_data_checkbox = () => "../../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  (_easycom_uni_popup + _easycom_uni_data_checkbox)();
}
const _sfc_main = {
  __name: "delicacy",
  emits: ["change-page-overflow"],
  setup(__props, { emit: emits }) {
    const homeStore = stores_home.useHomeStore();
    const handlePopupChange = (e) => {
      emits("change-page-overflow", e.show);
    };
    const sortPopupRef = common_vendor.ref(null);
    const sortList = common_vendor.ref([
      {
        name: "综合排序",
        screen: "_id",
        nums: 1
      },
      {
        name: "起送价最低",
        screen: "delivering",
        nums: 1
      },
      {
        name: "配送费最低",
        screen: "physical",
        nums: 1
      },
      {
        name: "人均高到低",
        screen: "capita",
        nums: -1
      },
      {
        name: "人均低到高",
        screen: "capita",
        nums: 1
      }
    ]);
    const sortText = common_vendor.ref("综合排序");
    const handleSortSelect = (item) => {
      sortText.value = item.name;
      sortPopupRef.value.close();
      homeStore.comprehensiveSortAction({
        screen: item.screen,
        nums: item.nums
      });
    };
    const handleSortClick = () => {
      sortPopupRef.value.open("open");
    };
    const filterPopupRef = common_vendor.ref(false);
    const screenData = common_vendor.ref([{
      title: "商家特色(可多选)",
      datas: [
        {
          id: 1,
          sign: "duration",
          name: "配送最快"
        },
        {
          id: 1,
          sign: "deliver",
          name: "0元起送"
        },
        {
          id: 1,
          sign: "physi",
          name: "免配送费"
        }
      ]
    }]);
    const person = common_vendor.ref([{
      title: "人均价",
      datas: [
        {
          name: "20以下",
          per: {
            "$lt": 20
          }
        },
        {
          name: "20-40元",
          per: {
            "$lte": 40,
            "$gte": 20
          }
        },
        {
          name: "40元以上",
          per: {
            "$gt": 40
          }
        }
      ]
    }]);
    const shopCheckboxValue = common_vendor.ref([]);
    const personCheckboxValue = common_vendor.ref("");
    const multipleInfo = common_vendor.ref({});
    const isFinishBtnEnabled = common_vendor.computed(() => {
      return !shopCheckboxValue.value.length && !personCheckboxValue.value;
    });
    const handleFilterClick = () => {
      filterPopupRef.value.open("open");
    };
    const handleClearFilter = () => {
      multipleInfo.value = {};
      shopCheckboxValue.value = [];
      personCheckboxValue.value = "";
      filterPopupRef.value.close();
      homeStore.multipleFilterAction();
    };
    const handleFinishFilter = () => {
      multipleInfo.value = {};
      shopCheckboxValue.value.forEach((item) => {
        multipleInfo.value[item] = item;
      });
      person.value[0].datas.forEach((item) => {
        if (item.name === personCheckboxValue.value) {
          multipleInfo.value["capita"] = item.per;
        }
      });
      homeStore.multipleFilterAction(multipleInfo.value);
      filterPopupRef.value.close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(sortText.value),
        b: common_assets._imports_0$2,
        c: common_vendor.o(handleSortClick),
        d: common_assets._imports_1$2,
        e: common_vendor.o(handleFilterClick),
        f: common_vendor.f(sortList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: sortText.value === item.name ? 1 : "",
            c: index,
            d: common_vendor.o(($event) => handleSortSelect(item), index)
          };
        }),
        g: common_vendor.sr(sortPopupRef, "90565068-0", {
          "k": "sortPopupRef"
        }),
        h: common_vendor.o(handlePopupChange),
        i: common_vendor.p({
          type: "top",
          ["background-color"]: "#fff"
        }),
        j: common_vendor.f(screenData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: "90565068-2-" + i0 + ",90565068-1",
            c: common_vendor.o(($event) => shopCheckboxValue.value = $event, index),
            d: common_vendor.p({
              mode: "tag",
              multiple: true,
              localdata: item.datas,
              selectedColor: "#fff8e0",
              selectedTextColor: "#d49f46",
              map: {
                text: "name",
                value: "sign"
              },
              modelValue: shopCheckboxValue.value
            }),
            e: index
          };
        }),
        k: common_vendor.f(person.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: "90565068-3-" + i0 + ",90565068-1",
            c: common_vendor.o(($event) => personCheckboxValue.value = $event, index),
            d: common_vendor.p({
              mode: "tag",
              localdata: item.datas,
              selectedColor: "#fff8e0",
              selectedTextColor: "#d49f46",
              map: {
                text: "name",
                value: "name"
              },
              modelValue: personCheckboxValue.value
            }),
            e: index
          };
        }),
        l: common_vendor.o(handleClearFilter),
        m: common_vendor.unref(isFinishBtnEnabled) ? 1 : "",
        n: common_vendor.o(handleFinishFilter),
        o: common_vendor.unref(isFinishBtnEnabled),
        p: common_vendor.sr(filterPopupRef, "90565068-1", {
          "k": "filterPopupRef"
        }),
        q: common_vendor.o(handlePopupChange),
        r: common_vendor.p({
          type: "top",
          ["background-color"]: "#fff"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/index/components/delicacy.vue"]]);
wx.createComponent(Component);
