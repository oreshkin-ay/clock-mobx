import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { INTERVAL, CIRCLE_SROKE_WIDTH, SCREEN_PADDING } from '../constants'
import ClockFace from './ClockFace';
import Arrows from './Arrows/';

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

  const center = size / 2;
  const circleRadius = center - CIRCLE_SROKE_WIDTH / 2 - SCREEN_PADDING;

  return (
     <>
      <ClockFace radius={circleRadius} x0={center} y0={center} />
      <Arrows radius={circleRadius} x0={center} y0={center} date={date} />
    </>
    );
}

Clock.propTypes = {
  size: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  onDateChange: PropTypes.func.isRequired
};

export default Clock;
