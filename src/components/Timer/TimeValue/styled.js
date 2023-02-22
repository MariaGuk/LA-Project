import styled from "styled-components";

import waveTimer from '../../../images/timerWave.svg'
import waveTimerM from '../../../images/timerWaveM.svg'

const Container = styled('div')({});

const StyledTime = styled('p')({
  fontSize: '72px',
  color: '#162C4E',
  fontFamily: 'Poppins',
  fontWeight: '600',
  '@media(max-width: 768px)': {
    fontSize: '32px'
  },
});

const StyledTimeValue = styled('div')({
  backgroundImage: `url(${waveTimer})`,
  backgroundRepeat: 'no-repeat',
  color: '#ffffff',
  width: '132px',
  height: '54px',
  display: 'flex',
  fontSize:'16px',
  justifyContent: 'center',
  alignItems: 'center',
  '@media(max-width: 768px)': {
    display: 'none'
  }
});

const StyledTimeValueM = styled('div')({
  display: 'none',
  '@media(max-width: 768px)': {
    backgroundImage: `url(${waveTimerM})`,
    backgroundRepeat: 'no-repeat',
    color: '#ffffff',
    width: '64px',
    height: '40px',
    display: 'flex',
    fontSize:'12px',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export { Container, StyledTime, StyledTimeValue, StyledTimeValueM }