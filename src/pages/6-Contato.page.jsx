import React, { useContext } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  ContentContainer,
} from "../style/PageContainers.jsx";
import { MobileContext } from "../context/mobileContext.jsx";

import OutgoingMailOutlineRounded from "../components/OutgoingMailOutlineRounded.jsx";
import TelephoneOutbound from "../components/TelephoneOutbound.jsx";

function Contato() {
  const isMobile = useContext(MobileContext);

  return (
    <Section_Contato id="contato">
      <Address>
        <AddressText>
          <ContactHoursColumn>
            <div>
              <h2>Contato:</h2>
              <LinkContainer>
                <a href="mailto:psc.guido@gmail.com">
                  <OutgoingMailOutlineRounded />
                  psc.guido@gmail.com
                </a>
              </LinkContainer>
              <LinkContainer>
                <a href="tel:+5511920900068">
                  <TelephoneOutbound />
                  (11) 92090-0068
                </a>
              </LinkContainer>
            </div>
            <div>
              <h2>Horários:</h2>
              Segunda-feira a Sábado
              <br />
              14:00 às 21:00.
            </div>
          </ContactHoursColumn>
          <AddressColumn>
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
          </AddressColumn>
        </AddressText>
        <Section_Map>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2865.067972983952!2d-46.697196999999996!3d-23.6364665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50efd51d9e15%3A0xbb9db00bf843320!2sRua%20Alexandre%20Dumas%2C%20495%20-%20Santo%20Amaro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004717-000%2C%20Brazil!5e0!3m2!1sen!2sus!4v1742523869800!5m2!1sen!2sus"
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
  line-height: 1.5rem;
  filter: drop-shadow(10px -10px 6px #00000016);
  overflow-x: hidden; /* Already present, good */
  width: 100%; /* Ensure it fits viewport */

  h2 {
    font-family: var(--title-font);
    font-style: normal;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
    font-size: calc(var(--title-font-size) * 0.6);
    margin-bottom: 12px;
    white-space: normal; /* Allow wrapping to prevent overflow */
  }

  svg {
    transform: scale(1.2);
    margin-right: 8px;
    flex-shrink: 0; /* Prevent SVG from shrinking */
  }

  a {
    text-decoration: underline;
    white-space: normal; /* Ensure email/phone wrap */
    word-break: break-word; /* Break long words if needed */
  }
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  width: 100%; /* Ensure links don’t exceed container */
`;

const Address = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box; /* Include padding/margins in width */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AddressText = styled.div`
  margin: 20px;
  width: 30%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 10px; /* Increased for better spacing */
    width: calc(100% - 20px); /* Account for margins */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: nowrap; /* Ensure columns stay side by side */
  }
`;

const ContactHoursColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    flex: 1;
    min-width: 0;
    max-width: 50%; /* Cap width to prevent overflow */
  }
`;

const AddressColumn = styled.div`
  @media (max-width: 768px) {
    flex: 1;
    min-width: 0;
    max-width: 50%; /* Cap width to prevent overflow */
  }
`;

const Section_Map = styled.div`
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    height: 500px;
    overflow: hidden;
  }

  iframe {
    max-width: 100%; /* Ensure iframe doesn’t exceed container */
  }
`;

const Endereco = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  white-space: normal;
  word-break: break-word; /* Break long address lines if needed */
`;

export default Contato;
