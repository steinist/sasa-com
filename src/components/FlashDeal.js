import React from "react";
import Cards from "./Cards";

const FlashDeal = () => {
  return (
    <div id="flash-deal">
      <div className="coupons">
        <img
          id="coupon1"
          src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611147778-h8mawy503j_d_400x93.jpg"
          alt="coupon 1"
        />
        <img
          id="coupon2"
          src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611113557-iqqv637q18_d_400x93.jpg"
          alt="coupon 2"
        />
      </div>
      <h3 id="flash-deal-title" className="heading-title">
        限時秒殺 Crazy Flash Deal
      </h3>
      <div className="timer">Timer</div>
      <div className="card-flex">
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/8726/0/637468327098900000?v=1"
          prodName="【Online Exclusive】FRESH Rose Deep Hydration Ritual Set 5piece"
          prcBef="300.00"
          prcAft="178.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/6954/0/637469263718000000?v=1"
          prodName="【Online Exclusive】Sisley Black Rose Skin Infusion Cream 50ml"
          prcBef="340.00"
          prcAft="228.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/8699/0/637468327445000000?v=1"
          prodName="Jurlique Rose Hand Cream"
          prcBef="200.00"
          prcAft="118.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/10020/0/637468251973330000?v=1"
          prodName="Skin Ceuticals Hydrating B5 30ml"
          prcBef="700.00"
          prcAft="458.00"
        />
      </div>
    </div>
  );
};

export default FlashDeal;
