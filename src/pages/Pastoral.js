import React from 'react'
import { BackgroundImage } from '../components/BackgroundImage/BackgroundImage'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { StyledListWrapper, StyledTitle, StyledList, StyledListItem, StyledLink } from '../components/ListWrapper/ListWrapper'

const Pastoral = () => {
  return (
    <>
      <Header/>
      <BackgroundImage/>
      <StyledListWrapper>
        <StyledTitle>PASTORAL</StyledTitle>
        <StyledList>
          <StyledListItem><StyledLink href="https://www.instagram.com/pastoralcristo/">Instagram de la Pastoral</StyledLink></StyledListItem>
        </StyledList>
      </StyledListWrapper>
      <Footer/>
    </>

  )
}

export default Pastoral;