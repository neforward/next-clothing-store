import Link from "next/link";

export default function Shop() {
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
  ];
  return (
    <>
      <div className="shop">
        <div className="container">
          <div className="shop-content">
            <div className="shop-top">
              <h2>All Clothing</h2>
              <div className="select-category">
                <select className="sort" name="" id="">
                  <option value="">Default sorting</option>
                  <option value="latest">Sort by latest</option>
                  <option value="price-low">Sort by price: low to high</option>
                  <option value="price-high">Sort by price: high to low</option>
                </select>
                <span>SORT BY</span>
              </div>
            </div>
            <div className="shop-main">
              <div className="shop-brands">
                <div className="brands-title">
                  <h3>Shop by Designer</h3>
                </div>
                <div className="brands-column">
                  <span>RESS</span>
                  <span>19G</span>
                  <span>2nd3rd</span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="shop-catalog">
                {clothingData.map((item) => (
                  <div className="shop-box" key={item.id}>
                    <Link href={`/shop/${item.id}`} passHref>
                      <img src={item.imgURL} alt={item.name} />
                    </Link>
                    <div className="shop-box-info">
                      <h6>{item.brand}</h6>
                      <h4>{item.name}</h4>
                      <button>€{item.price} EU</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
