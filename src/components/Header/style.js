import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
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
    padding-inline: auto;
    padding-block: 200px;
  }
`;

export const Content = styled.div`
  padding-left: 50px;
  width: auto;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  h1 {
    font-size: 55px;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 35px;
    }
  }

  p {
    font-size: 30px;
    font-family: 'Pompiere';
    margin-top: 10px;
    margin-bottom: 0px;

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }

  .icons {
    margin-top: 20px;
    display: flex;

    svg {
      margin-left: 20px;

      &:hover {
        transform: scale(1.3);
      }
    }
  }
  @media (max-width: 1378px) {
    padding-left: 0;
    text-align: center;
    align-items: center;
  }
`;

export const Button = styled.button`
  font-size: medium;
  font-family: 'Funnel Sans';
  font-weight: 800;
  margin-block: 20px;
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

export const ImgContainer = styled.div`
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
    width: 400px;
  }
`;
