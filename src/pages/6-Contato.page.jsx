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
            <h2>Contato:</h2> psc.guido@gmail.com
            <br />
            (11) 94358-0695
          </div>
          <div>
            <h2>Horários:</h2> Segunda a Sábado de 14:00 às 21:00.
          </div>
          <div>
            <h2>Endereço:</h2>
            <Endereco>
              <div style={{ textAlign: "start" }}>
                Livance Market Place Torre II
                <br />
                Av. Dr. Chucri Zaidan, 940 - 3° andar
              </div>
              <div>
                Chácara Santo Antônio.
                <br />
                São Paulo
                <br />
                SP, 04583-110
              </div>
            </Endereco>
          </div>
        </AddressText>
        <Section_Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4999703139597!2d-46.702186926019245!3d-23.62225946382971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51962673ce1d%3A0xe07b576749314fea!2sLivance%20Market%20Place!5e0!3m2!1sen!2sbr!4v1740260715706!5m2!1sen!2sbr"
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
  width: 60%;
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
  :last-child {
    text-align: end;
  }
`;
export default Contato;
