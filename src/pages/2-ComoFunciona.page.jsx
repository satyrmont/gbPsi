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
        <ContentContainer_ComoFunciona>
          <Container_TwoColumn>
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
                areestruturação cognitiva.
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
          </Container_TwoColumn>
        </ContentContainer_ComoFunciona>
        <ContentContainer_Metodo>
          <Container_TwoColumn>
            <ContentWrapper_Metodo>
              <Title_Metodo>Terapia cognitivo comportamental</Title_Metodo>
              <SectionText_Metodo>
                <p>
                  Método científico e escolha prioritária para promoção de saúde
                  mental: prestígio adquirido ao ser adaptável para diferentes
                  vivências e necessidades do público, e comunicar-se
                  cientificamente com a área da saúde por meio de resultados
                  concretos.
                </p>

                <p>
                  Padrão-ouro, alternativo ou conjunto à medicação psiquiátrica:
                  tratamento consagrado para ansiedade, depressão, transtornos
                  psiquiátricos e de personalidade, conflitos pessoais.
                </p>

                <p>
                  Saúde e bem-estar transmitidos pelo corpo, emoções e
                  pensamentos: apoiada em tradição filosófica milenar e décadas
                  de observação e pesquisa científica de ponta, a combinação de
                  técnicas da Psicologia comportamental e cognitiva em
                  consultório é o referencial teórico preferencial há mais de 40
                  anos.
                </p>

                <p>
                  Revigore o espírito por enfrentamento racional e pensamento
                  consciente: recursos e ferramentas compartilhados com
                  transparência de objetivos convidam o paciente a aprender o
                  tratamento e participar, e ganhando independência, sentir que
                  e transformou-se em terapeuta de si próprio.
                </p>
              </SectionText_Metodo>
            </ContentWrapper_Metodo>
          </Container_TwoColumn>
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
  width: 100vw;
  display: flex;
  flex-direction: row;
`;

const Container_TwoColumn = styled.div`
  padding-top: var(--margin-top-bottom);
  /* width: 50%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* background-color: aliceblue; */
`;

// ----------------------- COMO FUNCIONA ------------------------

const ContentContainer_ComoFunciona = styled(ContentContainer)`
  background-color: var(--color_1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const SectionText_ComoFunciona = styled(SectionText)`
  display: block;
  column-count: 2;
  font-size: calc(var(--text-font-size) * var(--text-small-factor));

  width: 70%;

  p {
    break-inside: avoid;
  }
`;

const Title_ComoFunciona = styled(Title)`
  font-size: calc(var(--title-font-size) * var(--title-small-factor));
  text-decoration-line: underline;
  text-decoration-thickness: 1.6px;
  text-underline-offset: 5px;
`;

// ----------------------- TERAPIA ------------------------

const ContentContainer_Metodo = styled(ContentContainer)`
  background-color: white;
`;

const ContentWrapper_Metodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: start;
  /* background-color: aliceblue; */
`;

const SectionText_Metodo = styled(SectionText)`
  display: block;
  text-align: start;

  column-count: 2;
  column-gap: 1rem;
  font-size: calc(var(--text-font-size) * var(--text-small-factor));

  justify-content: start;
  width: 70%;
`;

const Title_Metodo = styled(Title)`
  font-size: calc(var(--title-font-size) * var(--title-small-factor));
  display: inline-block;
  text-decoration-line: underline;
  text-decoration-thickness: 1.6px;
  text-underline-offset: 5px;
`;

export default ComoFunciona;
