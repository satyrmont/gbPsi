import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

class GBCarousel extends Component {
  render() {
    return (
      <Carousel>
        <ImgHolder>
          <img src="/img01.jpg" />
          <p className="legend">Legend 1</p>
        </ImgHolder>
        <ImgHolder>
          <img src="/img02.jpg" />
          <p className="legend">Legend 2</p>
        </ImgHolder>
        <ImgHolder>
          <img src="/image03.jpg" />
          <p className="legend">Legend 3</p>
        </ImgHolder>
      </Carousel>
    );
  }
}

const ImgHolder = styled.div`
  /* width: 100%; */
  /* height: 100px; */
`;

export default GBCarousel;
