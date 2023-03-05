import styled from "@emotion/styled";
import React, { createContext, PropsWithChildren, useEffect } from "react";
import BaseButton from "../../../common/button/BaseButton";

interface Props {
  formId: string;
  handleSubmitForm?: () => void;
}

function FormContainer({ children, formId, handleSubmitForm }: PropsWithChildren<Props>) {


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitForm?.();
  }

  return (
    <Form id={formId} onSubmit={handleSubmit}>
      {children}
      <BaseButton type="submit">확인</BaseButton>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export default FormContainer;