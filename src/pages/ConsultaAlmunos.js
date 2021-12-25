import React from 'react';
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import { StyledLink, StyledList, StyledListItem, StyledListWrapper, StyledTitle } from '../components/ListWrapper/ListWrapper';

const ConsultaAlmunos = () => {
  return (
    <>
      <Header />
      <BackgroundImage/>
      <StyledListWrapper>
        <StyledTitle>CONSULTA ALUMNOS</StyledTitle>
        <StyledList>
          <StyledListItem><StyledLink href='https://deioweb.com.ar/sag/'>Presione aquí para su consulta</StyledLink></StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Footer/>
    </>
    
  )
}

export default ConsultaAlmunos;
