import React from 'react'
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { StyledListWrapper, StyledTitle, StyledList, StyledListItem, StyledSubTitle, StyledRow, StyledEmail } from '../components/ListWrapper/ListWrapper'

const Contacto = () => {
  return (
    <>
      <Header/>
      <BackgroundImage/>
      <StyledListWrapper>
        <StyledTitle>CONTÁCTENOS</StyledTitle>
        <StyledSubTitle>NIVEL INICIAL Y PRIMARIO</StyledSubTitle>
        <StyledList style={{listStyleType: 'none', paddingBottom: '0'}}>
          <StyledListItem>Secretaria Inicial y Primario:</StyledListItem>
          <StyledListItem style={{marginBottom: '0'}}><StyledEmail href="mailto:secretaria.inicialyprimario@escuelacristoredentor.edu.ar" style={{fontSize: '12px'}}>secretaria.inicialyprimario@escuelacristoredentor.edu.ar</StyledEmail></StyledListItem>
        </StyledList>
        <StyledRow/>
        <StyledSubTitle>NIVEL SECUNDARIO</StyledSubTitle>
        <StyledList style={{listStyleType: 'none', paddingBottom: '0'}}>
          <StyledListItem>Directora de Secundario: Lic. Carolina S. Micieli:</StyledListItem>
          <StyledListItem><StyledEmail href="mailto:cmicieli@escuelacristoredentor.edu.ar" style={{fontSize: '12px'}}>secretaria.inicialyprimario@escuelacristoredentor.edu.ar</StyledEmail></StyledListItem>
        </StyledList>
        <StyledList style={{listStyleType: 'none', paddingBottom: '0'}}>
          <StyledListItem>Coordinadora de Curso: Lic. Jessica F. Rossi:</StyledListItem>
          <StyledListItem><StyledEmail href="mailto:jrossi@escuelacristoredentor.edu.ar" style={{fontSize: '12px'}}>secretaria.inicialyprimario@escuelacristoredentor.edu.ar</StyledEmail></StyledListItem>
        </StyledList>
        <StyledList style={{listStyleType: 'none', paddingBottom: '0'}}>
          <StyledListItem>Secretría:</StyledListItem>
          <StyledListItem><StyledEmail href="mailto:secretariasecundaria@escuelacristoredentor.edu.ar" style={{fontSize: '12px'}}>secretaria.inicialyprimario@escuelacristoredentor.edu.ar</StyledEmail></StyledListItem>
        </StyledList>
        <StyledList style={{listStyleType: 'none', paddingBottom: '0'}}>
          <StyledListItem>Preceptoría:</StyledListItem>
          <StyledListItem><StyledEmail href="mailto:preceptoria@escuelacristoredentor.edu.ar" style={{fontSize: '12px'}}>secretaria.inicialyprimario@escuelacristoredentor.edu.ar</StyledEmail></StyledListItem>
        </StyledList>
        <StyledList style={{listStyleType: 'none', paddingBottom: '0'}}>
          <StyledListItem>Equipo de Orientación:</StyledListItem>
          <StyledListItem style={{marginBottom: '0'}}><StyledEmail href="mailto:orientacionsecundario@escuelacristoredentor.edu.ar" style={{fontSize: '12px'}}>secretaria.inicialyprimario@escuelacristoredentor.edu.ar</StyledEmail></StyledListItem>
        </StyledList>
        <StyledRow/>
        <StyledSubTitle>ADMINISTRACIÓN</StyledSubTitle>
        <StyledList style={{listStyleType: 'none', paddingBottom: '0'}}>
          <StyledListItem><StyledEmail href="mailto:administracion@escuelacristoredentor.edu.ar" style={{fontSize: '12px'}}>secretaria.inicialyprimario@escuelacristoredentor.edu.ar</StyledEmail></StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Footer/>
    </>

  )
}

export default Contacto;