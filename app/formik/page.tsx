'use client'
import styled from '@emotion/styled';
import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import BaseButton from '../../components/common/button/BaseButton';
import BaseInput from '../../components/common/input/BaseInput';

type InitialValuesType = {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
}

const validate = (values: InitialValuesType): object => {
  const errors = {};

  for (const key in values) {
    const value = values[key as keyof InitialValuesType];
    if (key === 'email' && !/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(value)) {
      errors.email = '올바르지 않은 이메일 형식입니다.'
    }
  }

  return errors;
}

function FormikPage(): JSX.Element {
  const handleSubmit = (values: object, { setSubmitting }) => {
    setSubmitting(true);
    console.log('values', values);
    console.log('options', options)
  }

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({ values, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <BaseInput name='email' as={Field} hasError={Boolean(errors.email)} />
              <ErrorMessage name="email" />
              <BaseInput name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
              <BaseInput name="name" as={Field} />
              <BaseButton type="submit">{isSubmitting ? '제출중...' : '제출'}</BaseButton>
            </Form>
          )
        }}
      </Formik>
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