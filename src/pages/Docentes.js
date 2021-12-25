import React from 'react'
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { StyledListWrapper, StyledTitle, StyledList, StyledListItem, StyledLink } from '../components/ListWrapper/ListWrapper'

const Docentes = () => {
  return (
    <>
      <Header/>
      <BackgroundImage/>
      <StyledListWrapper>
        <StyledTitle>DOCENTES</StyledTitle>
        <StyledList>
          <StyledListItem><StyledLink href="https://deioweb.com.ar/SAE/">Consulta Recibos de Sueldo</StyledLink></StyledListItem>
          <StyledListItem><StyledLink href="http://credentor.dyndns.tv:8081/Academico/Login.aspx">Ingreso Carga Docentes</StyledLink></StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Footer/>
    </>

  )
}

export default Docentes;