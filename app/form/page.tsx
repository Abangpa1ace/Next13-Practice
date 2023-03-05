'use client'
import styled from '@emotion/styled';
import FormContainer from '../../components/form/shared/FormContainer/index';
import InputText from '../../components/form/shared/inputs/InputText';

function FormPage(): JSX.Element {
  return (
    <Container>
      <FormContainer formId='my-form'>
        <InputText id="id" title="아이디" errors={['required', 'rgxLwrNum']}/>
        <InputText id="password" title="비밀번호" />
      </FormContainer>
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