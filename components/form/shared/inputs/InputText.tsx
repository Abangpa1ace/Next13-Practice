'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';
import { InputKeyName, InputKeys } from '../../../../constants/form';
import { handleError } from '../../../../utils/error';
import ErrorMessage from '../ErrorMessage';
import FormerItem from '../FormerItem';
import TitleLabel from '../views/TitleLabel';

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
  const [value, setValue] = useState('');

  const handleErrorOnChange = (value: string) => {
    setError(handleError(value, errors))
    // if (!!error) setError(handleError(value, errors))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;
    setValue(value);
  }

  return (
    <FormerItem value={value} id={id} errors={errors}>
      <Input type={type || 'text'} id={id} name={id} onChange={handleChange} isError={error?.valid === false} {...resetProps} />
    </FormerItem>
  )
}

const Wrapper = styled.div`

`

const Input = styled.input<{ isError: boolean }>`
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