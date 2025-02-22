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
      <Left>
        <div>
          <h2>Contato:</h2> psc.guido@gmail.com / (11) 94358-0695
        </div>
        <div>
          <h2>Horários:</h2> Segunda a Sábado de 14:00 às 2:00.
        </div>
      </Left>

      <Right>
        <Address>
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4999703139597!2d-46.702186926019245!3d-23.62225946382971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51962673ce1d%3A0xe07b576749314fea!2sLivance%20Market%20Place!5e0!3m2!1sen!2sbr!4v1740260715706!5m2!1sen!2sbr"
          width="600"
          height="450"
          style={{ border: "0", marginTop: "40px" }} // Correct inline style
          allowFullScreen="" // Correct attribute for full screen
          loading="lazy" // Correct loading attribute
          referrerPolicy="no-referrer-when-downgrade" // Correct referrer policy attribute
        ></iframe>
      </Right>
    </Section_Contato>
  );
}

const Section_Contato = styled(Section)`
  background-color: #876785;
  color: white;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    white-space: nowrap;
    font-family: "Roboto", serif;
    font-weight: 100;
    font-style: normal;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
    font-size: clamp(60px, 1dvw, 70px);
  }
`;

const Left = styled.div`
  margin-left: 20px;
`;
const Right = styled.div`
  justify-content: end;
  text-align: end;

  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;
`;

export default Contato;
