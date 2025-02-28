import React, { useEffect, useState, useRef, useContext } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  ContentContainer,
} from "../style/PageContainers.jsx";
import { fetchData, formatCurrency } from "../service/getGoogleSheets.jsx";
import { MobileContext } from "../context/mobileContext.jsx";

function Contato() {
  const isMobile = useContext(MobileContext);

  return (
    <Section_Contato>
      <Address>
        <div>
          <h2>Contato:</h2> psc.guido@gmail.com / (11) 94358-0695
        </div>
        <div>
          <h2>Horários:</h2> Segunda a Sábado de 14:00 às 2:00.
        </div>
        <div style={{ textAlign: "start" }}>
          <h2>Endereço:</h2>
          Livance Market Place Torre II
          <br />
          Av. Dr. Chucri Zaidan, 940 - 3° andar
        </div>
        <div>
          Chácara Santo Antônio. São Paulo
          <br /> SP, 04583-110
          <br />
        </div>
      </Address>
    </Section_Contato>
  );
}

const Section_Contato = styled(Section)`
  background-color: var(--color_G3);
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100dvw;
  /* padding-left: 100px; */
  /* padding-right: 100px; */

  margin-bottom: 0px;
  h2 {
    white-space: nowrap;
    font-family: "Roboto", serif;
    font-weight: 100;
    font-style: normal;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
    font-size: clamp(60px, 1dvw, 70px);
    margin-bottom: 16px;
  }
`;

const Address = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export default Contato;
