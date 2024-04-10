"use client";

import { createSlice } from "@reduxjs/toolkit";

const clothingData = [
  {
    id: 0,
    price: "1.880",
    name: "LIDO RUNWAY FLIGHT JKT CROPPED IN",
    type: "JACKET",
    gender: "female",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/168054/large/RO01D2719_BBTU13_09_01.jpg?1706788005",
    imgURL2:
      "https://cdn.rickowens.eu/products/168055/large/RO01D2719_BBTU13_09_02.jpg?1706788008",
    imgURL3:
      "https://cdn.rickowens.eu/products/168056/large/RO01D2719_BBTU13_09_03.jpg?1706788010",
    imgURL4:
      "https://cdn.rickowens.eu/products/168058/large/RO01D2719_BBTU13_09_05.jpg?1706788016",
    imgURL5:
      "https://cdn.rickowens.eu/products/168057/large/RO01D2719_BBTU13_09_04.jpg?1706788013",
    imgURL6:
      "https://cdn.rickowens.eu/products/168059/large/RO01D2719_BBTU13_09_06.jpg?1706788019",
    imgURL7:
      "https://cdn.rickowens.eu/products/168060/large/RO01D2719_BBTU13_09_07.jpg?1706788021",
  },
  {
    id: 1,
    price: "4.070",
    type: "JACKET",
    name: "LIDO RUNWAY LIDO FLIGHT IN CARDINAL",
    gender: "female",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/168061/large/RO01D2783_DCFM13_03_01.jpg?1706788206",
    imgURL2:
      "https://cdn.rickowens.eu/products/168062/large/RO01D2783_DCFM13_03_02.jpg?1706788210",
    imgURL3:
      "https://cdn.rickowens.eu/products/168063/large/RO01D2783_DCFM13_03_03.jpg?1706788214",
    imgURL4:
      "https://cdn.rickowens.eu/products/168064/large/RO01D2783_DCFM13_03_04.jpg?1706788217",
    imgURL5:
      "https://cdn.rickowens.eu/products/168065/large/RO01D2783_DCFM13_03_05.jpg?1706788221",
    imgURL6:
      "https://cdn.rickowens.eu/products/168066/large/RO01D2783_DCFM13_03_06.jpg?1706788225",
    imgURL7:
      "https://cdn.rickowens.eu/products/168067/large/RO01D2783_DCFM13_03_07.jpg?1706788227",
  },
  {
    id: 2,
    price: "2.745",
    name: "LIDO RUNWAY TEC MICRO BIKER IN",
    type: "JACKET",
    gender: "female",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/168776/large/RO01D2791_LNV_09_01.jpg?1707746960",
    imgURL2:
      "https://cdn.rickowens.eu/products/168775/large/RO01D2791_LNV_09_02.jpg?1707746960",
    imgURL3:
      "https://cdn.rickowens.eu/products/168089/large/RO01D2791_LNV_09_03.jpg?1706788405",
    imgURL4:
      "https://cdn.rickowens.eu/products/168091/large/RO01D2791_LNV_09_05.jpg?1706788416",
    imgURL5:
      "https://cdn.rickowens.eu/products/168777/large/RO01D2791_LNV_09_04.jpg?1707746961",
    imgURL6:
      "https://cdn.rickowens.eu/products/168778/large/RO01D2791_LNV_09_06.jpg?1707746962",
  },
  {
    id: 3,
    price: "2.345",
    name: "LIDO RUNWAY HOODED BUBBLE LONG IN",
    type: "COAT",
    gender: "female",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/168155/large/RO01D2952_SH_53_01.jpg?1706793710",
    imgURL2:
      "https://cdn.rickowens.eu/products/168156/large/RO01D2952_SH_53_02.jpg?1706793714",
    imgURL3:
      "https://cdn.rickowens.eu/products/168157/large/RO01D2952_SH_53_03.jpg?1706793717",
    imgURL4:
      "https://cdn.rickowens.eu/products/168158/large/RO01D2952_SH_53_04.jpg?1706793719",
    imgURL5:
      "https://cdn.rickowens.eu/products/168159/large/RO01D2952_SH_53_05.jpg?1706793721",
    imgURL6:
      "https://cdn.rickowens.eu/products/168160/large/RO01D2952_SH_53_06.jpg?1706793723",
  },
  {
    id: 4,
    price: "830",
    name: "LIDO RUNWAY DIRT BOLAN IN BLACK",
    type: "Pants",
    gender: "",
    brand: "",
    imgURL:
      "https://cdn.rickowens.eu/products/167782/large/RO01D2384_SBF_09_01.jpg?1706112268",
    imgURL2:
      "https://cdn.rickowens.eu/products/167783/large/RO01D2384_SBF_09_02.jpg?1706112272",
    imgURL3:
      "https://cdn.rickowens.eu/products/167784/large/RO01D2384_SBF_09_03.jpg?1706112274",
    imgURL4:
      "https://cdn.rickowens.eu/products/167785/large/RO01D2384_SBF_09_04.jpg?1706112278",
    imgURL5:
      "https://cdn.rickowens.eu/products/167786/large/RO01D2384_SBF_09_05.jpg?1706112281",
    imgURL6:
      "https://cdn.rickowens.eu/products/167787/large/RO01D2384_SBF_09_06.jpg?1706112284",
    imgURL7:
      "https://cdn.rickowens.eu/products/167788/large/RO01D2384_SBF_09_07.jpg?1706112287",
  },
  {
    id: 5,
    price: "455",
    name: "LONG BOXERS IN BLACK",
    type: "Boxers",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/158527/large/MU02C8H01_M3675_999_01.jpg?1698226427",
    imgURL2:
      "https://cdn.rickowens.eu/products/158526/large/MU02C8H01_M3675_999_02.jpg?1698226427",
    imgURL3:
      "https://cdn.rickowens.eu/products/158525/large/MU02C8H01_M3675_999_03.jpg?1698226427",
    imgURL4:
      "https://cdn.rickowens.eu/products/158528/large/MU02C8H01_M3675_999_04.jpg?1698226428",
    imgURL5:
      "https://cdn.rickowens.eu/products/158529/large/MU02C8H01_M3675_999_05.jpg?1698226429",
    imgURL6:
      "https://cdn.rickowens.eu/products/158530/large/MU02C8H01_M3675_999_06.jpg?1698226429",
    imgURL7:
      "https://cdn.rickowens.eu/products/158531/large/MU02C8H01_M3675_999_07.jpg?1698226430",
  },
  {
    id: 6,
    price: "1.090",
    name: "DRKSHDW LIDO BIAS BOOTCUT IN SKY",
    type: "Pants",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/165052/large/DU01D1352_SKYDE_4653D_01.jpg?1702302662",
    imgURL2:
      "https://cdn.rickowens.eu/products/165051/large/DU01D1352_SKYDE_4653D_02.jpg?1702302662",
    imgURL3:
      "https://cdn.rickowens.eu/products/165050/large/DU01D1352_SKYDE_4653D_03.jpg?1702302662",
    imgURL4:
      "https://cdn.rickowens.eu/products/165053/large/DU01D1352_SKYDE_4653D_04.jpg?1702302664",
    imgURL5:
      "https://cdn.rickowens.eu/products/165054/large/DU01D1352_SKYDE_4653D_06.jpg?1702302665",
    imgURL6:
      "https://cdn.rickowens.eu/products/165055/large/DU01D1352_SKYDE_4653D_05.jpg?1702302665",
    imgURL7:
      "https://cdn.rickowens.eu/products/165056/large/DU01D1352_SKYDE_4653D_07.jpg?1702302666",
  },
  {
    id: 7,
    price: "1.715",
    name: "DRKSHDW LIDO BIAS BOOTCUT 13OZ SKY",
    type: "Pants",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/166178/large/DU01D1352_DKYSH_46_01.jpg?1702895277",
    imgURL2:
      "https://cdn.rickowens.eu/products/166179/large/DU01D1352_DKYSH_46_02.jpg?1702895276",
    imgURL3:
      "https://cdn.rickowens.eu/products/166180/large/DU01D1352_DKYSH_46_03.jpg?1702895277",
    imgURL4:
      "https://cdn.rickowens.eu/products/166181/large/DU01D1352_DKYSH_46_04.jpg?1702895278",
    imgURL5:
      "https://cdn.rickowens.eu/products/166182/large/DU01D1352_DKYSH_46_06.jpg?1702895280",
    imgURL6:
      "https://cdn.rickowens.eu/products/166183/large/DU01D1352_DKYSH_46_05.jpg?1702895280",
    imgURL7:
      "https://cdn.rickowens.eu/products/166184/large/DU01D1352_DKYSH_46_07.jpg?1702895281",
  },
  {
    id: 8,
    price: "1.715",
    name: "LIDO DOUBLE CARGO JUMBO BELAS IN",
    type: "Pants",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/165272/large/DU01D1398_BR_09_01.jpg?1702304271",
    imgURL2:
      "https://cdn.rickowens.eu/products/165270/large/DU01D1398_BR_09_02.jpg?1702304271",
    imgURL3:
      "https://cdn.rickowens.eu/products/165271/large/DU01D1398_BR_09_03.jpg?1702304271",
    imgURL4:
      "https://cdn.rickowens.eu/products/165273/large/DU01D1398_BR_09_04.jpg?1702304272",
    imgURL5:
      "https://cdn.rickowens.eu/products/165274/large/DU01D1398_BR_09_05.jpg?1702304273",
    imgURL6:
      "https://cdn.rickowens.eu/products/165275/large/DU01D1398_BR_09_06.jpg?1702304273",
    imgURL7:
      "https://cdn.rickowens.eu/products/165276/large/DU01D1398_BR_09_07.jpg?1702304274",
  },
  {
    id: 9,
    price: "455",
    name: "LIDO SNEAKS IN BLACK/MILK/MILK COTTON",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/164490/large/DU01D1800_CBES1_911_01.jpg?1702025520",
    imgURL2:
      "https://cdn.rickowens.eu/products/164489/large/DU01D1800_CBES1_911_02.jpg?1702025520",
    imgURL3:
      "https://cdn.rickowens.eu/products/164491/large/DU01D1800_CBES1_911_03.jpg?1702025520",
    imgURL4:
      "https://cdn.rickowens.eu/products/164492/large/DU01D1800_CBES1_911_04.jpg?1702025521",
  },
  {
    id: 10,
    price: "365",
    name: "LIDO LOW SNEAKS IN BLACK/MILK/MILK",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/164493/large/DU01D1802_CB_911_01.jpg?1702025557",
    imgURL2:
      "https://cdn.rickowens.eu/products/164495/large/DU01D1802_CB_911_02.jpg?1702025557",
    imgURL3:
      "https://cdn.rickowens.eu/products/164494/large/DU01D1802_CB_911_03.jpg?1702025557",
    imgURL4:
      "https://cdn.rickowens.eu/products/164496/large/DU01D1802_CB_911_04.jpg?1702025558",
  },
  {
    id: 11,
    price: "410",
    name: "LIDO JUMBO LACE PUFFER LOW SNEAKS IN",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/165364/large/DU01D1819_BRW2_9811_01.jpg?1702305061",
    imgURL2:
      "https://cdn.rickowens.eu/products/165366/large/DU01D1819_BRW2_9811_02.jpg?1702305061",
    imgURL3:
      "https://cdn.rickowens.eu/products/165365/large/DU01D1819_BRW2_9811_03.jpg?1702305061",
    imgURL4:
      "https://cdn.rickowens.eu/products/165367/large/DU01D1819_BRW2_9811_04.jpg?1702305062",
  },
  {
    id: 12,
    price: "3.200",
    name: "Leather Wool Varsity Jacket",
    type: "Jacket",
    gender: "male",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-leather-wool-varsity-jacket_21254500_52255740_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-leather-wool-varsity-jacket_21254500_52255741_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-leather-wool-varsity-jacket_21254500_52255745_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-leather-wool-varsity-jacket_21254500_52255748_1000.jpg?c=3",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-leather-wool-varsity-jacket_21254500_52255746_1000.jpg?c=3",
  },
  {
    id: 13,
    price: "524",
    name: "Abc Camo Shark Full Zip Hoodie",
    type: "Jacket",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115005MPKX/0ZXSWM115005MPKX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115005MPKX/0ZXSWM115005MPKX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115005MPKX/0ZXSWM115005MPKX-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
  },
  {
    id: 14,
    price: "552",
    name: "Comic Art Shark Zip Hoodie",
    type: "Jacket",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115309MMLX/0ZXSWM115309MMLX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115309MMLX/0ZXSWM115309MMLX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115309MMLX/0ZXSWM115309MMLX-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL4:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115309MMLX/0ZXSWM115309MMLX-pdp-4.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL5:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115309MMLX/0ZXSWM115309MMLX-pdp-5.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL6:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115309MMLX/0ZXSWM115309MMLX-pdp-6.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
  },
  {
    id: 15,
    price: "666",
    name: "Color Camo Double Shark Full Zip Hoodie",
    type: "Hoodie",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115001MYEX/0ZXSWM115001MYEX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115001MYEX/0ZXSWM115001MYEX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115001MYEX/0ZXSWM115001MYEX-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL4:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115001MYEX/0ZXSWM115001MYEX-pdp-4.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL5:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115001MYEX/0ZXSWM115001MYEX-pdp-5.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL6:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115001MYEX/0ZXSWM115001MYEX-pdp-6.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
  },
  {
    id: 16,
    price: "595",
    name: "BAPE Art Camo Shark Hoodie",
    type: "Hoodie",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115055LGRX/0ZXSWM115055LGRX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115055LGRX/0ZXSWM115055LGRX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115055LGRX/0ZXSWM115055LGRX-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL4:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWM115055LGRX/0ZXSWM115055LGRX-pdp-4.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
  },
  {
    id: 17,
    price: "1.643",
    name: "BAPE X Canada Goose Crofto Puffer",
    type: "Jacket",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144901LGRX/0ZXDNM144901LGRX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144901LGRX/0ZXDNM144901LGRX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144901LGRX/0ZXDNM144901LGRX-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL4:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144901LGRX/0ZXDNM144901LGRX-pdp-4.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL5:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144901LGRX/0ZXDNM144901LGRX-pdp-5.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL6:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144901LGRX/0ZXDNM144901LGRX-pdp-6.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
  },
];

const initialState = {
  clothingData: clothingData,
};

export const clothingSlice = createSlice({
  name: "clothing",
  initialState,
  reducers: {},
});

export const {} = clothingSlice.actions;
export default clothingSlice.reducer;
