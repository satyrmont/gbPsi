import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import {
  Section,
  SectionText,
  Title,
  ContentContainer,
} from "../style/PageContainers";

function PerguntasFrequentes() {
  const main = useRef();
  const title = useRef();

  const toggleContent = (e) => {
    const content = e.target.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  };

  return (
    <Section_PerguntasFrequentes ref={main}>
      <Title ref={title}>Perguntas Frequentes</Title>
      <SectionContent>
        <CollapsibleButton onClick={toggleContent}>
          <h2>Quanto tempo durará a psicoterapia?</h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            <p>
              Conceitualizar o caso, ou seja, traduzi-lo para linguagem teórica
              leva até 6 semanas. Pode levar até 6 meses para pontualmente
              elaborar questões em formato breve. Este dinamismo é desejável
              quando comparamos outras formas de psicoterapia.
            </p>

            <p>
              Contudo, antecipar o final do tratamento ao sinal das primeiras
              melhoras oferece o risco de recaídas antes que seja cultivada a
              independência.
            </p>

            <p>
              O final de processo terapêutico deve reconhecer a autonomia do
              paciente e suas necessidades, ou pode resultar no encaminhamento
              para um novo profissional.
            </p>
          </SectionText>
        </Content>

        <CollapsibleButton onClick={toggleContent}>
          <h2>Qual referencial teórico você segue?</h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            Minha prática baseia-se em terapias contextuais, como Terapia de
            Aceitação e Compromisso (ACT), Psicoterapia Baseada em Processos
            (PBT) e Psicoterapia Analítica Funcional (FAP), todas são diferentes
            modalidades de terapias cognitivo-comportamentais (TCC).
          </SectionText>
        </Content>

        <CollapsibleButton onClick={toggleContent}>
          <h2>Em que quadros você pode me ajudar?</h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            <ul>
              <li>Ansiedade, depressão e sofrimento psíquico</li>
              <li>Luto e ansiedade de separação</li>
              <li>Dificuldades acadêmicas e laborais</li>
              <li>Relações pessoais e do trabalho</li>
              <li>Relações afetivas, separações e felicidade conjugal</li>
              <li>Terapia para a terceira idade</li>
              <li>Tabagismo, alcoolismo, consumo de substâncias</li>
              <li>Apostas ou jogo online (ludomania)</li>
              <li>Transtorno Obsessivo-compulsivo (TOC)</li>
              <li>Transtornos do sono</li>
              <li>Transtornos psiquiátricos do humor ou personalidade</li>
              <li>Fobias sociais e específicas</li>
              <li>Síndrome do pânico</li>
              <li>Transtornos alimentares</li>
              <li>Transtornos do impulso, jogos de azar, e comer emocional</li>
              <li>Baixa concentração</li>
              <li>Dependência de internet e tecnologia</li>
              <li>Mudanças de vida como: troca de residência e trabalho</li>
              <li>
                Dificuldades de inserção, adaptação a outro país e cultura
              </li>
            </ul>
            Resposta 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SectionText>
        </Content>
        <CollapsibleButton onClick={toggleContent}>
          <h2>
            A conversa com um terapeuta não é igual com qualquer outra pessoa?
          </h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            <p>
              Ao pedir conselho a conhecidos e amigos, obtemos opiniões
              influenciadas pelo que já conhecem e antecipam de nós. Isto é
              desejável e muitas vezes a alternativa mais agradável!
            </p>

            <p>
              Já o psicólogo te auxilia a romper padrões contraproducentes e
              nocivos dos quais não nos demos conta ou relutamos em abandonar. A
              dedicação necessária para superar desconfortos, mudar hábitos e
              reconsiderar nossos sentimentos é mais constante quando
              acompanhada por uma opinião profissional independente.
            </p>
          </SectionText>
        </Content>

        <CollapsibleButton onClick={toggleContent}>
          <h2>
            No que a conversa com um terapeuta é diferente daquela com o médico?
          </h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            <p>
              Formas de psicoterapia que buscam intervir sobre o bem-estar
              emoções e reconhecer padrões de pensamento também possuem validade
              científica e recursos próprios, como: técnicas de meditação,
              respiração e atenção plena (mindfulness) para promover o
              relaxamento e a mudança de consciência.
            </p>

            <p>
              Uma equipe multidisciplinar atenta e colaborativa é sempre capaz
              de encontrar um maior leque de decisões informadas.
            </p>
          </SectionText>
        </Content>

        <CollapsibleButton onClick={toggleContent}>
          <h2>O que posso esperar do nosso trabalho?</h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            <p>
              Em uma conversa inicial avaliamos como a Psicologia poderia te
              ajudar. A partir da conceitualização de caso, trabalhamos
              conjuntamente em sua intervenção ou na necessidade de
              encaminhamento para um profissional dedicado a isto.
            </p>
          </SectionText>
        </Content>

        <CollapsibleButton onClick={toggleContent}>
          <h2>Você atende convênios?</h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            <p>
              No momento, o atendimento é apenas para particulares. Ainda assim,
              a nota fiscal emitida pode ser usada para a operadora reembolsar o
              valor da consulta.
            </p>
          </SectionText>
        </Content>
        <CollapsibleButton onClick={toggleContent}>
          <h2>Qual o formato da psicoterapia?</h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            Sessões de 50 minutos, geralmente uma vez por semana.
          </SectionText>
        </Content>
        <CollapsibleButton onClick={toggleContent}>
          <h2>Você oferece atendimento em outro idioma?</h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            Além de português, ofereço atendimento em inglês e espanhol.
          </SectionText>
        </Content>

        <CollapsibleButton onClick={toggleContent}>
          <h2>Você atende online?</h2>
        </CollapsibleButton>
        <Content>
          <SectionText>
            Existem conveniências tanto em consultório quanto online.
            Consideramos suas possibilidades e preferências para adotar o
            formato mais eficaz.
          </SectionText>
        </Content>
      </SectionContent>
    </Section_PerguntasFrequentes>
  );
}

const Section_PerguntasFrequentes = styled(Section)`
  background-color: #f3e49e;
  display: flex;
  flex-direction: column;
`;

const SectionContent = styled(ContentContainer)`
  width: 100%;

  display: flex;
  /* flex-flow: wrap; */
  justify-content: space-between;
  /* flex-direction: column; */

  /* &::after {
    margin-bottom: 12px;
  } */
`;

const CollapsibleButton = styled.button`
  background-color: ${({ isOpen }) => (isOpen ? "#5C9210" : "#BC4219")};
  color: white;
  cursor: pointer;
  padding: 2px 18px 2px 18px;
  width: 40%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  text-align: end;

  transition: background-color 0.4s ease, transform 0.3s ease;
  margin-top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Pseudo-element for plus/minus */
  &::before {
    content: "${({ isOpen }) => (isOpen ? "−" : "+")}";
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    transition: transform 0.3s ease;
  }
`;

const Content = styled.div`
  /* margin-top: -12px; */
  font-size: 1rem;
  max-width: 50%;
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
`;

export default PerguntasFrequentes;
