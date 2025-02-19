import { styled } from "styled-components";

const Section = styled.section`
  height: fit-content;
  width: 80dvw;

  display: flex;
  flex-direction: row;
  align-items: start;
  z-index: 1;

  @media (min-width: 768px) {
    /* height: calc(100dvh - var(--nav-height)); */
    scroll-margin-top: var(--nav-height);
    flex-direction: column;
    justify-content: start;
    overflow-y: hidden;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-content: center; */
  padding: 2dvh 0.5dvw;

  @media (min-width: 768px) {
    padding: 3dvh 2dvw;
  }
`;

const SectionText = styled.div`
  font-size: clamp(22px, 3vw, 24px);
  white-space: break-spaces;
  word-wrap: break-word;
  height: fit-content;
  max-height: 96dvh;
  margin-top: 16px;
  /* text-align: justify; */

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
    font-size: clamp(16px, 1vw, 18px);
    max-height: 90dvh;
    &::-webkit-scrollbar {
      width: var(--scroll-bar-width-large);
    }
  }
`;

const Title = styled.h1`
  /* background-color: brown; */

  font-family: var(--title-font);
  font-weight: var(--title-font-weight);
  /* font-size: clamp(20px, 2dvw, 20px); */
  color: black;
  white-space: nowrap;
  text-decoration-line: underline;
  text-decoration-thickness: 1px;

  margin-top: 40px;

  word-wrap: break-word;

  display: flex;
  flex-direction: row;
  align-items: start;
  flex-basis: 0;

  span {
    margin-bottom: 2dvh;
  }

  @media (min-width: 768px) {
    white-space: normal;
    font-size: clamp(60px, 5dvw, 100px);
    line-height: 0.8em;
    margin-top: 0;
    flex-direction: column;
  }

  @media (min-width: 768px) and (max-height: 600px) {
    white-space: normal;
    font-size: clamp(35px, 7dvh, 80px);
    line-height: 0.8em;
    margin-top: 0;
    flex-direction: column;
  }
`;

export { Section, ContentContainer, SectionText, Title };
