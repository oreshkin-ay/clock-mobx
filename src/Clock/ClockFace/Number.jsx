import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  STANDARD_TICK_LENGTH,
  NUMBER_COUNT,
  NUMBER_SIZE,
  COLOR
} from '../../constants';
import { getPoint } from '../../utils'; 

const Number = ({ id, x0, y0, radius, children }) => {
  const { x, y } = useMemo(() => getPoint({ x0, y0, angle: 2 * Math.PI * id / NUMBER_COUNT, r: radius - 5 * STANDARD_TICK_LENGTH }), [x0, y0, id, radius]);

  return (
    <text x={x} y={y + NUMBER_SIZE / 4} textAnchor="middle" >
      <tspan fill={COLOR} fontStyle="italic" fontFamily="sans-serif" fontSize={NUMBER_SIZE}>
        {children}
      </tspan>
    </text>
  );
};

Number.propTypes = {
  id: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired
};

export default Number;