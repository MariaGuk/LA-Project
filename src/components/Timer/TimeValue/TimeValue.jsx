import React from 'react';

import { Container, StyledTime, StyledTimeValue, StyledTimeValueM } from './styled'

const TimeValue = ({ time, value, valueM }) => {
  return (
    <Container>
      <StyledTime>{time}</StyledTime>
      <StyledTimeValue>{value}</StyledTimeValue>
      <StyledTimeValueM>{valueM}</StyledTimeValueM>
    </Container>
  )
};

export default TimeValue