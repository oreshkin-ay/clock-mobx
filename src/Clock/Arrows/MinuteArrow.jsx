import React from 'react';
import PropTypes from 'prop-types';

import { MINUTE_ARROW_INDEX, MINUTE_ARROW_WIDTH } from '../../constants';
import Arrow from './Arrow';

const MinuteArrow = ({radius, ...props}) => <Arrow {...props} length={MINUTE_ARROW_INDEX * radius} width={MINUTE_ARROW_WIDTH} shouldRounded />;

MinuteArrow.propTypes = {
  radius: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired
};

export default MinuteArrow;
