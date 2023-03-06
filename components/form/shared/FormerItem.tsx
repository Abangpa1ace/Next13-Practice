'use client';
import { cloneElement, InputHTMLAttributes, PropsWithChildren, ReactElement, useEffect, useMemo, useState } from 'react';
import { InputKeys, InputKeyName } from '../../../constants/form';
import styled from '@emotion/styled';
import ErrorMessage from './ErrorMessage';
import TitleLabel from './views/TitleLabel';
import { handleError } from '../../../utils/error';

interface Props {
  children: ReactElement;
  value: string;
  id: InputKeys;
  title?: string;
  errors?: ErrorTypeKey[];
}

const FormerItem = ({ children, value, id, title, errors }: Props) => {
  const [error, setError] = useState<ErrorTypeData>(null);
  const isError = useMemo(() => error?.valid === false, [error]);

  useEffect(() => {
    setError(handleError(value, errors))
  }, [value, errors])

  return (
    <Wrapper>
      <TitleLabel htmlFor={id}>{title || InputKeyName[id]}</TitleLabel>
      {cloneElement(children, { id, isError })}
      <ErrorMessage isShow={isError} message={error?.message} />
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

export default FormerItem;