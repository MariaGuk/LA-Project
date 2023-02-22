import React from 'react';

import arrowRight from '../../icons/arrow-right.svg'
import Timer from '../../components/Timer';

import { Container, StyledCaption, CaptionContainer, StyledTitle, StyledOtherInfo, StyledButton, StyledButtonText, Arrow } from './styled';

export const MainInfo = () => {
  return (
    <Container >
      <CaptionContainer className='caption'>
        <StyledCaption> Under Construction </StyledCaption >
        <StyledTitle>
          We are making lots of improvements and will be back soon
        </StyledTitle>
      </CaptionContainer>
      <Timer />
      <StyledOtherInfo className="other-info">Check our event page when you wait:</StyledOtherInfo>
      <StyledButton className="other-info">
        <StyledButtonText
          href='https://www.google.com'
          target='_blank'
          rel="noreferrer">
          Go to the event
        </StyledButtonText>
        <Arrow src={arrowRight} />
      </StyledButton>
    </Container>
  )
};

export default MainInfo;