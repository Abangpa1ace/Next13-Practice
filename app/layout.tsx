'use client'

import styled from '@emotion/styled';
import Header from '../components/common/layout/Header';
import '../styles/globals.css';

import StyledComponentsRegistry from '../lib/registry';

interface Props {
  children: React.ReactNode;
}

function layout({ children }: Props): JSX.Element {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <MainLayout>
            <Header />
            <MainWrapper>{children}</MainWrapper>
          </MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

const MainLayout = styled.div`
  min-height: 100vh;
  background-color: #e7e7e7;
  padding: 60px 20px 0;
`;

const MainWrapper = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export default layout;
