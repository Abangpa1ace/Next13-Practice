"use client";

import { Global, css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

function layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <html lang="en">
    <head>
      <title>Practice</title>
      <Global styles={css`
        *, body { .m; .p; .-box; }
        @media (max-width: 700px) {
          html { font-size: 12px; }
        }
        
        @media (min-width: 1400px) {
          html { font-size: 20px; }
        }
      `}/>
    </head>
    <body>
      <MainLayout>
        <HomeHeader>
          <Link href="/list">리스트</Link>
        </HomeHeader>
        <MainWrapper>{children}</MainWrapper>
      </MainLayout>
    </body>
    </html>
  )
}

const MainLayout = styled.div`
  padding: 100px 20px 0;
`;

const HomeHeader = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px 60px;
  background-color: #f2f2f2;
`;

const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export default layout;