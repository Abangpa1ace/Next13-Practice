
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
  .p(30); .-a(red); .mh-c; .max-w(1200);
  h2 { .fs(50); }
`

export default layout