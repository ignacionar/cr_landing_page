import styled, { keyframes } from 'styled-components';
import Background from '../../assets/background.png';

const Blur = keyframes`
  0% {
    filter: blur(0)
  }

  100% {
    filter: blur(2px)
  }
`

export const BackgroundImage = styled.div`
  background-image: url(${Background});
  background-size: cover;
  width: 100%;
  height: 554px;
  animation: ${Blur} forwards 3s;
  z-index: 0;
  position: relative;
  @media only screen and (max-width: 600px) { 
    position: fixed;
    background-position: center;
  }
`;