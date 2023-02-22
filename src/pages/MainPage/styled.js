import styled from "styled-components";

import waveRight from '../../images/wave-right.svg';
import waveLeft from '../../images/wave-left.svg';

const Container = styled('div')({
  fontFamily: 'Poppins',
  backgroundColor: ' #F5F5F5',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const RightWave = styled('div')({
  position: 'absolute',
  top: '0',
  right: '0',
  backgroundImage: `url(${waveRight})`,
  width: '14.1%',
  height: '30.2%',
  backgroundRepeat: ' no-repeat',
  backgroundSize: ' contain'
});

const LeftWave = styled('div')({
  position: 'absolute',
  top: '0',
  left: '0',
  backgroundImage: `url(${waveLeft})`,
  width: '24.1%',
  height: '30.2%',
  backgroundRepeat: ' no-repeat',
  backgroundSize: ' contain',
});

export { Container, RightWave, LeftWave }