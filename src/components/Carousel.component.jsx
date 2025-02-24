import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

class GBCarousel extends Component {
  render() {
    return (
      <StyledCarousel showThumbs={false}>
        <ImgHolder>
          <img src="/img01.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </ImgHolder>
        <ImgHolder>
          <img src="/img02.jpg" />
          {/* <p className="legend">Legend 2</p> */}
        </ImgHolder>
        <ImgHolder>
          <img src="/img01.jpg" />
          {/* <p className="legend">Legend 3</p> */}
        </ImgHolder>
      </StyledCarousel>
    );
  }
}

const ImgHolder = styled.div`
  /* width: 100%; */
  /* height: 100px; */
  img {
    transform: scale(0.9);
  }
`;

const StyledCarousel = styled(Carousel)`
  filter: drop-shadow(30px 10px 20px #00000050);
  /* background-color: antiquewhite; */
  /* max-height: 300px; */
`;

export default GBCarousel;
