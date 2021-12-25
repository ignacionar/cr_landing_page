import styled from 'styled-components';
import { FadeIn } from './../../styles/utils/FadeIn';

export const StyledListWrapper = styled.div`
  width: 450px;
  display: grid;
  margin: 0 auto;
  z-index: 1;
  align-items: center;
  position: relative;
  bottom: 350px;
  background-color: #fff;
  border-radius: 15px;
  animation: ${FadeIn} 2s;
  @media only screen and (max-width: 600px) {
    top: 160px;
    width: 300px;
    text-align: center;
  }
`;

export const StyledTitle = styled.h1`
  color: black;
  padding: 0;
  font-weight: font;
`;


export const StyledList = styled.ul`
  background-color: #fff;
  padding: 0;
  padding-bottom: 1rem;
`;

export const StyledListItem = styled.li`
  margin: 1rem 0;
  font-size: 0.9rem;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bolder;
  &:hover {
    color: #0f60d1;
    text-decoration: underline;
  }
`;

export const StyledSubTitle = styled.h3`
  text-decoration: underline;
  padding: 10px;
  font-size: 1rem;
  text-align: center;
`;

export const StyledRow = styled.hr`
  border: 1px solid grey;
`;
