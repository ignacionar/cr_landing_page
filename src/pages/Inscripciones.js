import React from 'react'
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { StyledListWrapper, StyledTitle, StyledList, StyledListItem, StyledLink, StyledRow, StyledSubTitle } from '../components/ListWrapper/ListWrapper'

const Inscripciones = () => {
  return (
    <>
      <Header/>
      <BackgroundImage/>
      <StyledListWrapper>
        <StyledTitle>INSCRIPCIONES</StyledTitle>
        <StyledList>
          <StyledSubTitle>ACTUALES ESTUDIANTES DE LA INSTITUCIÓN</StyledSubTitle>
          <StyledListItem><StyledLink href="https://deioweb.com.ar/SAE/">Consulta Recibos de Sueldo</StyledLink></StyledListItem>
          <StyledRow/>
          <StyledListItem><StyledLink href="http://credentor.dyndns.tv:8081/Academico/Login.aspx">Ingreso Carga Docentes</StyledLink></StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Footer/>
    </>

  )
}

export default Inscripciones;