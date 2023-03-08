'use client'
import Link from 'next/link';
import styled from '@emotion/styled';

function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <NavItem href="/">메인</NavItem>
      <NavItem href="/form">폼 만들기</NavItem>
      <NavItem href="/list">리스트</NavItem>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px 60px;
  background-color: #dec4f2;
`

const NavItem = styled(Link)`
  color: black;
  text-decoration: none;

  &:not(:first-of-type) {
    margin-left: 15px;
  }
`;

export default Header