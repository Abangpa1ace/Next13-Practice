'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { forwardRef, InputHTMLAttributes } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>

const BaseInput = forwardRef<HTMLInputElement, Props>((props, ref) => {
  console.log('1st props', props);
  return (
    <Input ref={ref} {...props} />
  )
})

BaseInput.displayName = 'BaseInput'

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none !important;
    border: 2px solid #b581de;
  }

  /* ${({ isError }) => isError && css`
    border: 2px solid #f77465 !important; 
  `} */
`;

export default BaseInput