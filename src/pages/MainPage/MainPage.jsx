import React, { useState } from 'react'

import MainInfo from '../../components/MainInfo';

import { Container, LeftWave, RightWave } from './styled';
import Footer from '../../components/Footer';
import ModalWindow from '../../components/ModalWindow';
import Header from '../../components/Header';

const MainPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  return (
    <Container className='container' style={{ background: modalOpen ? 'rgba(22, 44, 78, 0.6)' : '' }}>
      <RightWave className='right-wave' />
      <Header />
      <LeftWave className='left-wave' />
      <MainInfo />
      <Footer handleOpen={handleOpen} />
      {modalOpen && (
        <ModalWindow handleClose={handleClose} />
      )}
    </Container>
  )
};

export default MainPage