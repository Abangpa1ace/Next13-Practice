'use client';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren<{
  htmlFor: string;
}>

function TitleLabel({ children, htmlFor }: Props): JSX.Element {
  return (
    <Title htmlFor={htmlFor}>
      {children}
    </Title>
  )
}

const Title = styled.label`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
`

export default TitleLabel