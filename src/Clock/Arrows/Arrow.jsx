import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { COLOR } from '../../constants';
import { getPoint } from '../../utils';

const Arrow = ({ x0, y0, length, angle, width, shouldRounded }) => {
  const coords = useMemo(() => {

    const main = 0.95;
    const rest = 1 - main;

    const { x: x1, y: y1 } = getPoint({ x0, y0, r: length * main, angle });
    const { x: x2, y: y2 } = getPoint({ x0, y0, r: length * rest, angle: angle + Math.PI });

    return { x1, y1, x2, y2 };
  }, [x0, y0, length, angle]);


  return <line {...coords} stroke={COLOR} strokeWidth={width} strokeLinecap={shouldRounded ? 'round' : 'butt'}   />
};

Arrow.propTypes = {
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  angle: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  shouldRounded: PropTypes.bool
};

Arrow.defaultProps = { shouldRounded: false };

export default Arrow;
