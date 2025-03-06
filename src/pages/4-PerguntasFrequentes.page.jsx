import React, { useState, useRef } from "react";
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

  const [isOpen, setIsOpen] = useState(0);

  const toggleContent = (e) => {
    const button = e.target;
    const content = button.nextElementSibling;

    // Get all question buttons
    const allButtons = button.closest("section").querySelectorAll("button");
    // Close all buttons (hide all content)
    allButtons.forEach((btn) => {
      const btnContent = btn.nextElementSibling;
      if (btn !== button) {
        btn.setAttribute("data-open", "false");
        btnContent.style.display = "none";
      }
    });

    // Toggle the clicked button's content
    if (button.getAttribute("data-open") === "true") {
      button.setAttribute("data-open", "false");
      content.style.display = "none";
    } else {
      button.setAttribute("data-open", "true");
      content.style.display = "block";
    }
  };

  return (
    <Section_PerguntasFrequentes ref={main}>
      <Title_Perguntas ref={title}>Perguntas Frequentes</Title_Perguntas>
      <SectionContent>
        <QuestionsContainer>
          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>Quanto tempo dura a psicoterapia?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                Conceitualizar o caso, ou seja, traduzi-lo para linguagem
                teórica leva até 6 semanas. Pode levar até 6 meses para
                pontualmente elaborar questões em formato breve. Este dinamismo
                é desejável quando comparamos outras formas de psicoterapia.
              </p>

              <p>
                Contudo, antecipar o final do tratamento ao sinal de primeiras
                melhoras apresenta o risco de recaídas antes que seja cultivada
                independência.
              </p>

              <p>
                O final de processo terapêutico deve reconhecer a autonomia do
                paciente e suas necessidades, ou pode resultar no encaminhamento
                para um novo profissional.
              </p>
            </AnswerText>
          </Answer>

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>Qual referencial teórico você segue?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              Minha prática baseia-se em terapias contextuais, como Terapia de
              Aceitação e Compromisso (ACT), Psicoterapia Baseada em Processos
              (PBT) e Psicoterapia Analítica Funcional (FAP), todas estas são
              diferentes modalidades de terapias cognitivo-comportamentais
              (TCC).
            </AnswerText>
          </Answer>

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>Em que quadros você pode me ajudar?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <ul>
                <ul>
                  <li>Ansiedade, depressão e sofrimento psíquico</li>
                  <li>Dificuldades acadêmicas e laborais</li>
                  <li>Relações pessoais e do trabalho</li>
                  <li>Relações afetivas, separações e felicidade conjugal</li>
                  <li>Terapia para a terceira idade</li>
                  <li>Luto e ansiedade de separação</li>
                  <li>Transtorno Obsessivo-compulsivo (TOC)</li>
                  <li>Tabagismo, alcoolismo, consumo de substâncias</li>
                  <li>Transtornos do sono</li>
                  <li>
                    Transtornos psiquiátricos do humor ou de personalidade
                  </li>
                  <li>Fobia social e fobias específicas</li>
                  <li>Síndrome do pânico</li>
                  <li>Transtornos alimentares e comer emocional</li>
                  <li>Transtornos do impulso</li>
                  <li>Baixa concentração</li>
                  <li>Dependência de internet e tecnologia</li>
                  <li>Apostas e jogo online (ludomania)</li>
                  <li>
                    Mudanças de vida tais como: troca de residência e trabalho
                  </li>
                  <li>
                    Dificuldades de inserção, adaptação a outro país e cultura
                  </li>
                </ul>
              </ul>
              Resposta 3: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </AnswerText>
          </Answer>
          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>
              A conversa com um terapeuta não é igual com qualquer outra pessoa?
            </h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                Ao pedir conselho a conhecidos e amigos, obtemos opiniões
                influenciadas pelo que já conhecem e antecipam de nós. Isto é
                desejável e muitas vezes a alternativa mais agradável!
              </p>

              <p>
                Já o psicólogo te auxilia a romper padrões contraproducentes e
                nocivos dos quais não nos demos conta ou relutamos em abandonar.
                A dedicação necessária para superar desconfortos, mudar hábitos
                e reconsiderar nossos sentimentos é mais constante quando
                acompanhada por uma opinião profissional independente.
              </p>
            </AnswerText>
          </Answer>

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>
              No que a conversa com um terapeuta é diferente daquela com o
              médico?
            </h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                Formas de psicoterapia que buscam intervir sobre o bem-estar
                emoções e reconhecer padrões de pensamento também possuem
                validade científica e recursos próprios, como: técnicas de
                meditação, respiração e atenção plena (mindfulness) para
                promover o relaxamento e a mudança de consciência.
              </p>

              <p>
                Uma equipe multidisciplinar atenta e colaborativa é sempre capaz
                de encontrar um maior leque de decisões informadas.
              </p>
            </AnswerText>
          </Answer>

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>O que posso esperar do nosso trabalho?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                Em uma conversa inicial avaliamos como a Psicologia poderia te
                ajudar. A partir da conceitualização de caso, trabalhamos
                conjuntamente em sua intervenção ou na necessidade de
                encaminhamento para um profissional dedicado a isto.
              </p>
            </AnswerText>
          </Answer>

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>Você atende convênios?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                No momento, o atendimento é apenas para particulares. Ainda
                assim, a nota fiscal emitida pode ser usada para a operadora
                reembolsar o valor da consulta.
              </p>
            </AnswerText>
          </Answer>
          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>Qual o formato da psicoterapia?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              Sessões de 50 minutos, geralmente uma vez por semana.
            </AnswerText>
          </Answer>
          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>Você oferece atendimento em outro idioma?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              Além de português, ofereço atendimento em inglês e espanhol.
            </AnswerText>
          </Answer>

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>Você atende online?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              Existem conveniências tanto em consultório quanto online.
              Consideramos suas possibilidades e preferências para adotar o
              formato mais eficaz.
            </AnswerText>
          </Answer>
        </QuestionsContainer>
      </SectionContent>
    </Section_PerguntasFrequentes>
  );
}

const Section_PerguntasFrequentes = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  padding: 10px;
`;

const SectionContent = styled(ContentContainer)`
  width: calc(var(--content-width) * 0.6);
  display: flex;
  justify-content: space-between;
`;

const Title_Perguntas = styled(Title)`
  /* color: white; */
`;

const QuestionsContainer = styled.div`
  outline-style: solid;
  outline-width: 2px;
  outline-color: black;
  /* border-radius: 2px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 400px;
`;

const QuestionButton = styled.button`
  outline: 2px;
  cursor: pointer;
  z-index: 1;
  padding: 2px 18px 2px 18px;
  text-align: left;
  outline: none;
  border: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  border-bottom: solid 2px black;

  h2 {
    pointer-events: none;
  }

  &::before {
    content: "${({ "data-open": open }) => (open === "true" ? "−" : "+")}";
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    transition: transform 0.3s ease;
  }

  &[data-open="true"]::before {
    content: "−"; /* Change to minus when open */
  }

  &[data-open="false"]::before {
    content: "+"; /* Change to plus when closed */
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

const Answer = styled.div`
  color: black;
  font-size: var(--text-font-size);
  max-width: 50%;
  display: none;

  width: 40%;
  min-width: 400px;
`;

const AnswerText = styled.div`
  padding: 6px 12px;
  line-height: 1.1rem;
  /* border-style: solid;
  border: 1px;
  border-color: black; */

  font-size: calc(var(--text-font-size) * 0.8);
  ul {
  }
`;

export default PerguntasFrequentes;
