'use client';
import React, { Children, cloneElement, ReactElement, useMemo } from 'react';
import { InputKeys } from '../../../constants/form';
import styled from '@emotion/styled';
import ErrorMessage from './ErrorMessage';
import TitleLabel from './views/TitleLabel';

interface Props {
  children: ReactElement | (ReactElement | null)[];
  id: InputKeys;
  title?: string;
  errorData?: ErrorTypeData;
}

const FormerItem = ({ children, id, title, errorData }: Props) => {
  const isMultipleChildren = useMemo(() => Array.isArray(children), [children]);
  const isError = useMemo(() => errorData?.valid === false, [errorData]);

  return (
    <ItemWrapper>
      <TitleLabel htmlFor={id}>{title}</TitleLabel>
      {isMultipleChildren
        ? Children.map(children, child => !child ? null : cloneElement(child, { isError }))
        : cloneElement(children as ReactElement, { isError })
      }
      <ErrorMessage isShow={isError} message={errorData?.message} />
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  position: relative;
`

export default FormerItem;