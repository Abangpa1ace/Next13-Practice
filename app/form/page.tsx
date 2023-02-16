'use client'
import styled from '@emotion/styled';
import InputText from '../../components/form/shared/inputs/InputText';

function FormPage(): JSX.Element {
  return (
      <Container>
        <InputText id="id" title="아이디" />
      </Container>
  )
}

const Container = styled.section`
  width: 550px;
  min-height: calc(100vh - 80px);
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #fff;
`;

export default FormPage