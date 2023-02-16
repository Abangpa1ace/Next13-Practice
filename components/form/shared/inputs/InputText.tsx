'use client';
import styled from '@emotion/styled';
import { InputKeyName, InputKeys } from '../../../../constants/form';
import TitleLabel from '../views/TitleLabel';

type Props = {
  id: InputKeys;
  title?: string;
}

function InputText({
  id,
  title,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <TitleLabel htmlFor={id}>
        {title || InputKeyName[id]}
      </TitleLabel>
      <Input type="text" id={id} />
    </Wrapper>
  )
}

const Wrapper = styled.div`

`

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none !important;
    border: 2px solid #b581de;
  }
`;

export default InputText