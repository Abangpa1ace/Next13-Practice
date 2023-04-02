'use client'
import styled from '@emotion/styled';
import { Controller, useForm } from 'react-hook-form';
import BaseButton from '../../components/common/button/BaseButton';
import BaseInput, { BaseInput_Styled } from '../../components/common/input/BaseInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
  id: string;
  age: number;
  firstName: string;
  lastName: string;
}

const validationSchema = yup.object({
  id: yup.string().min(3, '아이디는 최소 3자 이상입니다.').required('아이디를 입력해주세요'),
  age: yup.number().min(2, '나이는 최소 두자리입니다').required('이름을 입력해주세요'),
  firstName: yup.string().required('성을 입력해주세요.'),
  lastName: yup.string().required('이름을 입력해주세요.'),
})

function ReactHookFormPage(): JSX.Element {
  const { formState, register, handleSubmit, control, getValues } = useForm<FormData>({
    // mode: 'onChange',
    resolver: yupResolver(validationSchema),
    defaultValues: {
      id: "1",
      age: 10,
      firstName: '홍',
      lastName: '길동',
    }
  });

  const submitForm = (data: FormData) => {
    console.log('formData', data);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(submitForm)}>
        <BaseInput_Styled placeholder="아이디" {...register("id")} hasError={!!formState.errors.id} />
        <BaseInput_Styled placeholder="나이" {...register("age")} />
        <BaseInput_Styled placeholder="성" {...register("firstName")} />
        <BaseInput_Styled placeholder="이름" {...register("lastName")} />
        <BaseButton type="submit">제출</BaseButton>
      </form>
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

export default ReactHookFormPage