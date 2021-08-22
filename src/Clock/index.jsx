import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

import { INTERVAL, CIRCLE_SROKE_WIDTH, SCREEN_PADDING } from '../constants';
import ClockFace from './ClockFace';
import Arrows from './Arrows/';

const Clock = ({ size, clock }) => {
    const { date, setDate } = clock;

    useEffect(() => {
        let prev = null;

        const action = (timestamp) => {
            if (!prev || timestamp - prev >= INTERVAL) {
                prev = timestamp;
                setDate(new Date());
            }

            window.requestAnimationFrame(action);
        };

        window.requestAnimationFrame(action);
    }, []);

    const center = size / 2;
    const circleRadius = center - CIRCLE_SROKE_WIDTH / 2 - SCREEN_PADDING;

    return (
        <>
            <ClockFace radius={circleRadius} x0={center} y0={center} />
            <Arrows radius={circleRadius} x0={center} y0={center} date={date} />
        </>
    );
};

Clock.propTypes = {
    size: PropTypes.number.isRequired,
    clock: PropTypes.shape({
        date: PropTypes.instanceOf(Date),
        setDate: PropTypes.func,
    }),
};

export default observer(Clock);
