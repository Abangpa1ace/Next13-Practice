import styled from '@emotion/styled';
import { ChangeEvent, InputHTMLAttributes, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  defaultChecked?: boolean;
  onChecked?: (checked: boolean) => void;
}

const Checkbox = ({
  id,
  label,
  defaultChecked = false,
  onChecked,
  style,
}: Props) => {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { checked } } = e;
    setIsChecked(checked);
    onChecked?.(checked);
  }

  return (
    <Wrapper style={style}>
      <Input name={id} type="checkbox" checked={isChecked} onChange={handleChecked} />
      {label ? <Label htmlFor={id}>{label}</Label> : null}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  &[type = "checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    width: 16px;
    height: 16px;
    cursor: pointer;
    outline: none !important;
    border: 1px solid #d7d7d7;
    border-radius: 4px;

    &::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 6px;
      height: 4px;
      background-color: #b581de;
      border: 2px solid #fff;
      border-top: none;
      border-right: none;
      transform: rotate(-45deg);
      opacity: 0;
    }

    &:hover {
      border-color: #a3a3a3;
    }

    &:checked {
      background-color: #b581de;
      border-color: #b581de;
      color: white;
    }

    &:checked:before {
      opacity: 1;
    }
  }
`;

const Label = styled.label`
  margin-left: 4px;
  font-size: 13px;
`;

export default Checkbox;