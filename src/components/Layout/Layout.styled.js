import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  border-bottom: solid 2px darkblue;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 15px;
  font-weight: 600;
  font-size: 28px;
  color: black;
  &:hover {
    color: grey;
  }
`;
