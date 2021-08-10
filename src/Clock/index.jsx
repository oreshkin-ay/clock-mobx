import React from 'react';
import PropTypes from 'prop-types';

import ClockFace from './ClockFace';

const Clock = ({ size }) => (
   <>
    <ClockFace size={size} />
  </>
  );

Clock.propTypes = { size: PropTypes.number.isRequired };

export default Clock;