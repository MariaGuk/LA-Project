import React from 'react';

import { successContent } from '../../constants/modalMessages';
import closeButton from '../../icons/close-button.svg';

import { Modal, ModalContent, StyledButton, StyledHeader, StyledInfo, CloseButton } from './styled';

const ModalWindow = ({ handleClose }) => {
  return (
    <Modal>
      <CloseButton onClick={handleClose}><img src={closeButton} alt={closeButton} /></CloseButton>
      <ModalContent>
        <StyledHeader className='header-modal'>{successContent.header}</StyledHeader>
        <StyledInfo className='message-modal'>{successContent.message}</StyledInfo>
        <StyledButton onClick={handleClose}>Close</StyledButton>
      </ModalContent>
    </Modal >
  )
};

export default ModalWindow;