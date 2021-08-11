import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { INTERVAL } from '../constants'
import ClockFace from './ClockFace';

const Clock = ({ size, date, onDateChange }) => {
  useEffect(() => {
      let prev = null;

      const action = (timestamp) => {
        if (!prev || timestamp - prev >= INTERVAL) {
          prev = timestamp;
          onDateChange(new Date());
        }

        window.requestAnimationFrame(action);
      }

      window.requestAnimationFrame(action);
    }, [])

  return (
     <>
      <ClockFace size={size} />
    </>
    );
}

Clock.propTypes = {
  size: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired
};

export default Clock;