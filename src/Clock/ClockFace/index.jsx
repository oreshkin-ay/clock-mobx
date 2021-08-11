import React from 'react';
import PropTypes from 'prop-types';

import { CIRCLE_SROKE_WIDTH, COLOR } from '../../constants';
import Tiks from './Ticks';
import Numbers from './Numbers';


const ClockFace = ({ radius, x0, y0 }) => {
  
 
  return (
     <g>
      <circle r={radius} cx={x0} cy={y0} stroke={COLOR} strokeWidth={CIRCLE_SROKE_WIDTH} fill="none" />
      <Tiks radius={radius} x0={x0} y0={y0} />
      <Numbers radius={radius} x0={x0} y0={y0} />
    </g>
  );
}

ClockFace.propTypes = {
  radius: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired
};

export default ClockFace;
