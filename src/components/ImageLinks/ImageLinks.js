import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import NivelInicial from '../../assets/nivel-inicial.png';
import Pastoral from '../../assets/pastoral.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faClipboard, faListOl, faPaperclip, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import { FadeIn } from './../../styles/utils/FadeIn';

const GoUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-5%);
  }
`;

const StyledCircleImage = styled.img`
  width: 100px;
  @media only screen and (max-width: 600px) {
    width: 60px;
  }
`;

const StyledIcon = styled.p`
  color: black;
  font-size: 60px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
  }
`;

const StyledCircle = styled.div`
  background-color: white;
  border-radius: 100%;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

const StyledLinkSquare = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    animation: ${GoUp} 1s forwards;
    text-decoration: underline white 2px;
  }
  @media only screen and (max-width: 600px) {
    width: 153px;
  }
`;

const StyledLinkText = styled.h3`
  color: white;
  text-shadow: 1px 1px 6px black;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
  }
`;

const StyledImagesGrid = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  grid-row-gap: 20px;
  text-align: center;
  align-items: center;
  animation: ${FadeIn} 3s;
  position: relative;
  bottom: 350px;
  overflow: none;
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 300px;
    padding: 20px;
    position: fixed;
    bottom: 30px;
    grid-gap: 5px;
    align-items: center;
    @media only screen and (min-height: 700px) and (max-width: 600px) {
    bottom: 50px;
    width: 360px;
    grid-gap: 2rem;
  }
  }
`;

const ImageLinks = () => {
  return (
   
      <StyledImagesGrid>
        <Link to={'/nivel-inicial'} style={{textDecoration: 'none'}}>
          <StyledLinkSquare>
              <StyledCircleImage src={NivelInicial} alt=""  />
              <StyledLinkText>Nivel Inicial</StyledLinkText>
            </StyledLinkSquare>
        </Link>
        <Link to={'/nivel-primario'} style={{textDecoration: 'none'}}>
          <StyledLinkSquare>
            <StyledCircle style={{border: '#00499d 3px solid'}}>
              <StyledIcon><FontAwesomeIcon icon={faPencilAlt} style={{color: '#00499d'}}/></StyledIcon>
            </StyledCircle>
              <StyledLinkText>Nivel Primario</StyledLinkText>
            </StyledLinkSquare>
        </Link>
        <Link to={'/nivel-secundario'} style={{textDecoration: 'none'}}>
          <StyledLinkSquare>
            <StyledCircle style={{border: '#4c0013 3px solid'}}>
              <StyledIcon><FontAwesomeIcon icon={faGraduationCap} style={{color: '#4c0013'}}/></StyledIcon>
            </StyledCircle>
              <StyledLinkText>Nivel Secundario</StyledLinkText>
            </StyledLinkSquare>
        </Link>
        <Link to={'/consulta-alumnos'} style={{textDecoration: 'none'}}>
          <StyledLinkSquare>
            <StyledCircle style={{border: '#008f39 3px solid'}}>
              <StyledIcon><FontAwesomeIcon icon={faListOl} style={{color: '#008f39'}}/></StyledIcon>
            </StyledCircle>
              <StyledLinkText>Consulta Alumnos</StyledLinkText>
            </StyledLinkSquare>
        </Link>
        <Link to={'/docentes'} style={{textDecoration: 'none'}}>
          <StyledLinkSquare>
            <StyledCircle style={{border: '#ff8000 3px solid'}}>
              <StyledIcon><FontAwesomeIcon icon={faChalkboardTeacher} style={{color: '#ff8000'}}/></StyledIcon>
            </StyledCircle>
              <StyledLinkText>Docentes</StyledLinkText>
            </StyledLinkSquare>
        </Link>
        <Link to={'/pastoral'} style={{textDecoration: 'none'}}>
          <StyledLinkSquare>
              <StyledCircleImage src={Pastoral} alt=""  />
              <StyledLinkText>Pastoral</StyledLinkText>
            </StyledLinkSquare>
        </Link>
        <Link to={'/inscripciones'} style={{textDecoration: 'none'}}>
          <StyledLinkSquare>
            <StyledCircle style={{border: '#6600a1 3px solid'}}>
              <StyledIcon><FontAwesomeIcon icon={faAddressBook} style={{color: '#6600a1'}}/></StyledIcon>
            </StyledCircle>
              <StyledLinkText>Inscripciones</StyledLinkText>
            </StyledLinkSquare>
        </Link>
        <Link to={'/administracion'} style={{textDecoration: 'none'}}>
          <StyledLinkSquare>
            <StyledCircle  style={{border: '#c81d11 3px solid'}}>
              <StyledIcon><FontAwesomeIcon icon={faClipboard} style={{color: '#c81d11'}}/></StyledIcon>
            </StyledCircle>
              <StyledLinkText>Administración</StyledLinkText>
            </StyledLinkSquare>
        </Link>
        <Link to={'/contacto'} style={{textDecoration: 'none'}}>
          <StyledLinkSquare>
            <StyledCircle style={{border: '#00a6d6 3px solid'}}>
              <StyledIcon><FontAwesomeIcon icon={faPaperclip} style={{color: '#00a6d6'}}/></StyledIcon>
            </StyledCircle>
              <StyledLinkText>Contacto</StyledLinkText>
            </StyledLinkSquare>
        </Link>
      </StyledImagesGrid>
  )
}

export default ImageLinks
