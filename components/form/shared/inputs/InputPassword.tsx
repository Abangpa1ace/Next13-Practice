'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { InputKeyName } from '../../../../constants/form';
import { handleError } from '../../../../utils/error';
import FormerItem from '../FormerItem';
import Checkbox from '../../../common/Checkbox';

interface InputPasswordProps extends FormerInputProps {
  useToggleReveal?: boolean;
}

function InputPassword({
  id,
  title,
  errors,
  useToggleReveal = false,
  ...resetProps
}: InputPasswordProps): JSX.Element {
  const [error, setError] = useState<ErrorTypeData>(null);
  const [inputType, setInputType] = useState<'password' | 'text'>('password');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    if (error) setError(handleError(value, errors))
  }

  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e;
    setError(handleError(value, errors))
  } 

  const handleToggleRevealPassword = (value: boolean) => {
    setInputType(value ? 'text' : 'password');
  }

  return (
    <FormerItem id={id} title={title || InputKeyName[id]} errorData={error}>
      <Input type={inputType} name={id} onChange={handleChange} onBlur={handleBlur} {...resetProps} />
      {useToggleReveal ? <Checkbox id={id} label="비밀번호 표시" onChecked={handleToggleRevealPassword} style={{ position: 'absolute', top: 0, right: 0 }} /> : null}
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

export default InputPassword