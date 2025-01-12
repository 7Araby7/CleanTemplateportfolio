import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Navbar = styled(motion.nav)`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--primary);
  color: var(--text);
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding-inline: 100px;
  z-index: 1000;

  @media (min-width: 1630px) {
    padding-inline: 150px;
  }

  @media (max-width: 848px) {
    border-bottom: solid 2px var(--text);
    padding-inline: 30px;
    height: 60px;
  }
`;

export const ListName = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 0;
  margin: 0;
`;

export const Name = styled.li`
  padding-left: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: auto;

  svg {
    color: var(--text);
  }

  @media (max-width: 848px) {
    margin-right: 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 10px 2.5px;
  margin: 0;
  border: solid 2px var(--text);
  border-radius: 30px;

  li {
    a {
      font-size: 1.2rem;
      transition: all 0.5s ease;
      border-radius: 30px;
      padding: 10px 15px;

      &:hover {
        background-color: var(--text);
        color: var(--primary);
      }
    }
  }

  @media (max-width: 848px) {
    background-color: var(--primary);
    border: solid 2px var(--text);
    border-radius: 0 0 0 30px;
    border-top: none;
    flex-direction: column;
    position: absolute;
    top: 58px;
    right: 0;
    width: 30%;
    padding: 10px 0;
    display: ${({ $isChecked }) => ($isChecked ? 'flex' : 'none')};

    li {
      margin: 10px 0;
    }
  }
`;

export const ToggleMenu = styled.div`
  display: none;
  position: relative;
  font-size: 2rem;
  cursor: pointer;

  #toggle {
    display: none;
  }

  @media (max-width: 848px) {
    display: block;
  }
`;
