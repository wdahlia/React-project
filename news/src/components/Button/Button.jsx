import React from 'react';
import './Button.css';
import styled, { css } from 'styled-components';


const StyledButton = styled.button`
  background-color: rgb(245, 224, 210);
  font-weight: 600;
  letter-spacing: -0.3px;
  font-family: 'Helvetica Neue';
  padding: 0.3rem 2rem;
  border-radius: 10px;
  font-size: 1.3rem;

  &:hover {
    background-color: rgb(236, 185, 163);
  }
  ${(props) => 
    props.detail && 
    css`
    background-color: #B80000;
    padding: 1rem 2rem;
    text-transform: uppercase;
    color: white;
    
    &:hover {
      background-color: #A11000;
    }
    `}
`;

export default function Button({ children, ...props }) {

  // 각각의 button 컴포넌트가 onclick 되었을때 그 값을 map돌면서 해당 idx만 classList add 해주는 방식으로 가져가면 될듯
  return (
    <StyledButton {...props}>
        { children }
    </StyledButton>
  );
}

