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
    <Section_PerguntasFrequentes ref={main} id="perguntas">
      <Title_Perguntas ref={title}>Perguntas Frequentes</Title_Perguntas>
      <SectionContent>
        <QuestionsContainer>
          <QuestionButton data-open="true" onClick={toggleContent}>
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
                  <li>Apostas e jogo online</li>
                  <li>
                    Mudanças de vida tais como: troca de residência e trabalho
                  </li>
                  <li>
                    Dificuldades de inserção, adaptação a outro país e cultura
                  </li>
                </ul>
              </ul>
            </AnswerText>
          </Answer>
          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>A conversa com um terapeuta não é igual a qualquer outra?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                Ao pedir conselho a conhecidos e amigos, obtemos opiniões
                influenciadas pelo que já conhecem e antecipam de nós. Isto é
                desejável e muitas vezes a alternativa mais agradável.
              </p>

              <p>
                Já um psicólogo auxilia a romper padrões contraproducentes e
                nocivos dos quais não nos demos conta ou relutamos em abandonar.
                A dedicação necessária para superar desconfortos, mudar hábitos
                e reconsiderar nossos sentimentos é mais consistente quando
                acompanhada por opinião profissional independente.
              </p>
            </AnswerText>
          </Answer>

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>O que posso esperar do nosso trabalho?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                Em uma conversa inicial avaliamos como a Psicologia pode ajudar.
                A partir da conceitualização de caso, trabalhamos conjuntamente
                como intervir ou na necessidade de encaminhamento para um
                profissional especialista desta demanda.
              </p>
            </AnswerText>
          </Answer>

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>Você atende convênios?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                No momento, o atendimento é apenas a particulares. Ainda assim,
                a nota fiscal emitida pode ser usada para reembolsos via
                convênio. Os atendimentos estão classificados como despesas
                médicas, é permitido abater 100% do valor declarando-o no
                imposto de renda.
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

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>A psicoterapia está ligada à área da saúde?</h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                A psicoterapia, quando segue princípios científicos aplicados à
                saúde, baseia-se em comprovação. Estão disponíveis tratamentos
                testados e de eficácia demonstrada.
              </p>

              <p>
                Métodos comprovados, como terapia cognitivo-comportamental (TCC)
                empenham-se em identificar e modificar padrões de pensamento e
                comportamento.
              </p>

              <p>
                Se você busca tratamento baseado em Ciência, pergunte ao
                profissional sobre evidências que sustentam sua prática e como
                ele avalia o progresso ao longo da terapia.
              </p>
            </AnswerText>
          </Answer>

          <QuestionButton data-open="false" onClick={toggleContent}>
            <h2>
              Como a psicoterapia concilia ciência com experiência pessoal?
            </h2>
          </QuestionButton>
          <Answer>
            <AnswerText>
              <p>
                A psicoterapia é, ao mesmo tempo, prática de saúde e espaço de
                reflexão sobre a condição humana. Seu propósito vai além de
                sintomas: trata-se de compreender uma trajetória de vida e a
                autenticidade envolvida por emoções, memórias e valores
                individuais.
              </p>
              <p>
                Sem deixar de valorizar a experiência humana irredutível, criar
                um enfoque racional evita que meras impressões e suposições
                sejam causa para nossas ações.
              </p>
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

  box-sizing: border-box;
  padding: var(--margin-top-bottom) 0px;
  @media (max-width: 768px) {
    padding: 40px 0px;
  }
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
  outline-width: 1.2px;
  outline-color: black;
  /* border-radius: 2px; */
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 400px;

  @media (max-width: 768px) {
    min-width: 350px;
  }
`;

const QuestionButton = styled.button`
  outline: 1.2px;
  cursor: pointer;
  z-index: 1;
  padding: 2px 18px 2px 18px;
  text-align: left;
  outline: none;
  border: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  border-bottom: solid 1.2px black;

  background-color: white;

  h2 {
    pointer-events: none;
  }

  &::before {
    font-size: 20px;
    font-weight: bold;
    margin-right: 10px;
    transition: transform 0.1s ease;
  }

  &[data-open="true"]::before {
    content: "❯";
    transform: rotate(90deg);
  }

  &[data-open="false"]::before {
    content: "❯";
  }

  &:last-of-type {
    border-bottom: none;
  }
  &:hover {
    background-color: #0000001a;
  }
`;

const Answer = styled.div`
  color: black;
  font-size: var(--text-font-size);
  display: none;

  min-width: 400px;
  border-bottom: solid;
  border-width: 1.2px;
`;

const AnswerText = styled.div`
  padding: 6px 12px;
  line-height: 1.4rem;

  li::before {
    content: "•";
    margin-right: 6px;
  }

  font-size: calc(var(--text-font-size) * 0.9);
  font-weight: 350;
  p {
    margin-bottom: 6px;
  }
  ul {
  }
`;

export default PerguntasFrequentes;
