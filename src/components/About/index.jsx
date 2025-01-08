import P from 'prop-types';

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
          Hi, I’m Gabriel, a fullstack developer from Brazil, fluent in Portuguese and English, with expertise in
          JavaScript, HTML, CSS, PHP, and databases like MySQL and PostgreSQL. Currently focused on React and frontend
          development, I’m passionate about solving problems, building projects, and learning new tools. Check out my
          GitHub to see my work—let’s create something amazing!
        </p>
        <Button onClick={() => handleScrollToSection('projects')}>Come see my projects!</Button>
      </Content>
    </Section>
  );
};

About.propTypes = {
  handleScrollToSection: P.func.isRequired,
};

export default About;
