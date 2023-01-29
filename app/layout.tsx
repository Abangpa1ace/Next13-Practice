'use client'

import Link from 'next/link';
import styled from "styled-components";

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
            <MainHeader>
              <NavItem href="/">메인</NavItem>
              <NavItem href="/list">리스트</NavItem>
            </MainHeader>
            <MainWrapper>{children}</MainWrapper>
          </MainLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

const MainLayout = styled.div`
  padding: 100px 20px 0;
`;

const MainHeader = styled.header`
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

const NavItem = styled(Link)`
  color: black;
  text-decoration: none;

  &:not(:first-of-type) {
    margin-left: 15px;
  }
`;

export default layout;
