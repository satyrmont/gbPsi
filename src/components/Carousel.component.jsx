import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

class GBCarousel extends Component {
  render() {
    return (
      <StyledCarousel
        showThumbs={false}
        dynamicHeight={true}
        centerMode={true}
        emulateTouch={true}
        centerSlidePercentage={50}
      >
        <ImgHolder>
          <img src="/img01.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </ImgHolder>
        <ImgHolder>
          <img src="/img02.jpg" />
          {/* <p className="legend">Legend 2</p> */}
        </ImgHolder>
        <ImgHolder>
          <img src="https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          {/* <p className="legend">Legend 3</p> */}
        </ImgHolder>
        <ImgHolder>
          <img src="https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          {/* <p className="legend">Legend 3</p> */}
        </ImgHolder>
      </StyledCarousel>
    );
  }
}

const ImgHolder = styled.div`
  /* width: 100%; */
  /* height: 200px; */
  img {
    object-fit: cover;
    transform: translateX(-50%);
    max-height: 300px;
    width: auto;
  }
`;

const StyledCarousel = styled(Carousel)`
  filter: drop-shadow(30px 10px 20px #00000050);
  width: 100dvw;
  /* background-color: antiquewhite; */
  /* max-height: 300px; */
`;

export default GBCarousel;
