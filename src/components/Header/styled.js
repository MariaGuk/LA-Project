import styled from "styled-components";

const Container = styled('header')({
  paddingTop: '110px',
  paddingBottom: '92px',
  '@media(max-width: 768px)': {
    paddingTop: '98px',
    paddingBottom: '168px',
  },
  '@media(max-width: 360px)': {
    paddingTop: '80px',
    paddingBottom: '66px',
  }
});

const Link = styled('a')({
  cursor: 'pointer',
});

const StyledLogo = styled('img')({
  width: '100%',
  height: '100%',
  maxWidth: '190px',
  maxHeight: '60px',
  '@media(max-width: 360px)': {
    maxWidth: '128px',
    maxHeight: '40px',
  }
});

export { Container, Link, StyledLogo };