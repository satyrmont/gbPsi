import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { WhatsappIcon } from "../components/WhatsApp.component";

function MainLayout({ children }) {
  const layoutRef = useRef(null); // Ref for MainLayout container
  const buttonRef = useRef(null); // Ref for WhatsApp button

  useEffect(() => {
    const handleScroll = () => {
      if (!layoutRef.current || !buttonRef.current) return;

      // Calculate the bottom of MainLayout (absolute position in document)
      const layoutBottom =
        layoutRef.current.getBoundingClientRect().bottom + window.scrollY;
      // Calculate the bottom of the viewport
      const windowBottom = window.scrollY + window.innerHeight;

      // If viewport bottom is past MainLayout's bottom, anchor button to MainLayout
      if (windowBottom > layoutBottom) {
        buttonRef.current.style.position = "absolute";
        buttonRef.current.style.bottom = "15px"; // Keep consistent spacing
        buttonRef.current.style.top = "auto"; // Clear top positioning
      } else {
        // Otherwise, keep button fixed to viewport
        buttonRef.current.style.position = "fixed";
        buttonRef.current.style.bottom = "15px";
        buttonRef.current.style.top = "auto";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LayoutContainer ref={layoutRef}>
      {children}
      <WhatsAppButton
        ref={buttonRef}
        target="_blank"
        href="https://wa.me/5511943580695"
        className="whatsapp-button"
      >
        <WhatsappIcon />
        <i className="fab fa-whatsapp"></i>
      </WhatsAppButton>
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  position: relative; /* Anchor point for absolute-positioned button */
  min-height: 100vh; /* Ensure layout has height */
`;

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 15px;
  right: 15px;
  z-index: 0;
  background-color: #25d366;
  border-radius: 50px;
  color: #ffffff;
  text-decoration: none;
  width: 50px;
  height: 50px;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 1);
  box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 1);
  animation: effect 5s infinite ease-in;
  transition: position 0.2s ease; /* Smooth transition for position change */
`;

export default MainLayout;
