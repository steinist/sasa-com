import React from "react";
import Cards from "./Cards";

const NewArrival = () => {
  return (
    <>
      <h3 className="heading-title">焦點新品 New Arrival</h3>
      <div className="card-flex">
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/9817/0/637467676823570000?v=1"
          prodName="Kiehl's Ultra Facial Oil-Free Gel Cream"
          prcBef="300.00"
          prcAft="178.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/9819/0/637467676825900000?v=1"
          prodName="Shiseido WetForce Perfect UV Protector SPF50+ / PA++++ 50ml"
          prcBef="340.00"
          prcAft="228.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/9966/0/637467677335870000?v=1"
          prodName="Jurlique Rose Hand Cream"
          prcBef="200.00"
          prcAft="118.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/9835/0/637467676843800000?v=1"
          prodName="Skin Ceuticals Hydrating B5 30ml"
          prcBef="700.00"
          prcAft="458.00"
        />
      </div>
      <div className="card-flex">
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/9843/0/637467676851630000?v=1"
          prodName="Kiehl's Ultra Facial Oil-Free Gel Cream"
          prcBef="300.00"
          prcAft="178.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/9842/0/637467676850770000?v=1"
          prodName="Shiseido WetForce Perfect UV Protector SPF50+ / PA++++ 50ml"
          prcBef="340.00"
          prcAft="228.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/9828/0/637467676836530000?v=1"
          prodName="Jurlique Rose Hand Cream"
          prcBef="200.00"
          prcAft="118.00"
        />
        <Cards
          imgSrc="https://img.cdn.91app.hk/webapi/imagesV3/Cropped/SalePage/9969/0/637468400274930000?v=1"
          prodName="Skin Ceuticals Hydrating B5 30ml"
          prcBef="700.00"
          prcAft="458.00"
        />
      </div>
    </>
  );
};

export default NewArrival;
