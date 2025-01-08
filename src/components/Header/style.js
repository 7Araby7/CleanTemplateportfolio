import styled, { css, keyframes } from 'styled-components';

const blink = keyframes`
  0%, 100%{
    opacity: 1;
  }
  50%{
    opacity: 0;
  }
`;

export const Icons = styled.div`
  width: fit-content;
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  .arrow {
    height: 0;
    font-size: 50px;
    position: absolute;
    transform: translate(140px, -43px);
    margin-left: 20px;
    opacity: 0;

    ${({ $animate }) =>
      $animate &&
      css`
        animation: ${blink} infinite 1s;
      `}
  }

  svg {
    margin-left: 18px;

    &:hover {
      transform: scale(1.3);
    }

    @media (max-width: 1378px) {
      margin-left: 0;
    }
  }
  @media (max-width: 1378px) {
    gap: 20px;
  }
`;
