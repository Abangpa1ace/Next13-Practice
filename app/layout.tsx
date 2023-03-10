'use client'

import styled from '@emotion/styled';
import Header from '../components/common/layout/Header';
import '../styles/globals.css';

import StyledComponentsRegistry from '../lib/registry';
import { RecoilRoot } from 'recoil';

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props): JSX.Element {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <MainLayout>
            <RecoilRoot>
              <Header />
              <MainWrapper>{children}</MainWrapper>
            </RecoilRoot>
          </MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

const MainLayout = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 60px 20px 0;
`;

const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export default layout;
