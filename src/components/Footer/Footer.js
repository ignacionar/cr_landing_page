import React from 'react';
import styled, {keyframes} from 'styled-components';

const Up = keyframes`
  0% {
    transform: translateY(150%);
  }

  100% {
    transform: translateY(0%);
  }
`

const StyledFooter = styled.footer`
  background-color: #00499d;
  border-top: 8px solid #D8B06D;
  height: 50px;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  bottom: 0;
  position: fixed;
  @media only screen and (max-width: 1000px) {
    height: 30px;
    border-top: 4px solid #D8B06D;
    bottom: 0;
    position: fixed;
  }
  @media only screen and (max-height: 500px) {
    visibility: hidden;
  }
`;

const StyledSection = styled.h2`
  color: white;
  animation: 2s forwards ${Up};
  @media only screen and (max-width: 1000px) {
    font-size: 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledSection>Justiniano Posse 864 - B° Jardín - 5014 - Córdoba - Tel: 0351-4645485</StyledSection>
    </StyledFooter>
  )
}

export default Footer
