import React from "react";

import Header from "./components/Header";
import Banner from "./components/Banner";
import FlashDeal from "./components/FlashDeal";
import Coupons from "./components/Coupons";
import NewArrival from "./components/NewArrival";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <FlashDeal />
      <Coupons />
      <NewArrival />
    </>
  );
};

export default App;
