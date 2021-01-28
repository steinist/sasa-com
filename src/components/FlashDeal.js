import React from "react";
import Cards from "./Cards";
import Timer from "./Timer";

const FlashDeal = () => {
  return (
    <div id="flash-deal">
      <div className="coupons vertical-spacing">
        <a href="#">
          <img
            id="coupon1"
            src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611147778-h8mawy503j_d_400x93.jpg"
            alt="coupon 1"
          />
        </a>
        <a href="#">
          <img
            id="coupon2"
            src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611113557-iqqv637q18_d_400x93.jpg"
            alt="coupon 2"
          />
        </a>
      </div>
      {/* <h3 id="flash-deal-title" className="heading-title">
        限時秒殺 Crazy Flash Deal
      </h3> */}
      <div className="timer">
        <Timer />
      </div>
      <div className="card-flex">
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Original/SalePage/10272/0/637471749403770000?v=1"
          prodName="Fancl 膠原蛋白美肌飲料 10枝裝"
          prcBef="208.00"
          prcAft="189.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Original/SalePage/8712/0/637471715761430000?v=1"
          prodName="Estee Lauder Synchronized Recovery Complex II"
          prcBef="830.00"
          prcAft="408.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Original/SalePage/8092/0/637471715752970000?v=1"
          prodName="Sulwhasoo Overnight Vitalizing Mask 120ml"
          prcBef="380.00"
          prcAft="149.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/10020/0/637468251973330000?v=1"
          prodName="Sisley Ecological Compound 125ml"
          prcBef="1580.00"
          prcAft="1058.00"
        />
      </div>
    </div>
  );
};

export default FlashDeal;
