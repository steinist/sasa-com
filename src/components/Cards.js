import React from "react";
import { Card } from "react-bootstrap";

const Cards = ({ imgSrc, prodName, prcBef, prcAft }) => {
  return (
    <div className="card">
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
