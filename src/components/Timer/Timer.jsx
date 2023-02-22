import React, { useState, useRef, useEffect } from 'react';

import TimeValue from './TimeValue/TimeValue';

import { Container, StyledDots } from './styled';

const Timer = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countdown = new Date('May 31 2023 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 0)
  };

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current);
    }
  });

  return (
    <Container className='timer'>
      <TimeValue time={timerDays} value={'Days'} valueM={'DD'} />
      <StyledDots>:</StyledDots>
      <TimeValue time={timerHours} value={'Hours'} valueM={'HH'} />
      <StyledDots>:</StyledDots>
      <TimeValue time={timerMinutes} value={'Minutes'} valueM={'MM'} />
      <StyledDots>:</StyledDots>
      <TimeValue time={timerSeconds} value={'Seconds'} valueM={'SS'} />
    </Container >
  )
};

export default Timer;