import { styled } from "styled-components";

const Section = styled.section`
  height: fit-content;
  width: 100%;
  overflow: hidden;

  /* margin-bottom: 16px; */

  display: flex;
  flex-direction: row;
  align-items: start;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    overflow-y: hidden;
    width: 100dvw;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;

  @media (max-width: 768px) {
    width: 90dvw;
  }
`;

const SectionText = styled.div`
  font-size: var(--text-font-size);
  white-space: break-spaces;
  word-wrap: break-word;
  height: fit-content;
  line-height: 1.1em;

  display: flex;
  flex-direction: column;
  align-items: start;

  position: relative;

  p {
    margin-bottom: 2dvh;
  }

  @media (min-width: 768px) {
    line-height: 1.2em;
    max-height: 90dvh;
  }
`;

const Title = styled.h1`
  color: black;
  white-space: nowrap;
  font-family: var(--title-font);
  font-weight: 300;
  /* text-decoration-line: underline;
  text-decoration-thickness: 1.6px;
  text-underline-offset: 5px; */

  font-size: var(--title-font-size);

  margin-bottom: 20px;

  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  span {
    margin-bottom: 2dvh;
  }
`;

export { Section, ContentContainer, SectionText, Title };
