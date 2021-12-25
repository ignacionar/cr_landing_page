import React from 'react'
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { StyledListWrapper, StyledTitle, StyledList, StyledListItem, StyledLink } from '../components/ListWrapper/ListWrapper'

const Administracion = () => {
  return (
    <>
      <Header/>
      <BackgroundImage/>
      <StyledListWrapper>
        <StyledTitle>ADMINISTRACIÓN</StyledTitle>
        <StyledList>
          <StyledListItem><StyledLink href="https://sites.google.com/escuelacristoredentor.edu.ar/mediosdepago/p%C3%A1gina-principal">Medios de Pago Disponibles</StyledLink></StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Footer/>
    </>

  )
}

export default Administracion;