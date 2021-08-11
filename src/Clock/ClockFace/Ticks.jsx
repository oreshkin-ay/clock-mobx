import React from 'react';
import PropTypes from 'prop-types';

import { TICK_COUNT } from '../../constants';
import Tick from './Tick';

const tiks = Array.from(Array(TICK_COUNT).keys());

const Tiks = ({ x0, y0, radius }) => <g>{tiks.map(id => <Tick key={id} id={id} x0={x0} y0={y0} radius={radius} />)}</g>;

Tiks.propTypes = {
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired
};

export default Tiks;