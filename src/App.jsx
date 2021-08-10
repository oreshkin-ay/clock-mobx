import React, {useEffect, useState} from 'react';

import { SCREEN_SIZE } from './constants';
import Screen from './Screen';
import Clock from './Clock';
import './styles.scss';

const __getScreenSize = () => Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);

export default () => {
  const [screenSize, setScreenSize] = useState(__getScreenSize());

  useEffect(() => {
    const eventListener = () => setScreenSize(__getScreenSize);

    window.addEventListener('resize', eventListener, false);

    return () => window.removeEventListenr('resize', eventListener);
  }, [])

  return (
    <div className="main">
      <Screen width={screenSize} height={screenSize} cWidth={SCREEN_SIZE} cHeight={SCREEN_SIZE}>
        <Clock size={SCREEN_SIZE} />
      </Screen>
    </div>);
};
