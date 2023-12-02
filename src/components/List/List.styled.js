import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkMovies = styled(Link)`
  color: darkgreen;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: black;
  }
`;

export const MovieItem = styled.dt`
  margin-bottom: 8px;
`;

export const Section = styled.section`
  padding-right: 50px;
  padding-left: 50px;
`;

export const SectionTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 5px;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  border-bottom: 2px solid #000;
  padding-bottom: 5px;
`;

export const List = styled.ul`
  list-style: disc;
  color: #8a0f2c;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const StyledLink = styled(Link)`
  font-style: 20px;
  color: #8a0f2c;
  transition: color 200ms ease-in-out, border-bottom 200ms ease-in-out;

  &:hover,
  &:focus {
    color: #8a0f2c;
    border: 2px solid #8a0f2c;
    padding: 3px;
  }
`;
