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

  return <div></div>;
}

export default Intro;
