import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Logo from '../../assets/Encabezado.png';

const Left = keyframes`
  0% {
    margin-left: 100%;
  }

  100% {
    margin-left: 0%;
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
  @media only screen and (max-width: 600px) {
    grid-template-columns: 100px 1fr;
    max-height: 65px;
  }
`;

const StyledHeaderImg = styled.img`
  width: 75%;
  margin: 0 8%;
  position: relative;
  z-index: 1;
`;

const StyledTitle = styled.h1`
  width: 100%;
  position: relative;
  color: white;
  animation: ${Left} 2s forwards;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to={'/'}  style={{marginLeft: '20px'}}>
        <StyledHeaderImg src={Logo}/>
      </Link>
      <StyledTitle>INSTITUTO PARROQUIAL CRISTO REDENTOR</StyledTitle>
      
    </StyledHeader>
  )
}

export default Header

