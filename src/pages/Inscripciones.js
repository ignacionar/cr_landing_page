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
          <StyledListItem><StyledLink href="https://deioweb.com.ar/SAE/">Contrato de Servicio Educativo 2022</StyledLink></StyledListItem>
          <StyledRow/>
          <StyledSubTitle>INTERESADOS NUEVOS 2022</StyledSubTitle>
          <StyledListItem><StyledLink href="http://credentor.dyndns.tv:8081/Academico/Login.aspx">Formulario Interesados NUEVOS INGRESOS NIVEL INICIAL 2022</StyledLink></StyledListItem>
          <StyledListItem><StyledLink href="http://credentor.dyndns.tv:8081/Academico/Login.aspx">Formulario Interesados NUEVOS INGRESOS NIVEL PRIMARIO 2022</StyledLink></StyledListItem>
          <StyledListItem><StyledLink href="http://credentor.dyndns.tv:8081/Academico/Login.aspx">Formulario Interesados NUEVOS INGRESOS NIVEL SECUNDARIO 2022</StyledLink></StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Footer/>
    </>

  )
}

export default Inscripciones;