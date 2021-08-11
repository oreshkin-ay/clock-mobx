import React from 'react';
import PropTypes from 'prop-types';

import {
  MILLISECONDS_PER_SECOND,
  SECONDS_PER_MINUTE,
  MINUTE_PER_HOUR,
  HOUR_PER_CIRCLE
} from '../../constants';
import SecondArrow from './SecondArrow';
import MinuteArrow from './MinuteArrow';
import HourArrow from './HourArrow';


const useAngles = date => {
  const timestamp = date.getTime();
  const circle = 2 * Math.PI;

  const millisecondsPerMinute = SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
  const millisecondsPerHour = MINUTE_PER_HOUR * millisecondsPerMinute;
  const millisecondsPerCircle = HOUR_PER_CIRCLE * millisecondsPerHour;

  const seconds = (timestamp % millisecondsPerMinute) / MILLISECONDS_PER_SECOND;
  const minutes = (timestamp % millisecondsPerHour) / millisecondsPerMinute;
  const hours = (date.getHours() % HOUR_PER_CIRCLE) + minutes / MINUTE_PER_HOUR; //Because of time zone


  return {
    secondAngle: circle * seconds / SECONDS_PER_MINUTE,
    minuteAngle: circle * minutes / MINUTE_PER_HOUR,
    hourAngle: circle * hours / HOUR_PER_CIRCLE
  };
};

const Arrows = ({date, ...props}) => {

  const { secondAngle, minuteAngle, hourAngle } = useAngles(date);

  return (
    <g>
      <SecondArrow {...props} angle={secondAngle} />
      <MinuteArrow {...props} angle={minuteAngle} />
      <HourArrow {...props} angle={hourAngle} />
    </g>
  );
}

Arrows.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  radius: PropTypes.number.isRequired,
  x0: PropTypes.number.isRequired,
  y0: PropTypes.number.isRequired
}

export default Arrows;
