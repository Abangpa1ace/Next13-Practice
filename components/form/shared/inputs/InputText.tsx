'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { InputKeyName, InputKeys } from '../../../../constants/form';
import { handleError } from '../../../../utils/error';
import ErrorMessage from '../ErrorMessage';
import TitleLabel from '../views/TitleLabel';

type Props = {
  id: InputKeys;
  title?: string;
  errors?: ErrorKey[];
}

function InputText({
  id,
  title,
  errors,
}: Props): JSX.Element {
  const [error, setError] = useState<ErrorInfo>(null);

  const handleErrorOnChange = (value: string) => {
    setError(handleError(value, errors))
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;

    handleErrorOnChange(value);
  }

  return (
    <Wrapper>
      <TitleLabel htmlFor={id}>
        {title || InputKeyName[id]}
      </TitleLabel>
      <Input type="text" id={id} name={id} onChange={handleChange} isError={error?.valid === false} />
      <ErrorMessage isShow={error?.valid === false} message={error?.message} />
    </Wrapper>
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