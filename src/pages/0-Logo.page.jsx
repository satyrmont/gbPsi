import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { Section } from "../style/PageContainers";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

function Logo() {
  const logoPage = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.fromTo(
      ".logo",
      { width: 200, opacity: 0 },
      {
        width: 300,
        opacity: 1,
        duration: 2,
        ease: "back",
      }
    );

    ScrollTrigger.create({
      trigger: ".logo",
      animation: animation,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none none",
    });

    // Additional animation for smaller screens
    if (window.innerWidth > 768) {
      const smallerScreenAnimation = gsap.fromTo(
        ".logo",
        { width: 300, opacity: 0 },
        {
          width: 400,
          opacity: 1,
          duration: 2,
          ease: "back",
        }
      );
      gsap.to(".logo", { clearProps: "all" }); // Clear previous animation properties
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.create({
        trigger: ".logo",
        animation: smallerScreenAnimation,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      });
    }
  }, []);

  return (
    <LogoSection>
      <LogoPage ref={logoPage}>
        <img
          className="logo"
          type="image/svg+xml"
          src="gbPsi_logo01-blackNoBG.svg"
          alt="Logo Instituto Chão"
        />
      </LogoPage>
    </LogoSection>
  );
}

const LogoPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  /* height: 100vh; // Adjust height to viewport height */
  /* z-index: 1; // Set a higher z-index to ensure it's above the following section */

  img {
    width: 100%;
    max-width: 350px; // Set maximum width for the logo
    filter: drop-shadow(2px 2px 5px #00000061);
  }
`;

const LogoSection = styled(Section)`
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: visible;
  height: 130px;
  margin-bottom: 32px;

  /* background: radial-gradient(circle at 100%, #1d3a6a, black); */
  filter: drop-shadow(10px 10px 12px #0000002c);
  /* max-width: 60%; */

  z-index: -1;

  @media (min-width: 768px) {
    margin-top: calc(var(--nav-height) + 18px);
  }

  /* background: rgb(2, 0, 36);
  background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(29, 58, 106, 1) 80%,
    rgba(29, 58, 106, 1) 100%
  ); */

  background: rgb(49, 85, 137);
  background: linear-gradient(
    90deg,
    rgba(49, 85, 137, 1) 0%,
    rgba(22, 38, 61, 1) 40%,
    rgba(22, 38, 61, 1) 60%,
    rgba(49, 85, 137, 1) 100%
  );

  justify-content: center;
`;

export default Logo;
