import React from 'react';
import PropTypes from 'prop-types';

import ClockFace from './ClockFace';

const Clock = ({ size, date }) => console.log(date) || (
   <>
    <ClockFace size={size} />
  </>
  );

Clock.propTypes = { size: PropTypes.number.isRequired, date: PropTypes.instanceOf(Date).isRequired };

export default Clock;