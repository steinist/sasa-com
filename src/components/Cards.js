import React, { useEffect } from "react";

const Cards = ({ imgSrc, prodName, prcBef, prcAft }) => {
  return (
    <div className="card" id="card">
      <img src={imgSrc} alt="product" />

      <div className="card-info">
        <p className="obj-name">{prodName}</p>
        <div className="obj-price">
          <p className="price-before">HK${prcBef}</p>
          <p className="price-after">HK${prcAft}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
