import P from 'prop-types';
import { FaReact, FaCss3Alt, FaSass, FaGitAlt, FaLaravel, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiMysql } from 'react-icons/si';

import * as Styled from './styled';
import programer from '../../assets/programer5.png';
import { Button, Section, Content } from '../../styles/globalStyle';
import ImgContainer from '../../Templates/ImgContainer';

const About = ({ handleScrollToSection }) => {
  return (
    <Section $background={'var(--secondary)'} id="about">
      <ImgContainer img={programer} />
      <Content $alignItems={'end'} $textAlign={'right'} $padding={'padding-right'}>
        <h1>About me</h1>
        <p>
          Hi, I’m Gabriel, a fullstack developer from Brazil, fluent in Portuguese and English.
          Currently focused on React and frontend development, I’m passionate about solving
          problems, building projects, and learning new tools. Check out my GitHub to see my
          work—let’s create something amazing!
        </p>
        <h2>Some of my most improoved skills:</h2>
        <Styled.IconContainer>
          <Styled.Icon
            href="https://legacy.reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaReact size={40} />
            <span className="tooltip">React.js</span>
          </Styled.Icon>
          <Styled.Icon
            href="https://www.typescriptlang.org/docs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiTypescript size={40} />
            <span className="tooltip">TypeScript</span>
          </Styled.Icon>
          <Styled.Icon
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiJavascript size={40} />
            <span className="tooltip">JavaScript</span>
          </Styled.Icon>
          <Styled.Icon
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaHtml5 size={40} />
            <span className="tooltip">HTML</span>
          </Styled.Icon>
          <Styled.Icon
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCss3Alt size={40} />
            <span className="tooltip">CSS</span>
          </Styled.Icon>
          <Styled.Icon
            href="https://sass-lang.com/documentation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSass size={40} />
            <span className="tooltip">SASS</span>
          </Styled.Icon>
          <Styled.Icon href="https://git-scm.com/doc" target="_blank" rel="noopener noreferrer">
            <FaGitAlt size={40} />
            <span className="tooltip">Git</span>
          </Styled.Icon>
          <Styled.Icon href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer">
            <FaLaravel size={40} />
            <span className="tooltip">Laravel</span>
          </Styled.Icon>
          <Styled.Icon href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer">
            <SiMysql size={40} />
            <span className="tooltip">MySQL</span>
          </Styled.Icon>
        </Styled.IconContainer>

        <Button onClick={() => handleScrollToSection('projects')}>Come see my projects!</Button>
      </Content>
    </Section>
  );
};

About.propTypes = {
  handleScrollToSection: P.func.isRequired,
};

export default About;
