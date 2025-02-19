import React, { useRef, useState, useEffect, useContext } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";
import { MobileContext } from "../context/mobileContext";

function Intro() {
  const text = useRef();
  const isMobile = useContext(MobileContext);

  return (
    <IntroSection>
      <Title>A cura pela fala e o convite a se interessar</Title>
    </IntroSection>
  );
}

const IntroSection = styled(Section)`
  background-color: #e5d26a;
  margin-top: 10px;
`;

export default Intro;
