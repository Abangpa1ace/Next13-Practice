'use client';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { InputKeyName } from '../../../../constants/form';
import useFormerField from '../../../../hooks/useFormerField';
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
  const { register, invalidCaption } = useFormerField({
    key: id,
    validateKeys: errors ?? [],
    // mode: 'onSubmit',
  })

  return (
    <FormerItem id={id} title={title || InputKeyName[id]} errorMessage={invalidCaption}>
      <Input type={type || 'text'} {...register} {...resetProps} />
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