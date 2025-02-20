import React, { useContext, useRef } from "react";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";
import { styled } from "styled-components";
import { MobileContext } from "../context/mobileContext";

function Trajetoria() {
  const main = useRef();
  const title = useRef();

  return (
    <Section_SobreMim>
      <ContentContainer>
        <Title>Sobre Mim</Title>
        <p>
          Me chamo Guido, psicólogo pela Universidade de São Paulo (USP) e
          especialista em terapia comportamental e cognitiva pelo Instituto de
          Psiquiatria (IPq-FMUSP). Desenvolvi experiência em atendimento e
          pesquisa no Hospital das Clínicas, maior hospital da América Latina.
        </p>
        <br />
        <p>
          Concluí o mestrado pela USP na área de neurociências, com passagem
          pelo Charité, maior hospital da Alemanha. Representei o Brasil em
          publicações científicas e no Congresso das Federações Europeias de
          Neurociência (FENS 2018).
        </p>
      </ContentContainer>
    </Section_SobreMim>
  );
}

const Section_SobreMim = styled(Section)`
  /* background-color: #7ca6d; */

  margin-top: 18px;
  background-color: #adbbd1;
`;

export default Trajetoria;
