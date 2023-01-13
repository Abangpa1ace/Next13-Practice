"use client";

import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

function layout({ children }: PropsWithChildren<unknown>): JSX.Element {
  return (
    <HomeLayout>
      <h2>홈 타이틀</h2>
      {children}
    </HomeLayout>
  )
}

const HomeLayout = styled.div`

`

export default layout