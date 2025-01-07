import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import P from 'prop-types';

import programer from '../../assets/programer.png';
import * as Styled from './style';

const Header = ({ background = 'var(--primary)' }) => {
  return (
    <Styled.Header $background={background} id="header">
      <Styled.Content>
        <p>Hello World,</p>
        <h1>
          I am a <br />
          Web Developer
        </h1>
        <p>Welcome to my portifolio website</p>
        <Styled.Button>More about me</Styled.Button>
        <div className="icons">
          <FaGithub size={25} />
          <FaLinkedin size={25} />
          <FaWhatsapp size={25} />
        </div>
      </Styled.Content>
      <Styled.ImgContainer>
        <img src={programer} alt="Programer" />
      </Styled.ImgContainer>
    </Styled.Header>
  );
};

Header.propTypes = {
  background: P.string,
};

export default Header;
