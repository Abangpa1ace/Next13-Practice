'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { InputKeyName } from '../../../../constants/form';
import { handleError } from '../../../../utils/error';
import FormerItem from '../FormerItem';

interface InputTextProps extends FormerInputProps {
}

function InputText({
  id,
  title,
  errors,
  type,
  ...resetProps
}: InputTextProps): JSX.Element {
  const [error, setError] = useState<ErrorTypeData>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    if (error) setError(handleError(value, errors))
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setError(handleError(value, errors))
  } 

  return (
    <FormerItem id={id} title={title || InputKeyName[id]} errorData={error}>
      <Input type={type || 'text'} name={id} onChange={handleChange} onBlur={handleBlur} {...resetProps} />
    </FormerItem>
  )
}

<<<<<<< HEAD
=======
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
<<<<<<< HEAD
=======

  ${({ isError }) => isError && css`
    border: 2px solid #f77465 !important; 
  `}
>>>>>>> ee940ad43e5b624225edb0082b8f1ba41d435896
`;

>>>>>>> main
export default InputText