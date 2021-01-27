import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div id="banner" className="vertical-spacing">
      <Carousel className="carousel" controls={false}>
        <Carousel.Item interval={1500}>
          <img
            className="carousel-img"
            src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611645541-el3zwoxmdf_d_1200x500_800x333_400x167.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="carousel-img"
            src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611563473-mg1d08msbo_d_1200x500_800x333_400x167.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <img
            className="carousel-img"
            src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611714535-0613u17i1u_d_1200x500_800x333_400x167.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="carousel-img"
            src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611130866-z60h2mpfvq_d_1200x500_800x333_400x167.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
