import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";
import { withFormerContextProvider } from "../../../contexts/FormerContext";
import useFormContainer from "../../../hooks/useFormerContainer";
import BaseButton from "../../common/button/BaseButton";

interface Props {
  handleSubmitForm?: () => void;
}

function FormerContainer({ children, handleSubmitForm }: PropsWithChildren<Props>) {
  const handleSubmit = (values) => {
    console.log('former values', values);
  }

  const { handleSubmitFormer } = useFormContainer({
    handleSubmit,
  });

  return (
    <Form onSubmit={handleSubmitFormer}>
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

export default withFormerContextProvider(FormerContainer);