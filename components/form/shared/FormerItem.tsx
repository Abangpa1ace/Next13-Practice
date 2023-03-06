'use client';
import { cloneElement, ReactElement, useMemo } from 'react';
import { InputKeys } from '../../../constants/form';
import styled from '@emotion/styled';
import ErrorMessage from './ErrorMessage';
import TitleLabel from './views/TitleLabel';


interface Props {
  children: ReactElement;
  id: InputKeys;
  title?: string;
  errorData?: ErrorTypeData;
}

const FormerItem = ({ children, id, title, errorData }: Props) => {
  const isError = useMemo(() => errorData?.valid === false, [errorData]);
  return (
    <ItemWrapper>
      <TitleLabel htmlFor={id}>{title}</TitleLabel>
      {cloneElement(children, { id, isError })}
      <ErrorMessage isShow={isError} message={errorData?.message} />
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  position: relative;
`

export default FormerItem;