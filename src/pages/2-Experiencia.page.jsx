import React, { useRef, useState, useEffect, useContext } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";
import { MobileContext } from "../context/mobileContext";

function Experiencia() {
  const text = useRef();
  const isMobile = useContext(MobileContext);

  return (
    <Section_Experiencia id="sobre">
      <ContentContainer_Experiencia>
        <ContentWrapper_ExperienciaAndPortrait>
          <PortraitSection>
            <ContainerPortraitAndLinks>
              <PortraitContainer>
                <Portrait src="portrait01.jpeg" />
              </PortraitContainer>
              <Links>
                <LinkButton>
                  <h2>Currículo de pesquisador</h2>
                  <Icon_ExteriorLink />
                </LinkButton>

                <Publicacoes>
                  <h2 style={{ marginRight: "6px" }}>Publicações:</h2>
                  <div>
                    <LinkButton>
                      1<Icon_ExteriorLink />
                    </LinkButton>
                    <LinkButton>
                      2<Icon_ExteriorLink />
                    </LinkButton>
                  </div>
                </Publicacoes>
              </Links>
            </ContainerPortraitAndLinks>
          </PortraitSection>
          <ContentWrapper_Experiencia>
            <Title_Experiencia>Experiência</Title_Experiencia>
            <SectionText_Experiencia>
              <p>
                Me chamo Guido Bittencourt, sou psicólogo pela Universidade de
                São Paulo (USP) e especialista em terapia comportamental e
                cognitiva pelo Instituto de Psiquiatria (IPq-FMUSP). Adquiri
                experiência em atendimento no Hospital das Clínicas, maior
                hospital da América Latina.
              </p>
              <p>
                Constatei que estava na profissão certa ao me deparar no jornal
                sobre médicos que “prescrevem” livros como forma de melhorar a
                saúde e lidar com as emoções: “‘A montanha mágica’ (Thomas Mann)
                para doenças do pulmão e ‘Anna Karenina’ (Leon Tolstói) contra
                dores de dente”, dizia a manchete.
              </p>

              <p>
                Narrar a própria história e encontrar correspondência com arte
                são capacidades humanas fundamentais, nos fazem sentir
                acompanhados e encontrar saídas para a existência.
              </p>

              <p>
                Concluí o mestrado pela USP na área de neurociências.
                Representei o Brasil em publicações científicas internacionais e
                no Congresso das Federações Europeias de Neurociência (FENS
                2018). Residi como pesquisador visitante no Charité, maior
                hospital da Alemanha.
              </p>
            </SectionText_Experiencia>
          </ContentWrapper_Experiencia>
        </ContentWrapper_ExperienciaAndPortrait>
      </ContentContainer_Experiencia>
    </Section_Experiencia>
  );
}

const Section_Experiencia = styled(Section)`
  width: 100%;
  background-color: var(--color_0);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const ContentContainer_Experiencia = styled(ContentContainer)`
  box-sizing: border-box;
  height: fit-content;
`;

const ContentWrapper_Experiencia = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
  margin-left: var(--margin-top-bottom);
  height: 100%;
`;

const ContentWrapper_ExperienciaAndPortrait = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const SectionText_Experiencia = styled(SectionText)`
  p {
    break-inside: avoid;
  }
`;

const Title_Experiencia = styled(Title)``;

const PortraitSection = styled.div`
  /* color: #000000a9; */
  height: fit-content;
  /* background-color: var(--color_1); */

  box-sizing: border-box;
  padding: 10px;
  border-radius: 1%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* font-size: clamp(18px, 2vw, 20px); */

  /* filter: drop-shadow(10px 10px 20px #00000031); */
`;

const ContainerPortraitAndLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Links = styled.div`
  font-size: 1rem;
  min-height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LinkButton = styled.button`
  font: var(--title-font);
  font-weight: 400;
  text-decoration: none;
  border-radius: 5px;
  border: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* padding: 6px; */

  &:hover {
    cursor: pointer;
    background-color: var(--color_1);
  }

  h2 {
    text-align: start;
  }
`;

const PortraitContainer = styled.div`
  position: relative;
  height: 15rem;
  width: 15rem;
  overflow: hidden;
  border-radius: 50%;
  display: flex;

  margin: 10px;
  filter: drop-shadow(10px 10px 20px #00000031);
`;

const Portrait = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

const Publicacoes = styled.div`
  display: inline flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    & {
      gap: 20px;
    }
  }
`;

const StyledIcon = styled.svg`
  fill: var(--color11);
  /* margin-right: 5px; */

  /* background-color: green; */
`;

const Icon_ExteriorLink = () => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="black"
  >
    <path
      fill="none"
      stroke="black"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.5"
      d="M11 4H4v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15L20 4m-5 0h5v5"
    />
  </StyledIcon>
);
const Icon_ExteriorArticle = () => (
  <StyledIcon xmlns="http://www.w3.org/2000/svg">
    <path d="M10 17h4v-2h-4zm0-4h7v-2h-7zM7 9h10V7H7zm-.375 13q-1.975 0-3.363-1.388T1.875 17.25q0-1.425.738-2.55T4.55 13H2v-2h6v6H6v-2.425q-.925.2-1.525.95t-.6 1.725q0 1.15.812 1.95t1.938.8zM10 21v-2h9V5H5v4H3V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z" />
  </StyledIcon>
);

export default Experiencia;
