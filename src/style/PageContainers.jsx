import { styled } from "styled-components";

const Section = styled.section`
  height: fit-content;
  width: 80dvw;
  overflow: hidden;

  margin-bottom: 16px;

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
  padding: 10px;

  @media (max-width: 768px) {
    /* padding: 3dvh 2dvw; */
  }
`;

const SectionText = styled.div`
  font-size: clamp(18px, 3vw, 20px);
  white-space: break-spaces;
  word-wrap: break-word;
  height: fit-content;
  max-height: 96dvh;

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

  font-size: clamp(60px, 1dvw, 70px);

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
