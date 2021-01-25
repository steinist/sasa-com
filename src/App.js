import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import FlashDeal from "./components/FlashDeal";
import Coupons from "./components/Coupons";
import NewArrival from "./components/NewArrival";
import MoreCategory from "./components/MoreCategory";
import Youtube from "./components/Youtube";
import FeaturedBrand from "./components/FeaturedBrand";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <FlashDeal />
      <Coupons />
      <NewArrival />
      <MoreCategory />
      <Youtube />
      <FeaturedBrand />
    </>
  );
};

export default App;
