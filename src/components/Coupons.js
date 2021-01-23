import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Coupons = () => {
  return (
    <>
      <div className="coupons">
        <img
          id="coupon3"
          src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1610953533-wx3cqwpay7_d_400x173.jpg"
          alt="coupon 3"
        />
        <img
          id="coupon4"
          src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611129558-fa07dp1vqa_d_400x173.jpg"
          alt="coupon 4"
        />
      </div>
      <div id="coupon-carousel">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611281181-m93qn80seu_d_1200x328_800x219_400x109.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611297173-v19o1ho6q4_d_1200x328_800x219_400x109.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Coupons;
