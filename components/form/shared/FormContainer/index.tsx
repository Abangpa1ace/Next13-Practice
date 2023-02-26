import styled from "@emotion/styled";
import React, { createContext, PropsWithChildren, useEffect } from "react";
import BaseButton from "../../../common/button/BaseButton";
import { useFormContext, FormContextProvider } from "./context";

interface Props {
  formId: string;
  handleSubmitForm?: () => void;
}

function FormContainer({ children, formId, handleSubmitForm }: PropsWithChildren<Props>) {
  const context = createContext<Record<string, unknown>>({});

  const handleInput = (e: Event) => {
    // setValue({ ...value, [`${formId}${e.target.name}`]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitForm?.();
  }

  useEffect(() => {
    window.addEventListener('input', handleInput);

    return () => window.removeEventListener('input', handleInput);
  }, [])

  return (
    <FormContextProvider>
      <Form id={formId} onSubmit={handleSubmit}>
        {children}
        <BaseButton type="submit">확인</BaseButton>
      </Form>
    </FormContextProvider>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export default FormContainer;