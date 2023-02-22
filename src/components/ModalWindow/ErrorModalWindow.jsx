import React from 'react';

import closeButton from '../../icons/close-button.svg';
import { errorContent } from '../../constants/modalMessages';

import { Modal, ModalContent, StyledButton, StyledHeader, StyledInfo, CloseButton } from './styled';

const ErrorModalWindow = ({ handleClose }) => {
  return (
    <Modal>
      <CloseButton onClick={handleClose}><img src={closeButton} alt={closeButton} /></CloseButton>
      <ModalContent>
        <StyledHeader>{errorContent.header}</StyledHeader>
        <StyledInfo>{errorContent.message}</StyledInfo>
        <StyledButton onClick={handleClose}>Close</StyledButton>
      </ModalContent>
    </Modal>
  )
};

export default ErrorModalWindow;