import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Logo from '../../assets/Encabezado.png';

const Left = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
`

const StyledHeader = styled.header`
  background-color: #00499d;
  width: 100%;
  max-height: 100px;
  border-bottom: 8px solid #D8B06D;
  display: grid;
  grid-template-columns: 1fr 800px;
  align-items: center;
  text-align: center;
  position: fixed;
  z-index: 3;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 100px 1fr;
    max-height: 65px;
  }
  @media only screen and (max-height: 500px) {
    max-height: 50px;
    border-bottom: 4px solid #D8B06D;
  }
`;

const StyledHeaderImg = styled.img`
  width: 75%;
  position: relative;
  z-index: 1;
  @media only screen and (max-height: 500px) {
    width: 60%;
  }
`;

const StyledTitle = styled.h1`
  width: 100%;
  position: relative;
  color: white;
  animation: ${Left} 2s forwards;
  @media only screen and (max-width: 1000px) {
    font-size: 0.65rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to={'/'}  style={{marginLeft: '0.7rem'}}>
        <StyledHeaderImg src={Logo}/>
      </Link>
      <StyledTitle>INSTITUTO PARROQUIAL CRISTO REDENTOR</StyledTitle>
      
    </StyledHeader>
  )
}

export default Header

