import P from 'prop-types';

import MotionWrapper from '../../utils/MotionWrapper';
import { Img } from '../../styles/globalStyle';

const ImgContainer = ({ img }) => {
  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.5 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <MotionWrapper variants={fadeInVariants} threshold={0.3}>
      <Img>
        <img src={img} alt="Programer" />
      </Img>
    </MotionWrapper>
  );
};

ImgContainer.propTypes = {
  img: P.string.isRequired,
};

export default ImgContainer;
