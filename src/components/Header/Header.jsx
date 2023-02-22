import React from 'react'

import mainLogo from '../../icons/logo.svg'

import { Container, Link, StyledLogo } from './styled';

export const Header = () => {
  return (
    <Container className='header'>
      <Link href="/">
        <StyledLogo src={mainLogo} alt="LEAD ADVISORS" />
      </Link>
    </Container>
  );
};

export default Header;