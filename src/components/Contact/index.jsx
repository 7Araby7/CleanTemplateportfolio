import P from 'prop-types';

import programer from '../../assets/programer6.png';
import { Button, Section, Content } from '../../styles/globalStyle';
import ImgContainer from '../../Templates/ImgContainer';

const Contact = ({ handleScrollToSection, handleAnimate }) => {
  return (
    <Section $background={'var(--secondary)'} id="contact">
      <ImgContainer img={programer} />
      <Content $alignItems={'end'} $textAlign={'right'} $padding={'padding-right'}>
        <h1>Contact</h1>
        <p>
          I’m always open to connecting withnew people, whether it’s for potential collaborations,freelance
          opportunities, or just a casual chat. If you have anyquestions, would like to discuss a project, or are
          interested inworking together, feel free to reach out. I’ll do my best torespond as soon as possible!
        </p>
        <Button
          onClick={() => {
            handleScrollToSection('header');
            handleAnimate(true);
          }}
        >
          Contact links
        </Button>
      </Content>
    </Section>
  );
};

Contact.propTypes = {
  handleScrollToSection: P.func.isRequired,
  handleAnimate: P.func,
};

export default Contact;
