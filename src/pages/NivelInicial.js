import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { StyledListWrapper, StyledTitle } from '../components/ListWrapper/ListWrapper';

const NivelInicial = () => {
  return (
    <>
      <Header/>
      <BackgroundImage/>
      <StyledListWrapper>
        <StyledTitle>NIVEL INICIAL</StyledTitle>
      </StyledListWrapper>
      <Footer/>
    </>
  )
}

export default NivelInicial;
