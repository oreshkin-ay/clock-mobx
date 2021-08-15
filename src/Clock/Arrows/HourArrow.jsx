import React from 'react';
import PropTypes from 'prop-types';

import { HOUR_ARROW_INDEX, HOUR_ARROW_WIDTH } from '../../constants';
import Arrow from './Arrow';

const HourArrow = ({radius, ...props}) => <Arrow {...props} length={HOUR_ARROW_INDEX * radius} width={HOUR_ARROW_WIDTH} shouldRounded />;

HourArrow.propTypes = {
  radius: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired
};

export default HourArrow;
