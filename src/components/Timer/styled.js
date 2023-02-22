import styled from "styled-components";

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'row',
});

const StyledDots = styled('div')({
  fontFamily: 'Gloock',
  color: '#162C4E',
  fontSize: '72px',
  paddingTop: '4px',
  borderRadius: '100px',
  '@media(max-width: 768px)': {
    paddingTop: '0px',
    fontSize: '36px',
  },
})


export { Container, StyledDots }