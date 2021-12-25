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
          <StyledListItem><StyledLink href="https://escuelacristoredentor.edu.ar/form2022/registro.html">Contrato de Servicio Educativo 2022</StyledLink></StyledListItem>
          <StyledRow/>
          <StyledSubTitle>INTERESADOS NUEVOS 2022</StyledSubTitle>
          <StyledListItem><StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSc3ENvHlAqVPCvlkseGxUbAjpjnDcQpzQtGM9mEQI7SA8o4zg/viewform">Formulario Interesados NUEVOS INGRESOS NIVEL INICIAL 2022</StyledLink></StyledListItem>
          <StyledListItem><StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSdGV3ZtZ6SLfMGZRzyHcnV_nEbc9SAY9oolNccsBMFTP83M2A/closedform">Formulario Interesados NUEVOS INGRESOS NIVEL PRIMARIO 2022</StyledLink></StyledListItem>
          <StyledListItem><StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSdY4PPlF_hOHli23SeYSjn7DYN88tlRhcx5PFkkZaR_dMQXeQ/closedform">Formulario Interesados NUEVOS INGRESOS NIVEL SECUNDARIO 2022</StyledLink></StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Footer/>
    </>

  )
}

export default Inscripciones;