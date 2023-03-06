'use client'
import styled from '@emotion/styled';
import FormerContainer from '../../components/form/shared/FormerContainer';
import InputPassword from '../../components/form/shared/inputs/InputPassword';
import InputText from '../../components/form/shared/inputs/InputText';

function FormPage(): JSX.Element {
  return (
    <Container>
      <FormerContainer formId='my-form'>
        <InputText id="id" errors={['required', 'allowLwrNum']}/>
        <InputPassword id="password" errors={['required', 'needUprLwrNumChr']} />
        <InputPassword id="passwordConfirm" errors={['required', 'needUprLwrNumChr']} />
        <InputText id="email" type="email" errors={['required', 'email']} />
      </FormerContainer>
    </Container>
  )
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  width: 550px;
  min-height: calc(100vh - 80px);
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
`;

export default FormPage