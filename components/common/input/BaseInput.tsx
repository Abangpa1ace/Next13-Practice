'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ElementType, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  as?: ElementType;
}

const BaseInput = ({
  type = 'text',
  as,
  hasError,
  ...restProps
}: InputProps) => {
  return <Input type={type} as={as} hasError={!!hasError} {...restProps} />
}

const Input = styled.input<{ hasError: boolean }>`
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

  ${({ hasError }) => hasError && css`
    border: 2px solid #f77465 !important; 
  `}
`;

export default BaseInput;