import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";
import BaseButton from "../../common/button/BaseButton";

interface Props {
  formId: string;
  handleSubmitForm?: () => void;
}

function FormerContainer({ children, formId, handleSubmitForm }: PropsWithChildren<Props>) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(Array.from(document.getElementById(formId)?.getElementsByTagName('input') || []).map(({ id, value }) => ({ id, value })));
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

export default FormerContainer;