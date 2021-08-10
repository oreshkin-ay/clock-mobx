import React, {useEffect, useState} from 'react';

import { SCREEN_SIZE, INTERVAL } from './constants';
import Screen from './Screen';
import Clock from './Clock';
import './styles.scss';

const __getScreenSize = () => Math.min(document.documentElement.clientWidth, document.documentElement.clientHeight);

export default () => {
  const [screenSize, setScreenSize] = useState(__getScreenSize());



  useEffect(() => {
    const eventListener = () => setScreenSize(__getScreenSize());

    window.addEventListener('resize', eventListener, false);

    return () => window.removeEventListenr('resize', eventListener);
  }, [])

  //TODO: Временнй код для проверки анимации до подключения mobX
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let prev = null;

    const action = (timestamp) => {
      if (!prev || timestamp - prev >= INTERVAL) {
        prev = timestamp;
        setDate(new Date()) //TODO: Здесь должно быть обращение к mobX
      }

      window.requestAnimationFrame(action);
    }

    window.requestAnimationFrame(action);
  }, [])


  return (
    <div className="main">
      <Screen width={screenSize} height={screenSize} cWidth={SCREEN_SIZE} cHeight={SCREEN_SIZE}>
        <Clock size={SCREEN_SIZE} date={date} />
      </Screen>
    </div>);
};
