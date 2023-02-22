import styled from "styled-components";

const Modal = styled('div')({
  maxHeight: '370px',
  height: '100%',
  maxWidth: '320px',
  width: '100%',
  backgroundColor: '#ffffff',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '1px solid rgba(19, 89, 120, 0.07)',
  borderRadius: '2px',
  zIndex: '10',
});

const ModalContent = styled('div')({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '16px',
});

const CloseButton = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  cursor: 'pointer',
  marginTop: '8px',
  marginBottom: '34px'
})

const StyledHeader = styled('h2')({
  fontFamily: 'Poppins',
  fontWeight: '700',
  fontSize: '36px',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: ' #162C4E',
  marginBottom: '28px,'
});

const StyledInfo = styled('p')({
  fontFamily: 'Poppins',
  fontSize: '16px',
  color: 'rgba(0, 0, 0, 0.8)',
  lineHeight: '150%',
  marginBottom: '30px',
  maxWidth: '280px',
  width: '100%',
});

const StyledButton = styled('button')({
  maxWidth: '200px',
  width: '100%',
  padding: '16px 74px',
  fontFamily: 'Poppins',
  lineHeight: '150%',
  fontSize: '16px',
  color: '#ffffff',
  backgroundColor: '#1D4169',
  borderRadius: '40px',
  border: 'transparent',
});

export { Modal, ModalContent, CloseButton, StyledHeader, StyledInfo, StyledButton };