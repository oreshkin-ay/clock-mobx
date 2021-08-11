import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  STANDARD_TICK_LENGTH,
  TICK_STROKE_WIDTH,
  TICK_COUNT,
  COLOR
} from '../../constants';
import { getPoint } from '../../utils';


const Tick = ({id, x0, y0, radius}) => {
  const coords = useMemo(() => {
    const angle = 2 * Math.PI * id / TICK_COUNT;
    let length

    if (id % 15) {
      if(id % 5) {
        length = STANDARD_TICK_LENGTH;
      } else {
        length = 2 * STANDARD_TICK_LENGTH
      }
    } else {
      length = 3 * STANDARD_TICK_LENGTH;
    }

    const { x: x1, y: y1 } = getPoint({r: radius, angle, x0, y0 });
    const { x: x2, y: y2 } = getPoint({r: radius - length, angle, x0, y0 });

    return { x1, y1, x2, y2 };
  }, [id, radius, x0, y0]);


  return <line {...coords} stroke={COLOR} strokeWidth={TICK_STROKE_WIDTH} strokeLinecap="round" />;
};

Tick.propTypes = {
  id: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired
};

export default Tick;