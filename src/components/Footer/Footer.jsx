import React from 'react'
import { Link } from 'react-scroll';

import Form from './Form';
import arrowDown from '../../icons/arrow-down.svg';

import { Container, StyledFooter, EventsButton, ArrowDown } from './styled';

export const Footer = ({ handleOpen }) => {
  return (
    <StyledFooter>
      <Container>
        <Form handleOpen={handleOpen} />
      </Container>
      <Link to='otherInfo' spy={true} smooth={true} offset={true} duration={400}>
        <EventsButton>Other Events
          <ArrowDown src={arrowDown} />
        </EventsButton>
      </Link>
    </StyledFooter >
  )
};

export default Footer;