import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";

function QueEsperar() {
  const main = useRef();
  const title = useRef();

  return (
    <Section_QueEsperar>
      <Title_QueEsperar>O que esperar?</Title_QueEsperar>
      <ContentContainer_QueEsperar>
        <Card>
          <h2>Maior otimismo consigo e o mundo</h2>
          <p>
            Não escolhemos com qual emoção reagir a acontecimentos, mas podemos
            perceber quando demos crédito indevido a ela.
          </p>
        </Card>

        <Card>
          <h2>Capacidade de nomear</h2>

          <p>
            O sofrimento e confusão são maiores quando incapazes de denominar e
            descrever verbalmente. Trazer incômodos para a conversa poderá
            iniciar processos de mudança. Você se sentirá acompanhado e
            ventilará suas perspectivas pelo percurso.
          </p>
        </Card>

        <Card>
          <h2>Autoconfiança</h2>

          <p>
            Sentimentos de inferioridade frequentemente são indevidos e ainda
            assim impedem aproveitarmos o lado bom de viver. Realize-se
            pessoalmente criando senso próprio durante nossa caminhada.
          </p>
        </Card>

        <Card>
          <h2>Detox tecnológico</h2>
          <p>
            Gastamos com as telas, celulares e computadores tempo de qualidade
            que passaríamos reunidos. Porque repetimos um hábito de que
            gostaríamos de nos livrar? Quanto tempo é demais para se passar
            conectado?
          </p>
        </Card>

        <Card>
          <h2>Luto</h2>
          <p>
            A ausência de um ente querido é algo para que não nos preparamos.
            Vamos adquirir dimensão do trabalho de luto e o respeito por sua
            duração. E recobrar controle de sua vida em respeito a si próprio e
            à memória de conhecidos.
          </p>
        </Card>

        <Card>
          <h2>Rupturas e mudanças vitais</h2>
          <p>
            Uma promoção no trabalho, uma mudança de país ou de endereço são
            iniciadores de consequências e resultados que não previmos
            inicialmente. Teremos em conta riscos calculados e decisões
            ponderadas.
          </p>
        </Card>

        <Card>
          <h2>Progressão de carreira</h2>
          <p>
            Independência profissional e financeira são muito valorizados.
            Equilibre-se com estudos, melhore o ambiente de trabalho e atinja
            sua produtividade. Perseguimos e rastreamos progressos em suas
            ambições.
          </p>
        </Card>

        <Card>
          <h2>Comportamento Obsessivo-compulsivo (TOC)</h2>
          <p>
            Pensamentos intrusivos, busca de alívio por meio de compras e
            limpeza, acumular objetos: aprenda a se desprender.
          </p>
        </Card>
      </ContentContainer_QueEsperar>
    </Section_QueEsperar>
  );
}

const Section_QueEsperar = styled(Section)`
  background-color: #bc4219;
  display: flex;
  flex-direction: column;
  /* color: white; */
`;

const ContentContainer_QueEsperar = styled(ContentContainer)`
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  width: 100%;
`;

const Title_QueEsperar = styled(Title)`
  color: white;
`;

const Card = styled.div`
  padding: 10px;
  margin-bottom: 2dvw;
  min-width: 30%;
  max-width: 45%;
  width: clamp();
  background-color: aliceblue;

  h2 {
    font-size: calc(var(--title-font-size) * 0.3);
    color: black;
    white-space: nowrap;
    font-family: "Roboto", serif;
    font-weight: 300;
    font-style: normal;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    margin-bottom: 10px;
  }
  p::first-letter {
    font-size: 1.2rem;
    font-weight: bold;
    color: brown;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default QueEsperar;
