import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light dark;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    --primary: ${(props) => props.theme.primary};
    --secondary: ${(props) => props.theme.secondary};
    --text: ${(props) => props.theme.text};

  }

  body {
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
    background-color: black;
    font-family: 'Funnel Sans';
  }
  a {
    text-decoration: none;
    color: var(--text);
    }

  h2 {
    @media (max-width: 768px) {
    }
  }

  p{
    @media (max-width: 768px) {
    }
  }
`;

const BaseSection = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  background: ${({ $background }) => $background};
  text-align: center;
  color: var(--text);
  padding-inline: 100px;

  @media (min-width: 1630px) {
    padding-inline: 150px;
  }
  @media (min-width: 2304px) {
    justify-content: center;
    gap: 30rem;
  }
  @media (max-width: 1378px) {
    flex-direction: column;
    padding-inline: 50px;
    padding-block: 100px;
  }
`;

export const Section = styled(BaseSection).attrs({ as: 'section' })``;
export const HeaderSection = styled(BaseSection).attrs({ as: 'header' })``;

export const Button = styled.button`
  font-size: medium;
  font-family: 'Funnel Sans';
  font-weight: 800;
  margin-block: 40px;
  padding: 10px 25px;
  width: fit-content;
  color: var(--text);
  border: solid 2px var(--text);
  border-radius: 60px;
  background-color: transparent;
  transition: all 0.2s;

  &:hover {
    box-shadow: inset 0px 5px 5px rgba(0, 0, 0, 0.9);
    transform: translateY(3px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ $alignItems }) => $alignItems}; // end/baseline
  text-align: ${({ $textAlign }) => $textAlign}; // right/left
  ${({ $padding }) => $padding}: 50px; // padding-left/padding-right
  max-width: 950px;
  height: auto;
  h1 {
    font-size: 55px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  h2 {
    margin-block: 30px;
  }

  p {
    font-family: ${({ $fontFamily }) => $fontFamily || 'Funnel Sans'};
    font-size: ${({ $fontSize }) => $fontSize || '20px'};
    margin-top: 10px;
    margin-bottom: 0px;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  @media (max-width: 1378px) {
    padding: 0;
    text-align: center;
    align-items: center;
  }
`;

export const Img = styled.div`
  margin-top: 60px;
  display: flex;
  width: 650px;
  height: auto;
  flex-direction: column;
  justify-content: center;

  img {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-top: 0;
    margin-bottom: 30px;
    width: 400px;
  }
`;

export default GlobalStyle;
