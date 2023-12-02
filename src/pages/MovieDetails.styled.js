import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
  height: 40px;
  width: 120px;
  background-color: grey;
  color: white;
  border-radius: 4px;
  border: 1px solid black;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: darkgrey;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 24px;
`;

export const LinkInfo = styled(Link)`
  color: darkgreen;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: black;
  }
`;
