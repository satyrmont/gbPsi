import React, { useContext, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { MobileContext } from "../context/mobileContext.jsx";

gsap.registerPlugin(ScrollToPlugin);

function Nav() {
  const buttons = useRef();
  const buttonMenu = useRef();

  const [buttonMenuOpen, setButtonMenuOpen] = useState(false);

  const isMobile = useContext(MobileContext);

  const toggleMenu = () => {
    console.log("toggleMenu called");
    setButtonMenuOpen((prevState) => {
      console.log("prevState:", prevState);
      return !prevState;
    });
  };

  // <--------- ANIMATION WRAPPER START--------->
  useEffect(() => {
    if (isMobile) {
      console.log("Mobile scroll animation activated");

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 120) {
          gsap.to(buttonMenu.current, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.inOut",
          });
        } else {
          gsap.to(buttonMenu.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: "power3.inOut",
          });
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  function scrollToSection(sectionId) {
    gsap.to(window, {
      scrollTo: {
        y: `#${sectionId}`,
        ...(isMobile ? {} : { offsetY: 40 }),
      },
      duration: 0.2, // Adjust the duration as needed
    });
  }

  return (
    <React.Fragment>
      {isMobile ? (
        <ButtonMenu ref={buttonMenu} onClick={toggleMenu}>
          <img
            className="MenuButtonImage"
            type="image/svg+xml"
            src="guidoBittencourt_favicon.svg"
            alt="Dropdown Menu"
          />
          <MenuContent open={buttonMenuOpen}>
            <DrpDwnNavBtn onClick={() => scrollToSection("apresentacao")}>
              Apresentação
            </DrpDwnNavBtn>
            <DrpDwnNavBtn onClick={() => scrollToSection("sobre")}>
              Sobre mim
            </DrpDwnNavBtn>
            <DrpDwnNavBtn onClick={() => scrollToSection("metodo")}>
              Método
            </DrpDwnNavBtn>
            <DrpDwnNavBtn onClick={() => scrollToSection("tcc")}>
              TCC
            </DrpDwnNavBtn>
            <DrpDwnNavBtn onClick={() => scrollToSection("resultados")}>
              Resultados
            </DrpDwnNavBtn>
            <DrpDwnNavBtn onClick={() => scrollToSection("perguntas")}>
              Perguntas
            </DrpDwnNavBtn>
            <DrpDwnNavBtn onClick={() => scrollToSection("contato")}>
              Contato
            </DrpDwnNavBtn>
          </MenuContent>
        </ButtonMenu>
      ) : (
        <NavBar>
          <NavButtonContainer ref={buttons}>
            <NavBtn onClick={() => scrollToSection("apresentacao")}>
              Apresentação
            </NavBtn>
            <NavBtn onClick={() => scrollToSection("sobre")}>Sobre mim</NavBtn>
            <NavBtn onClick={() => scrollToSection("metodo")}>Método</NavBtn>
            <NavBtn onClick={() => scrollToSection("tcc")}>TCC</NavBtn>
            <NavBtn onClick={() => scrollToSection("resultados")}>
              Resultados
            </NavBtn>
            <NavBtn onClick={() => scrollToSection("perguntas")}>
              Perguntas Frequentes
            </NavBtn>
            <NavBtn onClick={() => scrollToSection("contato")}>Contato</NavBtn>
          </NavButtonContainer>
        </NavBar>
      )}
    </React.Fragment>
  );
}

const ButtonMenu = styled.div`
  position: fixed;
  z-index: 1;
  top: 4px;
  right: 4px;
  opacity: 0; /* Start hidden */
  transform: scale(0.8);
  cursor: pointer;
  filter: drop-shadow(2px 2px 5px #00000061);
  & img {
    width: 60px;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

const MenuContent = styled.div`
  /* min-width: 180px; */
  height: fit-content;
  position: absolute;
  top: 70px;
  right: 0;
  background-color: white;
  flex-direction: column;
  display: ${({ open }) => (open ? "flex" : "none")};
`;

const NavBar = styled.div`
  width: 100svw;
  height: var(--nav-height);
  max-height: 60px;
  min-height: 30px;
  position: fixed;
  overflow-x: hidden;
  overflow-y: hidden;
  font-size: 16px;

  filter: drop-shadow(10px 10px 12px #0000002c);

  /* line-height: 20px; */

  top: 0px;
  left: 0px;
  z-index: 10;
  background-color: var(--color_0);

  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  color: #5c5c5c;
`;

const NavButtonContainer = styled.div`
  width: fit-content;
  max-width: 100%;
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  /* background-color: #f0ffff55; */
`;

const NavBtn = styled.div`
  cursor: pointer;
  border: none;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;
  height: 100%;
  padding: 0px 5px 0px 5px;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const DrpDwnNavBtn = styled.div`
  font-size: 18px;
  cursor: pointer;
  border: none;
  vertical-align: middle;
  display: inline-flex;
  align-items: center;

  padding: 8px 4px;
  &:nth-child(odd) {
    background-color: var(--color_0);
  }
`;

export default Nav;
