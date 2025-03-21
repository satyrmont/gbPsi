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
    <Section_Contato id="contato">
      <Address>
        <AddressText>
          <div>
            <h2>Contato:</h2>
            <a href="mailto: psc.guido@gmail.com"> psc.guido@gmail.com</a>
            <br />
            <a href="tel:+5511943580695">(11) 94358-0695</a>
          </div>
          <div>
            <h2>Horários:</h2> Segunda-feira a Sábado
            <br />
            14:00 às 21:00.
          </div>
          <div>
            <h2>Endereço:</h2>
            <Endereco>
              Rua Alexandre Dumas, 495
              <br /> Santo Amaro
              <br />
              São Paulo
              <br />
              SP, 04717-000
            </Endereco>
          </div>
        </AddressText>
        <Section_Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2865.067972983952!2d-46.697196999999996!3d-23.6364665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50efd51d9e15%3A0xbb9db00bf843320!2sRua%20Alexandre%20Dumas%2C%20495%20-%20Santo%20Amaro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004717-000%2C%20Brazil!5e1!3m2!1sen!2sus!4v1742523869800!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: "0" }}
            allowFullScreen="no"
            loading="fast"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Section_Map>
      </Address>
    </Section_Contato>
  );
}

const Section_Contato = styled(Section)`
  background-color: var(--color_0);

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  box-sizing: border-box;

  margin-bottom: 0px;
  line-height: 1.2rem;

  filter: drop-shadow(10px -10px 6px #00000016);

  h2 {
    white-space: nowrap;
    font-family: var(--title-font);
    font-style: normal;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
    font-size: calc(var(--title-font-size) * 0.6);

    margin-bottom: 12px;
  }
`;

const Address = styled.div`
  /* margin-right: 40px; */
  width: 100%;

  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddressText = styled.div`
  margin: 20px;
  width: 30%;
  max-width: 600px;
  min-width: 300px;
  white-space: nowrap;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100dvw;
  }
`;

const Section_Map = styled.div`
  width: 100%;
  /* height: 100%; */
`;

const Endereco = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
`;
export default Contato;
