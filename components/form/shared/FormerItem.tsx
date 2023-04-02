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
  errorMessage?: string;
}

const FormerItem = ({ children, id, title, errorData, errorMessage }: Props) => {
  const isMultipleChildren = useMemo(() => Array.isArray(children), [children]);
  const isError = !!errorMessage;

  return (
    <ItemWrapper>
      <TitleLabel htmlFor={id}>{title}</TitleLabel>
      {isMultipleChildren
        ? Children.map(children, child => !child ? null : cloneElement(child, { isError }))
        : cloneElement(children as ReactElement, { isError })
      }
      <ErrorMessage isShow={isError} message={errorMessage} />
    </ItemWrapper>
  )
}

const ItemWrapper = styled.div`
  position: relative;
`

export default FormerItem;