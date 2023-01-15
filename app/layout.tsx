"use client";

import styled from '@emotion/styled';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

function layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <MainLayout>
      <HomeHeader>
        <Link href="/list">리스트</Link>
      </HomeHeader>
      <MainWrapper>{children}</MainWrapper>
    </MainLayout>
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