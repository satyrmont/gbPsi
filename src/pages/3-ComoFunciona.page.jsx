import React, { useContext } from "react";
import { MobileContext } from "../context/mobileContext.jsx";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers.jsx";

function ComoFunciona() {
  const isMobile = useContext(MobileContext);

  return (
    <Section_ComoFunciona>
      <SectionWrapper>
        <ContentContainer_ComoFunciona id="metodo">
          <Container_ComoFunciona>
            <Title_ComoFunciona>Como funciona?</Title_ComoFunciona>
            <SectionText_ComoFunciona>
              <p>
                Convido você a participar de um vínculo cooperativo envolvendo
                compreensão, confiança e confidencialidade. Elevamos a
                capacidade de canalizar emoções, estruturar o pensamento e
                promover hábitos de saúde e bem-estar.
              </p>
              <p>
                Uma perspectiva mais encorajadora cria o ambiente para atitudes
                saudáveis. Nos livramos de pensamentos contraproducentes visando
                a reestruturação cognitiva.
              </p>
              <p>
                Adotando atitude construtiva e tolerante consigo mesmo, somos
                surpreendidos por uma leitura de realidade mais positiva,
                possível de alcançar desejos e guiar nosso destino.
              </p>

              <p>
                O estilo de vida que surge, alinhado a valores pessoais, está na
                origem da sensação de pertencimeto e satisfação que perseguimos
                e alcançamos juntos.
              </p>
            </SectionText_ComoFunciona>
          </Container_ComoFunciona>
        </ContentContainer_ComoFunciona>
        <ContentContainer_Metodo id="tcc">
          <Container_ComoFunciona>
            <ContentWrapper_Metodo>
              <Title_Metodo>Terapia cognitivo-comportamental</Title_Metodo>
              <SectionText_Metodo>
                <h3>
                  Saúde e bem-estar que ressoam pelo corpo, emoções e
                  pensamentos:
                </h3>
                <p>
                  fundado em tradição filosófica milenar e décadas de observação
                  científica e pesquisa de ponta. A combinação de técnicas da
                  psicologia comportamental e cognitiva em consultório é a
                  referência adotada internacionalmente por mais de 40 anos.
                </p>

                <h3>
                  Revigore o espírito por enfrentamento racional e pensamento
                  consciente:
                </h3>
                <p>
                  recursos e ferramentas passados com transparência convidam o
                  paciente ao aprendizado e participação em seu tratamento,
                  sentindo conquistar independência e finalmente transformar-se
                  em terapeuta de si próprio.
                </p>
              </SectionText_Metodo>
            </ContentWrapper_Metodo>
          </Container_ComoFunciona>
        </ContentContainer_Metodo>
      </SectionWrapper>
    </Section_ComoFunciona>
  );
}

const Section_ComoFunciona = styled(Section)`
  display: flex;
  flex-direction: column;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow-y: hidden;
  }
`;

const Container_ComoFunciona = styled.div`
  padding-top: var(--margin-top-bottom);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: aliceblue; */
`;

// ----------------------- COMO FUNCIONA ------------------------

const ContentContainer_ComoFunciona = styled.div`
  background-color: var(--color_1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  @media (max-width: 768px) {
    padding: 40px 0px;
  }
`;

const SectionText_ComoFunciona = styled(SectionText)`
  width: 90%;
`;

const Title_ComoFunciona = styled(Title)`
  font-size: calc(var(--title-font-size) * var(--title-small-factor));
`;

// ----------------------- TERAPIA ------------------------

const ContentContainer_Metodo = styled.div`
  background-color: white;
  overflow: hidden;
  h3 {
    font-weight: 400;
    /* background-color: antiquewhite; */
  }
  /* max-width: 50%; */
  @media (max-width: 1024px) {
    max-width: 90%;
  }
`;

const ContentWrapper_Metodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;

  @media (max-width: 768px) {
    padding: 40px 0px;
  }

  /* background-color: aliceblue; */
`;

const SectionText_Metodo = styled(SectionText)`
  width: 90%;

  @media (max-width: 1024px) {
    width: 100%;
  }
  /* justify-content: start; */
  /* width: 70%; */
`;

const Title_Metodo = styled(Title)`
  font-size: calc(var(--title-font-size) * var(--title-small-factor));
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: calc(var(--title-font-size) * 0.6);
  }
`;

export default ComoFunciona;
