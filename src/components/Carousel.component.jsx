import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

class GBCarousel extends Component {
  render() {
    return (
      <StyledCarousel
        showThumbs={false}
        dynamicHeight={false}
        emulateTouch={true} // Enable touch swiping
        infiniteLoop={true} // Allow continuous looping
        centerMode={true}
        centerSlidePercentage={80} // Show one slide at a time on mobile
        showArrows={true}
        showStatus={false}
        showIndicators={true} // Add indicators for better UX
        swipeScrollTolerance={10} // Reduce sensitivity to prevent overscroll
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
  max-height: 300px;

  img {
    height: 300px;
    width: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 200px;
    }
  }
`;

const StyledCarousel = styled(Carousel)`
  filter: drop-shadow(30px 10px 20px #00000050);
  width: 100%; /* Fit within parent container */
  overflow: hidden; /* Clip content */

  .carousel-slider {
    overflow: hidden; /* Ensure slider doesn't spill */
    width: 100%;
  }

  .carousel .slide {
    transition: transform 0.6s ease-in-out; /* Slower, smoother transition */
    min-width: 0; /* Prevent slides from forcing overflow */
  }

  @media (max-width: 768px) {
    width: 100%;
    overflow-x: hidden;
    touch-action: pan-y pinch-zoom; /* Allow vertical scroll and zoom, restrict horizontal */

    .carousel .slide {
      padding: 0 5px; /* Add spacing between slides */
    }

    .carousel-slider {
      /* Center slides and prevent overscroll */
      display: flex;
      align-items: center;
    }
  }
`;

export default GBCarousel;
