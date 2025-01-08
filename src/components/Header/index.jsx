import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import P from 'prop-types';

import programer from '../../assets/programer.png';
import * as Styled from './style';
import { Button, Content, HeaderSection } from '../../styles/globalStyle';
import ImgContainer from '../../Templates/ImgContainer';

const Header = ({ handleScrollToSection, handleAnimate, animate }) => {
  return (
    <HeaderSection $background={'var(--primary)'} id="header">
      <Content
        $alignItems={'baseline'}
        $textAlign={'left'}
        $padding={'padding-left'}
        $fontFamily={'Pompiere'}
        $fontSize={'30px'}
      >
        <p>Hello World,</p>
        <h1>
          I am a <br />
          Web Developer
        </h1>
        <p>Welcome to my portfolio website</p>
        <Button onClick={() => handleScrollToSection('about')}>More about me</Button>
        <Styled.Icons $animate={animate}>
          <a
            href="https://github.com/7Araby7"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleAnimate(false)}
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-brunhara-049b43248/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleAnimate(false)}
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://wa.me/5541998995100 "
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleAnimate(false)}
          >
            <FaWhatsapp size={30} />
          </a>
          <p className="arrow">←</p>
        </Styled.Icons>
      </Content>
      <ImgContainer img={programer} />
    </HeaderSection>
  );
};

Header.propTypes = {
  handleScrollToSection: P.func.isRequired,
  handleAnimate: P.func.isRequired,
  animate: P.bool,
};

export default Header;
