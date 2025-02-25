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

  @media (max-width: 768px) {
    /* padding: 3dvh 2dvw; */
  }
`;

const SectionText = styled.div`
  font-size: var(--text-font-size);
  white-space: break-spaces;
  word-wrap: break-word;
  height: fit-content;
  width: 60dvw;

  display: flex;
  flex-direction: column;
  align-items: start;

  position: relative;

  &::-webkit-scrollbar {
    width: var(--scroll-bar-width);
    background-color: #ffffff28;
    border-radius: 10px;
  }

  p {
    margin-bottom: 2dvh;
  }

  @media (min-width: 768px) {
    max-height: 90dvh;
    &::-webkit-scrollbar {
      width: var(--scroll-bar-width-large);
    }
  }
`;

const Title = styled.h1`
  color: black;
  white-space: nowrap;
  font-family: "Roboto", serif;
  font-weight: 100;
  font-style: normal;
  text-decoration-line: underline;
  text-decoration-thickness: 1.6px;
  text-underline-offset: 5px;

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
