import React from 'react'
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { StyledListWrapper, StyledTitle, StyledList, StyledListItem, StyledLink } from '../components/ListWrapper/ListWrapper'

const NivelSecundario = () => {
  return (
    <>
      <Header/>
      <BackgroundImage/>
      <StyledListWrapper>
        <StyledTitle>NIVEL SECUNDARIO</StyledTitle>
        <StyledList>
          <StyledListItem><StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSdCnaVtDs4utcoYHyBX_nmAHqDQ8JFqr7ZGoIBjUvs7gTUa8Q/viewform">Inscripción a Exámenes Febrero 2021</StyledLink></StyledListItem>
          <StyledListItem><StyledLink href="https://drive.google.com/drive/folders/1iBCGYp7qlIsWFFXcO0rhcUr0SbRmeSDr?usp=sharing">Programas de Contenidos 2021</StyledLink></StyledListItem>
          <StyledListItem><StyledLink href="https://docs.google.com/forms/d/e/1FAIpQLSeZ-WEFdCNr-thEKzIadjSsQTmE2OwE5TUKX7jigTVatZ7oVg/viewform">Elecciones de Centro de Estudiantes 2021</StyledLink></StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Footer/>
    </>

  )
}

export default NivelSecundario
