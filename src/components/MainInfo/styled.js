import styled from "styled-components";

const Container = styled('main')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const CaptionContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const StyledCaption = styled('h2')({
  fontSize: '76px',
  fontFamily: 'Poppins',
  fontWeight: '700',
  opacity: '0.39',
  color: '#162C4E',
  lineHeight: '104%',
  textTransform: 'uppercase',
  marginBottom: '8px',
  '@media(max-width: 768px)': {
    fontSize: '36px',
    maxWidth: '420px',
    width: '100%',
    marginBottom: '20px'
  },
  '@media(max-width: 360px)': {
    marginBottom: '16px',
  }
});

const StyledTitle = styled('p')({
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontWeight: '400',
  lineHeight: '150%',
  color: '#000000',
  maxWidth: '424px',
  width: '100%',
  letterSpacing: '-0.3px',
  marginBottom: '32px',
  '@media(max-width: 768px)': {
    fontSize: '16px',
    maxWidth: '286px',
    width: '100%',
    marginBottom: '40px',
  },
});

const StyledOtherInfo = styled('p')({
  fontFamily: 'Poppins',
  marginTop: '70px',
  fontSize: '18px',
  color: '#000000CC',
  '@media(max-width: 768px)': {
    marginTop: '40px',
    fontSize: '16px',
  },
});

const StyledButton = styled('div')({
  marginTop: '12px',
  marginBottom: '156px',
  width: '240px',
  height: '60px',
  borderRadius: '40px',
  background: '#1D4169',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer',
  '@media(max-width: 768px)': {
    marginBottom: '154px'
  },
  '@media(max-width: 360px)': {
    marginBottom: '120px'
  }
});

const StyledButtonText = styled('a')({
  fontFamily: 'Poppins',
  color: '#FFFFFF',
  fontSize: '18px',
  marginLeft: '28px',
  lineHeight: '150%'
});

const Arrow = styled('img')({
  marginLeft: '26px',
})

export { Container, StyledCaption, CaptionContainer, StyledTitle, StyledOtherInfo, StyledButton, StyledButtonText, Arrow }