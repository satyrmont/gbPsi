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
      <ContentContainer_ComoFunciona>
        <Title_ComoFunciona>Como funciona?</Title_ComoFunciona>
        <SectionText_ComoFunciona>
          <p>
            Convido você a participar de um vínculo cooperativo envolvendo
            compreensão, confiança e confidencialidade. Elevamos a capacidade de
            canalizar emoções, estruturar o pensamento e promover hábitos de
            saúde e bem-estar.
          </p>
          <p>
            Uma perspectiva mais encorajadora cria o ambiente para atitudes
            saudáveis. Nos livramos de pensamentos contraproducentes visando
            areestruturação cognitiva.
          </p>
          <p>
            Adotando atitude construtiva e tolerante consigo mesmo, somos
            surpreendidos por uma leitura de realidade mais positiva, possível
            de alcançar desejos e guiar nosso destino.
          </p>

          <p>
            O estilo de vida que surge, alinhado a valores pessoais, está na
            origem da sensação de pertencimeto e satisfação que perseguimos e
            alcançamos juntos.
          </p>
        </SectionText_ComoFunciona>
      </ContentContainer_ComoFunciona>
      <ContentContainer_Metodo>
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
              Saúde e bem-estar transmitidos pelo corpo, emoções e pensamentos:
              apoiada em tradição filosófica milenar e décadas de observação e
              pesquisa científica de ponta, a combinação de técnicas da
              Psicologia comportamental e cognitiva em consultório é o
              referencial teórico preferencial há mais de 40 anos.{" "}
            </p>

            <p>
              Revigore o espírito por enfrentamento racional e pensamento
              consciente: recursos e ferramentas compartilhados com
              transparência de objetivos convidam o paciente a aprender o
              tratamento e participar, e ganhando independência, sentir que e
              transformou-se em terapeuta de si próprio.
            </p>
          </SectionText_Metodo>
        </ContentWrapper_Metodo>
      </ContentContainer_Metodo>
    </Section_ComoFunciona>
  );
}

const Section_ComoFunciona = styled(Section)`
  color: white;
  background-color: var(--color15);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* position: relative; */
`;
const ContentContainer_ComoFunciona = styled(ContentContainer)`
  position: relative;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;

  &::before {
    content: "";
    position: absolute;

    right: 80px;
    top: -3dvw;

    width: 400px;
    height: 400px;
    background-image: url("escherHands.png");
    mix-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: rotate(-30deg) scale(-150%, 150%);
    /* transform: rotate(-30deg) scale(-225%, 225%); */
    opacity: 0.8;
  }
`;

const SectionText_ComoFunciona = styled(SectionText)`
  font-size: calc(var(--text-font-size) * 0.9);
  max-width: 50%;
  display: block;
  column-count: 2;
  p {
    break-inside: avoid;
  }
`;

const Title_ComoFunciona = styled(Title)`
  width: 50dvw;
  color: white;
  font-size: 3vi;
`;

const ContentContainer_Metodo = styled(ContentContainer)`
  width: 100%;
  background-color: var(--color14);
  align-items: end;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  padding: 10px;
  &::before {
    content: "";
    position: absolute;

    left: 20px;
    /* top: -3dvw; */

    width: 400px;
    height: 400px;
    max-height: 90%;
    background-image: url("labyrinth.png");
    mix-blend-mode: multiply;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transform: scale(200%);
    /* transform: rotate(-30deg) scale(-225%, 225%); */
    opacity: 0.8;
  }
`;

const ContentWrapper_Metodo = styled.div`
  display: flex;
  flex-direction: column;
  /* background-color: #9b691e; */
  text-align: center;
  align-items: center;
  width: 50dvw;
  overflow: hidden;
`;

const SectionText_Metodo = styled(SectionText)`
  display: block;
  text-align: start;
  font-size: calc(var(--text-font-size) * 0.9);
  column-count: 2;
  column-gap: 1rem;
  max-width: 80%;
  /* background-color: #62451a; */
  justify-content: start;
  p {
    break-inside: avoid;
  }
`;

const Title_Metodo = styled(Title)`
  display: inline-block;
  color: white;
  font-size: 3vi;
  /* background-color: #62451a75; */
`;

export default ComoFunciona;
