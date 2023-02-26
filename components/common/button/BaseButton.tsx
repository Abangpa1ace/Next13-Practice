import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

interface Props extends  React.ButtonHTMLAttributes<HTMLButtonElement>{
  theme?: 'white' | 'purple1'
}

function BaseButton({ children, theme = 'purple1', ...restProps }: PropsWithChildren<Props>) {
  return (
    <Button theme={theme} {...restProps}>
      {children || '확인'}
    </Button>
  )
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  font-size: 16px;
  background-color: #b581de;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default BaseButton;