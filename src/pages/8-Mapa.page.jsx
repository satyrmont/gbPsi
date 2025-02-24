import React, { useContext } from "react";
import { ContentContainer, Section } from "../style/PageContainers";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { MobileContext } from "../context/mobileContext";

function Mapa() {
  const isMobile = useContext(MobileContext);
  return (
    <Section_Map>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4999703139597!2d-46.702186926019245!3d-23.62225946382971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51962673ce1d%3A0xe07b576749314fea!2sLivance%20Market%20Place!5e0!3m2!1sen!2sbr!4v1740260715706!5m2!1sen!2sbr"
        width="100%"
        height="300"
        style={{ border: "0", marginTop: "40px" }} // Correct inline style
        allowFullScreen="" // Correct attribute for full screen
        loading="lazy" // Correct loading attribute
        referrerPolicy="no-referrer-when-downgrade" // Correct referrer policy attribute
      ></iframe>
    </Section_Map>
  );
}

const Section_Map = styled.div`
  width: 100vw;
  margin: 0px;
`;

export default Mapa;
