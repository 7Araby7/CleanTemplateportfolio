import { PiCodeBold } from 'react-icons/pi';
import { useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useMotionValueEvent, useScroll } from 'framer-motion';

import * as Styled from './style';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);
  const { scrollY } = useScroll();
  const navbarRef = useRef(null);

  useMotionValueEvent(scrollY, 'change', (current) => {
    const previous = scrollY.getPrevious();
    const direction = current > previous ? 'down' : 'up';
    setIsVisible(direction === 'up');
    if (direction === 'down') {
      setTimeout(() => {
        setIsChecked(false);
      }, 500);
    }
  });

  return (
    <Styled.Navbar
      ref={navbarRef}
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      <Styled.ListName>
        <Styled.Name>
          <PiCodeBold size={50} />
          Gabriel Brunhara
        </Styled.Name>
      </Styled.ListName>
      <Styled.ToggleMenu>
        <label htmlFor="toggle">{isChecked ? <IoClose size={25} /> : <HiMenuAlt3 size={25} />}</label>
        <input type="checkbox" id="toggle" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
      </Styled.ToggleMenu>
      <Styled.List $isChecked={isChecked}>
        <li>
          <a href="#header">HOME</a>
        </li>
        <li>
          <a href="#header">ABOUT</a>
        </li>
        <li>
          <a href="#header">PROJECTS</a>
        </li>
        <li>
          <a href="#header">CONTACT</a>
        </li>
      </Styled.List>
    </Styled.Navbar>
  );
};

export default Navbar;
