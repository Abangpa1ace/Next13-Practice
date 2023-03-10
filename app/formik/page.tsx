'use client'
import styled from '@emotion/styled';
import { ErrorMessage, Field, Form, Formik, FormikErrors } from 'formik';
import BaseButton from '../../components/common/button/BaseButton';
import BaseInput from '../../components/common/input/BaseInput';
import * as Yup from 'yup';


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

// const validate = (values: InitialValuesType): object => {
//   const errors = {};

//   for (const key in values) {
//     const value = values[key as keyof InitialValuesType];
//     if (key === 'email' && !/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(value)) {
//       errors.email = '올바르지 않은 이메일 형식입니다.'
//     }
//   }

//   return errors;
// }

const validationSchema = Yup.object({
  email: Yup.string().email('유효하지 않은 이메일입니다.').required('이메일을 입력해주세요.'),
  password: Yup.string().min(8, '비밀번호는 8자 이상입니다.').max(20, '비밀번호는 20자 이하힙니다.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, '비밀번호는 영문, 숫자, 특수문자가 반드시 포함되어야 합니다.').required('비밀번호를 입력해주세요.'),
  passwordConfirm: Yup.string().min(8, '비밀번호는 8자 이상입니다.').max(20, '비밀번호는 20자 이하힙니다.').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/, '비밀번호는 영문, 숫자, 특수문자가 반드시 포함되어야 합니다.').oneOf([Yup.ref('password')], '비밀번호가 일치하지 않습니다.').required('비밀번호를 입력해주세요.'),
  name: Yup.string().required('이름을 입력해주세요.')
})

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
        // validate={validate}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, isSubmitting, handleChange, handleBlur, handleSubmit, isValid }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <>{isValid ? '제출가능' : '제출불가'}</>
              <BaseInput name='email' placeholder="이메일" as={Field} hasError={Boolean(errors.email)} />
              <ErrorMessage name="email" />
              <BaseInput name="password" placeholder="비밀번호" as={Field} />
              <ErrorMessage name="password" />
              <BaseInput name="passwordConfirm" placeholder="비밀번호 확인" as={Field} />
              <ErrorMessage name="passwordConfirm" />
              <BaseInput name="name" placeholder="이름" as={Field} />
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