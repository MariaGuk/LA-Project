import styled from "styled-components";


const StyledFooter = styled('footer')({
  backgroundColor: '#162C4E',
  padding: '60px 0px 72px 0px',
  overflow: 'hidden',
  '@media(max-width: 768px)': {
    padding: '40px 0px'
  },
  '@media(max-width: 360px)': {
    padding: '30px 0px'
  },
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  '@media(max-width: 768px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const StyledForm = styled('form')({
  border: '1px solid #000000CC',
  background: '#FFFFFF',
  boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.4)',
  borderRadius: '40px',
  maxWidth: '440px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto ',
  '@media(max-width: 768px)': {
    maxWidth: '360px',
  },
  '@media(max-width: 360px)': {
    maxWidth: '280px',
  },
});

const StyledInputField = styled('input')({
  fontFamily: 'Roboto',
  margin: '16px 0 16px 28px',
  fontSize: '16px',
  outline: 'none',
  border: 0,
  maxWidth: '260px',
  width: '100%',
  lineHeight: '150%',
  color: '#00000099',
  '@media(max-width: 768px)': {
    fontSize: '14px',
    maxWidth: '202px',
    margin: '10px 0 10px 20px',
  }
});

const Button = styled('button')({
  position: 'relative',
  marginLeft: '102px',
  width: '42px',
  height: '42px',
  borderRadius: '200px',
  cursor: 'pointer',
  backgroundColor: '#DF2224',
  border: 'transparent',
  '@media(max-width: 768px)': {
    width: '34px',
    height: '34px',
  },
  '@media(max-width: 360px)': {
    marginLeft: '20px'
  },
});

const Arrow = styled('img')({
  position: 'absolute',
  left: '11px',
  top: '11px',
  '@media(max-width: 768px)': {
    left: '8px',
    top: '8px',
  },
});

const EventsButton = styled('p')({
  cursor: 'pointer',
  color: 'white',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  justifyContent: 'flex-end',
  marginTop: '-40px',
  '@media(max-width: 768px)': {
    justifyContent: 'center',
    paddingTop: '16px',
    fontSize: '16px',
    margin: '0 auto',
  },
});

const ArrowDown = styled('img')({
  marginLeft: '15px',
  marginRight: '110px',
  '@media(max-width: 768px)': {
    marginLeft: '8px',
    marginRight: '0'
  },
})

export { StyledFooter, Container, StyledForm, StyledInputField, Button, Arrow, EventsButton, ArrowDown }