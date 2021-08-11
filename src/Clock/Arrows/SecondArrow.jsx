import React from 'react';
import PropTypes from 'prop-types';

import { SECOND_ARROW_INDEX, SECOND_ARROW_WIDTH } from '../../constants';
import Arrow from './Arrow';

const SecondArrow = ({radius, ...props}) => <Arrow {...props} length={SECOND_ARROW_INDEX * radius} width={SECOND_ARROW_WIDTH} />

SecondArrow.propTypes = {
  radius: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired
};

export default SecondArrow;
