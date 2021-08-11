import React from 'react';
import PropTypes from 'prop-types';

import { NUMBER_COUNT } from '../constants';
import Number from './Number';

const numberIds = Array.from(Array(NUMBER_COUNT).keys());

const Numbers = ({ x0, y0, radius }) => <g>{numberIds.map(id => <Number key={id} id={id} x0={x0} y0={y0} radius={radius}>{id || 12}</Number>)}</g>;

Numbers.propTypes = {
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired,
  radius: PropTypes.number.isRequired
}

export default Numbers;