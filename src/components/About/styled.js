import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  gap: 25px;
`;

export const Icon = styled.a`
  position: relative;
  display: inline-block;

  .tooltip {
    visibility: hidden;
    background-color: var(--primary);
    color: var(--text);
    text-align: center;
    padding: 5px 10px;
    border-radius: 5px;
    position: absolute;
    top: 115%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
  }

  &:hover {
    transform: scale(1.1);

    .tooltip {
      visibility: visible;
      opacity: 1;
    }
  }
`;
