import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  border: 1px solid black;
  border-radius: 6px;
  padding: 8px;
  margin-right: 20px;
  font-size: 16px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  width: 100px;
  height: 36px;
  color: white;
  background-color: grey;
  cursor: pointer;
  position: relative;
  border-radius: 4px;
  border: 1px solid black;

  &:active {
    color: black;
  }

  &:hover: {
    color: black;
  }
`;
