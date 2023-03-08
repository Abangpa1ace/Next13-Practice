'use client'
import styled from '@emotion/styled';
import { Formik } from 'formik';

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
}

function FormikPage(): JSX.Element {
  const handleSubmit = async (values: object) => {
    console.log('values', values);
  }

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} />
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

export default FormikPage