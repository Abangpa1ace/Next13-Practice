import styled from '@emotion/styled';
import { forwardRef } from 'react';
import BaseInput from './BaseInput';

interface Props {
  label?: string;
}

const InputController = forwardRef<RefCallback, Props>(({ label }, ref) => {
  return (
    <Wrapper>
      <BaseInput ref={ref} />
    </Wrapper>
  )
});

InputController.displayName = 'InputController';

const Wrapper = styled.div`
  
`

export default InputController