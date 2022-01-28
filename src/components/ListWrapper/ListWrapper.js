import styled from 'styled-components';
import { FadeIn } from './../../styles/utils/FadeIn';

export const StyledListWrapper = styled.div`
  width: 425px;
  display: grid;
  z-index: 1;
  align-items: center;
  position: absolute;
  background-color: #fff;
  border-radius: 15px;
  top: 25%;
  left: 35%;
  animation: ${FadeIn} 2s;
  max-height: 350px;
  overflow: auto;
  @media only screen and (max-width: 1000px) {
    width: 90%;
    text-align: center;
    left: 4.5%;
  }
`;

export const StyledTitle = styled.h1`
  color: black;
  padding: 0.5rem 0;
`;


export const StyledList = styled.ul`
  background-color: #fff;
  padding: 0;
  padding-bottom: 1rem;
  list-style: disc inside;
  border-radius: 15px;
`;

export const StyledListItem = styled.li`
  margin: 1rem 0;
  text-align: center;
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

export const StyledEmail = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bolder;
  font-size: 12px;
  &:hover {
    color: #0f60d1;
    text-decoration: underline;
  }
  @media only screen and (max-width: 1000px) {
    font-size: 10px;
  }
`;

export const StyledSubTitle = styled.h3`
  text-decoration: underline;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  text-align: center;
`;

export const StyledRow = styled.hr`
  border: 1px solid grey;
  width: 75%;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;
