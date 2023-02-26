import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

type ButtonTheme = 'white' | 'purple1';
  
interface Props extends  React.ButtonHTMLAttributes<HTMLButtonElement>{
  theme?: ButtonTheme
}

function BaseButton({ children, theme = 'purple1', ...restProps }: PropsWithChildren<Props>) {
  return (
    <Button theme={theme} {...restProps}>
      {children || '확인'}
    </Button>
  )
}

const getButtonTheme = (theme: ButtonTheme) => {
  switch (theme) {
    case 'white':
      return css`
        background-color: white;
        color: #141719;
        &:hover {
          background-color: #f4f4f4;
        }
      `;
    
    case 'purple1':
    default:
      return css`
        background-color: #dec4f2;
        color: #141719;
        &:hover {
          background-color: #b581de;
        }
      `;
  }
}

const Button = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  ${({ theme }) => getButtonTheme(theme)};
`;

export default BaseButton;