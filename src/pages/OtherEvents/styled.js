import styled from "styled-components";

const Container = styled('div')({
  backgroundColor: ' #F5F5F5',
  display: 'flex',
  flexDirection: 'column',
  padding: '110px 108px 100px 108px',
  '@media(max-width: 768px)': {
    padding: '46px 40px'
  },
  '@media(max-width: 360px)': {
    padding: '60px 0px 52px 0px'
  },
});

const Header = styled('h2')({
  fontSize: '76px',
  fontFamily: 'Poppins',
  fontWeight: '700',
  opacity: '0.39',
  color: '#162C4E',
  lineHeight: '104%',
  textTransform: 'uppercase',
  marginBottom: '40px',
  '@media(max-width: 768px)': {
    fontSize: '36px',
    marginBottom: '20px',
  },
});

const Accordion = styled('ul')({
  display: 'flex',
  alignItems: 'center',
  '@media(max-width: 768px)': {
    flexDirection: 'column',
    width: '100%',
  },
})

export { Container, Header, Accordion }