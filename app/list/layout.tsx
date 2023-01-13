
"use client";

import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

function layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <Layout>
      <h2>리스트 제목(레이아웃)</h2>
      {children}
    </Layout>
  )
}

const Layout = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px;
  border: 1px solid red;
`

export default layout