import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

class GBCarousel extends Component {
  render() {
    return (
      <StyledCarousel
        showThumbs={false}
        dynamicHeight={false} // Prevents height issues
        emulateTouch={true}
        infiniteLoop={false}
        centerMode={true}
        centerSlidePercentage={100 / 3}
        showArrows={true}
        showStatus={false}
        showIndicators={false}
      >
        <ImgHolder>
          <img src="/img01.jpg" alt="Image 1" />
        </ImgHolder>
        <ImgHolder>
          <img src="/img02.jpg" alt="Image 2" />
        </ImgHolder>
        <ImgHolder>
          <img
            src="https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 3"
          />
        </ImgHolder>
        <ImgHolder>
          <img
            src="https://images.pexels.com/photos/235990/pexels-photo-235990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Image 4"
          />
        </ImgHolder>
      </StyledCarousel>
    );
  }
}

const ImgHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 300px; // Ensures consistent height

  img {
    width: 100%;
    height: 300px; // Set a fixed height
    object-fit: cover; // Crop taller images instead of stretching
  }
`;

const StyledCarousel = styled(Carousel)`
  filter: drop-shadow(30px 10px 20px #00000050);
  width: 100dvw;

  .carousel-slider {
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

export default GBCarousel;
