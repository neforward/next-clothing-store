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
    price: "2.505",
    name: "FW23 CYCLOPIC JKT IN NYLON",
    type: "Jacket",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/158157/large/MU02C1A04_M3855_22D_01%282%29.jpg?1697811974",
    imgURL2:
      "https://cdn.rickowens.eu/products/158158/large/MU02C1A04_M3855_22D_02%282%29.jpg?1697811977",
    imgURL3:
      "https://cdn.rickowens.eu/products/158160/large/MU02C1A04_M3855_22D_03%282%29.jpg?1697811978",
    imgURL4:
      "https://cdn.rickowens.eu/products/158162/large/MU02C1A04_M3855_22D_04%282%29.jpg?1697811982",
    imgURL5:
      "https://cdn.rickowens.eu/products/158164/large/MU02C1A04_M3855_22D_05%282%29.jpg?1697811984",
    imgURL6:
      "https://cdn.rickowens.eu/products/158166/large/MU02C1A04_M3855_22D_06%282%29.jpg?1697811987",
    imgURL7:
      "https://cdn.rickowens.eu/products/158168/large/MU02C1A04_M3855_22D_07%282%29.jpg?1697811991",
    imgURL8:
      "https://cdn.rickowens.eu/products/158170/large/MU02C1A04_M3855_22D_08%282%29.jpg?1697811993",
    imgURL9:
      "https://cdn.rickowens.eu/products/158172/large/MU02C1A04_M3855_22D_09%282%29.jpg?1697811994",
    imgURL10:
      "https://cdn.rickowens.eu/products/158174/large/MU02C1A04_M3855_22D_10%282%29.jpg?1697811996",
  },
  {
    id: 4,
    price: "1.330",
    name: "LIDO RUNWAY BATWING FLIGHT IN BLACK",
    type: "Jacket",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/165823/large/RR01D3702_SHMR_09_01.jpg?1702388539",
    imgURL2:
      "https://cdn.rickowens.eu/products/165824/large/RR01D3702_SHMR_09_02.jpg?1702388539",
    imgURL3:
      "https://cdn.rickowens.eu/products/165822/large/RR01D3702_SHMR_09_03.jpg?1702388539",
    imgURL4:
      "https://cdn.rickowens.eu/products/165825/large/RR01D3702_SHMR_09_04.jpg?1702388541",
    imgURL5:
      "https://cdn.rickowens.eu/products/165827/large/RR01D3702_SHMR_09_05.jpg?1702388541",
    imgURL6:
      "https://cdn.rickowens.eu/products/165826/large/RR01D3702_SHMR_09_06.jpg?1702388541",
  },
  {
    id: 5,
    price: "1.970",
    name: "LIDO RUNWAY DONUT COWL IN DUST",
    type: "Dress",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168838/large/RO01D2433_SLTU15_34_01.jpg?1709034892",
    imgURL2:
      "https://cdn.rickowens.eu/products/168837/large/RO01D2433_SLTU15_34_02.jpg?1709034892",
    imgURL3:
      "https://cdn.rickowens.eu/products/168836/large/RO01D2433_SLTU15_34_03.jpg?1709034892",
    imgURL4:
      "https://cdn.rickowens.eu/products/168839/large/RO01D2433_SLTU15_34_04.jpg?1709034894",
    imgURL5:
      "https://cdn.rickowens.eu/products/168840/large/RO01D2433_SLTU15_34_05.jpg?1709034894",
    imgURL6:
      "https://cdn.rickowens.eu/products/168841/large/RO01D2433_SLTU15_34_06.jpg?1709034894",
  },
  {
    id: 6,
    price: "5.195",
    name: "LIDO RUNWAY JUMBO DBLE DONUT IN",
    type: "Dress",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168756/large/RO01D2436_SLEM14_03_01.jpg?1707746086",
    imgURL2:
      "https://cdn.rickowens.eu/products/168754/large/RO01D2436_SLEM14_03_02.jpg?1707746085",
    imgURL3:
      "https://cdn.rickowens.eu/products/167852/large/RO01D2436_SLEM14_03_03.jpg?1706113711",
    imgURL4:
      "https://cdn.rickowens.eu/products/167855/large/RO01D2436_SLEM14_03_04.jpg?1706113712",
    imgURL5:
      "https://cdn.rickowens.eu/products/167856/large/RO01D2436_SLEM14_03_05.jpg?1706113713",
    imgURL6:
      "https://cdn.rickowens.eu/products/168755/large/RO01D2436_SLEM14_03_06.jpg?1707746085",
  },
  {
    id: 7,
    price: "2.505",
    name: " FW23 RADIANCE CONVERTIBLE",
    type: "Jacket",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/158353/large/MU02C1A02_M3632_999_01.jpg?1697817579",
    imgURL2:
      "https://cdn.rickowens.eu/products/158352/large/MU02C1A02_M3632_999_02.jpg?1697817579",
    imgURL3:
      "https://cdn.rickowens.eu/products/158351/large/MU02C1A02_M3632_999_03.jpg?1697817579",
    imgURL4:
      "https://cdn.rickowens.eu/products/158354/large/MU02C1A02_M3632_999_04.jpg?1697817583",
    imgURL5:
      "https://cdn.rickowens.eu/products/158355/large/MU02C1A02_M3632_999_05.jpg?1697817584",
    imgURL6:
      "https://cdn.rickowens.eu/products/158356/large/MU02C1A02_M3632_999_06.jpg?1697817585",
    imgURL7:
      "https://cdn.rickowens.eu/products/158357/large/MU02C1A02_M3632_999_07.jpg?1697817586",
    imgURL8:
      "https://cdn.rickowens.eu/products/158358/large/MU02C1A02_M3632_999_08.jpg?1697817591",
    imgURL9:
      "https://cdn.rickowens.eu/products/158359/large/MU02C1A02_M3632_999_10.jpg?1697817596",
    imgURL10:
      "https://cdn.rickowens.eu/products/158362/large/MU02C1A02_M3632_999_12.jpg?1697817600",
  },
  {
    id: 8,
    price: "4.830",
    name: "LIDO JUMBO LUKE STOOGES IN BLACK",
    type: "Jacket",
    gender: "female",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/160127/large/RP01D2712_LSU_09_01.jpg?1698670078",
    imgURL2:
      "https://cdn.rickowens.eu/products/160128/large/RP01D2712_LSU_09_02.jpg?1698670078",
    imgURL3:
      "https://cdn.rickowens.eu/products/160126/large/RP01D2712_LSU_09_03.jpg?1698670078",
    imgURL4:
      "https://cdn.rickowens.eu/products/160129/large/RP01D2712_LSU_09_04.jpg?1698670080",
    imgURL5:
      "https://cdn.rickowens.eu/products/160130/large/RP01D2712_LSU_09_05.jpg?1698670080",
    imgURL6:
      "https://cdn.rickowens.eu/products/160131/large/RP01D2712_LSU_09_06.jpg?1698670081",
    imgURL7:
      "https://cdn.rickowens.eu/products/160133/large/RP01D2712_LSU_09_07.jpg?1698670082",
    imgURL8:
      "https://cdn.rickowens.eu/products/160132/large/RP01D2712_LSU_09_08.jpg?1698670082",
  },
  {
    id: 9,
    price: "4.765",
    name: "LIDO JUMBO LUKE STOOGES IN BLACK",
    type: "Jacket",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/166161/large/RU01D3773_LOY_09_01.jpg?1702628848",
    imgURL2:
      "https://cdn.rickowens.eu/products/166160/large/RU01D3773_LOY_09_02.jpg?1702628848",
    imgURL3:
      "https://cdn.rickowens.eu/products/161219/large/RU01D3773_LOY_09_03.jpg?1698761448",
    imgURL4:
      "https://cdn.rickowens.eu/products/161221/large/RU01D3773_LOY_09_04.jpg?1698761450",
    imgURL5:
      "https://cdn.rickowens.eu/products/161222/large/RU01D3773_LOY_09_05.jpg?1698761450",
    imgURL6:
      "https://cdn.rickowens.eu/products/161223/large/RU01D3773_LOY_09_06.jpg?1698761451",
    imgURL7:
      "https://cdn.rickowens.eu/products/161225/large/RU01D3773_LOY_09_08.jpg?1698761452",
    imgURL8:
      "https://cdn.rickowens.eu/products/161224/large/RU01D3773_LOY_09_07.jpg?1698761451",
    imgURL9:
      "https://cdn.rickowens.eu/products/166159/large/RU01D3773_LOY_09_09.jpg?1702628848",
  },
  {
    id: 10,
    price: "725",
    name: "LILIES SS24 LIDO GARY JKT IN BLACK SOFT",
    type: "Jacket",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/166811/large/LI01D6702_NEOS_09_01.jpg?1704973692",
    imgURL2:
      "https://cdn.rickowens.eu/products/166812/large/LI01D6702_NEOS_09_02.jpg?1704973694",
    imgURL3:
      "https://cdn.rickowens.eu/products/166813/large/LI01D6702_NEOS_09_03.jpg?1704973697",
    imgURL4:
      "https://cdn.rickowens.eu/products/166814/large/LI01D6702_NEOS_09_04.jpg?1704973700",
    imgURL5:
      "https://cdn.rickowens.eu/products/166815/large/LI01D6702_NEOS_09_05.jpg?1704973702",
    imgURL6:
      "https://cdn.rickowens.eu/products/166816/large/LI01D6702_NEOS_09_06.jpg?1704973705",
  },
  {
    id: 11,
    price: "125",
    name: "LILIES SS24 LIDO GARY JKT IN BLACK SOFT",
    type: "Jacket",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/166060/large/RP01D2719_OR_09_01.jpg?1702571676",
    imgURL2:
      "https://cdn.rickowens.eu/products/166058/large/RP01D2719_OR_09_02.jpg?1702571676",
    imgURL3:
      "https://cdn.rickowens.eu/products/160143/large/RP01D2719_OR_09_03.jpg?1698670214",
    imgURL4:
      "https://cdn.rickowens.eu/products/160146/large/RP01D2719_OR_09_04.jpg?1698670215",
    imgURL5:
      "https://cdn.rickowens.eu/products/160147/large/RP01D2719_OR_09_05.jpg?1698670216",
    imgURL6:
      "https://cdn.rickowens.eu/products/166059/large/RP01D2719_OR_09_06.jpg?1702571676",
  },
  {
    id: 12,
    price: "2.345",
    name: "LIDO RUNWAY HOODED BUBBLE LONG IN",
    type: "Jacket",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/168957/large/DU01D1755_SKY_46_01.jpg?1709115243",
    imgURL2:
      "https://cdn.rickowens.eu/products/168955/large/DU01D1755_SKY_46_02.jpg?1709115243",
    imgURL3:
      "https://cdn.rickowens.eu/products/168956/large/DU01D1755_SKY_46_03.jpg?1709115243",
    imgURL4:
      "https://cdn.rickowens.eu/products/168958/large/DU01D1755_SKY_46_04.jpg?1709115244",
    imgURL5:
      "https://cdn.rickowens.eu/products/168959/large/DU01D1755_SKY_46_05.jpg?1709115245",
    imgURL6:
      "https://cdn.rickowens.eu/products/168960/large/DU01D1755_SKY_46_06.jpg?1709115246",
    imgURL7:
      "https://cdn.rickowens.eu/products/168961/large/DU01D1755_SKY_46_08.jpg?1709115247",
    imgURL8:
      "https://cdn.rickowens.eu/products/168962/large/DU01D1755_SKY_46_07.jpg?1709115246",
    imgURL9:
      "https://cdn.rickowens.eu/products/168963/large/DU01D1755_SKY_46_09.jpg?1709115247",
    imgURL10:
      "https://cdn.rickowens.eu/products/168964/large/DU01D1755_SKY_46_10.jpg?1709115248",
  },
  {
    id: 13,
    price: "1.345",
    name: "LIDO BAUHAUS VEST IN GUN METAL",
    type: "COAT",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/166153/large/RU01D3763_LLPM_68_01.jpg?1702628757",
    imgURL2:
      "https://cdn.rickowens.eu/products/166154/large/RU01D3763_LLPM_68_02.jpg?1702628758",
    imgURL3:
      "https://cdn.rickowens.eu/products/161129/large/RU01D3763_LLPM_68_03.jpg?1698683838",
    imgURL4:
      "https://cdn.rickowens.eu/products/161131/large/RU01D3763_LLPM_68_04.jpg?1698683840",
    imgURL5:
      "https://cdn.rickowens.eu/products/161132/large/RU01D3763_LLPM_68_05.jpg?1698683841",
    imgURL6:
      "https://cdn.rickowens.eu/products/166152/large/RU01D3763_LLPM_68_06.jpg?1702628757",
  },
  {
    id: 14,
    price: "1.345",
    name: "LIDO BAUHAUS VEST IN GUN METAL",
    type: "COAT",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/161120/large/RU01D3761_SCT_09_01.jpg?1698683440",
    imgURL2:
      "https://cdn.rickowens.eu/products/161121/large/RU01D3761_SCT_09_02.jpg?1698683440",
    imgURL3:
      "https://cdn.rickowens.eu/products/161119/large/RU01D3761_SCT_09_03.jpg?1698683440",
    imgURL4:
      "https://cdn.rickowens.eu/products/161122/large/RU01D3761_SCT_09_04.jpg?1698683442",
    imgURL5:
      "https://cdn.rickowens.eu/products/161123/large/RU01D3761_SCT_09_05.jpg?1698683442",
    imgURL6:
      "https://cdn.rickowens.eu/products/161124/large/RU01D3761_SCT_09_06.jpg?1698683443",
    imgURL7:
      "https://cdn.rickowens.eu/products/161125/large/RU01D3761_SCT_09_07.jpg?1698683443",
    imgURL8:
      "https://cdn.rickowens.eu/products/161126/large/RU01D3761_SCT_09_08.jpg?1698683444",
    imgURL9:
      "https://cdn.rickowens.eu/products/161127/large/RU01D3761_SCT_09_09.jpg?1698683444",
  },
  {
    id: 15,
    price: "1.485",
    name: "LIDO OVERSIZED OUTERSHIRT IN",
    type: "Jacket",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/161027/large/RU01D3728_SCT_03_01.jpg?1698682924",
    imgURL2:
      "https://cdn.rickowens.eu/products/161028/large/RU01D3728_SCT_03_02.jpg?1698682924",
    imgURL3:
      "https://cdn.rickowens.eu/products/161026/large/RU01D3728_SCT_03_03.jpg?1698682924",
    imgURL4:
      "https://cdn.rickowens.eu/products/161029/large/RU01D3728_SCT_03_04.jpg?1698682925",
    imgURL5:
      "https://cdn.rickowens.eu/products/161030/large/RU01D3728_SCT_03_05.jpg?1698682926",
    imgURL6:
      "https://cdn.rickowens.eu/products/161031/large/RU01D3728_SCT_03_07.jpg?1698682927",
    imgURL7:
      "https://cdn.rickowens.eu/products/161033/large/RU01D3728_SCT_03_06.jpg?1698682927",
    imgURL8:
      "https://cdn.rickowens.eu/products/161032/large/RU01D3728_SCT_03_08.jpg?1698682927",
    imgURL9:
      "https://cdn.rickowens.eu/products/161034/large/RU01D3728_SCT_03_09.jpg?1698682928",
  },
  {
    id: 16,
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
    id: 17,
    price: "4.920",
    name: "LIDO RUNWAY HOODED LIDO TATLIN",
    type: "Coat",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/165884/large/RR01D3900_ORNC_09_01.jpg?1702389046",
    imgURL2:
      "https://cdn.rickowens.eu/products/165886/large/RR01D3900_ORNC_09_02.jpg?1702389046",
    imgURL3:
      "https://cdn.rickowens.eu/products/165885/large/RR01D3900_ORNC_09_03.jpg?1702389046",
    imgURL4:
      "https://cdn.rickowens.eu/products/165887/large/RR01D3900_ORNC_09_04.jpg?1702389048",
    imgURL5:
      "https://cdn.rickowens.eu/products/165888/large/RR01D3900_ORNC_09_06.jpg?1702389048",
    imgURL6:
      "https://cdn.rickowens.eu/products/165889/large/RR01D3900_ORNC_09_05.jpg?1702389048",
    imgURL7:
      "https://cdn.rickowens.eu/products/165890/large/RR01D3900_ORNC_09_07.jpg?1702389048",
    imgURL8:
      "https://cdn.rickowens.eu/products/165891/large/RR01D3900_ORNC_09_08.jpg?1702389048",
    imgURL9:
      "https://cdn.rickowens.eu/products/165892/large/RR01D3900_ORNC_09_09.jpg?1702389048",
    imgURL10:
      "https://cdn.rickowens.eu/products/165893/large/RR01D3900_ORNC_09_10.jpg?1702389048",
  },
  {
    id: 18,
    price: "6.015",
    name: "LIDO FOGTATLIN COAT IN BLACK SILK",
    type: "Coat",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168414/large/RU01D3936_S_09_01.jpg?1706889323",
    imgURL2:
      "https://cdn.rickowens.eu/products/168413/large/RU01D3936_S_09_02.jpg?1706889323",
    imgURL3:
      "https://cdn.rickowens.eu/products/168412/large/RU01D3936_S_09_03.jpg?1706889323",
    imgURL4:
      "https://cdn.rickowens.eu/products/168415/large/RU01D3936_S_09_04.jpg?1706889325",
    imgURL5:
      "https://cdn.rickowens.eu/products/168416/large/RU01D3936_S_09_05.jpg?1706889325",
    imgURL6:
      "https://cdn.rickowens.eu/products/168417/large/RU01D3936_S_09_06.jpg?1706889326",
    imgURL7:
      "https://cdn.rickowens.eu/products/168418/large/RU01D3936_S_09_07.jpg?1706889326",
    imgURL8:
      "https://cdn.rickowens.eu/products/168419/large/RU01D3936_S_09_08.jpg?1706889327",
  },
  {
    id: 19,
    price: "1.520",
    name: "LIDO RUNWAY LIDO DRAPED GOWN IN",
    type: "Dress",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168758/large/RO01D2588_BH_13_01.jpg?1707746239",
    imgURL2:
      "https://cdn.rickowens.eu/products/168757/large/RO01D2588_BH_13_02.jpg?1707746239",
    imgURL3:
      "https://cdn.rickowens.eu/products/167957/large/RO01D2588_BH_13_03.jpg?1706787018",
    imgURL4:
      "https://cdn.rickowens.eu/products/167958/large/RO01D2588_BH_13_04.jpg?1706787021",
    imgURL5:
      "https://cdn.rickowens.eu/products/167959/large/RO01D2588_BH_13_05.jpg?1706787024",
  },
  {
    id: 20,
    price: "1.815",
    name: "LIDO SPIDER ZIGGY JUMPSUIT IN BLACK",
    type: "Jacket",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/169011/large/RU01D3603_KNETMH_09_01.jpg?1709115802",
    imgURL2:
      "https://cdn.rickowens.eu/products/169012/large/RU01D3603_KNETMH_09_02.jpg?1709115802",
    imgURL3:
      "https://cdn.rickowens.eu/products/169013/large/RU01D3603_KNETMH_09_03.jpg?1709115802",
    imgURL4:
      "https://cdn.rickowens.eu/products/169014/large/RU01D3603_KNETMH_09_04.jpg?1709115803",
    imgURL5:
      "https://cdn.rickowens.eu/products/169015/large/RU01D3603_KNETMH_09_05.jpg?1709115804",
  },
  {
    id: 21,
    price: "3.230",
    name: "FW23 RADIANCE COAT IN BLACK",
    type: "Jacket",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/158026/large/MU02C1C01_M3632_999_01.jpg?1697809680",
    imgURL2:
      "https://cdn.rickowens.eu/products/158027/large/MU02C1C01_M3632_999_02.jpg?1697809680",
    imgURL3:
      "https://cdn.rickowens.eu/products/158030/large/MU02C1C01_M3632_999_03.jpg?1697809691",
    imgURL4:
      "https://cdn.rickowens.eu/products/158032/large/MU02C1C01_M3632_999_04.jpg?1697809702",
    imgURL5:
      "https://cdn.rickowens.eu/products/158034/large/MU02C1C01_M3632_999_05.jpg?1697809706",
    imgURL6:
      "https://cdn.rickowens.eu/products/158036/large/MU02C1C01_M3632_999_06.jpg?1697809713",
    imgURL7:
      "https://cdn.rickowens.eu/products/158038/large/MU02C1C01_M3632_999_07.jpg?1697809718",
  },
  {
    id: 22,
    price: "3.505",
    name: "FW23 CONVERTIBLE COAT IN ACID",
    type: "Jacket",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/158387/large/MU02C1C02_M3734_28D_01%282%29.jpg?1698046962",
    imgURL2:
      "https://cdn.rickowens.eu/products/158386/large/MU02C1C02_M3734_28D_02%282%29.jpg?1698046962",
    imgURL3:
      "https://cdn.rickowens.eu/products/158385/large/MU02C1C02_M3734_28D_03%282%29.jpg?1698046962",
    imgURL4:
      "https://cdn.rickowens.eu/products/158388/large/MU02C1C02_M3734_28D_04%282%29.jpg?1698046965",
    imgURL5:
      "https://cdn.rickowens.eu/products/158389/large/MU02C1C02_M3734_28D_05%282%29.jpg?1698046966",
    imgURL6:
      "https://cdn.rickowens.eu/products/158390/large/MU02C1C02_M3734_28D_06%282%29.jpg?1698046966",
    imgURL7:
      "https://cdn.rickowens.eu/products/158391/large/MU02C1C02_M3734_28D_07%282%29.jpg?1698046968",
  },
  {
    id: 23,
    price: "3.660",
    name: "LIDO RUNWAY HOODED BUBBLE LONG IN",
    type: "Jacket",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168149/large/RO01D2952_SH_34_01.jpg?1706793665",
    imgURL2:
      "https://cdn.rickowens.eu/products/168150/large/RO01D2952_SH_34_02.jpg?1706793667",
    imgURL3:
      "https://cdn.rickowens.eu/products/168151/large/RO01D2952_SH_34_03.jpg?1706793670",
    imgURL4:
      "https://cdn.rickowens.eu/products/168152/large/RO01D2952_SH_34_04.jpg?1706793672",
    imgURL5:
      "https://cdn.rickowens.eu/products/168153/large/RO01D2952_SH_34_05.jpg?1706793677",
    imgURL6:
      "https://cdn.rickowens.eu/products/168154/large/RO01D2952_SH_34_06.jpg?1706793679",
  },
  {
    id: 24,
    price: "830",
    name: "LIDO RUNWAY DIRT BOLAN IN BLACK",
    type: "Pants",
    gender: "female",
    brand: "Rick Owens",
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
    id: 25,
    price: "455",
    name: "LONG BOXERS IN BLACK",
    type: "Shorts",
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
    price: "1.195",
    name: "LIDO LIDO PANTS IN LIDO DEGRADE",
    type: "Pants",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/160754/large/RU01D3387_JP1_100D_01.jpg?1698677910",
    imgURL2:
      "https://cdn.rickowens.eu/products/160752/large/RU01D3387_JP1_100D_02.jpg?1698677910",
    imgURL3:
      "https://cdn.rickowens.eu/products/160753/large/RU01D3387_JP1_100D_03.jpg?1698677910",
    imgURL4:
      "https://cdn.rickowens.eu/products/160755/large/RU01D3387_JP1_100D_04.jpg?1698677912",
    imgURL5:
      "https://cdn.rickowens.eu/products/160756/large/RU01D3387_JP1_100D_05.jpg?1698677912",
    imgURL6:
      "https://cdn.rickowens.eu/products/160757/large/RU01D3387_JP1_100D_06.jpg?1698677912",
    imgURL7:
      "https://cdn.rickowens.eu/products/160758/large/RU01D3387_JP1_100D_07.jpg?1698677913",
  },
  {
    id: 30,
    price: "900",
    name: "LIDO RUNWAY HOODED LIDO TATLIN",
    type: "Shorts",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/165616/large/RR01D3310_SN_09_01.jpg?1702387110",
    imgURL2:
      "https://cdn.rickowens.eu/products/165614/large/RR01D3310_SN_09_02.jpg?1702387110",
    imgURL3:
      "https://cdn.rickowens.eu/products/165615/large/RR01D3310_SN_09_03.jpg?1702387110",
    imgURL4:
      "https://cdn.rickowens.eu/products/165617/large/RR01D3310_SN_09_04.jpg?1702387111",
    imgURL5:
      "https://cdn.rickowens.eu/products/165618/large/RR01D3310_SN_09_05.jpg?1702387112",
    imgURL6:
      "https://cdn.rickowens.eu/products/165619/large/RR01D3310_SN_09_06.jpg?1702387112",
    imgURL7:
      "https://cdn.rickowens.eu/products/165620/large/RR01D3310_SN_09_07.jpg?1702387113",
  },
  {
    id: 31,
    price: "475",
    name: "LIDO RUNWAY HOODED LIDO TATLIN",
    type: "Shorts",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168929/large/DU01D1388_F_42_01.jpg?1709115091",
    imgURL2:
      "https://cdn.rickowens.eu/products/168930/large/DU01D1388_F_42_02.jpg?1709115091",
    imgURL3:
      "https://cdn.rickowens.eu/products/168928/large/DU01D1388_F_42_03.jpg?1709115091",
    imgURL4:
      "https://cdn.rickowens.eu/products/168931/large/DU01D1388_F_42_04.jpg?1709115092",
    imgURL5:
      "https://cdn.rickowens.eu/products/168932/large/DU01D1388_F_42_05.jpg?1709115092",
    imgURL6:
      "https://cdn.rickowens.eu/products/168933/large/DU01D1388_F_42_06.jpg?1709115093",
    imgURL7:
      "https://cdn.rickowens.eu/products/168934/large/DU01D1388_F_42_07.jpg?1709115093",
  },
  {
    id: 32,
    price: "1.340",
    name: "LIDO BAUHAUS CARGO IN CARDINAL RED",
    type: "Pants",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/160683/large/RU01D3377_SCT_03_01.jpg?1698676709",
    imgURL2:
      "https://cdn.rickowens.eu/products/160684/large/RU01D3377_SCT_03_02.jpg?1698676709",
    imgURL3:
      "https://cdn.rickowens.eu/products/160682/large/RU01D3377_SCT_03_03.jpg?1698676709",
    imgURL4:
      "https://cdn.rickowens.eu/products/160685/large/RU01D3377_SCT_03_04.jpg?1698676711",
    imgURL5:
      "https://cdn.rickowens.eu/products/160686/large/RU01D3377_SCT_03_05.jpg?1698676711",
    imgURL6:
      "https://cdn.rickowens.eu/products/160687/large/RU01D3377_SCT_03_06.jpg?1698676711",
    imgURL7:
      "https://cdn.rickowens.eu/products/160688/large/RU01D3377_SCT_03_07.jpg?1698676712",
  },
  {
    id: 33,
    price: "1.340",
    name: "LIDO BAUHAUS CARGO IN BLACK",
    type: "Pants",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/163886/large/RU01D3377_SCT_09_01.jpg?1701796679",
    imgURL2:
      "https://cdn.rickowens.eu/products/163884/large/RU01D3377_SCT_09_02.jpg?1701796679",
    imgURL3:
      "https://cdn.rickowens.eu/products/163887/large/RU01D3377_SCT_09_04.jpg?1701796680",
    imgURL4:
      "https://cdn.rickowens.eu/products/163888/large/RU01D3377_SCT_09_05.jpg?1701796681",
    imgURL5:
      "https://cdn.rickowens.eu/products/163889/large/RU01D3377_SCT_09_06.jpg?1701796681",
    imgURL6:
      "https://cdn.rickowens.eu/products/163890/large/RU01D3377_SCT_09_07.jpg?1701796682",
  },
  {
    id: 34,
    price: "1.225",
    name: "LIDO BAUHAUS CARGO IN BLACK HEAVY",
    type: "Pants",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/164116/large/RU01D3377_TE_09_01.jpg?1701852701",
    imgURL2:
      "https://cdn.rickowens.eu/products/164115/large/RU01D3377_TE_09_02.jpg?1701852701",
    imgURL3:
      "https://cdn.rickowens.eu/products/164114/large/RU01D3377_TE_09_03.jpg?1701852701",
    imgURL4:
      "https://cdn.rickowens.eu/products/164117/large/RU01D3377_TE_09_04.jpg?1701852702",
    imgURL5:
      "https://cdn.rickowens.eu/products/164118/large/RU01D3377_TE_09_05.jpg?1701852703",
    imgURL6:
      "https://cdn.rickowens.eu/products/164119/large/RU01D3377_TE_09_06.jpg?1701852703",
    imgURL7:
      "https://cdn.rickowens.eu/products/164120/large/RU01D3377_TE_09_07.jpg?1701852703",
  },
  {
    id: 35,
    price: "1.225",
    name: "LIDO BAUHAUS CARGO IN HENNA HEAVY",
    type: "Pants",
    gender: "male",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/160689/large/RU01D3377_TE_73_01.jpg?1698676750",
    imgURL2:
      "https://cdn.rickowens.eu/products/160691/large/RU01D3377_TE_73_02.jpg?1698676750",
    imgURL3:
      "https://cdn.rickowens.eu/products/160690/large/RU01D3377_TE_73_03.jpg?1698676750",
    imgURL4:
      "https://cdn.rickowens.eu/products/160692/large/RU01D3377_TE_73_04.jpg?1698676751",
    imgURL5:
      "https://cdn.rickowens.eu/products/160693/large/RU01D3377_TE_73_05.jpg?1698676751",
    imgURL6:
      "https://cdn.rickowens.eu/products/160694/large/RU01D3377_TE_73_06.jpg?1698676752",
    imgURL7:
      "https://cdn.rickowens.eu/products/160695/large/RU01D3377_TE_73_07.jpg?1698676754",
  },
  {
    id: 36,
    price: "4.610",
    name: "LIDO RUNWAY DIRT LIDO SKIRT IN HENNA",
    type: "SKIRT",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/167754/large/RO01D2371_LSU_73_01.jpg?1706111362",
    imgURL2:
      "https://cdn.rickowens.eu/products/167755/large/RO01D2371_LSU_73_02.jpg?1706111369",
    imgURL3:
      "https://cdn.rickowens.eu/products/167756/large/RO01D2371_LSU_73_03.jpg?1706111371",
    imgURL4:
      "https://cdn.rickowens.eu/products/167757/large/RO01D2371_LSU_73_04.jpg?1706111377",
    imgURL5:
      "https://cdn.rickowens.eu/products/167758/large/RO01D2371_LSU_73_05.jpg?1706111380",
    imgURL6:
      "https://cdn.rickowens.eu/products/167759/large/RO01D2371_LSU_73_06.jpg?1706111383",
    imgURL7:
      "https://cdn.rickowens.eu/products/167760/large/RO01D2371_LSU_73_07.jpg?1706111386",
  },
  {
    id: 37,
    price: "4.610",
    name: "LIDO RUNWAY DIRT PILLAR SKIRT IN",
    type: "SKIRT",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/169251/large/RO01D2373_LSU_09_01.jpg?1710409304",
    imgURL2:
      "https://cdn.rickowens.eu/products/169252/large/RO01D2373_LSU_09_02.jpg?1710409304",
    imgURL3:
      "https://cdn.rickowens.eu/products/169250/large/RO01D2373_LSU_09_03.jpg?1710409304",
    imgURL4:
      "https://cdn.rickowens.eu/products/169253/large/RO01D2373_LSU_09_04.jpg?1710409305",
    imgURL5:
      "https://cdn.rickowens.eu/products/169254/large/RO01D2373_LSU_09_05.jpg?1710409306",
    imgURL6:
      "https://cdn.rickowens.eu/products/169255/large/RO01D2373_LSU_09_06.jpg?1710409306",
    imgURL7:
      "https://cdn.rickowens.eu/products/169256/large/RO01D2373_LSU_09_07.jpg?1710409307",
  },
  {
    id: 38,
    price: "1.210",
    name: "LIDO RUNWAY DIRT LIDO SKIRT IN BLACK",
    type: "SKIRT",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/167768/large/RO01D2373_SBB_09_01.jpg?1706112121",
    imgURL2:
      "https://cdn.rickowens.eu/products/167769/large/RO01D2373_SBB_09_02.jpg?1706112125",
    imgURL3:
      "https://cdn.rickowens.eu/products/167770/large/RO01D2373_SBB_09_03.jpg?1706112128",
    imgURL4:
      "https://cdn.rickowens.eu/products/167771/large/RO01D2373_SBB_09_04.jpg?1706112130",
    imgURL5:
      "https://cdn.rickowens.eu/products/167772/large/RO01D2373_SBB_09_05.jpg?1706112142",
    imgURL6:
      "https://cdn.rickowens.eu/products/167773/large/RO01D2373_SBB_09_06.jpg?1706112145",
    imgURL7:
      "https://cdn.rickowens.eu/products/167774/large/RO01D2373_SBB_09_07.jpg?1706112147",
  },
  {
    id: 39,
    price: "545",
    name: "LIDO EDFU SKIRT IN CARDINAL RED",
    type: "SKIRT",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/159842/large/RP01D2366_JA_03_01.jpg?1698663992",
    imgURL2:
      "https://cdn.rickowens.eu/products/159841/large/RP01D2366_JA_03_03.jpg?1698663992",
    imgURL3:
      "https://cdn.rickowens.eu/products/159843/large/RP01D2366_JA_03_02.jpg?1698663992",
    imgURL4:
      "https://cdn.rickowens.eu/products/159844/large/RP01D2366_JA_03_04.jpg?1698663993",
    imgURL5:
      "https://cdn.rickowens.eu/products/159845/large/RP01D2366_JA_03_05.jpg?1698663993",
    imgURL6:
      "https://cdn.rickowens.eu/products/159846/large/RP01D2366_JA_03_06.jpg?1698663994",
  },
  {
    id: 40,
    price: "2.190",
    name: "CYCLOP IN BRONZE CALF FUR",
    type: "ACCESSORY",
    gender: "both",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/140232/large/HV0000105_LPML_84_01.jpg?1671206934",
    imgURL2:
      "https://cdn.rickowens.eu/products/140230/large/HV0000105_LPML_84_02.jpg?1671206934",
    imgURL3:
      "https://cdn.rickowens.eu/products/140231/large/HV0000105_LPML_84_03.jpg?1671206934",
    imgURL4:
      "https://cdn.rickowens.eu/products/140233/large/HV0000105_LPML_84_04.jpg?1671206936",
  },
  {
    id: 41,
    price: "1.640",
    name: "CYCLOP IN BLACK LAMB LEATHER",
    type: "ACCESSORY",
    gender: "both",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/140180/large/HV0000105_LNB_09_01.jpg?1671192046",
    imgURL2:
      "https://cdn.rickowens.eu/products/140181/large/HV0000105_LNB_09_02.jpg?1671192046",
    imgURL3:
      "https://cdn.rickowens.eu/products/140182/large/HV0000105_LNB_09_03.jpg?1671192046",
    imgURL4:
      "https://cdn.rickowens.eu/products/140183/large/HV0000105_LNB_09_04.jpg?1671192047",
    imgURL5:
      "https://cdn.rickowens.eu/products/140184/large/HV0000105_LNB_09_05.jpg?1671192047",
  },
  {
    id: 42,
    price: "1.915",
    name: "CYCLOP IN CHALK WHITE CALF LEATHER",
    type: "ACCESSORY",
    gender: "both",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/140185/large/HV0000105_LPT_110_01.jpg?1671192096",
    imgURL2:
      "https://cdn.rickowens.eu/products/140187/large/HV0000105_LPT_110_02.jpg?1671192096",
    imgURL3:
      "https://cdn.rickowens.eu/products/140186/large/HV0000105_LPT_110_03.jpg?1671192096",
    imgURL4:
      "https://cdn.rickowens.eu/products/140188/large/HV0000105_LPT_110_04.jpg?1671192097",
    imgURL5:
      "https://cdn.rickowens.eu/products/140189/large/HV0000105_LPT_110_05.jpg?1671192097",
  },
  {
    id: 43,
    price: "1.725",
    name: "CYCLOP IN POWDER BLUE NUTRIA FUR",
    type: "ACCESSORY",
    gender: "both",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/140195/large/HV0000105_LU66_66_01.jpg?1671192176",
    imgURL2:
      "https://cdn.rickowens.eu/products/140197/large/HV0000105_LU66_66_02.jpg?1671192177",
    imgURL3:
      "https://cdn.rickowens.eu/products/140196/large/HV0000105_LU66_66_03.jpg?1671192176",
    imgURL4:
      "https://cdn.rickowens.eu/products/140198/large/HV0000105_LU66_66_04.jpg?1671192177",
    imgURL5:
      "https://cdn.rickowens.eu/products/140199/large/HV0000105_LU66_66_05.jpg?1671192178",
  },
  {
    id: 44,
    price: "3.790",
    name: "LIDO RUNWAY SPLINT KISS IN CARDINAL",
    type: "Shoes",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168115/large/RO01D2836_LLPGR0_30_01.jpg?1706793355",
    imgURL2:
      "https://cdn.rickowens.eu/products/168116/large/RO01D2836_LLPGR0_30_02.jpg?1706793357",
    imgURL3:
      "https://cdn.rickowens.eu/products/168117/large/RO01D2836_LLPGR0_30_03.jpg?1706793359",
    imgURL4:
      "https://cdn.rickowens.eu/products/168118/large/RO01D2836_LLPGR0_30_04.jpg?1706793363",
  },
  {
    id: 45,
    price: "3.790",
    name: "LIDO RUNWAY SPLINT KISS IN",
    type: "Shoes",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168119/large/RO01D2836_LLPGR0_530_01.jpg?1706793386",
    imgURL2:
      "https://cdn.rickowens.eu/products/168120/large/RO01D2836_LLPGR0_530_02.jpg?1706793389",
    imgURL3:
      "https://cdn.rickowens.eu/products/168121/large/RO01D2836_LLPGR0_530_03.jpg?1706793392",
    imgURL4:
      "https://cdn.rickowens.eu/products/168122/large/RO01D2836_LLPGR0_530_04.jpg?1706793394",
  },
  {
    id: 46,
    price: "475",
    name: "LIDO RUNWAY HOODED LIDO TATLIN",
    type: "Shoes",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168123/large/RO01D2836_LLPGR0_90_01.jpg?1706793430",
    imgURL2:
      "https://cdn.rickowens.eu/products/168124/large/RO01D2836_LLPGR0_90_02.jpg?1706793432",
    imgURL3:
      "https://cdn.rickowens.eu/products/168125/large/RO01D2836_LLPGR0_90_03.jpg?1706793434",
    imgURL4:
      "https://cdn.rickowens.eu/products/168126/large/RO01D2836_LLPGR0_90_04.jpg?1706793439",
  },
  {
    id: 47,
    price: "4.350",
    name: "LIDO RUNWAY SPLINT KISS IN",
    type: "Shoes",
    gender: "female",
    brand: "Rick Owens",
    imgURL:
      "https://cdn.rickowens.eu/products/168131/large/RO01D2837_LLPGR0_90_01.jpg?1706793495",
    imgURL2:
      "https://cdn.rickowens.eu/products/168132/large/RO01D2837_LLPGR0_90_02.jpg?1706793498",
    imgURL3:
      "https://cdn.rickowens.eu/products/168133/large/RO01D2837_LLPGR0_90_03.jpg?1706793501",
    imgURL4:
      "https://cdn.rickowens.eu/products/168134/large/RO01D2837_LLPGR0_90_04.jpg?1706793503",
  },
  {
    id: 48,
    price: "1.220",
    name: "LIDO RUNWAY MEGA BUMPER SNEAKS IN",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/168710/large/RR02B2890_LHL_911_01.jpeg?1707306360",
    imgURL2:
      "https://cdn.rickowens.eu/products/168711/large/RR02B2890_LHL_911_02.jpeg?1707306371",
    imgURL3:
      "https://cdn.rickowens.eu/products/168712/large/RR02B2890_LHL_911_03.jpeg?1707306375",
    imgURL4:
      "https://cdn.rickowens.eu/products/168713/large/RR02B2890_LHL_911_04.jpeg?1707306379",
  },
  {
    id: 49,
    price: "1.000",
    name: "LIDO RUNWAY MEGA BUMPER SNEAKS IN",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/168820/large/RR01D3891_LHL_911_01.jpg?1709034784",
    imgURL2:
      "https://cdn.rickowens.eu/products/168819/large/RR01D3891_LHL_911_02.jpg?1709034784",
    imgURL3:
      "https://cdn.rickowens.eu/products/168818/large/RR01D3891_LHL_911_03.jpg?1709034784",
    imgURL4:
      "https://cdn.rickowens.eu/products/168821/large/RR01D3891_LHL_911_04.jpg?1709034785",
  },
  {
    id: 50,
    price: "710",
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
    id: 51,
    price: "570",
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
    id: 52,
    price: "1.235",
    name: "LIDO RUNWAY SNEAKERS IN DUSTY",
    type: "Shoes",
    gender: "female",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/169687/large/RO01D2890_LHL_6311_01.jpg?1710517249",
    imgURL2:
      "https://cdn.rickowens.eu/products/169688/large/RO01D2890_LHL_6311_02.jpg?1710517249",
    imgURL3:
      "https://cdn.rickowens.eu/products/169689/large/RO01D2890_LHL_6311_03.jpg?1710517249",
    imgURL4:
      "https://cdn.rickowens.eu/products/169690/large/RO01D2890_LHL_6311_04.jpg?1710517250",
  },
  {
    id: 53,
    price: "1.175",
    name: "LIDO RUNWAY MEGA BUMPER SNEAKS IN",
    type: "Shoes",
    gender: "female",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/168135/large/RO01D2891_LHL_6311_01.jpg?1706793566",
    imgURL2:
      "https://cdn.rickowens.eu/products/168136/large/RO01D2891_LHL_6311_02.jpg?1706793569",
    imgURL3:
      "https://cdn.rickowens.eu/products/168137/large/RO01D2891_LHL_6311_03.jpg?1706793572",
    imgURL4:
      "https://cdn.rickowens.eu/products/168138/large/RO01D2891_LHL_6311_04.jpg?1706793574",
  },
  {
    id: 54,
    price: "725",
    name: "LIDO RUNWAY MEGA BUMPER SNEAKS IN",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/163467/large/DU01D1805_NDK_9811_01.jpg?1700665148",
    imgURL2:
      "https://cdn.rickowens.eu/products/163468/large/DU01D1805_NDK_9811_02.jpg?1700665151",
    imgURL3:
      "https://cdn.rickowens.eu/products/163469/large/DU01D1805_NDK_9811_03.jpg?1700665152",
    imgURL4:
      "https://cdn.rickowens.eu/products/163470/large/DU01D1805_NDK_9811_04.jpg?1700665158",
  },
  {
    id: 55,
    price: "760",
    name: "LIDO BOOT SNEAKS IN BLACK/MILK/MILK",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/165360/large/DU01D1806_NDKES1_911_01.jpg?1702305020",
    imgURL2:
      "https://cdn.rickowens.eu/products/165361/large/DU01D1806_NDKES1_911_02.jpg?1702305020",
    imgURL3:
      "https://cdn.rickowens.eu/products/165362/large/DU01D1806_NDKES1_911_03.jpg?1702305020",
    imgURL4:
      "https://cdn.rickowens.eu/products/165363/large/DU01D1806_NDKES1_911_04.jpg?1702305023",
  },
  {
    id: 56,
    price: "780",
    name: "LIDO DOUBLE BUMPER SNEAKS IN",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/169093/large/DU01D1831_NDK_911_01.jpg?1709211014",
    imgURL2:
      "https://cdn.rickowens.eu/products/169095/large/DU01D1831_NDK_911_02.jpg?1709211014",
    imgURL3:
      "https://cdn.rickowens.eu/products/169094/large/DU01D1831_NDK_911_03.jpg?1709211014",
    imgURL4:
      "https://cdn.rickowens.eu/products/169096/large/DU01D1831_NDK_911_04.jpg?1709211015",
  },
  {
    id: 57,
    price: "670",
    name: "LIDO DOUBLE BUMPER SNEAKS IN",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/169101/large/DU01D1832_NDK_911_01.jpg?1709211063",
    imgURL2:
      "https://cdn.rickowens.eu/products/169102/large/DU01D1832_NDK_911_02.jpg?1709211063",
    imgURL3:
      "https://cdn.rickowens.eu/products/169103/large/DU01D1832_NDK_911_03.jpg?1709211063",
    imgURL4:
      "https://cdn.rickowens.eu/products/169104/large/DU01D1832_NDK_911_04.jpg?1709211064",
  },
  {
    id: 58,
    price: "795",
    name: "LIDO ABSTRACT SNEAK IN BLACK/MILK/MILK",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/169106/large/DU01D1840_CB_911_01.jpg?1709211111",
    imgURL2:
      "https://cdn.rickowens.eu/products/169107/large/DU01D1840_CB_911_02.jpg?1709211111",
    imgURL3:
      "https://cdn.rickowens.eu/products/169105/large/DU01D1840_CB_911_03.jpg?1709211111",
    imgURL4:
      "https://cdn.rickowens.eu/products/169108/large/DU01D1840_CB_911_04.jpg?1709211112",
  },
  {
    id: 59,
    price: "675",
    name: "LIDO ABSTRACT LOW SNEAK IN",
    type: "Shoes",
    gender: "male",
    brand: "RICK OWENS",
    imgURL:
      "https://cdn.rickowens.eu/products/169685/large/DU01D1842_CB_911_01.jpg?1710517217",
    imgURL2:
      "https://cdn.rickowens.eu/products/169684/large/DU01D1842_CB_911_02.jpg?1710517217",
    imgURL3:
      "https://cdn.rickowens.eu/products/169683/large/DU01D1842_CB_911_03.jpg?1710517217",
    imgURL4:
      "https://cdn.rickowens.eu/products/169686/large/DU01D1842_CB_911_04.jpg?1710517218",
  },
  {
    id: 60,
    price: "1.250",
    name: "Natlover Super Baggy Jeans",
    type: "Pants",
    gender: "male",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-natlover-super-baggy-jeans_22103517_52362351_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-natlover-super-baggy-jeans_22103517_52362353_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-natlover-super-baggy-jeans_22103517_52362352_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-natlover-super-baggy-jeans_22103517_52362355_1000.jpg?c=3",
    des: "These 90s-inspired baggy jeans are made from 100% cotton denim and feature tribal embroidery on the sides. Made in Italy.",
  },
  {
    id: 61,
    price: "1.995",
    name: "Cryst Windows Over Den Shirt",
    type: "Shirt",
    gender: "male",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-windows-over-den-shirt_21255526_52939564_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-windows-over-den-shirt_21255526_52939565_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-windows-over-den-shirt_21255526_52939562_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-windows-over-den-shirt_21255526_52939563_1000.jpg?c=3",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-windows-over-den-shirt_21255526_52939569_1000.jpg?c=3",
  },
  {
    id: 62,
    price: "695",
    name: "Xray Cargo Swimshorts",
    type: "Shorts",
    gender: "male",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-xray-cargo-swimshorts_22103350_52940321_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-xray-cargo-swimshorts_22103350_52940324_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-xray-cargo-swimshorts_22103350_52940325_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-xray-cargo-swimshorts_22103350_52940326_1000.jpg?c=3",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-xray-cargo-swimshorts_22103350_52940330_1000.jpg",
  },
  {
    id: 63,
    price: "765",
    name: "Bling Leaves S Arrow Crop Hoodie",
    type: "Hoodie",
    gender: "female",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-bling-leaves-s-arrow-crop-hoodie_21255538_47464091_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-bling-leaves-s-arrow-crop-hoodie_21255538_47463027_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-bling-leaves-s-arrow-crop-hoodie_21255538_47463028_1000.jpg",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-bling-leaves-s-arrow-crop-hoodie_21255538_47463029_1000.jpg",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-bling-leaves-s-arrow-crop-hoodie_21255538_47462478_1000.jpg",
  },
  {
    id: 64,
    price: "1.050",
    name: "Football Over Hoodie",
    type: "Hoodie",
    gender: "male",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-football-over-hoodie_21832122_51811042_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-football-over-hoodie_21832122_51811036_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-football-over-hoodie_21832122_51811043_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-football-over-hoodie_21832122_51811046_1000.jpg?c=3",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-football-over-hoodie_21832122_51811045_1000.jpg?c=3",
  },
  {
    id: 65,
    price: "1.090",
    name: "Racerback Long Sleeves Top",
    type: "T-shirt",
    gender: "female",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-racerback-long-sleeves-top_22103546_52940430_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-racerback-long-sleeves-top_22103546_52940439_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-racerback-long-sleeves-top_22103546_52940433_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-racerback-long-sleeves-top_22103546_52940440_1000.jpg",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-racerback-long-sleeves-top_22103546_52940438_1000.jpg",
  },
  {
    id: 66,
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
    id: 67,
    price: "2.500",
    name: "Natlover Lea Mesh Basket S/S",
    type: "Jacket",
    gender: "male",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-natlover-lea-mesh-basket-s-s_22103438_52940360_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-natlover-lea-mesh-basket-s-s_22103438_52940356_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-natlover-lea-mesh-basket-s-s_22103438_52940357_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-natlover-lea-mesh-basket-s-s_22103438_52940362_1000.jpg?c=3",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-natlover-lea-mesh-basket-s-s_22103438_52940361_1000.jpg?c=3",
  },
  {
    id: 68,
    price: "2.970",
    name: "Formal Varsity Country Jacket",
    type: "Jacket",
    gender: "male",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-formal-varsity-country-jacket_21832127_52255314_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-formal-varsity-country-jacket_21832127_52255322_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-formal-varsity-country-jacket_21832127_52255329_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-formal-varsity-country-jacket_21832127_52255332_1000.jpg?c=3",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-formal-varsity-country-jacket_21832127_52255328_1000.jpg?c=3",
  },
  {
    id: 69,
    price: "3.405",
    name: "Vars World Leather Jacket",
    type: "Jacket",
    gender: "male",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-vars-world-leather-jackets_19321439_44140220_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-vars-world-leather-jackets_19321439_44140225_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-vars-world-leather-jackets_19321439_44139855_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-vars-world-leather-jackets_19321439_44138578_1000.jpg?c=3",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-vars-world-leather-jackets_19321439_44138579_1000.jpg?c=3",
    des: "Light blue varsity jacket with white leather sleeves.  Black and yellow Off-White logo at front and diagonal details on the sleeves. Spread collar and buttons as closure. Yellow and black patch at back. Elasticized cuffs and hem.",
  },
  {
    id: 70,
    price: "3.890",
    name: "Cryst Moon Phase Vars Knit Ca Sierra Leo",
    type: "Jacket",
    gender: "male",
    brand: "Off-White",
    imgURL:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-moon-phase-vars-knit-ca-sierra-leo_20534629_45579581_1000.jpg?c=3",
    imgURL2:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-moon-phase-vars-knit-ca-sierra-leo_20534629_45579584_1000.jpg?c=3",
    imgURL3:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-moon-phase-vars-knit-ca-sierra-leo_20534629_45579582_1000.jpg?c=3",
    imgURL4:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-moon-phase-vars-knit-ca-sierra-leo_20534629_45579583_1000.jpg?c=3",
    imgURL5:
      "https://cdn-images.farfetch-contents.com/off-white-cryst-moon-phase-vars-knit-ca-sierra-leo_20534629_45579586_1000.jpg?c=3",
    des: "Black varsity knitwear with OW yellow and orange patches at side.Moon design at front and arrow orange detail at sleeves.Frontal closure with buttons.Relaxed fit.",
  },
  {
    id: 71,
    price: "524",
    name: "Abc Camo Shark Full Zip Hoodie",
    type: "Hoodie",
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
    id: 72,
    price: "552",
    name: "Comic Art Shark Zip Hoodie",
    type: "Hoodie",
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
    id: 73,
    price: "666",
    name: "Double Shark Full Zip Hoodie",
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
    id: 74,
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
    id: 75,
    price: "1.643",
    name: "BAPE X Canada Goose Crofto",
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
  {
    id: 76,
    price: "1.184",
    name: "BAPE X Canada Goose Crofto",
    type: "Jacket",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144902LGRX/0ZXDNM144902LGRX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144902LGRX/0ZXDNM144902LGRX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144902LGRX/0ZXDNM144902LGRX-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL4:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144902LGRX/0ZXDNM144902LGRX-pdp-4.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL5:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144902LGRX/0ZXDNM144902LGRX-pdp-5.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL6:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXDNM144902LGRX/0ZXDNM144902LGRX-pdp-6.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
  },
  {
    id: 77,
    price: "769",
    name: "Classic down jacket",
    type: "Jacket",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BBKDNJK7604MLBGX/BBKDNJK7604MLBGX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BBKDNJK7604MLBGX/BBKDNJK7604MLBGX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BBKDNJK7604MLBGX/BBKDNJK7604MLBGX-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL4:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BBKDNJK7604MLBGX/BBKDNJK7604MLBGX-pdp-4.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL5:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BBKDNJK7604MLBGX/BBKDNJK7604MLBGX-pdp-5.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL6:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BBKDNJK7604MLBGX/BBKDNJK7604MLBGX-pdp-6.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
  },
  {
    id: 78,
    price: "524",
    name: "Indigo Shark Full Zip Hoodie",
    type: "Hoodie",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWW215003MNYX/0ZXSWW215003MNYX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWW215003MNYX/0ZXSWW215003MNYX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWW215003MNYX/0ZXSWW215003MNYX-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL4:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWW215003MNYX/0ZXSWW215003MNYX-pdp-4.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL5:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0ZXSWW215003MNYX/0ZXSWW215003MNYX-pdp-5.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
  },
  {
    id: 79,
    price: "339",
    name: "BAPE STA zip-up hoodie",
    type: "Hoodie",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BPYHJHJ3194XMGY2/BPYHJHJ3194XMGY2-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BPYHJHJ3194XMGY2/BPYHJHJ3194XMGY2-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BPYHJHJ3194XMGY2/BPYHJHJ3194XMGY2-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL4:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BPYHJHJ3194XMGY2/BPYHJHJ3194XMGY2-pdp-4.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL5:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BPYHJHJ3194XMGY2/BPYHJHJ3194XMGY2-pdp-5.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL6:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/BPYHJHJ3194XMGY2/BPYHJHJ3194XMGY2-pdp-6.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
  },
  {
    id: 80,
    price: "442",
    name: "Sherpa hoodie jacket",
    type: "Hoodie",
    gender: "male",
    brand: "Bape",
    imgURL:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0PXJKW215001JBLX/0PXJKW215001JBLX-pdp-1.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL2:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0PXJKW215001JBLX/0PXJKW215001JBLX-pdp-2.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL3:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0PXJKW215001JBLX/0PXJKW215001JBLX-pdp-3.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL4:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0PXJKW215001JBLX/0PXJKW215001JBLX-pdp-4.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL5:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0PXJKW215001JBLX/0PXJKW215001JBLX-pdp-5.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
    imgURL6:
      "https://ithk-pro-itmall-item.oss-cn-hongkong.aliyuncs.com/2/product/0PXJKW215001JBLX/0PXJKW215001JBLX-pdp-6.jpg?x-oss-process=image/resize,m_pad,h_750,w_600/auto-orient,1/quality,Q_80",
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
