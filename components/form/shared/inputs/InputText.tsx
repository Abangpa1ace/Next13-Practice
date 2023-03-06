'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { InputKeyName, InputKeys } from '../../../../constants/form';
import { handleError } from '../../../../utils/error';
import FormerItem from '../FormerItem';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: InputKeys;
  title?: string;
  errors?: ErrorTypeKey[];
}

function InputText({
  id,
  title,
  errors,
  type,
  ...resetProps
}: Props): JSX.Element {
  const [error, setError] = useState<ErrorTypeData>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setError(handleError(value, errors))
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setError(handleError(value, errors))
  } 

  return (
    <FormerItem id={id} title={title || InputKeyName[id]} errorData={error}>
      <Input type={type || 'text'} name={id} onBlur={handleBlur} {...resetProps} />
    </FormerItem>
  )
}

const Input = styled.input<{ isError?: boolean }>`
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

  ${({ isError }) => isError && css`
    border: 2px solid #f77465 !important; 
  `}
`;

export default InputText