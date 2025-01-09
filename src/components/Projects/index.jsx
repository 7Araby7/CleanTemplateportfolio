import P from 'prop-types';

import { projectData } from './ProjectData';
import * as Styled from './style';
import ProjectCard from './ProjectCard';
import { Button, Section, Content } from '../../styles/globalStyle';

const Projects = ({ handleScrollToSection }) => {
  return (
    <Section $background={'var(--primary)'} id="projects">
      <Content $alignItems={'baseline'} $textAlign={'left'} $padding={'padding-left'}>
        <h1>Featured Projects</h1>
        <p>Check out some of my best projects!</p>
        <Button onClick={() => handleScrollToSection('contact')}>Get in contact!</Button>
      </Content>
      <Styled.ProjectsConteiner>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            tools={project.tools}
            imgLink={project.imgLink}
            index={index}
          />
        ))}
      </Styled.ProjectsConteiner>
    </Section>
  );
};

Projects.propTypes = {
  handleScrollToSection: P.func.isRequired,
};

export default Projects;
