import styled from "styled-components";

const StyledAccordionItem = styled('li')({
  display: 'flex',
  flexDirection: 'row',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  overflow: 'hidden',
  height: '682px',
  marginRight: '4px',
  borderBottom: '2px solid #DF2224',
  whiteSpace: 'wrap',
  '@media(max-width: 768px)': {
    boxShadow: '0px 0px 2px  #FF1E00',
    flexDirection: 'column-reverse',
    maxWidth: '688px',
    width: '100%',
    height: '100%',
    margin: '0px 0px 4px 0px ',
  },
  '@media(max-width: 360px)': {
    width: '320px',
  },
});

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  cursor: 'pointer',
  color: '#ffffff',
  minHeight: '100%',
  padding: '0px 22px',
  background: 'linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%)',
  '@media(max-width: 768px)': {
    flexDirection: 'row-reverse',
    minWidth: '100%',
    padding: '26px 0px 26px 36px',
  },
  '@media(max-width: 360px)': {
    padding: '20px 0px 20px 20px',
  },
});

const Title = styled('p')({
  writingMode: 'tb-rl',
  transform: 'rotate(-180deg)',
  marginBottom: '40px',
  fontFamily: 'SF Pro Display',
  fontWeight: '600',
  fontSize: ' 32px',
  '@media(max-width: 768px)': {
    writingMode: 'horizontal-tb',
    transform: 'rotate(0deg)',
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '0px',
    display: 'flex',
  },
  '@media(max-width: 360px)': {
    fontSize: '18px',
    width: '242px',
  },
});

const Number = styled('p')({
  marginBottom: '20px',
  fontFamily: 'SF Pro Display',
  fontWeight: '500',
  fontSize: ' 40px',
  '@media(max-width: 768px)': {
    fontSize: '32px',
    marginRight: '32px',
    marginBottom: '0px',
  },
  '@media(max-width: 360px)': {
    fontSize: '24px',
    marginRight: '16px',
  },
});

const AccordionDetailsContainer = styled('div')({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  display: 'flex',
  position: 'relative',
  height: '682px',
  width: '1000px',
  '@media(max-width: 768px)': {
    height: '460px',
    width: '688px',
  },
  '@media(max-width: 360px)': {
    height: '376px',
    width: '320px',
  },
});

const AccordionDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  paddingLeft: '42px',
  width: '364px',
  overflow: 'hidden',
  backdropFilter: 'blur(10px)',
  background: 'rgba(18, 18, 18, 0.8)',
  '@media(max-width: 768px)': {
    width: '688px',
    height: '192px',
    backdropFilter: 'blur(20px)',
    paddingTop: '26px',
    paddingLeft: '40px',
    marginTop: '268px'
  },
  '@media(max-width: 360px)': {
    width: '320px',
    height: '158px',
    paddingLeft: '20px',
    marginTop: '218px',
    paddingTop: '24px'
  },
});

const NumberDetails = styled('div')({
  fontFamily: 'SF Pro Display',
  fontSize: '380px',
  fontWeight: '600',
  color: 'rgba(255, 255, 255, 0.04)',
  position: 'absolute',
  textAlign: 'right',
  top: '-38px',
  left: '-142px',
  letterSpacing: '-0.03em',
  '@media(max-width: 768px)': {
    fontSize: '152px',
    left: '550px',
    top: '-20px',
  },
  '@media(max-width: 360px)': {
    fontSize: '80px',
    left: '246px',
    top: '0',
  },
});

const StyledTitle = styled('p')({
  fontFamily: 'SF Pro Display',
  fontWeight: '600',
  fontSize: '24px',
  marginBottom: '12px',
  color: '#ffffff',
  display: 'flex',
  lineHeight: '120%',
  '@media(max-width: 768px)': {
    fontSize: '18px',
    marginBottom: '8px'
  },
  '@media(max-width: 360px)': {
    fontSize: '16px'
  },
});

const Date = styled('p')({
  fontFamily: 'SF Pro Display',
  marginBottom: '26px',
  fontSize: '18px',
  color: '#ffffff',
  display: 'flex',
  lineHeight: '150%',
  '@media(max-width: 768px)': {
    fontSize: '16px'
  },
  '@media(max-width: 360px)': {
    fontSize: '14px'
  },
});

const Button = styled('button')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '48px',
  cursor: ' pointer',
  border: '2px solid rgba(255, 255, 255, 1)',
  borderLeft: '7px solid rgba(255, 255, 255, 1)',
  fontWeight: '600',
  letterSpacing: '0.03em',
  background: 'transparent',
  width: '250px',
  height: '62px',
  '@media(max-width: 768px)': {
    width: '174px',
    fontSize: '16px',
    marginBottom: '40px',
  },
  '@media(max-width: 360px)': {
    marginBottom: '20px'
  },
});

const StyledButtonText = styled('a')({
  fontFamily: 'SF Pro Display',
  color: '#FFFFFF',
  fontSize: '18px',
  '@media(max-width: 768px)': {
    fontSize: '16px'
  },
});


export { StyledAccordionItem, Container, Title, Number, AccordionDetailsContainer, AccordionDetails, StyledTitle, Date, Button, StyledButtonText, NumberDetails, };