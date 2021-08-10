import React from 'react';
import PropTypes from 'prop-types';

import { CIRCLE_SROKE_WIDTH, SCREEN_PADDING, COLOR } from '../constants';


const ClockFace = ({ size }) => {
  const center = size / 2;
  const circleRadius = circlePos - CIRCLE_SROKE_WIDTH / 2 - SCREEN_PADDING;
 
  return (
     <g>
      <circle r={circleRadius} cx={center} cy={center} stroke={COLOR} strokeWidth={CIRCLE_SROKE_WIDTH} fill="none" />
    </g>
  );
}

ClockFace.propTypes = { size: PropTypes.number.isRequired };

export default ClockFace;