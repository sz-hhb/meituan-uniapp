"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const swiperData = common_vendor.ref([
      [
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        }
      ],
      [
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        },
        {
          img: "https://img.tukuppt.com/png_preview/00/16/72/xeioN9eFan.jpg%21/fw/780",
          title: "美食"
        }
      ]
    ]);
    const hanldeSearchInputClick = () => {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_assets._imports_1$1,
        c: common_assets._imports_2,
        d: common_vendor.o(hanldeSearchInputClick),
        e: common_vendor.f(swiperData.value, (item, index, i0) => {
          return {
            a: common_vendor.f(item, (subItem, index2, i1) => {
              return {
                a: subItem.img,
                b: common_vendor.t(subItem.title),
                c: index2
              };
            }),
            b: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/study/project/uniapp/wxmeituan/pages/index/components/search.vue"]]);
wx.createComponent(Component);
