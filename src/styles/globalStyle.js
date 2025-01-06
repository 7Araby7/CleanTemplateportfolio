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
  font-family: 'Funnel Sans', 'Poiret One';
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

export const Section = styled.section`
  overflow: hidden;
  min-height: 70vh;
  padding: 5rem 7rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

export default GlobalStyle;
