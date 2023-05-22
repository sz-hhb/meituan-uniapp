"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  __name: "ordering",
  props: {
    wxshopDetailInfo: {
      type: Array,
      default: () => []
    },
    shopInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["increment-count", "decrement-count"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const windowHeight = common_vendor.ref(0);
    const orderContentHeight = common_vendor.ref(0);
    common_vendor.onReady(() => {
      common_vendor.index.getSystemInfo({
        success: function(res) {
          windowHeight.value = res.windowHeight;
        }
      });
    });
    common_vendor.onMounted(() => {
      const instance = common_vendor.getCurrentInstance();
      const query = common_vendor.index.createSelectorQuery().in(instance);
      query.select(".ordering-content").boundingClientRect((data) => {
        orderContentHeight.value = windowHeight.value - data.top;
      }).exec();
    });
    const menuList = common_vendor.ref([{
      name: "盖浇饭"
    }, {
      name: "小吃"
    }, {
      name: "鸡鸭"
    }, {
      name: "小炒"
    }]);
    const totalVal = common_vendor.computed(() => {
      if (!Object.keys(props.wxshopDetailInfo).length)
        return 0;
      let total = 0;
      props.wxshopDetailInfo.forEach((item) => {
        total += item.count * item.objdis.Discount;
      });
      return total.toFixed(1);
    });
    const badgeValue = common_vendor.computed(() => {
      if (!Object.keys(props.wxshopDetailInfo).length)
        return 0;
      return props.wxshopDetailInfo.filter((item) => {
        return item.count !== 0;
      }).length;
    });
    const selectedWxshopDetailInfo = common_vendor.ref([]);
    const increment = (item) => {
      emits("increment-count", item._id);
    };
    const decrement = (item) => {
      emits("decrement-count", item._id);
    };
    const confirm = () => {
      selectedWxshopDetailInfo.value = props.wxshopDetailInfo.filter((item) => {
        return item.count !== 0;
      });
      console.log(selectedWxshopDetailInfo.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(menuList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index
          };
        }),
        b: common_vendor.f(__props.wxshopDetailInfo, (item, k0, i0) => {
          return {
            a: item.objdis.image,
            b: common_vendor.t(item.objdis.input),
            c: common_vendor.f(item.objdis.tags, (tag, index, i1) => {
              return {
                a: common_vendor.t(tag),
                b: index
              };
            }),
            d: common_vendor.t(item.objdis.Discount),
            e: common_vendor.t(item.objdis.Price),
            f: common_vendor.o(($event) => decrement(item), item._id),
            g: common_vendor.t(item.count),
            h: common_vendor.o(($event) => increment(item), item._id),
            i: item._id
          };
        }),
        c: common_assets._imports_0$4,
        d: common_vendor.unref(badgeValue)
      }, common_vendor.unref(badgeValue) ? {
        e: common_vendor.t(common_vendor.unref(badgeValue))
      } : {}, {
        f: common_vendor.t(common_vendor.unref(totalVal)),
        g: common_vendor.t(__props.shopInfo.physical),
        h: common_vendor.unref(totalVal) < __props.shopInfo.delivering
      }, common_vendor.unref(totalVal) < __props.shopInfo.delivering ? {
        i: common_vendor.t(__props.shopInfo.delivering)
      } : {}, {
        j: common_vendor.o(confirm),
        k: orderContentHeight.value + "px"
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/detail/components/ordering.vue"]]);
wx.createComponent(Component);
