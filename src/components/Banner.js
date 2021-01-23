import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel className="carousel" controls={false}>
      <Carousel.Item interval={1000}>
        <img
          className="carousel-img"
          src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1610952287-209nt4kt45_d_1200x500_800x333_400x167.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="carousel-img"
          src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611130866-z60h2mpfvq_d_1200x500_800x333_400x167.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img"
          src="https://cms.cdn.91app.hk/images/original/17/086148bb-2429-4ffd-bbec-6f73bfd281d8-1611201882-0613u17i1u_d_1200x500_800x333_400x167.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
