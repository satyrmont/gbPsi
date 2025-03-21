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
        width: 400,
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
    if (window.innerWidth < 768) {
      const smallerScreenAnimation = gsap.fromTo(
        ".logo",
        { width: 150, opacity: 0 },
        {
          width: 300,
          opacity: 1,
          duration: 2,
          ease: "back",
        }
      );
      gsap.to(".logo", { clearProps: "all" });
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
    <LogoSection id="apresentacao">
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
    max-width: 650px; // Set maximum width for the logo
    filter: drop-shadow(2px 2px 5px #00000061);
    @media (max-width: 768px) {
      width: 80%;
    }
  }
`;

const LogoSection = styled(Section)`
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: visible;
  height: 150px;

  filter: drop-shadow(10px 10px 12px #0000002c);

  z-index: 3;

  margin-top: calc(var(--nav-height));
  @media (max-width: 768px) {
    margin-top: 0px;
    height: 120px;
    /* align-items: start; */
  }

  background: var(--color_A3);

  justify-content: center;
`;

export default Logo;
