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
    <Section_QueEsperar id="resultados">
      <Title_QueEsperar>O que esperar?</Title_QueEsperar>
      <ContentContainer_QueEsperar>
        <Card>
          <h2>Maior otimismo consigo e com o mundo</h2>
          <p>
            Não escolhemos com qual emoção reagir a acontecimentos, mas podemos
            perceber quando demos a ela crédito indevido.
          </p>
        </Card>

        <Card>
          <h2>Capacidade de nomear</h2>

          <p>
            O sofrimento e confusão são maiores quando incapazes de denominar e
            verbalmente descrever. Trazer incômodos para a conversa pode iniciar
            processos de mudança, perspectivas desmotivadoras serão ventiladas e
            você se sentirá acompanhado pelo percurso.
          </p>
        </Card>

        <Card>
          <h2>Autoconfiança</h2>

          <p>
            Sentimentos de inferioridade frequentemente são indevidos e ainda
            assim impedem de aproveitarmos o lado bom de viver. Realize-se
            pessoalmente criando senso próprio.
          </p>
        </Card>

        <Card>
          <h2>Detox tecnológico</h2>
          <p>
            Gastamos com as telas, celulares e computadores, tempo de qualidade
            que passávamos reunidos. Porque repetimos um hábito de que
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
            sua produtividade. Rastreamos o progresso em suas ambições.
          </p>
        </Card>

        <Card>
          <h2>Comportamento Obsessivo-compulsivo (TOC)</h2>
          <p>
            Pensamentos intrusivos, busca de alívio por meio de compras ou
            limpeza, acumular objetos: aprenda a desprender-se.
          </p>
        </Card>
      </ContentContainer_QueEsperar>
    </Section_QueEsperar>
  );
}

const Section_QueEsperar = styled(Section)`
  background-color: var(--color_D2);
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding: var(--margin-top-bottom) 0px;
`;

const ContentContainer_QueEsperar = styled(ContentContainer)`
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: center;
  width: 90%;
  box-sizing: border-box;
  padding: 10px 0px 10px 0px;
  gap: 10px;
  /* background-color: #0000ff56; */

  @media (max-width: 768px) {
    width: var(--content-width);
  }
`;

const Title_QueEsperar = styled(Title)`
  color: white;
`;

const Card = styled.div`
  box-sizing: border-box;
  padding: 10px;
  min-width: 360px;
  height: 130px;
  width: 40%;
  background-color: var(--color_D1);
  min-height: fit-content;

  h2 {
    font-size: calc(var(--title-font-size) * 0.45);
    color: black;
    /* color: white; */
    color: var(--color04);
    white-space: nowrap;
    font-family: var(--title-font);
    font-weight: 300;
    text-decoration-line: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
    margin-bottom: 10px;
  }

  p::first-letter {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color_F1);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
export default QueEsperar;
